const TRANSLATIONS = {
    en: {
        studio: 'Studio',
        upload_document: 'Upload Document',
        history: 'History',
        undo: 'Undo',
        redo: 'Redo',
        text_style: 'Text Style',
        font_family: 'Font Family',
        script_size: 'Script Size',
        heading_size: 'Heading Size',
        superscript: 'Superscript',
        subscript: 'Subscript',
        color: 'Color',
        highlight_tooltip: 'Highlight',
        text_color_tooltip: 'Text Color',
        border_label: 'Border',
        border_word: 'Border',
        border_tooltip: 'Border',
        circle_tooltip: 'Circle',
        layout: 'Layout',
        letter_spacing_short: 'Letter Spacing',
        letter_spacing_px: 'Letter Spacing (px)',
        line_height_short: 'Line Height',
        line_height_label: 'Line Height',
        drop_cap: 'Drop Cap',
        insert: 'Insert',
        callout_tooltip: 'Callout',
        fill: 'Fill',
        apply: 'Apply',
        inline_icon_tooltip: 'Inline Icon',
        divider_tooltip: 'Divider',
        divider_label: 'Divider',
        div_full: 'Full', div_short: 'Short', div_bold: 'Bold', div_dotted: 'Dotted',
        div_triangle: 'Triangle', div_diamond: 'Diamond', div_cross: 'Tilted', div_vertical: 'Vertical',
        quote_tooltip: 'Quote Block', quote_label: 'Quote Block', quote_marks_label: 'Marks', quote_line_label: 'Line',
        list_tooltip: 'List', list_label: 'List', list_bullet_label: 'Bullet', list_numbered_label: 'Numbered',
        list_continue_label: 'Continue Numbering', list_restart_label: 'Start New List (1)',
        code_tooltip: 'Code Block', code_label: 'Code Block', code_white_label: 'White', code_gray_label: 'Gray', code_black_label: 'Black',
        actions: 'Actions',
        clear_all: 'Clear All',
        save: 'Save',
        bold_tooltip: 'Bold',
        italic_tooltip: 'Italic',
        underline_tooltip: 'Underline',
        overline_tooltip: 'Overline',
        wavyunderline_tooltip: 'Wavy Underline',
        strikethrough_tooltip: 'Strikethrough',
        link_tooltip: 'Hyperlink',
        no_document: 'No document loaded',
        select_text_hint: 'Select text to apply styles',
        upload_word_doc: 'Upload a Word document',
        drag_drop_hint: 'Drag and drop a .docx file here or click the button below',
        applied_styles: 'Applied Styles',
        no_styles: 'No styles applied',
        select_apply_styles: 'Select text and apply styles',
        generate_icon: 'Generate Inline Icon',
        describe_icon: 'Describe the icon you want',
        icon_placeholder: 'e.g., a check mark, a star, ...',
        icon_hint: 'SVG icon will be generated according to the description. Click in the text to place it after generating.',
        cancel: 'Cancel',
        generate: 'Generate',
        generating: 'Generating...',
        custom_color: 'Custom Color',
        hex: 'Hex',
        load_doc_first: 'Load a document first',
        select_text_first: 'Select text first',
        drop_docx: 'Please drop a Word document (.docx)',
        select_docx: 'Please select a Word document (.docx)',
        upload_success: 'Document uploaded successfully',
        upload_failed: 'Failed to upload: ',
        icon_placement_hint: 'Click in the document to place the icon',
        click_text_place_icon: 'Click anywhere in text to place icon',
        no_styles_to_clear: 'No styles to clear',
        confirm_clear: 'Clear all styles?',
        all_cleared: 'All styles cleared',
        no_doc_loaded: 'No document loaded',
        save_failed: 'Failed to save: ',
        exported_downloading: 'Image exported! Downloading...',
        describe_icon_first: 'Please describe the icon',
        icon_gen_failed: 'Failed to generate icon: ',
        position_error: 'Could not determine position',
        click_inside_text: 'Click inside the text',
        cursor_placed: 'Cursor placed',
        selected_suffix: ' selected',
        frequently_used: 'Frequently Used',
        recent: 'Recent',
        custom_color_btn: '+ Custom',
        this_only: 'This only',
        remove_all: 'Remove all',
        skip: 'Skip',
        apply_to_all: 'Apply to all',
        found_more: 'Found {0} more "{1}" — apply {2} to all?',
        applied_to_occurrences: 'Applied {0} to {1} more occurrence{2}',
        removed_styles: 'Removed {0} style{1}',
        icon_placed_cursor: 'Icon "{0}" placed at cursor',
        icon_placed: 'Icon "{0}" placed',
    },
    ko: {
        studio: '스튜디오',
        upload_document: '문서 업로드',
        history: '기록',
        undo: '실행 취소',
        redo: '다시 실행',
        text_style: '텍스트 스타일',
        font_family: '글꼴',
        script_size: '위아래 첨자',
        heading_size: '제목 크기',
        superscript: '위첨자',
        subscript: '아래첨자',
        color: '색상',
        highlight_tooltip: '형광펜',
        text_color_tooltip: '글자 색',
        border_label: '테두리',
        border_word: '테두리',
        border_tooltip: '테두리',
        circle_tooltip: '원형',
        layout: '레이아웃',
        letter_spacing_short: '자간',
        letter_spacing_px: '자간 (px)',
        line_height_short: '줄 간격',
        line_height_label: '줄 간격',
        drop_cap: '드롭캡',
        insert: '삽입',
        callout_tooltip: '콜아웃',
        fill: '채우기',
        apply: '적용',
        inline_icon_tooltip: '인라인 아이콘',
        divider_tooltip: '구분선',
        divider_label: '구분선',
        div_full: '전체', div_short: '짧게', div_bold: '굵게', div_dotted: '점선',
        div_triangle: '삼각형', div_diamond: '다이아몬드', div_cross: '기울임', div_vertical: '세로선',
        quote_tooltip: '인용 블록', quote_label: '인용 블록', quote_marks_label: '인용부호', quote_line_label: '세로선',
        list_tooltip: '목록', list_label: '목록', list_bullet_label: '불렛 포인트', list_numbered_label: '번호',
        list_continue_label: '번호 이어서', list_restart_label: '새 목록 시작',
        code_tooltip: '코드 블록', code_label: '코드 블록', code_white_label: '흰색', code_gray_label: '회색', code_black_label: '검정',
        actions: '작업',
        clear_all: '모두 지우기',
        save: '저장',
        bold_tooltip: '굵게',
        italic_tooltip: '기울임',
        underline_tooltip: '밑줄',
        overline_tooltip: '윗줄',
        wavyunderline_tooltip: '물결 밑줄',
        strikethrough_tooltip: '취소선',
        link_tooltip: '하이퍼링크',
        no_document: '문서 없음',
        select_text_hint: '텍스트를 선택하여 스타일 적용',
        upload_word_doc: 'Word 문서 업로드',
        drag_drop_hint: '여기에 .docx 파일을 끌어다 놓거나 아래 버튼을 클릭하세요',
        applied_styles: '적용된 스타일',
        no_styles: '적용된 스타일 없음',
        select_apply_styles: '텍스트를 선택하고 스타일을 적용하세요',
        generate_icon: '인라인 아이콘 생성',
        describe_icon: '원하는 아이콘을 설명하세요',
        icon_placeholder: '예: 체크 표시, 별, ...',
        icon_hint: '설명에 따라 SVG 아이콘이 생성됩니다. 생성 후 텍스트를 클릭하여 배치하세요.',
        cancel: '취소',
        generate: '생성',
        generating: '생성 중...',
        custom_color: '사용자 정의 색상',
        hex: '16진수',
        load_doc_first: '먼저 문서를 불러오세요',
        select_text_first: '먼저 텍스트를 선택하세요',
        drop_docx: 'Word 문서(.docx)를 끌어다 놓으세요',
        select_docx: 'Word 문서(.docx)를 선택하세요',
        upload_success: '문서가 성공적으로 업로드되었습니다',
        upload_failed: '업로드 실패: ',
        icon_placement_hint: '문서에서 아이콘을 배치할 위치를 클릭하세요',
        click_text_place_icon: '텍스트의 아무 곳이나 클릭하여 아이콘을 배치하세요',
        no_styles_to_clear: '지울 스타일이 없습니다',
        confirm_clear: '모든 스타일을 지우시겠습니까?',
        all_cleared: '모든 스타일이 지워졌습니다',
        no_doc_loaded: '문서가 없습니다',
        save_failed: '저장 실패: ',
        exported_downloading: '이미지 내보내기 완료! 다운로드 중...',
        describe_icon_first: '아이콘을 설명해 주세요',
        icon_gen_failed: '아이콘 생성 실패: ',
        position_error: '위치를 결정할 수 없습니다',
        click_inside_text: '텍스트 안을 클릭하세요',
        cursor_placed: '커서 위치 지정됨',
        selected_suffix: ' 선택됨',
        frequently_used: '자주 사용',
        recent: '최근',
        custom_color_btn: '+ 사용자 지정',
        this_only: '이것만',
        remove_all: '모두 제거',
        skip: '건너뛰기',
        apply_to_all: '모두 적용',
        found_more: '"{1}" {0}개 더 발견 — {2}에 모두 적용?',
        applied_to_occurrences: '{1}개 추가 위치에 {0} 적용됨',
        removed_styles: '{0}개 스타일 제거됨',
        icon_placed_cursor: '아이콘 "{0}"이(가) 커서 위치에 삽입됨',
        icon_placed: '아이콘 "{0}"이(가) 삽입됨',
    }
};

const TYPE_LABELS_ALL = {
    en: { fontsize: 'font size', inlineicon: 'inline icon', letterspacing: 'letter spacing', callout: 'callout', dropcap: 'drop cap', wavyunderline: 'wavy underline', smallcaps: 'small caps', sansserif: 'sans-serif', textcolor: 'text color', bold: 'Bold', italic: 'Italic', underline: 'Underline', strikethrough: 'Strikethrough', highlight: 'Highlight', border: 'Border', circle: 'Circle', mono: 'Monospace', rounded: 'Rounded', superscript: 'Superscript', subscript: 'Subscript', overline: 'Overline', serif: 'Serif', arial: 'Arial', courier: 'Courier', georgia: 'Georgia', helvetica: 'Helvetica', times: 'Times', trebuchet: 'Trebuchet', verdana: 'Verdana', comicsans: 'Comic Sans', cursivefont: 'Cursive', link: 'Link Style', divider: 'Divider', div_full: 'Full', div_short: 'Short', div_bold: 'Bold', div_dotted: 'Dotted', div_triangle: 'Triangle', div_diamond: 'Diamond', div_cross: 'Tilted', div_vertical: 'Vertical', quote: 'Quote Block', quote_marks: 'Quote Marks', quote_line: 'Quote Line', list: 'List', list_bullet: 'Bullet List', list_numbered: 'Numbered List', code: 'Code Block', code_white: 'White', code_gray: 'Gray', code_black: 'Black' },
    ko: { fontsize: '글자 크기', inlineicon: '인라인 아이콘', letterspacing: '자간', callout: '콜아웃', dropcap: '드롭캡', wavyunderline: '물결 밑줄', smallcaps: '소형 대문자', sansserif: '산세리프', textcolor: '글자 색', bold: '굵게', italic: '기울임', underline: '밑줄', strikethrough: '취소선', highlight: '형광펜', border: '테두리', circle: '원형 테두리', mono: '고정폭', rounded: '둥근 글꼴', superscript: '위첨자', subscript: '아래첨자', overline: '윗줄', bongothic: '본고딕', nanumgothic: '나눔고딕', bonmyeongjo: '본명조', nanummyeongjo: '나눔명조', nanumbarungothic: '나눔바른고딕', nanumsquare: '나눔스퀘어', maruburi: '마루부리', gungseo: '궁서', helvetica: 'Helvetica', georgia: 'Georgia', link: '링크 스타일', divider: '구분선', div_full: '전체', div_short: '짧게', div_bold: '굵게', div_dotted: '점선', div_triangle: '삼각형', div_diamond: '다이아몬드', div_cross: '기울임', div_vertical: '세로선', quote: '인용 블록', quote_marks: '인용부호형', quote_line: '세로선형', list: '목록', list_bullet: '불릿 목록', list_numbered: '번호 목록', code: '코드 블록', code_white: '흰색', code_gray: '회색', code_black: '검정' }
};

const FONT_OPTIONS = {
    en: [
        { key: 'serif',       label: 'Serif',      css: "Georgia, 'Times New Roman', serif" },
        { key: 'sansserif',   label: 'Sans-Serif', css: "'Helvetica Neue', Arial, sans-serif" },
        { key: 'mono',        label: 'Monospace',  css: "'SF Mono', 'Consolas', 'Monaco', 'Courier New', monospace" },
        { key: 'rounded',     label: 'Rounded',    css: "'Nunito', 'Varela Round', sans-serif" },
        { key: 'smallcaps',   label: 'Small Caps', css: "'Helvetica Neue', Arial, sans-serif", extraStyle: 'font-variant:small-caps;letter-spacing:0.05em' },
        { key: 'arial',       label: 'Arial',      css: 'Arial, sans-serif' },
        { key: 'courier',     label: 'Courier',    css: "'Courier New', Courier, monospace" },
        { key: 'georgia',     label: 'Georgia',    css: "Georgia, 'Times New Roman', serif" },
        { key: 'helvetica',   label: 'Helvetica',  css: 'Helvetica, Arial, sans-serif' },
        { key: 'times',       label: 'Times',      css: "'Times New Roman', Times, serif" },
        { key: 'trebuchet',   label: 'Trebuchet',  css: "'Trebuchet MS', Helvetica, sans-serif" },
        { key: 'verdana',     label: 'Verdana',    css: 'Verdana, Geneva, sans-serif' },
        { key: 'comicsans',   label: 'Comic Sans', css: "'Comic Sans MS', 'Comic Sans', cursive" },
        { key: 'cursivefont', label: 'Cursive',    css: 'cursive' },
    ],
    ko: [
        { key: 'bongothic',        label: '본고딕',      css: "'Noto Sans KR', sans-serif" },
        { key: 'nanumgothic',      label: '나눔고딕',    css: "'Nanum Gothic', sans-serif" },
        { key: 'bonmyeongjo',      label: '본명조',      css: "'Noto Serif KR', serif" },
        { key: 'nanummyeongjo',    label: '나눔명조',    css: "'Nanum Myeongjo', serif" },
        { key: 'nanumbarungothic', label: '나눔바른고딕', css: "'Nanum Barun Gothic', 'Nanum Gothic', sans-serif" },
        { key: 'nanumsquare',      label: '나눔스퀘어',  css: "'NanumSquare', 'Nanum Square', 'Nanum Gothic', sans-serif" },
        { key: 'maruburi',         label: '마루부리',    css: "'Maruburiâ€‹', serif" },
        { key: 'gungseo',          label: '궁서',        css: "'GungsuhChe', '궁서체', 'Gungsuh', serif" },
        { key: 'helvetica',        label: 'Helvetica',   css: 'Helvetica, Arial, sans-serif' },
        { key: 'georgia',          label: 'Georgia',     css: "Georgia, 'Times New Roman', serif" },
    ]
};

class DocumentTypography {
    constructor() {
        this.lang = 'en';
        this.TYPE_LABELS = TYPE_LABELS_ALL.en;
        this.docId = null;
        this.content = [];
        this.styles = [];
        this.history = [];
        this.redoStack = [];
        this.currentTool = null;
        this.savedSelection = null;
        this.pendingIconData = null;
        this.cursorPosition = null;
        this._instantStyleId = null;
        this.textColor = '#E53935';
        this.bgColor = '#FFEB3B';
        this.borderColor = '#000000';
        this.fontSize = '16px';
        this.letterSpacing = '0px';
        this.lineHeight = 1.8;
        this.activeParagraphIndex = null;
        this._pendingDividerType = null;
        this.zoomLevel = 100;
        this.ZOOM_MIN = 25;
        this.ZOOM_MAX = 200;
        this.ZOOM_STEP = 5;
        this.apiBase = '/api';
        this.recentColors = { text: [], bg: [], border: [] };
        this.RECENT_COLORS_MAX = 10;
        this.expandedTypeGroups = new Set();
        this._activeColorTool = null;
        this._activeColorAnchor = null;
        this.COLOR_TOOLS = new Set(['highlight', 'textcolor', 'border', 'circle', 'underline', 'overline', 'wavyunderline', 'strikethrough']);
        this.INSTANT_APPLY_TOOLS = new Set(['underline', 'overline', 'wavyunderline', 'strikethrough', 'border', 'circle']);
        this.TOOL_COLOR_MAP = { textcolor: 'text', highlight: 'bg', border: 'border', circle: 'border', underline: 'border', overline: 'border', wavyunderline: 'border', strikethrough: 'border' };
        this.COLOR_PALETTE = [
            ['#000000','#434343','#666666','#999999','#b7b7b7','#cccccc','#d9d9d9','#efefef','#f3f3f3','#ffffff'],
            ['#980000','#ff0000','#ff9900','#ffff00','#00ff00','#00ffff','#4a86e8','#0000ff','#9900ff','#ff00ff'],
            ['#e6b8af','#f4cccc','#fce5cd','#fff2cc','#d9ead3','#d0e0e3','#c9daf8','#cfe2f3','#d9d2e9','#ead1dc'],
            ['#dd7e6b','#ea9999','#f9cb9c','#ffe599','#b6d7a8','#a2c4c9','#a4c2f4','#9fc5e8','#b4a7d6','#d5a6bd'],
            ['#cc4125','#e06666','#f6b26b','#ffd966','#93c47d','#76a5af','#6d9eeb','#6fa8dc','#8e7cc3','#c27ba0'],
            ['#a61c00','#cc0000','#e69138','#f1c232','#6aa84f','#45818e','#3c78d8','#3d85c6','#674ea7','#a64d79'],
            ['#85200c','#990000','#b45f06','#bf9000','#38761d','#134f5c','#1155cc','#0b5394','#351c75','#741b47'],
            ['#5b0f00','#660000','#783f04','#7f6000','#274e13','#0c343d','#1c4587','#073763','#20124d','#4c1130']
        ];
        this.initElements();
        this.initEventListeners();
        this.initColorBoards();
        this.initCustomColorPicker();
    }

    t(key, ...args) {
        let str = (TRANSLATIONS[this.lang] || TRANSLATIONS.en)[key];
        if (str === undefined) str = TRANSLATIONS.en[key] || key;
        args.forEach((arg, i) => { str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), arg); });
        return str;
    }

    selectLanguage(lang) {
        this.applyLanguage(lang);
        this.langSelectOverlay.classList.add('hidden');
    }

    applyLanguage(lang) {
        this.lang = lang;
        this.TYPE_LABELS = TYPE_LABELS_ALL[lang] || TYPE_LABELS_ALL.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = this.t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.dataset.i18nPlaceholder);
        });
        document.querySelectorAll('[data-i18n-tooltip-title]').forEach(el => {
            el.dataset.tooltipTitle = this.t(el.dataset.i18nTooltipTitle);
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            el.title = this.t(el.dataset.i18nTitle);
        });
        document.title = lang === 'ko' ? '문서 스튜디오' : 'Document Studio';
        document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
        if (!this.docId) {
            this.selectionHint.textContent = this.t('select_text_hint');
        }
        this.buildFontOptions();
    }

    buildFontOptions() {
        const options = FONT_OPTIONS[this.lang] || FONT_OPTIONS.en;
        const applyOptStyle = (btn, opt) => {
            btn.style.fontFamily = opt.css;
            if (opt.extraStyle) btn.style.cssText += ';' + opt.extraStyle;
        };
        const sidebarContainer = document.getElementById('fontFamilyOptions');
        if (sidebarContainer) {
            sidebarContainer.innerHTML = '';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'font-option';
                btn.dataset.font = opt.key;
                applyOptStyle(btn, opt);
                btn.textContent = opt.label;
                btn.addEventListener('click', () => this.selectFontFamily(opt.key));
                sidebarContainer.appendChild(btn);
            });
        }
        if (this.ftFontFamilyPopover) {
            this.ftFontFamilyPopover.innerHTML = '';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'ft-popover-option';
                btn.dataset.ftFont = opt.key;
                applyOptStyle(btn, opt);
                btn.textContent = opt.label;
                btn.addEventListener('mousedown', e => e.preventDefault());
                btn.addEventListener('click', e => {
                    e.stopPropagation();
                    this.applyToolToSelection(opt.key);
                    this.closeFtPopovers();
                });
                this.ftFontFamilyPopover.appendChild(btn);
            });
        }
    }

    _genId(prefix = 'style') { return prefix + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 11); }
    _pushHistory(entry) { this.history.push(entry); this.redoStack = []; this.undoBtn.disabled = false; this.redoBtn.disabled = true; }
    _refreshViews() { this.applyAllStyles(); this.updateStylesList(); }
    _clearSelection() { this.savedSelection = null; this.resetStepperDefaults(); window.getSelection().removeAllRanges(); this.selectionHint.textContent = this.t('select_text_hint'); }

    initElements() {
        'fileInput uploadBtn uploadBtnAlt documentViewport documentContainer documentContent emptyState fileInfo selectionHint highlightIcon textcolorIcon fontSizeInput fontSizeMinus fontSizePlus letterSpacingInput letterSpacingMinus letterSpacingPlus letterSpacingBtn letterSpacingPopover lineHeightBtn lineHeightPopover lineHeightInput lineHeightMinus lineHeightPlus undoBtn redoBtn clearBtn saveBtn iconUploadBtn dividerBtn dividerPopover dividerTypePanel dividerAlignPanel dividerAlignBack quoteBtn quotePopover codeBtn codePopover listBtn listPopover listTypePanel listNumberedPanel listNumberedBack iconModal iconModalClose iconDescription iconModalCancel iconModalSubmit iconModalSubmitText iconModalSpinner stylesList styleCount toastContainer fontFamilyBtn fontFamilyPopover scriptSizeBtn scriptSizePopover headingSizeBtn headingSizePopover ftHeadingSizePopover floatingToolbar ftFontFamilyPopover ftScriptSizePopover ftFontSizeInput ftFontSizeMinus ftFontSizePlus calloutBtn calloutPopover calloutApplyBtn calloutBoardBorder calloutBoardBg ftLetterSpacingPopover ftLetterSpacingInput ftLetterSpacingMinus ftLetterSpacingPlus zoomInBtn zoomOutBtn zoomResetBtn zoomFitWidthBtn zoomFitHeightBtn zoomLevelDisplay ftExistingStyles sharedColorPopover sharedColorBoard langSelectOverlay langBtnEn langBtnKo'.split(' ').forEach(id => this[id] = document.getElementById(id));
        this.toolButtons = document.querySelectorAll('.tool-btn');
        this.scriptOptions = document.querySelectorAll('.script-option');
    }

    initEventListeners() {
        this.uploadBtn.addEventListener('click', () => this.fileInput.click());
        this.uploadBtnAlt.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', e => this.handleFileUpload(e));
        this.documentViewport.addEventListener('dragover', e => { e.preventDefault(); this.documentViewport.classList.add('drag-over'); });
        this.documentViewport.addEventListener('dragleave', e => { e.preventDefault(); this.documentViewport.classList.remove('drag-over'); });
        this.documentViewport.addEventListener('drop', e => this.handleDrop(e));
        this.toolButtons.forEach(btn => { if (btn.dataset.tool) btn.addEventListener('click', () => { const t = btn.dataset.tool; if (this.INSTANT_APPLY_TOOLS.has(t)) { this.applyInstantTool(t, btn); } else if (this.COLOR_TOOLS.has(t)) { this.showSharedColorPopover(t, btn); } else { this.selectTool(t); } }); });
        document.addEventListener('click', e => { if (!e.target.closest('.shared-color-popover') && !e.target.closest('.tool-btn') && !e.target.closest('.ft-btn')) this.closeSharedColorPopover(); });
        this.sharedColorPopover.addEventListener('mousedown', e => e.preventDefault());
        this._initStepperWithInput(this.fontSizeMinus, this.fontSizePlus, this.fontSizeInput, 1, 200, 'fontSize', 'fontsize', v => v > 0);
        this._initStepperWithInput(this.letterSpacingMinus, this.letterSpacingPlus, this.letterSpacingInput, 0, 100, 'letterSpacing', 'letterspacing', v => v >= 0);
        this.letterSpacingBtn.addEventListener('click', () => this.toggleLetterSpacingPopover());
        this.lineHeightBtn.addEventListener('click', () => this.toggleLineHeightPopover());
        this._initLineHeightStepper();
        this.calloutBtn.addEventListener('click', () => this.toggleCalloutPopover());
        this.calloutApplyBtn.addEventListener('click', () => this.applyCallout());
        this.zoomInBtn.addEventListener('click', () => this.setZoom(this.zoomLevel + this.ZOOM_STEP));
        this.zoomOutBtn.addEventListener('click', () => this.setZoom(this.zoomLevel - this.ZOOM_STEP));
        this.zoomResetBtn.addEventListener('click', () => this.setZoom(100));
        this.zoomFitWidthBtn.addEventListener('click', () => this.zoomFitWidth());
        this.zoomFitHeightBtn.addEventListener('click', () => this.zoomFitHeight());
        this.documentViewport.addEventListener('wheel', e => { if (e.ctrlKey || e.metaKey) { e.preventDefault(); this.setZoom(this.zoomLevel + (e.deltaY < 0 ? this.ZOOM_STEP : -this.ZOOM_STEP)); } }, { passive: false });
        this.undoBtn.addEventListener('click', () => this.undo());
        this.redoBtn.addEventListener('click', () => this.redo());
        this.clearBtn.addEventListener('click', () => this.clearAllStyles());
        this.saveBtn.addEventListener('click', () => this.saveStyles());
        this.iconUploadBtn.addEventListener('click', () => {
            if (!this.docId) { this.showToast(this.t('load_doc_first'), 'error'); return; }
            this.openIconModal();
        });
        this.dividerBtn.addEventListener('click', () => this.toggleDividerPopover());
        const ALIGNABLE_DIVIDERS = new Set(['short', 'bold', 'dotted', 'cross', 'vertical']);
        this.dividerPopover.querySelectorAll('[data-divider]').forEach(opt => {
            opt.addEventListener('click', () => {
                const type = opt.dataset.divider;
                if (ALIGNABLE_DIVIDERS.has(type)) {
                    this._pendingDividerType = type;
                    this.dividerTypePanel.style.display = 'none';
                    this.dividerAlignPanel.style.display = '';
                } else {
                    this.insertDivider(type, null);
                }
            });
        });
        this.dividerAlignBack.addEventListener('click', () => {
            this.dividerAlignPanel.style.display = 'none';
            this.dividerTypePanel.style.display = '';
        });
        this.dividerAlignPanel.querySelectorAll('[data-align]').forEach(btn => {
            btn.addEventListener('click', () => this.insertDivider(this._pendingDividerType, btn.dataset.align));
        });
        this.quoteBtn.addEventListener('click', () => this.toggleQuotePopover());
        this.quotePopover.querySelectorAll('[data-quote]').forEach(opt => {
            opt.addEventListener('click', () => this.insertQuoteBlock(opt.dataset.quote));
        });
        this.codeBtn.addEventListener('click', () => this.toggleCodePopover());
        this.codePopover.querySelectorAll('[data-code]').forEach(opt => {
            opt.addEventListener('click', () => this.insertCodeBlock(opt.dataset.code));
        });
        this.listBtn.addEventListener('click', () => this.toggleListPopover());
        this.listPopover.querySelectorAll('[data-list]').forEach(opt => {
            opt.addEventListener('click', () => {
                const type = opt.dataset.list;
                if (type === 'numbered') {
                    this.listTypePanel.style.display = 'none';
                    this.listNumberedPanel.style.display = '';
                } else {
                    this.insertListBlock(type);
                }
            });
        });
        this.listNumberedBack.addEventListener('click', () => {
            this.listNumberedPanel.style.display = 'none';
            this.listTypePanel.style.display = '';
        });
        this.listNumberedPanel.querySelectorAll('[data-list-restart]').forEach(opt => {
            opt.addEventListener('click', () => this.insertListBlock('numbered', opt.dataset.listRestart === 'new'));
        });
        this.documentContent.addEventListener('mousedown', e => {
            const para = this.getParentParagraph(e.target);
            if (para) this.activeParagraphIndex = parseInt(para.dataset.para);
        });
        this.documentContent.addEventListener('click', e => this.handleIconPlacement(e));
        this.iconModalClose.addEventListener('click', () => this.closeIconModal());
        this.iconModalCancel.addEventListener('click', () => this.closeIconModal());
        this.iconModalSubmit.addEventListener('click', () => this.generateIcon());
        this.iconDescription.addEventListener('keydown', e => { if (e.key === 'Enter') this.generateIcon(); });
        this.iconModal.addEventListener('click', e => { if (e.target === this.iconModal) this.closeIconModal(); });
        this.fontFamilyBtn.addEventListener('click', () => this.toggleFontFamilyPopover());
        this.scriptSizeBtn.addEventListener('click', () => this.toggleScriptSizePopover());
        this.scriptOptions.forEach(opt => opt.addEventListener('click', () => this.selectScriptSize(opt.dataset.script)));
        this.headingSizeBtn.addEventListener('click', () => this.toggleHeadingSizePopover());
        document.querySelectorAll('.heading-option').forEach(opt => opt.addEventListener('click', () => this.selectHeadingSize(parseInt(opt.dataset.heading))));
        document.addEventListener('mouseup', e => this.handleTextSelection(e));
        document.addEventListener('keydown', e => this.handleKeyboard(e));
        this.floatingToolbar.querySelectorAll('.ft-btn').forEach(btn => {
            btn.addEventListener('mousedown', e => e.preventDefault());
            btn.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                const tool = btn.dataset.ftTool;
                if (tool === 'fontfamily') { this.toggleFtPopover('ftFontFamilyPopover'); return; }
                if (tool === 'scriptsize') { this.toggleFtPopover('ftScriptSizePopover'); return; }
                if (tool === 'letterspacing') { this.toggleFtPopover('ftLetterSpacingPopover'); return; }
                if (tool === 'headingsize') { this.toggleFtPopover('ftHeadingSizePopover'); return; }
                if (this.INSTANT_APPLY_TOOLS.has(tool)) { this.closeFtPopovers(); this.applyInstantTool(tool, btn); return; }
                if (this.COLOR_TOOLS.has(tool)) { this.closeFtPopovers(); this.showSharedColorPopover(tool, btn); return; }
                this.closeFtPopovers();
                this.applyToolToSelection(tool);
            });
        });
        this.floatingToolbar.querySelectorAll('[data-ft-script]').forEach(opt => {
            opt.addEventListener('mousedown', e => e.preventDefault());
            opt.addEventListener('click', e => {
                e.stopPropagation();
                this.applyToolToSelection(opt.dataset.ftScript);
                this.closeFtPopovers();
            });
        });
        this.floatingToolbar.querySelectorAll('[data-ft-heading]').forEach(opt => {
            opt.addEventListener('mousedown', e => e.preventDefault());
            opt.addEventListener('click', e => {
                e.stopPropagation();
                this.selectHeadingSize(parseInt(opt.dataset.ftHeading));
                this.closeFtPopovers();
            });
        });
        this.floatingToolbar.addEventListener('mousedown', e => e.preventDefault());
        this._initStepperWithInput(this.ftFontSizeMinus, this.ftFontSizePlus, this.ftFontSizeInput, 1, 200, 'fontSize', 'fontsize', v => v > 0, this.fontSizeInput);
        this._initStepperWithInput(this.ftLetterSpacingMinus, this.ftLetterSpacingPlus, this.ftLetterSpacingInput, 0, 100, 'letterSpacing', 'letterspacing', v => v >= 0, this.letterSpacingInput);
        this.langBtnEn.addEventListener('click', () => this.selectLanguage('en'));
        this.langBtnKo.addEventListener('click', () => this.selectLanguage('ko'));
    }

    async handleFileUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const validTypes = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
        if (!validTypes.includes(file.type) && !file.name.endsWith('.docx')) {
            this.showToast(this.t('select_docx'), 'error');
            return;
        }
        await this.uploadDocument(file);
    }

    async handleDrop(e) {
        e.preventDefault();
        this.documentViewport.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file && (file.name.endsWith('.docx') || file.name.endsWith('.doc'))) {
            await this.uploadDocument(file);
        } else {
            this.showToast(this.t('drop_docx'), 'error');
        }
    }

    async uploadDocument(file) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await fetch(`${this.apiBase}/upload`, { method: 'POST', body: formData });
            const data = await response.json();
            if (data.success) {
                this.docId = data.doc_id;
                this.content = data.content;
                this.styles = [];
                this.history = [];
                this.redoStack = [];
                this.savedSelection = null;
                this.renderDocument();
                this.updateStylesList();
                this.fileInfo.querySelector('.file-name').textContent = data.filename;
                this.showToast(this.t('upload_success'), 'success');
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Upload error:', error);
            this.showToast(this.t('upload_failed') + error.message, 'error');
        }
    }

    renderDocument() {
        if (!this.content.length) {
            this.emptyState.style.display = 'flex';
            this.documentContainer.style.display = 'none';
            return;
        }
        this.emptyState.style.display = 'none';
        this.documentContainer.style.display = 'block';
        this.documentContent.innerHTML = this.content.map((p, i) => `<p data-para="${i}">${this.escapeHtml(p.text)}</p>`).join('');
        this.applyAllStyles();
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    _iconHtml(s) {
        return s.svgCode
            ? `<span class="inline-icon" data-style-id="${s.id}" title="${this.escapeHtml(s.iconName)}">${s.svgCode}</span>`
            : `<img src="${s.iconData}" class="inline-icon" data-style-id="${s.id}" alt="">`;
    }

    _initStepperWithInput(minusBtn, plusBtn, input, min, max, prop, tool, validate, syncInput) {
        const apply = val => { this[prop] = val + 'px'; if (syncInput) syncInput.value = val; if (this.savedSelection) this.applyToolToSelection(tool, true); };
        this._setupStepper(minusBtn, plusBtn, input, min, max, apply);
        input.addEventListener('change', e => { const v = parseInt(e.target.value); if (v && validate(v)) apply(v); });
    }

    _setupStepper(minusBtn, plusBtn, input, min, max, onChange) {
        const step = dir => { const val = Math.max(min, Math.min(max, parseInt(input.value) + dir)); input.value = val; onChange(val); };
        const startHold = dir => {
            step(dir);
            let delay = setTimeout(() => {
                let interval = setInterval(() => step(dir), 60);
                const stop = () => { clearInterval(interval); document.removeEventListener('mouseup', stop); document.removeEventListener('mouseleave', stop); };
                document.addEventListener('mouseup', stop); document.addEventListener('mouseleave', stop);
                minusBtn._stopHold = plusBtn._stopHold = stop;
            }, 350);
            const cancelDelay = () => { clearTimeout(delay); if (minusBtn._stopHold) minusBtn._stopHold(); document.removeEventListener('mouseup', cancelDelay); };
            document.addEventListener('mouseup', cancelDelay);
        };
        minusBtn.addEventListener('mousedown', e => { e.preventDefault(); startHold(-1); });
        plusBtn.addEventListener('mousedown', e => { e.preventDefault(); startHold(1); });
    }

    setZoom(level) {
        this.zoomLevel = Math.max(this.ZOOM_MIN, Math.min(this.ZOOM_MAX, level));
        const scale = this.zoomLevel / 100;
        this.documentContainer.style.transform = scale === 1 ? '' : `scale(${scale})`;
        if (this.zoomLevel === 100) this.documentContainer.style.removeProperty('margin-bottom');
        else this.documentContainer.style.marginBottom = `${(scale - 1) * this.documentContainer.offsetHeight}px`;
        this.zoomLevelDisplay.textContent = `${this.zoomLevel}%`;
        this.zoomOutBtn.disabled = this.zoomLevel <= this.ZOOM_MIN;
        this.zoomInBtn.disabled = this.zoomLevel >= this.ZOOM_MAX;
    }

    zoomFitWidth() {
        this.setZoom(100);
        const vpStyle = getComputedStyle(this.documentViewport);
        const vpWidth = this.documentViewport.clientWidth - parseFloat(vpStyle.paddingLeft) - parseFloat(vpStyle.paddingRight);
        const docWidth = this.documentContainer.offsetWidth;
        if (docWidth > 0) this.setZoom(Math.floor((vpWidth / docWidth) * 100));
    }

    zoomFitHeight() {
        this.setZoom(100);
        const vpStyle = getComputedStyle(this.documentViewport);
        const vpHeight = this.documentViewport.clientHeight - parseFloat(vpStyle.paddingTop) - parseFloat(vpStyle.paddingBottom);
        const docHeight = this.documentContainer.offsetHeight;
        if (docHeight > 0) this.setZoom(Math.floor((vpHeight / docHeight) * 100));
    }

    resetStepperDefaults() {
        this.fontSize = '16px';
        this.letterSpacing = '0px';
        this.fontSizeInput.value = 16;
        this.letterSpacingInput.value = 0;
        this.ftFontSizeInput.value = 16;
    }

    toggleLetterSpacingPopover() {
        const isVisible = this.letterSpacingPopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            this.letterSpacingPopover.classList.add('visible');
            this.letterSpacingBtn.classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    toggleLineHeightPopover() {
        const isVisible = this.lineHeightPopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            this.lineHeightPopover.classList.add('visible');
            this.lineHeightBtn.classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    _initLineHeightStepper() {
        const apply = val => {
            this.lineHeight = val;
            this.lineHeightInput.value = val.toFixed(1);
            if (this.documentContent) this.documentContent.style.lineHeight = val;
        };
        const step = dir => {
            const val = Math.round((Math.max(1.0, Math.min(4.0, parseFloat(this.lineHeightInput.value) + dir * 0.1)) * 10)) / 10;
            apply(val);
        };
        this.lineHeightMinus.addEventListener('click', () => step(-1));
        this.lineHeightPlus.addEventListener('click', () => step(1));
        this.lineHeightInput.addEventListener('change', e => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v) && v >= 1.0 && v <= 4.0) apply(Math.round(v * 10) / 10);
            else this.lineHeightInput.value = this.lineHeight.toFixed(1);
        });
    }

    toggleCalloutPopover() {
        const isVisible = this.calloutPopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
            this.calloutPopover.classList.add('visible');
            this.calloutBtn.classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    applyCallout() {
        if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        const { paraIndex, startOffset, endOffset, text } = this.savedSelection;
        const style = { id: this._genId(), type: 'callout', text, color: this.calloutBorderColor || '#000000', bgColor: this.calloutBgColor || '#ffffff', paraIndex, startOffset, endOffset, created_at: new Date().toISOString() };
        this._pushHistory({ action: 'add', style });
        this.styles.push(style);
        this.logAction('add', style);
        this._refreshViews();
        this._closeToolPopovers();
        this._clearSelection();
        this.hideFloatingToolbar();
        this.promptApplyToAll(style);
    }

    toggleDividerPopover() {
        const isVisible = this.dividerPopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            if (!this.docId) { this.showToast(this.t('load_doc_first'), 'error'); return; }
            this.dividerPopover.classList.add('visible');
            this.dividerBtn.classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    insertDivider(dividerType, alignment) {
        if (!this.docId) { this.showToast(this.t('load_doc_first'), 'error'); return; }
        const paraIndex = this.activeParagraphIndex ?? this.savedSelection?.paraIndex ?? (this.content.length - 1);
        const style = { id: this._genId('div'), type: 'divider', dividerType, alignment: alignment || null, paraIndex, startOffset: -1, endOffset: -1, text: '', color: '', created_at: new Date().toISOString() };
        this._pushHistory({ action: 'add', style });
        this.styles.push(style);
        this.logAction('add', style);
        this._closeToolPopovers();
        this._refreshViews();
    }

    toggleQuotePopover() {
        const isVisible = this.quotePopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
            this.quotePopover.classList.add('visible');
            this.quoteBtn.classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    _findWholeParaStyles(type) {
        if (!this.savedSelection) return null;
        const spans = (this.savedSelection.spans && this.savedSelection.spans.length)
            ? this.savedSelection.spans
            : [{ paraIndex: this.savedSelection.paraIndex, startOffset: this.savedSelection.startOffset, endOffset: this.savedSelection.endOffset }];
        const matched = [];
        for (const sp of spans) {
            const paraText = this.content[sp.paraIndex]?.text ?? '';
            if (!paraText.length || sp.startOffset !== 0 || sp.endOffset !== paraText.length) return null;
            const existing = this.styles.find(s => s.type === type && s.paraIndex === sp.paraIndex && s.startOffset === 0 && s.endOffset === paraText.length);
            if (!existing) return null;
            matched.push(existing);
        }
        return { spans, matched };
    }

    insertQuoteBlock(quoteStyle) {
        if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        const reapplied = this._findWholeParaStyles('quote');
        if (reapplied) {
            reapplied.matched.forEach(s => { s.quoteStyle = quoteStyle; });
            this._closeToolPopovers();
            this._refreshViews();
            this.restoreSelectionSpans(reapplied.spans);
            return;
        }
        const spans = (this.savedSelection.spans && this.savedSelection.spans.length)
            ? this.savedSelection.spans
            : [{ paraIndex: this.savedSelection.paraIndex, startOffset: this.savedSelection.startOffset, endOffset: this.savedSelection.endOffset }];

        const startPara = spans[0].paraIndex;
        const endPara = spans[spans.length - 1].paraIndex;
        const pieces = spans.map(sp => this.content[sp.paraIndex].text.slice(sp.startOffset, sp.endOffset));
        const quoted = pieces.join(' ');
        if (!quoted) return;

        const beforeState = { content: JSON.parse(JSON.stringify(this.content)), styles: JSON.parse(JSON.stringify(this.styles)) };

        const firstPara = this.content[startPara];
        const lastPara = this.content[endPara];
        const quoteIdx = startPara + 1;
        const afterIdx = startPara + 2;
        this.content = [
            ...this.content.slice(0, startPara),
            { ...firstPara, text: firstPara.text.slice(0, spans[0].startOffset) },
            { text: quoted },
            { ...lastPara, text: lastPara.text.slice(spans[spans.length - 1].endOffset) },
            ...this.content.slice(endPara + 1)
        ];

        let cum = 0;
        const spanRanges = spans.map((sp, i) => {
            const mergedStart = cum;
            cum += pieces[i].length + 1;
            return { paraIndex: sp.paraIndex, srcStart: sp.startOffset, srcEnd: sp.endOffset, mergedStart, mergedEnd: mergedStart + pieces[i].length };
        });
        const numOriginal = endPara - startPara + 1;
        const delta = 3 - numOriginal;

        const adjustedStyles = [];
        for (const s of this.styles) {
            if (s.paraIndex < startPara) { adjustedStyles.push(s); continue; }
            if (s.paraIndex > endPara) { adjustedStyles.push({ ...s, paraIndex: s.paraIndex + delta }); continue; }
            const range = spanRanges.find(r => r.paraIndex === s.paraIndex);
            if (!range) continue;
            if (s.type === 'divider') {
                if (s.paraIndex === startPara) adjustedStyles.push(s);
                continue;
            }
            if (s.type === 'inlineicon') {
                if (s.paraIndex === startPara && s.startOffset < range.srcStart) adjustedStyles.push(s);
                else if (s.paraIndex === endPara && s.startOffset >= range.srcEnd) adjustedStyles.push({ ...s, paraIndex: afterIdx, startOffset: s.startOffset - range.srcEnd, endOffset: s.startOffset - range.srcEnd });
                continue;
            }
            if (s.paraIndex === startPara && s.endOffset <= range.srcStart) { adjustedStyles.push(s); continue; }
            if (s.paraIndex === endPara && s.startOffset >= range.srcEnd) { adjustedStyles.push({ ...s, paraIndex: afterIdx, startOffset: s.startOffset - range.srcEnd, endOffset: s.endOffset - range.srcEnd }); continue; }
            if (s.startOffset >= range.srcStart && s.endOffset <= range.srcEnd) { adjustedStyles.push({ ...s, paraIndex: quoteIdx, startOffset: s.startOffset - range.srcStart + range.mergedStart, endOffset: s.endOffset - range.srcStart + range.mergedStart }); continue; }
            if (s.paraIndex === startPara && s.startOffset < range.srcStart) { adjustedStyles.push({ ...s, endOffset: range.srcStart }); continue; }
            if (s.paraIndex === endPara && s.endOffset > range.srcEnd) { adjustedStyles.push({ ...s, paraIndex: afterIdx, startOffset: 0, endOffset: s.endOffset - range.srcEnd }); continue; }
        }
        const quoteStyleObj = { id: this._genId(), type: 'quote', quoteStyle, text: quoted, color: '', paraIndex: quoteIdx, startOffset: 0, endOffset: quoted.length, created_at: new Date().toISOString() };
        adjustedStyles.push(quoteStyleObj);
        this.styles = adjustedStyles;

        const afterState = { content: JSON.parse(JSON.stringify(this.content)), styles: JSON.parse(JSON.stringify(this.styles)) };
        this._pushHistory({ action: 'quote_split', before: beforeState, after: afterState });
        this.logAction('add', quoteStyleObj);
        this._closeToolPopovers();
        this._refreshViews();
        this.savedSelection = { paraIndex: quoteIdx, startOffset: 0, endOffset: quoted.length, text: quoted, rect: this.savedSelection?.rect, spans: [{ paraIndex: quoteIdx, startOffset: 0, endOffset: quoted.length }] };
        this.restoreSelection(quoteIdx, 0, quoted.length);
    }

    toggleCodePopover() {
        const isVisible = this.codePopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
            this.codePopover.classList.add('visible');
            this.codeBtn.classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    detectLanguage(code) {
        const trimmed = code.trim();
        if (!trimmed) return 'Plain Text';
        if (/^[\[{]/.test(trimmed)) {
            try { JSON.parse(trimmed); return 'JSON'; } catch (e) { /* not JSON */ }
        }
        const rules = [
            { lang: 'HTML', re: [/<!doctype html/i, /<\/[a-z][a-z0-9]*>/i, /<[a-z][a-z0-9]*(\s+[\w-]+(=("[^"]*"|'[^']*'))?)*\s*\/?>/i] },
            { lang: 'CSS', re: [/[.#]?[\w-]+\s*\{[^{}]*:[^{}]*;[^{}]*\}/, /@media\s*\(/, /^\s*[.#][\w-]+\s*\{/m] },
            { lang: 'Python', re: [/\bdef\s+\w+\s*\([^)]*\)\s*:/, /\bimport\s+\w+/, /\bself\b/, /\belif\b/, /\bprint\(/, /\bNone\b/, /:\s*$/m] },
            { lang: 'Java', re: [/\bpublic\s+(static\s+)?(final\s+)?class\b/, /\bSystem\.out\.println\(/, /\bpublic\s+static\s+void\s+main\s*\(/, /\bprivate\s+\w+\s+\w+\s*\(/] },
            { lang: 'C++', re: [/#include\s*<\w+>/, /\bstd::\w+/, /\bcout\s*<</, /\bnamespace\s+\w+/] },
            { lang: 'C', re: [/#include\s*<\w+\.h>/, /\bprintf\s*\(/, /\bmalloc\s*\(/, /\bstruct\s+\w+\s*\{/] },
            { lang: 'SQL', re: [/\bSELECT\b[\s\S]{0,300}\bFROM\b/i, /\bINSERT\s+INTO\b/i, /\bCREATE\s+TABLE\b/i, /\bUPDATE\b[\s\S]*\bSET\b/i] },
            { lang: 'Bash', re: [/^#!.*\/(ba)?sh/m, /\becho\s+["'$]/, /\bfi\b/, /\bdone\b/, /\$\{?\w+\}?/] },
            { lang: 'TypeScript', re: [/:\s*(string|number|boolean|any|void)\b/, /\binterface\s+\w+/, /\btype\s+\w+\s*=/] },
            { lang: 'JavaScript', re: [/\bfunction\s*\w*\s*\(/, /=>\s*[{(]?/, /\bconst\s+\w+\s*=/, /\blet\s+\w+\s*=/, /\bconsole\.log\(/, /\brequire\(/, /\bdocument\.\w+/] },
        ];
        let best = { lang: 'Plain Text', score: 0 };
        for (const rule of rules) {
            const score = rule.re.reduce((acc, re) => acc + (re.test(trimmed) ? 1 : 0), 0);
            if (score > best.score) best = { lang: rule.lang, score };
        }
        return best.score > 0 ? best.lang : 'Plain Text';
    }

    insertCodeBlock(bgStyle) {
        if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        const reapplied = this._findWholeParaStyles('code');
        if (reapplied) {
            reapplied.matched.forEach(s => { s.bgStyle = bgStyle; });
            this._closeToolPopovers();
            this._refreshViews();
            this.restoreSelectionSpans(reapplied.spans);
            return;
        }
        const spans = (this.savedSelection.spans && this.savedSelection.spans.length)
            ? this.savedSelection.spans
            : [{ paraIndex: this.savedSelection.paraIndex, startOffset: this.savedSelection.startOffset, endOffset: this.savedSelection.endOffset }];

        const startPara = spans[0].paraIndex;
        const endPara = spans[spans.length - 1].paraIndex;
        const pieces = spans.map(sp => this.content[sp.paraIndex].text.slice(sp.startOffset, sp.endOffset));
        const code = pieces.join('\n');
        if (!code) return;
        const language = this.detectLanguage(code);

        const beforeState = { content: JSON.parse(JSON.stringify(this.content)), styles: JSON.parse(JSON.stringify(this.styles)) };

        const firstPara = this.content[startPara];
        const lastPara = this.content[endPara];
        const codeIdx = startPara + 1;
        const afterIdx = startPara + 2;
        this.content = [
            ...this.content.slice(0, startPara),
            { ...firstPara, text: firstPara.text.slice(0, spans[0].startOffset) },
            { text: code },
            { ...lastPara, text: lastPara.text.slice(spans[spans.length - 1].endOffset) },
            ...this.content.slice(endPara + 1)
        ];

        let cum = 0;
        const spanRanges = spans.map((sp, i) => {
            const mergedStart = cum;
            cum += pieces[i].length + 1;
            return { paraIndex: sp.paraIndex, srcStart: sp.startOffset, srcEnd: sp.endOffset, mergedStart, mergedEnd: mergedStart + pieces[i].length };
        });
        const numOriginal = endPara - startPara + 1;
        const delta = 3 - numOriginal;

        const adjustedStyles = [];
        for (const s of this.styles) {
            if (s.paraIndex < startPara) { adjustedStyles.push(s); continue; }
            if (s.paraIndex > endPara) { adjustedStyles.push({ ...s, paraIndex: s.paraIndex + delta }); continue; }
            const range = spanRanges.find(r => r.paraIndex === s.paraIndex);
            if (!range) continue;
            if (s.type === 'divider') {
                if (s.paraIndex === startPara) adjustedStyles.push(s);
                continue;
            }
            if (s.type === 'inlineicon') {
                if (s.paraIndex === startPara && s.startOffset < range.srcStart) adjustedStyles.push(s);
                else if (s.paraIndex === endPara && s.startOffset >= range.srcEnd) adjustedStyles.push({ ...s, paraIndex: afterIdx, startOffset: s.startOffset - range.srcEnd, endOffset: s.startOffset - range.srcEnd });
                continue;
            }
            if (s.paraIndex === startPara && s.endOffset <= range.srcStart) { adjustedStyles.push(s); continue; }
            if (s.paraIndex === endPara && s.startOffset >= range.srcEnd) { adjustedStyles.push({ ...s, paraIndex: afterIdx, startOffset: s.startOffset - range.srcEnd, endOffset: s.endOffset - range.srcEnd }); continue; }
            if (s.startOffset >= range.srcStart && s.endOffset <= range.srcEnd) { adjustedStyles.push({ ...s, paraIndex: codeIdx, startOffset: s.startOffset - range.srcStart + range.mergedStart, endOffset: s.endOffset - range.srcStart + range.mergedStart }); continue; }
            if (s.paraIndex === startPara && s.startOffset < range.srcStart) { adjustedStyles.push({ ...s, endOffset: range.srcStart }); continue; }
            if (s.paraIndex === endPara && s.endOffset > range.srcEnd) { adjustedStyles.push({ ...s, paraIndex: afterIdx, startOffset: 0, endOffset: s.endOffset - range.srcEnd }); continue; }
        }
        const codeStyleObj = { id: this._genId(), type: 'code', bgStyle, language, text: code, color: '', paraIndex: codeIdx, startOffset: 0, endOffset: code.length, created_at: new Date().toISOString() };
        adjustedStyles.push(codeStyleObj);
        this.styles = adjustedStyles;

        const afterState = { content: JSON.parse(JSON.stringify(this.content)), styles: JSON.parse(JSON.stringify(this.styles)) };
        this._pushHistory({ action: 'code_split', before: beforeState, after: afterState });
        this.logAction('add', codeStyleObj);
        this._closeToolPopovers();
        this._refreshViews();
        this.savedSelection = { paraIndex: codeIdx, startOffset: 0, endOffset: code.length, text: code, rect: this.savedSelection?.rect, spans: [{ paraIndex: codeIdx, startOffset: 0, endOffset: code.length }] };
        this.restoreSelection(codeIdx, 0, code.length);
    }

    toggleListPopover() {
        const isVisible = this.listPopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
            this.listPopover.classList.add('visible');
            this.listBtn.classList.add('active');
        }
    }

    insertListBlock(listStyle, restart = false) {
        if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        const reapplied = this._findWholeParaStyles('list');
        if (reapplied) {
            reapplied.matched.forEach((s, i) => {
                s.listStyle = listStyle;
                if (listStyle === 'numbered' && restart && i === 0) s.restart = true;
                else delete s.restart;
            });
            this._closeToolPopovers();
            this._refreshViews();
            this.restoreSelectionSpans(reapplied.spans);
            return;
        }
        const spans = (this.savedSelection.spans && this.savedSelection.spans.length)
            ? this.savedSelection.spans
            : [{ paraIndex: this.savedSelection.paraIndex, startOffset: this.savedSelection.startOffset, endOffset: this.savedSelection.endOffset }];

        const startPara = spans[0].paraIndex;
        const endPara = spans[spans.length - 1].paraIndex;

        const entries = [];
        spans.forEach((sp, spanIdx) => {
            const paraText = this.content[sp.paraIndex].text;
            const isFirst = spanIdx === 0;
            const isLast = spanIdx === spans.length - 1;
            if (isFirst) {
                entries.push({ srcPara: sp.paraIndex, srcStart: 0, srcEnd: sp.startOffset, kind: 'prefix', text: paraText.slice(0, sp.startOffset), orig: this.content[sp.paraIndex] });
            }
            let cursor = sp.startOffset;
            paraText.slice(sp.startOffset, sp.endOffset).split('\n').forEach(part => {
                const segStart = cursor, segEnd = cursor + part.length;
                entries.push({ srcPara: sp.paraIndex, srcStart: segStart, srcEnd: segEnd, kind: 'list', text: part });
                cursor = segEnd + 1;
            });
            if (isLast) {
                entries.push({ srcPara: sp.paraIndex, srcStart: sp.endOffset, srcEnd: paraText.length, kind: 'suffix', text: paraText.slice(sp.endOffset), orig: this.content[sp.paraIndex] });
            }
        });

        const filteredEntries = entries.filter(r => r.kind !== 'list' || r.text.length > 0);
        if (!filteredEntries.some(r => r.kind === 'list')) return;

        const beforeState = { content: JSON.parse(JSON.stringify(this.content)), styles: JSON.parse(JSON.stringify(this.styles)) };

        const newContentSection = filteredEntries.map(r => r.kind === 'list' ? { text: r.text } : { ...r.orig, text: r.text });
        this.content = [
            ...this.content.slice(0, startPara),
            ...newContentSection,
            ...this.content.slice(endPara + 1)
        ];
        filteredEntries.forEach((r, i) => { r.newParaIndex = startPara + i; });

        const numOriginal = endPara - startPara + 1;
        const delta = filteredEntries.length - numOriginal;
        const entriesByPara = new Map();
        filteredEntries.forEach(r => { if (!entriesByPara.has(r.srcPara)) entriesByPara.set(r.srcPara, []); entriesByPara.get(r.srcPara).push(r); });

        const adjustedStyles = [];
        for (const s of this.styles) {
            if (s.paraIndex < startPara) { adjustedStyles.push(s); continue; }
            if (s.paraIndex > endPara) { adjustedStyles.push({ ...s, paraIndex: s.paraIndex + delta }); continue; }
            const paraEntries = entriesByPara.get(s.paraIndex);
            if (!paraEntries) continue;
            if (s.type === 'divider') {
                const prefixEntry = paraEntries.find(r => r.kind === 'prefix');
                if (prefixEntry) adjustedStyles.push({ ...s, paraIndex: prefixEntry.newParaIndex });
                continue;
            }
            if (s.type === 'inlineicon') {
                const containing = paraEntries.find(r => s.startOffset >= r.srcStart && s.startOffset <= r.srcEnd);
                if (containing) adjustedStyles.push({ ...s, paraIndex: containing.newParaIndex, startOffset: s.startOffset - containing.srcStart, endOffset: s.startOffset - containing.srcStart });
                continue;
            }
            const contained = paraEntries.find(r => s.startOffset >= r.srcStart && s.endOffset <= r.srcEnd);
            if (contained) { adjustedStyles.push({ ...s, paraIndex: contained.newParaIndex, startOffset: s.startOffset - contained.srcStart, endOffset: s.endOffset - contained.srcStart }); continue; }
            const overlapping = paraEntries.find(r => s.startOffset < r.srcEnd && s.endOffset > r.srcStart);
            if (overlapping) {
                const clipStart = Math.max(s.startOffset, overlapping.srcStart), clipEnd = Math.min(s.endOffset, overlapping.srcEnd);
                if (clipEnd > clipStart) adjustedStyles.push({ ...s, paraIndex: overlapping.newParaIndex, startOffset: clipStart - overlapping.srcStart, endOffset: clipEnd - overlapping.srcStart });
            }
        }

        const newListStyles = filteredEntries.filter(r => r.kind === 'list').map(r => ({ id: this._genId(), type: 'list', listStyle, text: r.text, color: '', paraIndex: r.newParaIndex, startOffset: 0, endOffset: r.text.length, created_at: new Date().toISOString() }));
        if (listStyle === 'numbered' && restart && newListStyles.length) newListStyles[0].restart = true;
        newListStyles.forEach(s => adjustedStyles.push(s));
        this.styles = adjustedStyles;

        const afterState = { content: JSON.parse(JSON.stringify(this.content)), styles: JSON.parse(JSON.stringify(this.styles)) };
        this._pushHistory({ action: 'list_split', before: beforeState, after: afterState });
        newListStyles.forEach(s => this.logAction('add', s));
        this._closeToolPopovers();
        this._refreshViews();
        const listSpans = newListStyles.map(s => ({ paraIndex: s.paraIndex, startOffset: 0, endOffset: s.text.length }));
        if (newListStyles.length === 1) {
            this.savedSelection = { paraIndex: listSpans[0].paraIndex, startOffset: 0, endOffset: listSpans[0].endOffset, text: newListStyles[0].text, rect: this.savedSelection?.rect, spans: listSpans };
            this.restoreSelection(newListStyles[0].paraIndex, 0, newListStyles[0].text.length);
        } else if (newListStyles.length > 1) {
            this.savedSelection = { paraIndex: listSpans[0].paraIndex, startOffset: 0, endOffset: listSpans[0].endOffset, text: newListStyles.map(s => s.text).join('\n'), rect: this.savedSelection?.rect, spans: listSpans };
            this.restoreSelectionSpans(listSpans);
        }
    }

    buildDividerElement(d) {
        const el = document.createElement('div');
        el.className = `divider-block divider-${d.dividerType}`;
        el.dataset.divId = d.id;
        el.contentEditable = 'false';
        if (d.alignment) el.dataset.align = d.alignment;
        const line = '<div class="div-line"></div>';
        const triangleSvg = `<svg class="div-sym-svg" viewBox="0 0 20 18" width="20" height="18"><polygon points="0,9 20,9 10,17" fill="none" stroke="#d0d0d0" stroke-width="1"/></svg>`;
        const diamondSvg = `<svg class="div-sym-svg" viewBox="0 0 20 18" width="20" height="18"><polygon points="0,9 10,3 20,9 10,15" fill="none" stroke="#d0d0d0" stroke-width="1"/></svg>`;
        const inner = {
            full: line, short: line, bold: line, dotted: line,
            triangle: line + triangleSvg + line,
            diamond:  line + diamondSvg + line,
            cross:    '<div class="div-slash"></div>',
            vertical: '<div class="div-vline"></div>',
        }[d.dividerType] ?? line;
        el.innerHTML = inner;
        return el;
    }

    selectTool(tool) {
        if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        this._closeToolPopovers();
        this.applyToolToSelection(tool);
    }

    applyInstantTool(tool, anchorBtn) {
        if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        const prev = this.borderColor; this.borderColor = '#000000';
        this.applyToolToSelection(tool, true); this.borderColor = prev;
        const sel = this.savedSelection;
        const applied = sel ? this.styles.filter(s => s.type === tool && s.paraIndex === sel.paraIndex && s.startOffset === sel.startOffset && s.endOffset === sel.endOffset).pop() : null;
        const styledEl = applied ? this.documentContent.querySelector(`[data-style-id*="${applied.id}"]`) : null;
        requestAnimationFrame(() => requestAnimationFrame(() => {
            if (!this.savedSelection) return;
            this._instantStyleAnchor = styledEl;
            this.showSharedColorPopover(tool, anchorBtn);
            this._instantStyleId = applied ? applied.id : null; this._instantStyleAnchor = null;
        }));
    }

    toggleFontFamilyPopover() {
        const isVisible = this.fontFamilyPopover.classList.contains('visible');
        if (!isVisible && !this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        this._closeToolPopovers();
        if (!isVisible) { this.fontFamilyPopover.classList.add('visible'); this.fontFamilyBtn.classList.add('active'); }
        this.adjustFloatingToolbarForPopovers();
    }

    selectFontFamily(font) {
        if (this.savedSelection) this.applyToolToSelection(font);
        this._closeToolPopovers();
        this.adjustFloatingToolbarForPopovers();
    }

    toggleScriptSizePopover() {
        const isVisible = this.scriptSizePopover.classList.contains('visible');
        if (!isVisible && !this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        this._closeToolPopovers();
        if (!isVisible) { this.scriptSizePopover.classList.add('visible'); this.scriptSizeBtn.classList.add('active'); }
        this.adjustFloatingToolbarForPopovers();
    }

    toggleHeadingSizePopover() {
        const isVisible = this.headingSizePopover.classList.contains('visible');
        if (!isVisible && !this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        this._closeToolPopovers();
        if (!isVisible) { this.headingSizePopover.classList.add('visible'); this.headingSizeBtn.classList.add('active'); }
        this.adjustFloatingToolbarForPopovers();
    }

    selectHeadingSize(px) {
        this.fontSize = px + 'px';
        this.fontSizeInput.value = px;
        this.ftFontSizeInput.value = px;
        if (this.savedSelection) this.applyToolToSelection('fontsize', true);
        this._closeToolPopovers();
        this.adjustFloatingToolbarForPopovers();
    }

    selectScriptSize(type) {
        if (this.savedSelection) this.applyToolToSelection(type);
        this._closeToolPopovers();
        this.adjustFloatingToolbarForPopovers();
    }

    applyToolToSelection(tool, keepSelection = false) {
        if (!this.savedSelection) return;
        const { spans, text } = this.savedSelection;
        const isDropcap = tool === 'dropcap';
        const color = this.getColorForTool(tool);

        if (!spans || spans.length <= 1) {
            // Single-paragraph path
            const { paraIndex, startOffset, endOffset } = spans ? spans[0] : this.savedSelection;
            const sOff = isDropcap ? 0 : startOffset, eOff = isDropcap ? 1 : endOffset;
            const sText = isDropcap ? (this.content[paraIndex]?.text?.charAt(sOff) || '') : text;
            if (keepSelection) {
                const existing = this.styles.find(s => s.type === tool && s.paraIndex === paraIndex && s.startOffset === sOff && s.endOffset === eOff);
                if (existing) { existing.color = color; this._refreshViews(); this.restoreSelection(paraIndex, sOff, eOff); return; }
            }
            const existingIdx = this.styles.findIndex(s => s.type === tool && s.paraIndex === paraIndex && s.startOffset === sOff && s.endOffset === eOff);
            const replaced = existingIdx !== -1 ? this.styles.splice(existingIdx, 1)[0] : null;
            const style = { id: this._genId(), type: tool, text: sText, color, paraIndex, startOffset: sOff, endOffset: eOff, created_at: new Date().toISOString() };
            if (tool === 'callout') style.bgColor = this.bgColor;
            this._pushHistory({ action: 'add', style, replaced });
            this.styles.push(style);
            this.logAction('add', style);
            this._refreshViews();
            this.restoreSelection(paraIndex, sOff, eOff);
            this._updateFloatingToolbarStyles();
            if (!keepSelection) { this.promptApplyToAll(style); }
        } else {
            // Multi-paragraph path
            const activeSpans = isDropcap ? [spans[0]] : spans;
            if (keepSelection) {
                let anyUpdated = false;
                for (const sp of activeSpans) {
                    const sOff = isDropcap ? 0 : sp.startOffset, eOff = isDropcap ? 1 : sp.endOffset;
                    const existing = this.styles.find(s => s.type === tool && s.paraIndex === sp.paraIndex && s.startOffset === sOff && s.endOffset === eOff);
                    if (existing) { existing.color = color; anyUpdated = true; }
                }
                if (anyUpdated) { this._refreshViews(); this.restoreSelectionSpans(spans); return; }
            }
            const newStyles = activeSpans.map(sp => {
                const sOff = isDropcap ? 0 : sp.startOffset, eOff = isDropcap ? 1 : sp.endOffset;
                const spanText = this.content[sp.paraIndex]?.text?.slice(sOff, eOff) ?? '';
                const style = { id: this._genId(), type: tool, text: spanText, color, paraIndex: sp.paraIndex, startOffset: sOff, endOffset: eOff, created_at: new Date().toISOString() };
                if (tool === 'callout') style.bgColor = this.bgColor;
                return style;
            });
            this._pushHistory({ action: 'batch_add', styles: newStyles });
            newStyles.forEach(s => { this.styles.push(s); this.logAction('add', s); });
            this._refreshViews();
            this.restoreSelectionSpans(spans);
            this._updateFloatingToolbarStyles();
        }
    }

    restoreSelection(paraIndex, startOffset, endOffset) {
        const para = this.documentContent.querySelector(`p[data-para="${paraIndex}"]`);
        if (!para) return;
        const walker = document.createTreeWalker(para, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement?.closest('.inline-icon') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
        let sn = null, so = 0, en = null, eo = 0, current, total = 0;
        while ((current = walker.nextNode())) {
            const len = current.textContent.length;
            if (!sn && total + len >= startOffset) { sn = current; so = startOffset - total; }
            if (!en && total + len >= endOffset) { en = current; eo = endOffset - total; break; }
            total += len;
        }
        if (sn && en) { const r = document.createRange(); r.setStart(sn, so); r.setEnd(en, eo); const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); }
    }

    restoreSelectionSpans(spans) {
        if (!spans || !spans.length) return;
        if (spans.length === 1) { this.restoreSelection(spans[0].paraIndex, spans[0].startOffset, spans[0].endOffset); return; }
        const getNodeAt = (paraIndex, offset) => {
            const para = this.documentContent.querySelector(`p[data-para="${paraIndex}"]`);
            if (!para) return null;
            const walker = document.createTreeWalker(para, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement?.closest('.inline-icon') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
            let total = 0, current;
            while ((current = walker.nextNode())) {
                const len = current.textContent.length;
                if (total + len >= offset) return { node: current, offset: offset - total };
                total += len;
            }
            return current ? { node: current, offset: current.textContent.length } : null;
        };
        const start = getNodeAt(spans[0].paraIndex, spans[0].startOffset);
        const end = getNodeAt(spans[spans.length - 1].paraIndex, spans[spans.length - 1].endOffset);
        if (start && end) { const r = document.createRange(); r.setStart(start.node, start.offset); r.setEnd(end.node, end.offset); const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r); }
    }

    openIconModal() {
        this.iconDescription.value = '';
        this.iconModal.style.display = 'flex';
        this.iconDescription.focus();
        this.setIconModalLoading(false);
    }

    closeIconModal() {
        this.iconModal.style.display = 'none';
        this.iconDescription.value = '';
    }

    setIconModalLoading(loading) {
        this.iconDescription.disabled = loading;
        this.iconModalSubmit.disabled = loading;
        this.iconModalSubmitText.textContent = loading ? this.t('generating') : this.t('generate');
        this.iconModalSpinner.style.display = loading ? 'inline-block' : 'none';
    }

    async generateIcon() {
        const description = this.iconDescription.value.trim();
        if (!description) { this.showToast(this.t('describe_icon_first'), 'error'); return; }
        this.setIconModalLoading(true);
        try {
            const response = await fetch(`${this.apiBase}/generate-icon`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ description }) });
            const data = await response.json();
            if (!data.success) throw new Error(data.error || 'Failed to generate icon');
            this.closeIconModal();
            const iconInfo = { iconData: data.iconData, iconName: data.iconName, svgCode: data.svgCode };
            if (this.cursorPosition) this.placeIconAtCursor(iconInfo);
            else { this.pendingIconData = iconInfo; this.enterIconPlacementMode(); }
        } catch (error) {
            console.error('Icon generation error:', error);
            this.showToast(this.t('icon_gen_failed') + error.message, 'error');
            this.setIconModalLoading(false);
        }
    }

    enterIconPlacementMode() {
        this.documentContent.classList.add('icon-placement-mode');
        this.selectionHint.textContent = this.t('click_text_place_icon');
        this.showToast(this.t('icon_placement_hint'), 'success');
    }

    exitIconPlacementMode() {
        this.pendingIconData = null;
        this.documentContent.classList.remove('icon-placement-mode');
        this.selectionHint.textContent = this.t('select_text_hint');
    }

    _insertIcon(paraIndex, offset, iconInfo) {
        const style = { id: this._genId(), type: 'inlineicon', text: iconInfo.iconName, color: '#000000', paraIndex, startOffset: offset, endOffset: offset, ...iconInfo, created_at: new Date().toISOString() };
        this._pushHistory({ action: 'add', style });
        this.styles.push(style);
        this.logAction('add', style);
        this._refreshViews();
        return style;
    }

    placeIconAtCursor(iconInfo) {
        const cp = this.cursorPosition;
        const s = this._insertIcon(cp.paraIndex, cp.offset, iconInfo);
        this.showToast(this.t('icon_placed_cursor', s.iconName), 'success');
    }

    handleIconPlacement(e) {
        if (!this.pendingIconData) return;
        e.preventDefault(); e.stopPropagation();
        const range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (!range) { this.showToast(this.t('position_error'), 'error'); return; }
        const para = this.getParentParagraph(range.startContainer);
        if (!para) { this.showToast(this.t('click_inside_text'), 'error'); return; }
        const s = this._insertIcon(parseInt(para.dataset.para), this.getTextOffset(para, range.startContainer, range.startOffset), this.pendingIconData);
        this.showToast(this.t('icon_placed', s.iconName), 'success');
        this.exitIconPlacementMode();
        window.getSelection().removeAllRanges();
    }

    handleTextSelection(e) {
        if (!this.docId) return;
        if (this.pendingIconData) return;
        if (e.target.closest('.toolbar') || e.target.closest('.styles-panel') || e.target.closest('.app-header') || e.target.closest('.modal-overlay') || e.target.closest('.floating-toolbar') || e.target.closest('.shared-color-popover')) return;
        const selection = window.getSelection();
        const range = selection.rangeCount ? selection.getRangeAt(0) : null;
        const selectedText = range ? selection.toString().trim() : '';
        if (!range || selection.isCollapsed || !selectedText || !this.documentContent.contains(range.commonAncestorContainer)) {
            this.savedSelection = null;
            this.resetStepperDefaults();
            this.hideFloatingToolbar();
            if (range && selection.isCollapsed && this.documentContent.contains(range.startContainer)) {
                const cursorPara = this.getParentParagraph(range.startContainer);
                if (cursorPara) {
                    const paraIndex = parseInt(cursorPara.dataset.para);
                    const offset = this.getTextOffset(cursorPara, range.startContainer, range.startOffset);
                    this.cursorPosition = { paraIndex, offset };
                    this.selectionHint.textContent = this.t('cursor_placed');
                    this._refreshViews();
                    return;
                }
            }
            this.cursorPosition = null;
            this._refreshViews();
            this.selectionHint.textContent = this.t('select_text_hint');
            return;
        }
        this.cursorPosition = null;
        const startNode = this.getParentParagraph(range.startContainer);
        const endNode = this.getParentParagraph(range.endContainer);
        if (!startNode) return;
        const startParaIndex = parseInt(startNode.dataset.para);
        const endParaIndex = endNode ? parseInt(endNode.dataset.para) : startParaIndex;
        const startOffset = this.getTextOffset(startNode, range.startContainer, range.startOffset);

        let spans;
        if (startParaIndex === endParaIndex) {
            const endOffset = this.getTextOffset(startNode, range.endContainer, range.endOffset);
            spans = [{ paraIndex: startParaIndex, startOffset, endOffset }];
        } else {
            spans = [];
            for (let pi = startParaIndex; pi <= endParaIndex; pi++) {
                const paraText = this.content[pi]?.text ?? '';
                if (pi === startParaIndex) {
                    spans.push({ paraIndex: pi, startOffset, endOffset: paraText.length });
                } else if (pi === endParaIndex) {
                    const endPara = this.documentContent.querySelector(`p[data-para="${pi}"]`);
                    const endOff = endPara ? this.getTextOffset(endPara, range.endContainer, range.endOffset) : paraText.length;
                    spans.push({ paraIndex: pi, startOffset: 0, endOffset: endOff });
                } else {
                    spans.push({ paraIndex: pi, startOffset: 0, endOffset: paraText.length });
                }
            }
        }

        const firstSpan = spans[0];
        this.savedSelection = { paraIndex: firstSpan.paraIndex, startOffset: firstSpan.startOffset, endOffset: firstSpan.endOffset, text: selectedText, rect: range.getBoundingClientRect(), spans };
        this.selectionHint.textContent = `"${selectedText.substring(0, 20)}${selectedText.length > 20 ? '...' : ''}"${this.t('selected_suffix')}`;
        const fs = this.styles.find(s => s.type === 'fontsize' && s.paraIndex === firstSpan.paraIndex && s.startOffset <= firstSpan.startOffset && s.endOffset >= firstSpan.endOffset);
        if (fs) { const v = parseInt(fs.color); if (v > 0) { this.fontSize = fs.color; this.fontSizeInput.value = v; } }
        const ls = this.styles.find(s => s.type === 'letterspacing' && s.paraIndex === firstSpan.paraIndex && s.startOffset <= firstSpan.startOffset && s.endOffset >= firstSpan.endOffset);
        if (ls) { const v = parseInt(ls.color); if (v >= 0) { this.letterSpacing = ls.color; this.letterSpacingInput.value = v; } }
        const overlapping = this.styles.filter(s =>
            spans.some(sp => s.paraIndex === sp.paraIndex && s.startOffset < sp.endOffset && s.endOffset > sp.startOffset)
        );
        this.showFloatingToolbar(range, overlapping);
    }

    showFloatingToolbar(range, overlappingStyles = []) {
        const rect = range.getBoundingClientRect(), tb = this.floatingToolbar;
        const ftH = tb.querySelector('.ft-highlight-icon'), ftT = tb.querySelector('.ft-textcolor-icon');
        if (ftH) ftH.style.background = this.bgColor;
        if (ftT) ftT.style.color = this.textColor;
        this.ftFontSizeInput.value = parseInt(this.fontSize);
        this.ftLetterSpacingInput.value = parseInt(this.letterSpacing);
        this.renderExistingStyleTags(overlappingStyles);
        tb.classList.add('visible'); tb.classList.remove('above');
        const tbRect = tb.getBoundingClientRect();
        let left = rect.left + rect.width / 2 - tbRect.width / 2, top = rect.top - tbRect.height - 10;
        if (top < 4) top = rect.bottom + 10;
        left = Math.max(4, Math.min(left, window.innerWidth - tbRect.width - 4));
        this._ftNaturalPos = { left, top, width: tbRect.width, height: tbRect.height };
        tb.style.left = left + 'px'; tb.style.top = top + 'px';
        tb.classList.toggle('above', top > rect.bottom);
    }

    renderExistingStyleTags(styles) {
        const container = this.ftExistingStyles;
        container.innerHTML = '';
        if (!styles.length) { container.classList.remove('has-styles'); return; }
        styles.forEach(s => {
            const tag = document.createElement('span'); tag.className = 'ft-style-tag';
            let label = this.TYPE_LABELS[s.type] || s.type;
            if (s.type === 'fontsize' || s.type === 'letterspacing') label += ` (${parseInt(s.color)}px)`;
            tag.innerHTML = `${label}<button class="ft-style-tag-remove" data-style-id="${s.id}" title="Remove">&times;</button>`;
            const rm = tag.querySelector('.ft-style-tag-remove');
            rm.addEventListener('mousedown', e => e.preventDefault());
            rm.addEventListener('click', e => { e.stopPropagation(); this.deleteStyle(s.id); tag.remove(); if (!container.children.length) container.classList.remove('has-styles'); });
            container.appendChild(tag);
        });
        container.classList.add('has-styles');
    }

    adjustFloatingToolbarForPopovers() {
        const tb = this.floatingToolbar;
        if (!tb.classList.contains('visible') || !this._ftNaturalPos) return;
        const { left: natLeft, top, width, height } = this._ftNaturalPos;
        let left = natLeft;
        document.querySelectorAll('.toolbar .tool-popover.visible, .shared-color-popover.visible').forEach(p => {
            const pr = p.getBoundingClientRect();
            if (top < pr.bottom && top + height > pr.top && left < pr.right && left + width > pr.left) {
                const sr = pr.right + 8, sl = pr.left - width - 8;
                if (sr + width <= window.innerWidth - 4) left = sr;
                else if (sl >= 4) left = sl;
            }
        });
        tb.style.left = left + 'px';
    }

    hideFloatingToolbar() {
        this.floatingToolbar.classList.remove('visible');
        this.closeFtPopovers();
        this.closeSharedColorPopover();
    }

    _updateFloatingToolbarStyles() {
        if (!this.savedSelection || !this.floatingToolbar.classList.contains('visible')) return;
        const { spans } = this.savedSelection;
        const sel = window.getSelection();
        if (!sel.rangeCount) return;
        const range = sel.getRangeAt(0);
        this.savedSelection.rect = range.getBoundingClientRect();
        const overlapping = this.styles.filter(s =>
            (spans || [this.savedSelection]).some(sp => s.paraIndex === sp.paraIndex && s.startOffset < sp.endOffset && s.endOffset > sp.startOffset)
        );
        this.showFloatingToolbar(range, overlapping);
    }

    toggleFtPopover(popoverId) {
        const popover = this[popoverId];
        const isOpen = popover.classList.contains('visible');
        this.closeFtPopovers();
        if (!isOpen) popover.classList.add('visible');
    }

    closeFtPopovers() {
        this.ftFontFamilyPopover.classList.remove('visible');
        this.ftScriptSizePopover.classList.remove('visible');
        this.ftLetterSpacingPopover.classList.remove('visible');
        this.ftHeadingSizePopover.classList.remove('visible');
    }

    _closeToolPopovers() {
        this.currentTool = null;
        this.toolButtons.forEach(btn => btn.classList.remove('active'));
        for (const [p, b] of [[this.fontFamilyPopover, this.fontFamilyBtn], [this.scriptSizePopover, this.scriptSizeBtn], [this.letterSpacingPopover, this.letterSpacingBtn], [this.lineHeightPopover, this.lineHeightBtn], [this.calloutPopover, this.calloutBtn], [this.headingSizePopover, this.headingSizeBtn], [this.dividerPopover, this.dividerBtn], [this.quotePopover, this.quoteBtn], [this.codePopover, this.codeBtn], [this.listPopover, this.listBtn]]) {
            p.classList.remove('visible'); b.classList.remove('active');
        }
        this.dividerAlignPanel.style.display = 'none';
        this.dividerTypePanel.style.display = '';
        this.listNumberedPanel.style.display = 'none';
        this.listTypePanel.style.display = '';
        this.closeSharedColorPopover();
    }

    getParentParagraph(node) {
        while (node && node !== this.documentContent) {
            if (node.nodeName === 'P' && node.dataset?.para !== undefined) return node;
            node = node.parentNode;
        }
        return null;
    }

    _normalizeRangeBoundary(node, offset) {
        while (node.nodeType === Node.ELEMENT_NODE) {
            if (offset < node.childNodes.length) { node = node.childNodes[offset]; offset = 0; }
            else if (node.childNodes.length > 0) {
                node = node.childNodes[node.childNodes.length - 1];
                offset = node.nodeType === Node.TEXT_NODE ? node.textContent.length : node.childNodes.length;
            } else break;
        }
        return { node, offset };
    }

    getTextOffset(paragraph, node, offset) {
        if (node.nodeType !== Node.TEXT_NODE) ({ node, offset } = this._normalizeRangeBoundary(node, offset));
        const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT, {
            acceptNode: n => n.parentElement?.closest('.inline-icon') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });
        let total = 0, current;
        while ((current = walker.nextNode())) {
            if (current === node) return total + offset;
            total += current.textContent.length;
        }
        return total + offset;
    }

    getColorForTool(tool) {
        return { textcolor: this.textColor, dropcap: '#000000', highlight: this.bgColor, fontsize: this.fontSize, letterspacing: this.letterSpacing }[tool] || this.borderColor;
    }

    applyAllStyles() {
        this.documentContent.innerHTML = this.content.map((p, i) => `<p data-para="${i}">${this.escapeHtml(p.text)}</p>`).join('');
        const stylesByPara = {};
        this.styles.filter(s => s.type !== 'divider').forEach(s => (stylesByPara[s.paraIndex] ??= []).push(s));
        const borderTypes = new Set(['border', 'circle']);
        const cursorHtml = '<span class="text-cursor"></span>';
        const cp = this.cursorPosition;
        const allParaIndices = new Set(Object.keys(stylesByPara).map(Number));
        if (cp) allParaIndices.add(cp.paraIndex);
        for (const paraIndex of allParaIndices) {
            const paraStyles = stylesByPara[paraIndex] || [];
            const para = this.documentContent.querySelector(`p[data-para="${paraIndex}"]`);
            if (!para) continue;
            const text = para.textContent;
            const hasCursor = cp && cp.paraIndex === paraIndex;
            const cursorOffset = hasCursor ? Math.max(0, Math.min(cp.offset, text.length)) : -1;
            const iconStyles = paraStyles.filter(s => s.type === 'inlineicon');
            const calloutStyles = paraStyles.filter(s => s.type === 'callout');
            const quoteStyles = paraStyles.filter(s => s.type === 'quote');
            const listStyles = paraStyles.filter(s => s.type === 'list');
            const codeStyles = paraStyles.filter(s => s.type === 'code');
            const textStyles = paraStyles.filter(s => s.type !== 'inlineicon' && s.type !== 'callout' && s.type !== 'quote' && s.type !== 'list' && s.type !== 'code');
            const borderStyles = textStyles.filter(s => borderTypes.has(s.type));
            const nonBorderStyles = textStyles.filter(s => !borderTypes.has(s.type));
            const boundsSet = [0, text.length, ...textStyles.flatMap(s => [Math.max(0, Math.min(s.startOffset, text.length)), Math.max(0, Math.min(s.endOffset, text.length))]), ...iconStyles.map(s => Math.max(0, Math.min(s.startOffset, text.length)))];
            if (hasCursor) boundsSet.push(cursorOffset);
            const bounds = [...new Set(boundsSet)].sort((a, b) => a - b);
            const segments = [];
            for (let i = 0; i < bounds.length - 1; i++) {
                const [start, end] = [bounds[i], bounds[i + 1]];
                if (hasCursor && cursorOffset === start) segments.push({ kind: 'cursor' });
                iconStyles.filter(s => s.startOffset === start).forEach(s => {
                    segments.push({ kind: 'icon', style: s });
                });
                const seg = text.substring(start, end);
                if (!seg) continue;
                const active = nonBorderStyles.filter(s => s.startOffset <= start && s.endOffset >= end);
                const activeBorders = borderStyles.filter(s => s.startOffset <= start && s.endOffset >= end);
                segments.push({ kind: 'text', text: seg, styles: active, borders: activeBorders });
            }
            if (hasCursor && cursorOffset === text.length) segments.push({ kind: 'cursor' });
            let result = '';
            let openBorders = [];
            for (const seg of segments) {
                if (seg.kind === 'cursor') { result += cursorHtml; continue; }
                if (seg.kind === 'icon') { result += this._iconHtml(seg.style); continue; }
                const newBorderIds = new Set(seg.borders.map(b => b.id));
                for (let j = openBorders.length - 1; j >= 0; j--) {
                    if (!newBorderIds.has(openBorders[j].id)) { result += '</span>'; openBorders.splice(j, 1); }
                }
                for (const b of seg.borders) {
                    if (!openBorders.some(ob => ob.id === b.id)) {
                        result += `<span class="styled-text ${b.type}" style="border-color:${b.color}" data-style-id="${b.id}">`;
                        openBorders.push(b);
                    }
                }
                result += seg.styles.length ? this.buildStyledSpan(seg.styles, seg.text) : this.escapeHtml(seg.text);
            }
            for (let j = openBorders.length - 1; j >= 0; j--) result += '</span>';
            iconStyles.filter(s => s.startOffset >= text.length).forEach(s => result += this._iconHtml(s));
            para.innerHTML = result;
            if (calloutStyles.length) {
                const cs = calloutStyles[calloutStyles.length - 1];
                para.classList.add('callout-block');
                para.style.borderColor = cs.color;
                if (cs.bgColor) para.style.backgroundColor = cs.bgColor;
            }
            if (quoteStyles.length) {
                const qs = quoteStyles[quoteStyles.length - 1];
                para.classList.add(`quote-${qs.quoteStyle}`);
            }
            if (listStyles.length) {
                const ls = listStyles[listStyles.length - 1];
                para.classList.add(`list-${ls.listStyle}`);
                if (ls.listStyle === 'numbered' && ls.restart) para.style.counterReset = 'list-num 0';
            }
            if (codeStyles.length) {
                const cds = codeStyles[codeStyles.length - 1];
                para.classList.add(`code-${cds.bgStyle}`);
                para.dataset.codeLang = cds.language;
            }
        }

        this.styles.filter(s => s.type === 'divider').forEach(d => {
            const para = this.documentContent.querySelector(`p[data-para="${d.paraIndex}"]`);
            if (para) para.after(this.buildDividerElement(d));
        });
    }

    buildStyledSpan(styles, text) {
        const classes = ['styled-text', ...styles.map(s => s.type)];
        const inlineMap = { highlight: 'background-color', textcolor: 'color', border: 'border-color', circle: 'border-color', underline: 'text-decoration-color', wavyunderline: 'text-decoration-color', strikethrough: 'text-decoration-color', overline: 'text-decoration-color', fontsize: 'font-size', letterspacing: 'letter-spacing', dropcap: 'color' };
        const inline = styles.map(s => inlineMap[s.type] ? `${inlineMap[s.type]}:${s.color}` : null).filter(Boolean);
        const ids = styles.map(s => s.id).join(',');
        const styleAttr = inline.length ? ` style="${inline.join(';')}"` : '';
        return `<span class="${classes.join(' ')}" data-style-id="${ids}"${styleAttr}>${this.escapeHtml(text)}</span>`;
    }

    updateStylesList() {
        const count = this.styles.length;
        this.styleCount.textContent = count;
        if (!count) {
            this.stylesList.innerHTML = `<div class="empty-styles"><p>${this.t('no_styles')}</p><small>${this.t('select_apply_styles')}</small></div>`;
            return;
        }
        const fontIcon = 'Aa';
        const linkIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
        const divIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></svg>';
        const quoteIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><text x="1" y="12" font-size="14" font-family="Georgia,serif">&#8220;</text><text x="13" y="12" font-size="14" font-family="Georgia,serif">&#8221;</text></svg>';
        const listIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="9" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none"/></svg>';
        const codeIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
        const icons = { bold: '<strong>B</strong>', italic: '<em>I</em>', underline: '<u>U</u>', wavyunderline: '<span style="text-decoration:underline wavy">W</span>', strikethrough: '<s>S</s>', superscript: 'X²', subscript: 'X₂', highlight: '▮', textcolor: 'A', border: '□', circle: '○', serif: fontIcon, sansserif: fontIcon, mono: fontIcon, rounded: fontIcon, smallcaps: fontIcon, arial: fontIcon, courier: fontIcon, georgia: fontIcon, helvetica: fontIcon, times: fontIcon, trebuchet: fontIcon, verdana: fontIcon, comicsans: fontIcon, cursivefont: fontIcon, bongothic: fontIcon, nanumgothic: fontIcon, bonmyeongjo: fontIcon, nanummyeongjo: fontIcon, nanumbarungothic: fontIcon, nanumsquare: fontIcon, maruburi: fontIcon, gungseo: fontIcon, fontsize: 'Tt', inlineicon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>', letterspacing: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="1" y="14" font-size="12" fill="currentColor" stroke="none">A</text><text x="15" y="14" font-size="12" fill="currentColor" stroke="none">V</text><line x1="2" y1="20" x2="22" y2="20"/><polyline points="5 22 2 20 5 18"/><polyline points="19 22 22 20 19 18"/></svg>', overline: 'O̅', callout: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="3"/><text x="12" y="16" font-size="13" font-weight="600" fill="currentColor" stroke="none" text-anchor="middle">T</text></svg>', dropcap: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="1" y="17" font-size="20" font-weight="bold" fill="currentColor" stroke="none">A</text><line x1="15" y1="5" x2="23" y2="5"/><line x1="15" y1="10" x2="23" y2="10"/><line x1="15" y1="15" x2="23" y2="15"/><line x1="1" y1="22" x2="23" y2="22"/></svg>', link: linkIcon, divider: divIcon, quote: quoteIcon, list: listIcon, code: codeIcon };
        const noColorIcon = ['fontsize', 'inlineicon', 'letterspacing', 'dropcap', 'link', 'divider', 'quote', 'list', 'code', 'serif', 'arial', 'courier', 'georgia', 'helvetica', 'times', 'trebuchet', 'verdana', 'comicsans', 'cursivefont', 'bongothic', 'nanumgothic', 'bonmyeongjo', 'nanummyeongjo', 'nanumbarungothic', 'nanumsquare', 'maruburi', 'gungseo', 'sansserif', 'mono', 'rounded', 'smallcaps'];
        const typeOrder = [
            'bold', 'italic', 'underline', 'overline', 'wavyunderline', 'strikethrough', 'link',
            'superscript', 'subscript', 'fontsize',
            'serif', 'sansserif', 'mono', 'rounded', 'smallcaps',
            'arial', 'courier', 'georgia', 'helvetica', 'times', 'trebuchet', 'verdana', 'comicsans', 'cursivefont',
            'bongothic', 'nanumgothic', 'bonmyeongjo', 'nanummyeongjo', 'nanumbarungothic', 'nanumsquare', 'maruburi', 'gungseo',
            'highlight', 'textcolor', 'border', 'circle', 'letterspacing', 'dropcap', 'callout', 'quote', 'list', 'code', 'inlineicon', 'divider'
        ];
        const blockPreviews = {
            divider: s => `— ${this.TYPE_LABELS['div_' + s.dividerType] || s.dividerType}`,
            quote: s => `" ${this.TYPE_LABELS['quote_' + s.quoteStyle] || s.quoteStyle} "`,
            list: s => `• ${this.TYPE_LABELS['list_' + s.listStyle] || s.listStyle}`,
            code: s => `&lt;/&gt; ${s.language} &middot; ${this.TYPE_LABELS['code_' + s.bgStyle] || s.bgStyle}`,
        };
        const renderItem = s => {
            let preview;
            if (blockPreviews[s.type]) {
                preview = blockPreviews[s.type](s);
            } else {
                const detail = (s.type === 'fontsize' || s.type === 'letterspacing') ? ` <span class="style-item-param">(${s.color})</span>` : '';
                preview = `"${s.text.substring(0, 30)}${s.text.length > 30 ? '...' : ''}"${detail}`;
            }
            return `<div class="style-item" data-id="${s.id}">
                <div class="style-details"><div class="style-preview">${preview}</div></div>
                <button class="style-delete" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            </div>`;
        };
        const typeCounts = {};
        this.styles.forEach(s => typeCounts[s.type] = (typeCounts[s.type] || 0) + 1);
        const frequent = Object.entries(typeCounts).filter(([, c]) => c >= 5).sort((a, b) => b[1] - a[1]);
        let html = '';
        if (frequent.length) {
            html += `<div class="frequent-section"><div class="frequent-header">${this.t('frequently_used')}</div><div class="frequent-tags">`;
            html += frequent.map(([type, cnt]) => {
                const label = this.TYPE_LABELS[type] || type;
                return `<span class="frequent-tag" data-tool="${type}" title="Click to apply"><span class="frequent-tag-icon">${icons[type] || '•'}</span>${label}<span class="frequent-tag-count">${cnt}</span></span>`;
            }).join('');
            html += '</div></div>';
        }
        const typeMap = new Map();
        this.styles.forEach(s => {
            if (!typeMap.has(s.type)) typeMap.set(s.type, []);
            typeMap.get(s.type).push(s);
        });
        const sortedTypes = [...typeMap.keys()].sort((a, b) => {
            const ia = typeOrder.indexOf(a);
            const ib = typeOrder.indexOf(b);
            return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
        });
        sortedTypes.forEach(type => {
            const items = typeMap.get(type);
            const isExpanded = this.expandedTypeGroups.has(type);
            const label = this.TYPE_LABELS[type] || type;
            const icon = icons[type] || '•';
            const iconStyle = noColorIcon.includes(type) ? '' : ` style="color:${items[0].color}"`;
            const chevron = `<svg class="type-group-chevron${isExpanded ? ' expanded' : ''}" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;
            html += `<div class="style-type-group" data-type="${type}">`;
            html += `<div class="style-type-group-header" data-type="${type}">`;
            html += `<div class="style-type-group-icon"${iconStyle}>${icon}</div>`;
            html += `<span class="style-type-group-label">${label}</span>`;
            html += `<span class="style-type-group-count">${items.length}</span>`;
            html += chevron;
            html += `</div>`;
            if (isExpanded) {
                html += `<div class="style-type-group-items">`;
                html += items.map(renderItem).join('');
                html += `</div>`;
            }
            html += `</div>`;
        });
        const scrollPos = this.stylesList.scrollTop;
        this.stylesList.innerHTML = html;
        this.stylesList.scrollTop = scrollPos;
        this.stylesList.querySelectorAll('.style-type-group-header').forEach(header => {
            header.addEventListener('click', () => {
                const type = header.dataset.type;
                if (this.expandedTypeGroups.has(type)) {
                    this.expandedTypeGroups.delete(type);
                } else {
                    this.expandedTypeGroups.add(type);
                }
                this.updateStylesList();
            });
        });
        this.stylesList.querySelectorAll('.style-delete').forEach(btn => {
            btn.addEventListener('click', e => { e.stopPropagation(); this.deleteStyle(e.currentTarget.closest('.style-item').dataset.id); });
        });
        this.stylesList.querySelectorAll('.frequent-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                if (this.savedSelection) this.applyToolToSelection(tag.dataset.tool);
            });
        });
    }

    deleteStyle(id) {
        const index = this.styles.findIndex(s => s.id === id);
        if (index === -1) return;
        const style = this.styles[index];
        const duplicates = this.styles.filter(s => s.id !== id && s.type === style.type && s.text === style.text);
        if (duplicates.length) {
            this.promptRemoveAll(style, duplicates);
        } else {
            this._doDelete(id);
        }
    }

    _doDelete(id) {
        const index = this.styles.findIndex(s => s.id === id);
        if (index === -1) return;
        const style = this.styles[index];
        this._pushHistory({ action: 'delete', style });
        this.styles.splice(index, 1);
        this.logAction('delete', style);
        this._refreshViews();
    }

    promptRemoveAll(style, duplicates) {
        const all = [style, ...duplicates];
        const el = this.documentContent.querySelector(`[data-style-id*="${style.id}"]`);
        const trunc = style.text.length > 15 ? style.text.substring(0, 15) + '...' : style.text;
        const typeName = this.TYPE_LABELS[style.type] || style.type;
        this.showActionToast(
            `${all.length} "${trunc}" with ${typeName} found — remove all?`,
            [
                { label: this.t('this_only'), primary: false, onClick: () => this._doDelete(style.id) },
                { label: `${this.t('remove_all')} (${all.length})`, primary: true, onClick: () => this._doBatchDelete(all) }
            ],
            8000, el ? el.getBoundingClientRect() : null);
    }

    _doBatchDelete(styles) {
        const removed = [];
        styles.forEach(s => { const idx = this.styles.findIndex(st => st.id === s.id); if (idx !== -1) { removed.push(this.styles[idx]); this.styles.splice(idx, 1); this.logAction('delete', s); } });
        if (!removed.length) return;
        this._pushHistory({ action: 'batch_delete', styles: removed });
        this._refreshViews();
        this.showToast(this.t('removed_styles', removed.length, removed.length > 1 ? 's' : ''), 'success');
    }

    _removeById(id) { const idx = this.styles.findIndex(s => s.id === id); if (idx !== -1) this.styles.splice(idx, 1); }

    undo() {
        if (!this.history.length) return;
        const last = this.history.pop();
        const { action } = last;
        if (action === 'add') { this._removeById(last.style.id); if (last.replaced) this.styles.push(last.replaced); }
        else if (action === 'delete') this.styles.push(last.style);
        else if (action === 'clear') this.styles = last.styles;
        else if (action === 'batch_add') last.styles.forEach(s => this._removeById(s.id));
        else if (action === 'batch_delete') last.styles.forEach(s => this.styles.push(s));
        else if (action === 'quote_split') { this.content = last.before.content; this.styles = last.before.styles; }
        else if (action === 'list_split') { this.content = last.before.content; this.styles = last.before.styles; }
        else if (action === 'code_split') { this.content = last.before.content; this.styles = last.before.styles; }
        this.redoStack.push(last);
        this._refreshViews();
        this.undoBtn.disabled = !this.history.length;
        this.redoBtn.disabled = false;
    }

    redo() {
        if (!this.redoStack.length) return;
        const last = this.redoStack.pop();
        const { action } = last;
        if (action === 'add') { if (last.replaced) this._removeById(last.replaced.id); this.styles.push(last.style); }
        else if (action === 'delete') this._removeById(last.style.id);
        else if (action === 'clear') this.styles = [];
        else if (action === 'batch_add') last.styles.forEach(s => this.styles.push(s));
        else if (action === 'batch_delete') last.styles.forEach(s => this._removeById(s.id));
        else if (action === 'quote_split') { this.content = last.after.content; this.styles = last.after.styles; }
        else if (action === 'list_split') { this.content = last.after.content; this.styles = last.after.styles; }
        else if (action === 'code_split') { this.content = last.after.content; this.styles = last.after.styles; }
        this.history.push(last);
        this._refreshViews();
        this.undoBtn.disabled = false;
        this.redoBtn.disabled = !this.redoStack.length;
    }

    async clearAllStyles() {
        if (!this.styles.length) { this.showToast(this.t('no_styles_to_clear'), 'error'); return; }
        if (!confirm(this.t('confirm_clear'))) return;
        this._pushHistory({ action: 'clear', styles: [...this.styles] });
        const count = this.styles.length;
        this.styles = [];
        this.logAction('clear', null, count);
        this._refreshViews();
        this.showToast(this.t('all_cleared'), 'success');
    }

    async saveStyles() {
        if (!this.docId) { this.showToast(this.t('no_doc_loaded'), 'error'); return; }
        const post = body => fetch(`${this.apiBase}/document/${this.docId}/${body}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ styles: this.styles }) }).then(r => r.json());
        try {
            const data = await post('styles');
            if (!data.success) throw new Error(data.error);
            const exp = await post('export');
            if (!exp.success) throw new Error(exp.error);
            this.showToast(this.t('exported_downloading'), 'success');
            window.location.href = `${this.apiBase}/document/${this.docId}/download`;
        } catch (error) {
            console.error('Save error:', error);
            this.showToast(this.t('save_failed') + error.message, 'error');
        }
    }

    async logAction(action, style = null, stylesCleared = null) {
        if (!this.docId) return;
        const entry = { log_id: this._genId('log'), action, timestamp: new Date().toISOString(), style: style ? { id: style.id, type: style.type, text: style.text, color: style.color, paraIndex: style.paraIndex, startOffset: style.startOffset, endOffset: style.endOffset, ...(style.bgColor ? { bgColor: style.bgColor } : {}) } : null, styles_cleared: stylesCleared };
        try { await fetch(`${this.apiBase}/document/${this.docId}/log`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(entry) }); }
        catch (e) { console.error('Failed to log action:', e); }
    }

    handleKeyboard(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
        const mod = e.ctrlKey || e.metaKey;
        const shortcuts = { z: () => this.undo(), y: () => this.redo(), s: () => this.saveStyles(), b: () => this.selectTool('bold'), i: () => this.selectTool('italic'), u: () => this.selectTool('underline'), o: () => this.selectTool('overline') };
        if (mod && (e.key === '=' || e.key === '+')) { e.preventDefault(); this.setZoom(this.zoomLevel + this.ZOOM_STEP); return; }
        if (mod && e.key === '-') { e.preventDefault(); this.setZoom(this.zoomLevel - this.ZOOM_STEP); return; }
        if (mod && e.key === '0') { e.preventDefault(); this.setZoom(100); return; }
        if (mod && shortcuts[e.key]) { e.preventDefault(); shortcuts[e.key](); }
        else if (e.key === 'Escape') {
            if (this.pendingIconData) { this.exitIconPlacementMode(); return; }
            if (this.iconModal.style.display !== 'none') { this.closeIconModal(); return; }
            if (!this.langSelectOverlay.classList.contains('hidden')) { this.langSelectOverlay.classList.add('hidden'); return; }
            this._closeToolPopovers();
            this.hideFloatingToolbar();
            this._clearSelection();
        }
    }

    initColorBoards() {
        this.buildColorBoard(this.calloutBoardBorder, color => { this.calloutBorderColor = color; this._markBoardSelected(this.calloutBoardBorder, color); }, 'border');
        this.buildColorBoard(this.calloutBoardBg, color => { this.calloutBgColor = color; this._markBoardSelected(this.calloutBoardBg, color); }, 'bg');
        this.calloutBorderColor = '#000000';
        this.calloutBgColor = '#ffffff';
        this._markBoardSelected(this.calloutBoardBorder, '#000000');
        this._markBoardSelected(this.calloutBoardBg, '#ffffff');
    }

    _makeSwatch(color, onClick, category) {
        const s = document.createElement('div');
        s.className = 'color-board-swatch'; s.style.backgroundColor = color; s.title = color; s.dataset.color = color;
        s.addEventListener('click', () => { this._addRecentColor(color, category); onClick(color); });
        return s;
    }

    buildColorBoard(container, onClick, category = 'border') {
        container.innerHTML = '';
        this.COLOR_PALETTE.forEach(row => row.forEach(color => container.appendChild(this._makeSwatch(color, onClick, category))));
        const recentRow = document.createElement('div'); recentRow.className = 'color-board-recent'; recentRow.dataset.colorCategory = category;
        container.appendChild(recentRow); this._renderRecentRow(recentRow, onClick, category);
        const customBtn = document.createElement('div'); customBtn.className = 'color-board-custom'; customBtn.textContent = this.t('custom_color_btn');
        customBtn.addEventListener('click', () => {
            const savedTool = this._activeColorTool;
            const savedInstantId = this._instantStyleId;
            this.openCustomColorPicker(color => {
                this._activeColorTool = savedTool;
                this._instantStyleId = savedInstantId;
                this._addRecentColor(color, category);
                onClick(color);
            });
        });
        container.appendChild(customBtn);
    }

    _addRecentColor(color, category = 'border') {
        const c = color.toLowerCase();
        const list = this.recentColors[category] || (this.recentColors[category] = []);
        const idx = list.indexOf(c);
        if (idx !== -1) list.splice(idx, 1);
        list.unshift(c);
        if (list.length > this.RECENT_COLORS_MAX) list.length = this.RECENT_COLORS_MAX;
        document.querySelectorAll(`.color-board-recent[data-color-category="${category}"]`).forEach(row => { const board = row.closest('.color-board'); if (board?._boardOnClick) this._renderRecentRow(row, board._boardOnClick, category); });
    }

    _renderRecentRow(row, onClick, category = 'border') {
        const board = row.closest('.color-board'); if (board) board._boardOnClick = onClick;
        row.innerHTML = '';
        const list = this.recentColors[category] || [];
        if (!list.length) { row.style.display = 'none'; return; }
        row.style.display = '';
        const label = document.createElement('div'); label.className = 'color-board-recent-label'; label.textContent = this.t('recent');
        const swatches = document.createElement('div'); swatches.className = 'color-board-recent-swatches';
        list.forEach(color => swatches.appendChild(this._makeSwatch(color, onClick, category)));
        row.appendChild(label); row.appendChild(swatches);
    }

    _markBoardSelected(board, color) {
        if (!board) return;
        board.querySelectorAll('.color-board-swatch').forEach(s => s.classList.toggle('selected', s.dataset.color === color.toLowerCase()));
    }

    showSharedColorPopover(tool, anchorBtn) {
        if (!this.savedSelection) { this.showToast(this.t('select_text_first'), 'error'); return; }
        if (this._activeColorTool === tool && this.sharedColorPopover.classList.contains('visible')) {
            this.closeSharedColorPopover();
            return;
        }
        this._closeToolPopovers();
        this.closeFtPopovers();
        this._activeColorTool = tool;
        this._activeColorAnchor = anchorBtn;
        const category = this.TOOL_COLOR_MAP[tool] || 'border';
        this.sharedColorBoard.innerHTML = '';
        this.buildColorBoard(this.sharedColorBoard, color => this._applyColorFromSharedPopover(color), category);
        const currentColor = this.getColorForTool(tool);
        if (typeof currentColor === 'string' && currentColor.startsWith('#')) this._markBoardSelected(this.sharedColorBoard, currentColor);
        this.sharedColorPopover.classList.add('visible');
        this._positionSharedPopover(anchorBtn);
    }

    _positionSharedPopover(anchorBtn) {
        const popover = this.sharedColorPopover, popRect = popover.getBoundingClientRect();
        let left, top;
        const selRect = this.savedSelection && this.savedSelection.rect;
        if (this._instantStyleAnchor) {
            const r = this._instantStyleAnchor.getBoundingClientRect();
            left = r.right + 10;
            if (left + popRect.width > window.innerWidth - 8) left = r.left - popRect.width - 10;
            left = Math.max(8, left);
            top = Math.max(8, Math.min(r.top, window.innerHeight - popRect.height - 8));
        } else if (selRect && (this._activeColorTool === 'textcolor' || this._activeColorTool === 'highlight')) {
            left = selRect.right + 10;
            if (left + popRect.width > window.innerWidth - 8) left = selRect.left - popRect.width - 10;
            left = Math.max(8, left);
            top = Math.max(8, Math.min(selRect.top, window.innerHeight - popRect.height - 8));
        } else {
            const r = anchorBtn.getBoundingClientRect();
            left = r.left + r.width / 2 - popRect.width / 2;
            top = r.bottom + 4;
            if (top + popRect.height > window.innerHeight - 8) top = r.top - popRect.height - 4;
            left = Math.max(8, Math.min(left, window.innerWidth - popRect.width - 8));
        }
        popover.style.left = left + 'px';
        popover.style.top = top + 'px';
    }

    _applyColorFromSharedPopover(color) {
        const tool = this._activeColorTool;
        if (!tool) return;
        const cat = this.TOOL_COLOR_MAP[tool];
        if (cat === 'text') { this.textColor = color; if (this.textcolorIcon) this.textcolorIcon.style.color = color; }
        else if (cat === 'bg') { this.bgColor = color; if (this.highlightIcon) this.highlightIcon.style.background = color; }
        else this.borderColor = color;
        const ftH = this.floatingToolbar.querySelector('.ft-highlight-icon'), ftT = this.floatingToolbar.querySelector('.ft-textcolor-icon');
        if (ftH) ftH.style.background = this.bgColor;
        if (ftT) ftT.style.color = this.textColor;
        const instantId = this._instantStyleId; this._instantStyleId = null;
        this.closeSharedColorPopover();
        if (instantId) {
            const style = this.styles.find(s => s.id === instantId);
            if (style) { style.color = color; this._refreshViews(); }
            if (this.savedSelection) { this.restoreSelectionSpans(this.savedSelection.spans || [this.savedSelection]); }
            this._updateFloatingToolbarStyles();
            if (style) this.promptApplyToAll(style);
        } else { this.applyToolToSelection(tool); }
    }

    closeSharedColorPopover() {
        const wasVisible = this.sharedColorPopover.classList.contains('visible');
        this.sharedColorPopover.classList.remove('visible');
        this._activeColorTool = null;
        this._activeColorAnchor = null;
        if (this._instantStyleId && wasVisible) {
            const style = this.styles.find(s => s.id === this._instantStyleId);
            this._instantStyleId = null;
            if (this.savedSelection) { this.restoreSelectionSpans(this.savedSelection.spans || [this.savedSelection]); }
            this._updateFloatingToolbarStyles();
            if (style) this.promptApplyToAll(style);
        }
    }

    initCustomColorPicker() {
        const $ = id => document.getElementById(id);
        this._ccModal = $('customColorModal'); this._ccGradient = $('colorGradient'); this._ccHueStrip = $('colorHueStrip');
        this._ccHexInput = $('customHexInput'); this._ccR = $('customR'); this._ccG = $('customG'); this._ccB = $('customB');
        this._ccPreview = $('customColorPreview'); this._ccApplyBtn = $('customColorApply'); this._ccCancelBtn = $('customColorCancel');
        this._ccHue = 0; this._ccSat = 1; this._ccVal = 1; this._customOnSelect = null;
        this._drawHueStrip();
        this._drawGradient(0);
        this._setupCanvasDrag(this._ccGradient, e => this._pickGradient(e));
        this._setupCanvasDrag(this._ccHueStrip, e => this._pickHue(e));
        const hexRe = /^#[0-9a-fA-F]{6}$/;
        const setHsv = (r, g, b) => { const [h, s, v] = this._rgbToHsv(r, g, b); this._ccHue = h; this._ccSat = s; this._ccVal = v; this._drawGradient(h); };
        this._ccHexInput.addEventListener('input', () => {
            const hex = this._ccHexInput.value.trim();
            if (!hexRe.test(hex)) return;
            const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
            this._ccR.value = r; this._ccG.value = g; this._ccB.value = b;
            setHsv(r, g, b); this._ccPreview.style.backgroundColor = hex;
        });
        const onRgbChange = () => {
            const clamp = v => Math.min(255, Math.max(0, parseInt(v) || 0));
            const r = clamp(this._ccR.value), g = clamp(this._ccG.value), b = clamp(this._ccB.value);
            const hex = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
            this._ccHexInput.value = hex; setHsv(r, g, b); this._ccPreview.style.backgroundColor = hex;
        };
        [this._ccR, this._ccG, this._ccB].forEach(el => el.addEventListener('input', onRgbChange));
        this._ccApplyBtn.addEventListener('click', () => { const hex = this._ccHexInput.value.trim(); if (this._customOnSelect && hexRe.test(hex)) this._customOnSelect(hex); this.closeCustomColorPicker(); });
        this._ccCancelBtn.addEventListener('click', () => this.closeCustomColorPicker());
        this._ccModal.addEventListener('click', e => { if (e.target === this._ccModal) this.closeCustomColorPicker(); });
    }

    openCustomColorPicker(onSelect) {
        this._customOnSelect = onSelect;
        this.closeSharedColorPopover();
        this._closeToolPopovers();
        this._ccModal.classList.add('visible');
        this._drawHueStrip();
        this._drawGradient(this._ccHue);
        this._updateCustomColorFromHsv();
    }

    closeCustomColorPicker() {
        this._ccModal.classList.remove('visible');
        this._customOnSelect = null;
    }

    _setupCanvasDrag(canvas, onMove) {
        let dragging = false;
        canvas.addEventListener('mousedown', e => { dragging = true; onMove(e); });
        document.addEventListener('mousemove', e => { if (dragging) onMove(e); });
        document.addEventListener('mouseup', () => { dragging = false; });
    }

    _pickGradient(e) {
        const rect = this._ccGradient.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
        this._ccSat = x / rect.width;
        this._ccVal = 1 - y / rect.height;
        this._updateCustomColorFromHsv();
    }

    _pickHue(e) {
        const rect = this._ccHueStrip.getBoundingClientRect();
        const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
        this._ccHue = (y / rect.height) * 360;
        this._drawGradient(this._ccHue);
        this._updateCustomColorFromHsv();
    }

    _updateCustomColorFromHsv() {
        const [r, g, b] = this._hsvToRgb(this._ccHue, this._ccSat, this._ccVal);
        const hex = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
        this._ccR.value = r; this._ccG.value = g; this._ccB.value = b;
        this._ccHexInput.value = hex;
        this._ccPreview.style.backgroundColor = hex;
    }

    _drawGradient(hue) {
        const ctx = this._ccGradient.getContext('2d'), w = this._ccGradient.width, h = this._ccGradient.height;
        const [r, g, b] = this._hsvToRgb(hue, 1, 1);
        ctx.fillStyle = `rgb(${r},${g},${b})`; ctx.fillRect(0, 0, w, h);
        const wg = ctx.createLinearGradient(0, 0, w, 0); wg.addColorStop(0, '#fff'); wg.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = wg; ctx.fillRect(0, 0, w, h);
        const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, 'rgba(0,0,0,0)'); bg.addColorStop(1, '#000');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    }

    _drawHueStrip() {
        const ctx = this._ccHueStrip.getContext('2d');
        const w = this._ccHueStrip.width, h = this._ccHueStrip.height;
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        const stops = [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1];
        const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000'];
        stops.forEach((s, i) => grad.addColorStop(s, colors[i]));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
    }

    _hsvToRgb(h, s, v) {
        h = ((h % 360) + 360) % 360;
        const c = v * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = v - c;
        let r1, g1, b1;
        if (h < 60) { r1 = c; g1 = x; b1 = 0; }
        else if (h < 120) { r1 = x; g1 = c; b1 = 0; }
        else if (h < 180) { r1 = 0; g1 = c; b1 = x; }
        else if (h < 240) { r1 = 0; g1 = x; b1 = c; }
        else if (h < 300) { r1 = x; g1 = 0; b1 = c; }
        else { r1 = c; g1 = 0; b1 = x; }
        return [Math.round((r1 + m) * 255), Math.round((g1 + m) * 255), Math.round((b1 + m) * 255)];
    }

    _rgbToHsv(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
        let h = 0;
        if (d !== 0) {
            if (max === r) h = 60 * (((g - b) / d) % 6);
            else if (max === g) h = 60 * ((b - r) / d + 2);
            else h = 60 * ((r - g) / d + 4);
        }
        if (h < 0) h += 360;
        const s = max === 0 ? 0 : d / max;
        return [h, s, max];
    }

    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icon = type === 'success'
            ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
            : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
        toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
        this.toastContainer.appendChild(toast);
        setTimeout(() => { toast.style.animation = 'slideIn 0.2s ease reverse forwards'; setTimeout(() => toast.remove(), 200); }, 3000);
    }

    showActionToast(message, actions = [], duration = 8000, anchorRect = null, onDismiss = null) {
        [this.toastContainer.querySelector('.toast-action'), document.querySelector('.toast-action-anchored')].forEach(el => el?.remove());
        const toast = document.createElement('div');
        toast.className = 'toast toast-action';
        const icon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="13"/><circle cx="12" cy="16.5" r="0.5" fill="currentColor" stroke="none"/></svg>';
        const buttonsHtml = actions.map(a => `<button class="toast-action-btn ${a.primary ? 'toast-action-btn-primary' : ''}">${a.label}</button>`).join('');
        toast.innerHTML = `<div class="toast-header"><span class="toast-icon">${icon}</span><span class="toast-message">${message}</span></div><div class="toast-actions">${buttonsHtml}</div>`;
        let dismissed = false;
        const dismiss = () => { if (dismissed) return; dismissed = true; if (onDismiss) onDismiss(); toast.style.animation = 'ftFadeIn 0.15s ease reverse forwards'; setTimeout(() => toast.remove(), 200); };
        toast.querySelectorAll('.toast-action-btn').forEach((btn, i) => {
            btn.addEventListener('click', () => { if (actions[i].onClick) actions[i].onClick(); dismiss(); });
        });
        if (anchorRect) {
            toast.classList.add('toast-action-anchored');
            Object.assign(toast.style, { position: 'fixed', zIndex: '1001', animation: 'ftFadeIn 0.15s ease' });
            document.body.appendChild(toast);
            const r = toast.getBoundingClientRect();
            let left = anchorRect.left, top = anchorRect.bottom + 10;
            if (top + r.height > window.innerHeight - 16) top = anchorRect.top - r.height - 10;
            toast.style.left = Math.max(8, Math.min(left, window.innerWidth - r.width - 8)) + 'px';
            toast.style.top = Math.max(8, Math.min(top, window.innerHeight - r.height - 8)) + 'px';
        } else {
            this.toastContainer.appendChild(toast);
        }
        setTimeout(dismiss, duration);
    }

    findOccurrences(text, excludeParaIndex, excludeStart, excludeEnd) {
        const matches = [];
        if (!text || text.length <= 1) return matches;
        for (let i = 0; i < this.content.length; i++) {
            const paraText = this.content[i].text;
            let searchFrom = 0;
            while (true) {
                const idx = paraText.indexOf(text, searchFrom);
                if (idx === -1) break;
                if (!(i === excludeParaIndex && idx === excludeStart && idx + text.length === excludeEnd)) {
                    matches.push({ paraIndex: i, startOffset: idx, endOffset: idx + text.length });
                }
                searchFrom = idx + 1;
            }
        }
        return matches;
    }

    promptApplyToAll(style) {
        if (!style.text || style.text.length <= 1 || style.type === 'inlineicon') return;
        const matches = this.findOccurrences(style.text, style.paraIndex, style.startOffset, style.endOffset);
        if (!matches.length) return;
        const el = this.documentContent.querySelector(`[data-style-id*="${style.id}"]`);
        const trunc = style.text.length > 15 ? style.text.substring(0, 15) + '...' : style.text;
        const typeName = this.TYPE_LABELS[style.type] || style.type;
        this._addOccurrencePreview(matches);
        const clearPreview = () => this._removeOccurrencePreview();
        this.showActionToast(
            this.t('found_more', matches.length, trunc, typeName),
            [
                { label: this.t('skip'), primary: false, onClick: clearPreview },
                { label: `${this.t('apply_to_all')} (${matches.length})`, primary: true, onClick: () => { clearPreview(); this.applyStyleToAllOccurrences(style, matches); } }
            ],
            8000, el ? el.getBoundingClientRect() : null, clearPreview);
    }

    _addOccurrencePreview(matches) {
        this._removeOccurrencePreview();
        for (const m of matches) {
            const para = this.documentContent.querySelector(`p[data-para="${m.paraIndex}"]`);
            if (!para) continue;
            const walker = document.createTreeWalker(para, NodeFilter.SHOW_TEXT);
            let charCount = 0;
            const ranges = [];
            while (walker.nextNode()) {
                const node = walker.currentNode;
                const nodeStart = charCount;
                const nodeEnd = charCount + node.length;
                if (nodeEnd > m.startOffset && nodeStart < m.endOffset) {
                    const range = document.createRange();
                    range.setStart(node, Math.max(0, m.startOffset - nodeStart));
                    range.setEnd(node, Math.min(node.length, m.endOffset - nodeStart));
                    ranges.push(range);
                }
                charCount = nodeEnd;
            }
            for (const range of ranges) {
                const wrapper = document.createElement('span');
                wrapper.className = 'occurrence-preview';
                range.surroundContents(wrapper);
            }
        }
    }

    _removeOccurrencePreview() {
        this.documentContent.querySelectorAll('.occurrence-preview').forEach(el => {
            const parent = el.parentNode;
            while (el.firstChild) parent.insertBefore(el.firstChild, el);
            el.remove();
            parent.normalize();
        });
    }

    applyStyleToAllOccurrences(originalStyle, matches) {
        const newStyles = matches.map(m => ({ id: this._genId(), type: originalStyle.type, text: originalStyle.text, color: originalStyle.color, paraIndex: m.paraIndex, startOffset: m.startOffset, endOffset: m.endOffset, created_at: new Date().toISOString(), ...(originalStyle.bgColor ? { bgColor: originalStyle.bgColor } : {}) }));
        this._pushHistory({ action: 'batch_add', styles: newStyles });
        newStyles.forEach(s => { this.styles.push(s); this.logAction('add', s); });
        this._refreshViews();
        const typeName = this.TYPE_LABELS[originalStyle.type] || originalStyle.type;
        this.showToast(this.t('applied_to_occurrences', typeName, newStyles.length, newStyles.length > 1 ? 's' : ''), 'success');
    }
}

document.addEventListener('DOMContentLoaded', () => { window.docTypography = new DocumentTypography(); });
