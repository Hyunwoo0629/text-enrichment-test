# Text Enrichment Interface Studio

Web-based interface for applying rich typography, highlighting, and visual styles to Word documents (.docx). Upload a document, select text, and apply styles directly in the browser — then export the result as a PNG image.

## Features

### Typography
- **Bold / Italic / Underline / Strikethrough**
- **Overline / Wavy Underline**
- **Font families**: Sans-serif, Monospace, Rounded, Small Caps
- **Font size** and **letter spacing** adjustment
- **Superscript / Subscript**
- **Drop caps**

### Highlighting & Visual Effects
- **Background highlight** with custom colors
- **Text color** customization
- **Box border** (rectangular) and **circle border** (elliptical)
- **Callout boxes** with customizable colors

### Advanced
- **Inline icon generation** — describe an icon in natural language and generate an SVG via OpenAI
- **Export to PNG** — render the styled document as an image using Playwright
- **Undo / Redo** with full history stack
- **Zoom controls** (25%–200%)
- **Floating context toolbar** on text selection
- **Applied styles panel** showing all active styles grouped by type

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| Ctrl+B | Bold |
| Ctrl+I | Italic |
| Ctrl+U | Underline |
| Ctrl+O | Overline |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| Ctrl+S | Save |

## Directory Structure

```
text-enrichment-interface/
├── back/
│   ├── app.py                # Flask backend server
│   ├── requirements.txt      # Python dependencies
│   ├── uploads/              # Uploaded .docx files
│   ├── data/                 # JSON document metadata
│   ├── exports/              # Generated PNG exports
│   └── annotations/          # Annotation data
├── front/
│   ├── index.html            # Main HTML file
│   ├── styles.css            # CSS styles
│   └── script.js             # JavaScript application
├── nginx/
│   ├── nginx.conf            # Nginx HTTPS config
│   └── nginx-http-only.conf  # Nginx HTTP-only config
├── Dockerfile                # Docker container definition
├── docker-compose.yml        # Docker Compose orchestration
├── deploy.sh                 # Deployment automation script
├── .env.example              # Environment variable template
└── README.md
```

## Setup

### Prerequisites

- Python 3.8+
- pip
- Modern web browser

### Local Development

```bash
# Install dependencies
cd back
pip install -r requirements.txt

# Run the server
python app.py
```

The server starts at **http://localhost:5002**.

### Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```
OPENAI_API_KEY="your-api-key"   # Required for icon generation
DOMAIN="yourdomain.com"         # Optional, for HTTPS deployment
```

### Docker Deployment

```bash
# Copy and configure environment
cp .env.example .env

# Deploy (installs Docker, configures firewall, obtains SSL cert, starts containers)
chmod +x deploy.sh
./deploy.sh
```

The deploy script handles:
1. Docker installation (Ubuntu)
2. UFW firewall configuration (ports 22, 80, 443)
3. SSL certificate via Let's Encrypt (if `DOMAIN` is set)
4. Building and starting Docker Compose services

Production runs on ports **80** (HTTP) and **443** (HTTPS) via Nginx reverse proxy.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/upload` | Upload a .docx file |
| GET | `/api/documents` | List all documents |
| GET | `/api/document/<id>` | Get document data |
| DELETE | `/api/document/<id>` | Delete a document |
| POST | `/api/document/<id>/styles` | Save styles |
| POST | `/api/document/<id>/log` | Log enrichment actions |
| POST | `/api/document/<id>/export` | Export document to PNG |
| GET | `/api/document/<id>/download` | Download exported PNG |
| POST | `/api/generate-icon` | Generate SVG icon from text description |

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Python Flask, Gunicorn
- **Document Parsing**: python-docx
- **Export**: Playwright (Chromium)
- **Icon Generation**: OpenAI API
- **Infrastructure**: Docker, Nginx, Let's Encrypt
