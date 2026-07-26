from flask import Flask, request, jsonify, send_from_directory, send_file
from flask_cors import CORS
from werkzeug.exceptions import HTTPException
from werkzeug.utils import secure_filename
from docx import Document
from playwright.sync_api import sync_playwright
from datetime import datetime
import os, json, uuid, html as html_module, base64, re
import xml.etree.ElementTree as ET
import openai
app = Flask(__name__)
CORS(app)
@app.errorhandler(HTTPException)
def handle_http_exception(e):
    if request.path.startswith('/api/'):
        return jsonify({"error": e.description}), e.code
    return e
@app.errorhandler(Exception)
def handle_unexpected_exception(e):
    if request.path.startswith('/api/'):
        app.logger.exception(e)
        return jsonify({"error": str(e)}), 500
    raise e
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
DATA_FOLDER = os.path.join(BASE_DIR, 'data')
EXPORT_FOLDER = os.path.join(BASE_DIR, 'exports')
FRONTEND_PATH = os.path.join(os.path.dirname(BASE_DIR), 'front')
for folder in [UPLOAD_FOLDER, DATA_FOLDER, EXPORT_FOLDER]:
    os.makedirs(folder, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
ALLOWED_EXTENSIONS = {'docx', 'doc'}
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
def get_data_path(doc_id):
    return os.path.join(DATA_FOLDER, f"{doc_id}.json")
def load_doc(doc_id):
    path = get_data_path(doc_id)
    if not os.path.exists(path):
        return None
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)
def save_doc(doc_id, data):
    data['updated_at'] = datetime.now().isoformat()
    with open(get_data_path(doc_id), 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
def extract_text_from_docx(filepath):
    doc = Document(filepath)
    content = []
    for i, p in enumerate(doc.paragraphs):
        if p.text.strip():
            content.append({'id': f'p-{i}', 'type': 'paragraph', 'text': p.text})
    for ti, table in enumerate(doc.tables):
        for ri, row in enumerate(table.rows):
            for ci, cell in enumerate(row.cells):
                if cell.text.strip():
                    content.append({'id': f't-{ti}-{ri}-{ci}', 'type': 'table-cell', 'text': cell.text})
    return content
_CSS_PROP = {
    'highlight': 'background-color', 'textcolor': 'color', 'dropcap': 'color',
    'border': 'border-color', 'circle': 'border-color',
    'underline': 'text-decoration-color', 'wavyunderline': 'text-decoration-color',
    'strikethrough': 'text-decoration-color', 'overline': 'text-decoration-color',
    'fontsize': 'font-size', 'letterspacing': 'letter-spacing'
}
def _export_paths(doc_id, doc):
    base = os.path.splitext(doc['original_filename'])[0]
    return {fmt: (f"{base}_enriched.{fmt}", os.path.join(EXPORT_FOLDER, f"{doc_id}_{base}_enriched.{fmt}")) for fmt in ('png', 'html', 'pdf')}
_LOCAL_FONT_FILES = {
    'Nanum Barun Gothic': 'NanumBarunGothic.woff2',
    'NanumSquare': 'NanumSquare.woff2',
    'MaruBuri': 'MaruBuri-Regular.woff2',
    'ChosunGs': 'ChosunGs.woff2',
}
def _local_font_faces():
    fonts_dir = os.path.join(FRONTEND_PATH, 'fonts')
    faces = []
    for family, filename in _LOCAL_FONT_FILES.items():
        path = os.path.join(fonts_dir, filename)
        if not os.path.exists(path) or os.path.getsize(path) == 0:
            continue
        with open(path, 'rb') as f:
            b64 = base64.b64encode(f.read()).decode()
        faces.append(f"@font-face{{font-family:'{family}';src:url(data:font/woff2;base64,{b64}) format('woff2');font-weight:400;font-style:normal}}")
    return ''.join(faces)
def _icon_html(s):
    if s.get('svgCode'):
        cls = 'inline-icon inline-icon-emoji' if s.get('isEmoji') else 'inline-icon'
        return f'<span class="{cls}">{s["svgCode"]}</span>'
    if s.get('iconData'):
        return f'<img src="{html_module.escape(s["iconData"], quote=True)}" class="inline-icon" alt="">'
    return ''
def build_styled_html(content, styles):
    border_types = {'border', 'circle'}
    styles_by_para = {}
    for s in styles:
        styles_by_para.setdefault(s['paraIndex'], []).append(s)
    paragraphs = []
    for i, para in enumerate(content):
        text = para['text']
        para_styles = styles_by_para.get(i, [])
        if not para_styles:
            paragraphs.append(f'<p>{html_module.escape(text)}</p>')
            continue
        icon_styles = [s for s in para_styles if s['type'] == 'inlineicon']
        callout_styles = [s for s in para_styles if s['type'] == 'callout']
        text_styles = [s for s in para_styles if s['type'] not in ('inlineicon', 'callout')]
        border_styles = [s for s in text_styles if s['type'] in border_types]
        non_border_styles = [s for s in text_styles if s['type'] not in border_types]
        offsets = {0, len(text)}
        for s in text_styles:
            offsets.add(max(0, min(s['startOffset'], len(text))))
            offsets.add(max(0, min(s['endOffset'], len(text))))
        for s in icon_styles:
            offsets.add(max(0, min(s['startOffset'], len(text))))
        bounds = sorted(offsets)
        segments = []
        for j in range(len(bounds) - 1):
            start, end = bounds[j], bounds[j + 1]
            for s in icon_styles:
                if s['startOffset'] == start:
                    segments.append({'kind': 'icon', 'style': s})
            seg = text[start:end]
            if not seg:
                continue
            active = [s for s in non_border_styles if s['startOffset'] <= start and s['endOffset'] >= end]
            active_borders = [s for s in border_styles if s['startOffset'] <= start and s['endOffset'] >= end]
            segments.append({'kind': 'text', 'text': seg, 'styles': active, 'borders': active_borders})
        parts = ''
        open_borders = []
        for seg in segments:
            if seg['kind'] == 'icon':
                parts += _icon_html(seg['style'])
                continue
            new_border_ids = {s.get('id', id(s)) for s in seg['borders']}
            for j in range(len(open_borders) - 1, -1, -1):
                if open_borders[j].get('id', id(open_borders[j])) not in new_border_ids:
                    parts += '</span>'
                    open_borders.pop(j)
            for b in seg['borders']:
                bid = b.get('id', id(b))
                if not any(ob.get('id', id(ob)) == bid for ob in open_borders):
                    parts += f'<span class="styled-text {b["type"]}" style="border-color:{b["color"]}">'
                    open_borders.append(b)
            if seg['styles']:
                classes = ['styled-text'] + [s['type'] for s in seg['styles']]
                inline = [f'{_CSS_PROP[s["type"]]}:{s["color"]}' for s in seg['styles'] if s['type'] in _CSS_PROP]
                style_attr = f' style="{";".join(inline)}"' if inline else ''
                parts += f'<span class="{" ".join(classes)}"{style_attr}>{html_module.escape(seg["text"])}</span>'
            else:
                parts += html_module.escape(seg['text'])
        for _ in open_borders:
            parts += '</span>'
        for s in icon_styles:
            if s['startOffset'] >= len(text):
                parts += _icon_html(s)
        if callout_styles:
            cs = callout_styles[-1]
            p_inline = [f'border-color:{cs["color"]}']
            if cs.get('bgColor'):
                p_inline.append(f'background-color:{cs["bgColor"]}')
            paragraphs.append(f'<p class="callout-block" style="{";".join(p_inline)}">{parts}</p>')
        else:
            paragraphs.append(f'<p>{parts}</p>')
    return f'''<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@400;500;700&family=Nanum+Gothic:wght@400;700&family=Nanum+Myeongjo:wght@400;700&display=swap" rel="stylesheet">
<style>
{_local_font_faces()}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.5;color:#1a1a1a;background:#fafafa;-webkit-font-smoothing:antialiased}}
.document-container{{max-width:800px;margin:24px auto;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.05)}}
.document-content{{padding:32px 48px;font-size:15px;line-height:1.8;color:#1a1a1a}}
.document-content p{{margin-bottom:1em;position:relative}}
.document-content p:last-child{{margin-bottom:0}}
.styled-text{{position:relative;display:inline}}
.styled-text.bold{{font-weight:700}}
.styled-text.italic{{font-style:italic}}
.styled-text.underline{{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:1.5px;z-index:1}}
.styled-text.strikethrough{{text-decoration:line-through;text-decoration-thickness:1px}}
.styled-text.highlight{{padding:1px 2px;border-radius:2px;box-decoration-break:clone;-webkit-box-decoration-break:clone}}
.styled-text.border{{border:1.5px solid;border-radius:3px;padding:0 4px;margin:0 2px}}
.styled-text.circle{{border:1.5px solid;border-radius:100px;padding:2px 8px;margin:0 2px}}
.styled-text.border .styled-text.highlight{{padding:0 4px;margin:0 -4px;border-radius:3px}}
.styled-text.circle .styled-text.highlight{{padding:2px 8px;margin:-2px -8px;border-radius:100px}}
.styled-text.serif{{font-family:Georgia,'Times New Roman',serif}}
.styled-text.arial{{font-family:Arial,sans-serif}}
.styled-text.courier{{font-family:'Courier New',Courier,monospace}}
.styled-text.georgia{{font-family:Georgia,'Times New Roman',serif}}
.styled-text.helvetica{{font-family:Helvetica,Arial,sans-serif}}
.styled-text.times{{font-family:'Times New Roman',Times,serif}}
.styled-text.trebuchet{{font-family:'Trebuchet MS',Helvetica,sans-serif}}
.styled-text.verdana{{font-family:Verdana,Geneva,sans-serif}}
.styled-text.comicsans{{font-family:'Comic Sans MS','Comic Sans',cursive}}
.styled-text.cursivefont{{font-family:cursive}}
.styled-text.bongothic{{font-family:'Noto Sans KR',sans-serif}}
.styled-text.nanumgothic{{font-family:'Nanum Gothic',sans-serif}}
.styled-text.bonmyeongjo{{font-family:'Noto Serif KR',serif}}
.styled-text.nanummyeongjo{{font-family:'Nanum Myeongjo',serif}}
.styled-text.nanumbarungothic{{font-family:'Nanum Barun Gothic',sans-serif}}
.styled-text.nanumsquare{{font-family:'NanumSquare',sans-serif}}
.styled-text.maruburi{{font-family:'MaruBuri',serif}}
.styled-text.gungseo{{font-family:'ChosunGs',serif}}
.styled-text.sansserif{{font-family:'Helvetica Neue',Arial,sans-serif}}
.styled-text.rounded{{font-family:'Nunito','Varela Round',sans-serif}}
.styled-text.mono{{font-family:'SF Mono','Consolas','Monaco','Courier New',monospace}}
.styled-text.smallcaps{{font-variant:small-caps;letter-spacing:.05em}}
.styled-text.superscript{{font-size:0.7em;vertical-align:super}}
.styled-text.subscript{{font-size:0.7em;vertical-align:sub}}
.styled-text.overline{{text-decoration:overline;text-decoration-thickness:1px}}
.styled-text.wavyunderline{{text-decoration:underline wavy;text-decoration-thickness:1px;text-underline-offset:1.5px;z-index:1}}
.styled-text.dropcap{{float:left;font-size:3.2em;line-height:0.8;padding-right:8px;padding-top:4px;font-weight:700}}
.document-content p.callout-block{{border:2px solid;border-radius:8px;padding:12px 16px;margin-bottom:1em}}
.document-content p.callout-block + p.callout-block{{margin-top:-2px;border-top:none;border-top-left-radius:0;border-top-right-radius:0}}
.document-content p.callout-block:has(+ p.callout-block){{margin-bottom:-1px;border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0}}
.inline-icon{{display:inline-block;height:1em;width:auto;vertical-align:middle;margin:0 2px}}
.inline-icon svg{{height:1em;width:auto;display:block}}
.inline-icon-emoji{{height:auto;font-size:1.15em;line-height:1;vertical-align:-0.2em}}
</style>
</head>
<body>
<div class="document-container"><div class="document-content">{''.join(paragraphs)}</div></div>
</body>
</html>'''
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "message": "Document Typography API is running"})
@app.route('/api/upload', methods=['POST'])
def upload_document():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400
    if not allowed_file(file.filename):
        return jsonify({"error": "Only Word documents (.docx) are allowed"}), 400
    doc_id = str(uuid.uuid4())
    original_filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, f"{doc_id}.docx")
    file.save(file_path)
    try:
        content = extract_text_from_docx(file_path)
    except Exception as e:
        os.remove(file_path)
        return jsonify({"error": f"Failed to parse document: {str(e)}"}), 400
    doc_data = {
        "doc_id": doc_id, "original_filename": original_filename,
        "created_at": datetime.now().isoformat(), "updated_at": datetime.now().isoformat(),
        "content": content, "styles": [], "enrichment_log": []
    }
    save_doc(doc_id, doc_data)
    return jsonify({"success": True, "doc_id": doc_id, "filename": original_filename, "content": content, "message": "Document uploaded successfully"})
@app.route('/api/document/<doc_id>', methods=['GET'])
def get_document(doc_id):
    doc = load_doc(doc_id)
    return jsonify(doc) if doc else (jsonify({"error": "Document not found"}), 404)
@app.route('/api/document/<doc_id>/styles', methods=['POST'])
def save_styles(doc_id):
    doc = load_doc(doc_id)
    if not doc:
        return jsonify({"error": "Document not found"}), 404
    doc['styles'] = request.get_json().get('styles', [])
    save_doc(doc_id, doc)
    return jsonify({"success": True, "message": "Styles saved successfully", "updated_at": doc['updated_at']})
@app.route('/api/document/<doc_id>/log', methods=['POST'])
def log_enrichment_action(doc_id):
    doc = load_doc(doc_id)
    if not doc:
        return jsonify({"error": "Document not found"}), 404
    entry = request.get_json()
    if not entry or 'action' not in entry or 'timestamp' not in entry:
        return jsonify({"error": "Invalid log entry"}), 400
    if entry['action'] not in ('add', 'delete', 'clear'):
        return jsonify({"error": "Invalid action type"}), 400
    entry['id'] = doc.get('original_filename')
    doc.setdefault('enrichment_log', []).append(entry)
    save_doc(doc_id, doc)
    return jsonify({"success": True, "message": "Action logged", "log_count": len(doc['enrichment_log'])})

SVG_DISALLOWED_TAGS = {'script', 'foreignobject', 'iframe', 'image', 'style', 'animate', 'animatetransform', 'animatemotion', 'set'}

def validate_svg(svg_text):
    """Reject anything that isn't a clean, self-contained SVG: catches the malformed/truncated
    markup an LLM occasionally returns (the 'icons break' bug) as well as unsafe content."""
    try:
        root = ET.fromstring(svg_text)
    except ET.ParseError:
        return False
    tag = root.tag.rsplit('}', 1)[-1].lower()
    if tag != 'svg':
        return False
    for el in root.iter():
        local = el.tag.rsplit('}', 1)[-1].lower()
        if local in SVG_DISALLOWED_TAGS:
            return False
        for attr, value in el.attrib.items():
            attr_local = attr.rsplit('}', 1)[-1].lower()
            if attr_local.startswith('on'):
                return False
            if attr_local in ('href', 'xlink:href') and not value.startswith('#'):
                return False
    return True

@app.route('/api/generate-icon', methods=['POST'])
def generate_icon():
    data = request.get_json()
    if not data or not data.get('description'):
        return jsonify({"error": "Description is required"}), 400
    description = data['description'].strip()
    if len(description) > 200:
        return jsonify({"error": "Description too long (max 200 characters)"}), 400
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        return jsonify({"error": "OpenAI API key not configured"}), 500
    client = openai.OpenAI(api_key=api_key)
    system_prompt = (
        "You are an expert SVG icon designer. Create a single, high-quality SVG icon.\n"
        "Requirements:\n"
        "- Output ONLY valid, complete, well-formed, and intent-aligned SVG code. No explanation, no markdown, no comments.\n"
        "- Use <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" "
        "stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n"
        "- Color rules:\n"
        "- If the user mentions a color (e.g., 'red star', 'blue arrow'), use that exact color as hex values.\n "
        "- If no color is mentioned, use stroke=\"currentColor\" fill=\"none\" as defaults on the <svg> element.\n"
        "- The icon must be immediately recognizable when displayed at 16px size.\n"
        "- Keep the design clean with minimal elements. Avoid excessive detail.\n"
        "- Stay within coordinates 2-22 to ensure padding inside the viewBox.\n"
        "- Use well-known visual metaphors (e.g., checkmark=success, star=favorite, heart=love, gear=settings).\n"
        "- Every path/shape must be fully closed and syntactically complete; double-check before answering.\n"
    )

    def request_svg(extra_note=None):
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Generate an SVG icon for: {description}"},
        ]
        if extra_note:
            messages.append({"role": "user", "content": extra_note})
        response = client.chat.completions.create(
            model="gpt-5.2",
            messages=messages,
            max_completion_tokens=800,
            temperature=0.5
        )
        text = response.choices[0].message.content.strip()
        if text.startswith('```'):
            text = re.sub(r'^```(?:svg|xml)?\s*\n?', '', text)
            text = re.sub(r'\n?```\s*$', '', text)
            text = text.strip()
        return text

    try:
        svg_text = request_svg()
        if not validate_svg(svg_text):
            svg_text = request_svg("Your previous response was not valid, complete SVG. Return only one single well-formed <svg>...</svg> element.")
        if not validate_svg(svg_text):
            return jsonify({"error": "Failed to generate valid SVG"}), 500
        data_url = f"data:image/svg+xml;base64,{base64.b64encode(svg_text.encode()).decode()}"
        return jsonify({
            "success": True,
            "iconData": data_url,
            "iconName": description[:50],
            "svgCode": svg_text
        })
    except openai.APIError as e:
        return jsonify({"error": f"OpenAI API error: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": f"Failed to generate icon: {str(e)}"}), 500
@app.route('/api/document/<doc_id>/export', methods=['POST'])
def export_document(doc_id):
    doc = load_doc(doc_id)
    if not doc:
        return jsonify({"error": "Document not found"}), 404
    styles = request.get_json().get('styles', [])
    doc['styles'] = styles
    save_doc(doc_id, doc)
    export_paths = _export_paths(doc_id, doc)
    export_filename, export_path = export_paths['png']
    html_filename, html_path = export_paths['html']
    pdf_filename, pdf_path = export_paths['pdf']
    try:
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(build_styled_html(doc['content'], styles))
        with sync_playwright() as p:
            browser = p.chromium.launch(args=['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'] if os.environ.get('FLASK_ENV') == 'production' else [])
            page = browser.new_page(viewport={'width': 900, 'height': 800}, device_scale_factor=2)
            page.goto(f'file://{html_path}')
            page.wait_for_load_state('networkidle')
            page.wait_for_timeout(500)
            page.screenshot(path=export_path, full_page=True)
            page.emulate_media(media="screen")
            page.pdf(path=pdf_path, print_background=True, format='A4')
            browser.close()
        doc.setdefault('enrichment_log', []).append({
            'id': doc.get('original_filename'),
            'action': 'export',
            'timestamp': datetime.now().isoformat(),
            'files': {'png': export_filename, 'html': html_filename, 'pdf': pdf_filename}
        })
        save_doc(doc_id, doc)
    except Exception as e:
        return jsonify({"success": False, "error": f"Export failed: {str(e)}"}), 500
    return jsonify({"success": True, "message": "Document exported successfully", "export_filename": export_filename, "download_url": f"/api/document/{doc_id}/download"})
@app.route('/api/document/<doc_id>/download', methods=['GET'])
def download_document(doc_id):
    doc = load_doc(doc_id)
    if not doc:
        return jsonify({"error": "Document not found"}), 404
    export_filename, export_path = _export_paths(doc_id, doc)['png']
    if not os.path.exists(export_path):
        return jsonify({"error": "Export not found. Please save the document first."}), 404
    return send_file(export_path, as_attachment=True, download_name=export_filename)
@app.route('/api/documents', methods=['GET'])
def list_documents():
    docs = []
    for f in os.listdir(DATA_FOLDER):
        if f.endswith('.json'):
            with open(os.path.join(DATA_FOLDER, f), 'r', encoding='utf-8') as file:
                d = json.load(file)
                docs.append({"doc_id": d['doc_id'], "filename": d['original_filename'], "created_at": d['created_at'], "updated_at": d['updated_at']})
    return jsonify(docs)
@app.route('/api/document/<doc_id>', methods=['DELETE'])
def delete_document(doc_id):
    for path in [os.path.join(UPLOAD_FOLDER, f"{doc_id}.docx"), get_data_path(doc_id)]:
        if os.path.exists(path):
            os.remove(path)
    return jsonify({"success": True, "message": "Document deleted successfully"})
@app.route('/')
def serve_frontend():
    return send_from_directory(FRONTEND_PATH, 'index.html')
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(FRONTEND_PATH, filename)
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5002))
    print(f"{'=' * 50}\nServer running at: http://localhost:{port}\n{'=' * 50}")
    app.run(debug=os.environ.get('FLASK_ENV') != 'production', host='0.0.0.0', port=port)
