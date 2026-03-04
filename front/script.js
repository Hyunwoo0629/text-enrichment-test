class DocumentTypography {
    constructor() {
        this.docId = null;
        this.content = [];
        this.styles = [];
        this.history = [];
        this.redoStack = [];
        this.currentTool = null;
        this.savedSelection = null;
        this.pendingIconData = null;
        this.textColor = '#E53935';
        this.bgColor = '#FFEB3B';
        this.borderColor = '#000000';
        this.fontSize = '16px';
        this.letterSpacing = '0px';
        this.zoomLevel = 100;
        this.ZOOM_MIN = 25;
        this.ZOOM_MAX = 200;
        this.ZOOM_STEP = 10;
        this.apiBase = '/api';
        this.recentColors = [];
        this.RECENT_COLORS_MAX = 10;
        this.TYPE_LABELS = { fontsize: 'font size', inlineicon: 'inline icon', letterspacing: 'letter spacing', callout: 'callout', dropcap: 'drop cap', wavyunderline: 'wavy underline', smallcaps: 'small caps', sansserif: 'sans-serif', textcolor: 'text color', bold: 'Bold', italic: 'Italic', underline: 'Underline', strikethrough: 'Strikethrough', highlight: 'Highlight', border: 'Border', circle: 'Circle', mono: 'Monospace', rounded: 'Rounded', superscript: 'Superscript', subscript: 'Subscript', overline: 'Overline' };
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

    _genId(prefix = 'style') { return prefix + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 11); }
    _pushHistory(entry) { this.history.push(entry); this.redoStack = []; this.undoBtn.disabled = false; this.redoBtn.disabled = true; }
    _refreshViews() { this.applyAllStyles(); this.updateStylesList(); }
    _clearSelection() { this.savedSelection = null; this.resetStepperDefaults(); window.getSelection().removeAllRanges(); this.selectionHint.textContent = 'Select text to apply styles'; }

    initElements() {
        'fileInput uploadBtn uploadBtnAlt documentViewport documentContainer documentContent emptyState fileInfo selectionHint highlightIcon textcolorIcon fontSizeInput fontSizeMinus fontSizePlus letterSpacingInput letterSpacingMinus letterSpacingPlus letterSpacingBtn letterSpacingPopover undoBtn redoBtn clearBtn saveBtn iconUploadBtn iconModal iconModalClose iconDescription iconModalCancel iconModalSubmit iconModalSubmitText iconModalSpinner stylesList styleCount toastContainer fontFamilyBtn fontFamilyPopover scriptSizeBtn scriptSizePopover previewText previewBg previewBorder floatingToolbar ftFontFamilyPopover ftScriptSizePopover ftFontSizeInput ftFontSizeMinus ftFontSizePlus calloutBtn calloutPopover calloutApplyBtn calloutBoardBorder calloutBoardBg ftLetterSpacingPopover ftLetterSpacingInput ftLetterSpacingMinus ftLetterSpacingPlus zoomInBtn zoomOutBtn zoomResetBtn zoomLevelDisplay ftExistingStyles'.split(' ').forEach(id => this[id] = document.getElementById(id));
        this.toolButtons = document.querySelectorAll('.tool-btn');
        this.fontOptions = document.querySelectorAll('.font-option');
        this.scriptOptions = document.querySelectorAll('.script-option');
        this.colorPopovers = { text: document.getElementById('colorPopoverText'), bg: document.getElementById('colorPopoverBg'), border: document.getElementById('colorPopoverBorder') };
        this.colorTriggers = document.querySelectorAll('.color-trigger');
    }

    initEventListeners() {
        this.uploadBtn.addEventListener('click', () => this.fileInput.click());
        this.uploadBtnAlt.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', e => this.handleFileUpload(e));
        this.documentViewport.addEventListener('dragover', e => { e.preventDefault(); this.documentViewport.classList.add('drag-over'); });
        this.documentViewport.addEventListener('dragleave', e => { e.preventDefault(); this.documentViewport.classList.remove('drag-over'); });
        this.documentViewport.addEventListener('drop', e => this.handleDrop(e));
        this.toolButtons.forEach(btn => { if (btn.dataset.tool) btn.addEventListener('click', () => this.selectTool(btn.dataset.tool)); });
        this.colorTriggers.forEach(trigger => trigger.addEventListener('click', e => { e.stopPropagation(); this.toggleColorPopover(trigger.dataset.picker); }));
        document.addEventListener('click', e => { if (!e.target.closest('.color-picker-item')) this.closeAllColorPopovers(); });
        this._initStepperWithInput(this.fontSizeMinus, this.fontSizePlus, this.fontSizeInput, 1, 200, 'fontSize', 'fontsize', v => v > 0);
        this._initStepperWithInput(this.letterSpacingMinus, this.letterSpacingPlus, this.letterSpacingInput, 0, 100, 'letterSpacing', 'letterspacing', v => v >= 0);
        this.letterSpacingBtn.addEventListener('click', () => this.toggleLetterSpacingPopover());
        this.calloutBtn.addEventListener('click', () => this.toggleCalloutPopover());
        this.calloutApplyBtn.addEventListener('click', () => this.applyCallout());
        this.zoomInBtn.addEventListener('click', () => this.setZoom(this.zoomLevel + this.ZOOM_STEP));
        this.zoomOutBtn.addEventListener('click', () => this.setZoom(this.zoomLevel - this.ZOOM_STEP));
        this.zoomResetBtn.addEventListener('click', () => this.setZoom(100));
        this.documentViewport.addEventListener('wheel', e => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                this.setZoom(this.zoomLevel + (e.deltaY < 0 ? this.ZOOM_STEP : -this.ZOOM_STEP));
            }
        }, { passive: false });
        this.undoBtn.addEventListener('click', () => this.undo());
        this.redoBtn.addEventListener('click', () => this.redo());
        this.clearBtn.addEventListener('click', () => this.clearAllStyles());
        this.saveBtn.addEventListener('click', () => this.saveStyles());
        this.iconUploadBtn.addEventListener('click', () => {
            if (!this.docId) { this.showToast('Load a document first', 'error'); return; }
            this.openIconModal();
        });
        this.documentContent.addEventListener('click', e => this.handleIconPlacement(e));
        this.iconModalClose.addEventListener('click', () => this.closeIconModal());
        this.iconModalCancel.addEventListener('click', () => this.closeIconModal());
        this.iconModalSubmit.addEventListener('click', () => this.generateIcon());
        this.iconDescription.addEventListener('keydown', e => { if (e.key === 'Enter') this.generateIcon(); });
        this.iconModal.addEventListener('click', e => { if (e.target === this.iconModal) this.closeIconModal(); });
        this.fontFamilyBtn.addEventListener('click', () => this.toggleFontFamilyPopover());
        this.fontOptions.forEach(opt => opt.addEventListener('click', () => this.selectFontFamily(opt.dataset.font)));
        this.scriptSizeBtn.addEventListener('click', () => this.toggleScriptSizePopover());
        this.scriptOptions.forEach(opt => opt.addEventListener('click', () => this.selectScriptSize(opt.dataset.script)));
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
                this.closeFtPopovers();
                this.applyToolToSelection(tool);
                this.hideFloatingToolbar();
            });
        });
        this.floatingToolbar.querySelectorAll('[data-ft-font],[data-ft-script]').forEach(opt => {
            opt.addEventListener('mousedown', e => e.preventDefault());
            opt.addEventListener('click', e => {
                e.stopPropagation();
                this.applyToolToSelection(opt.dataset.ftFont || opt.dataset.ftScript);
                this.closeFtPopovers();
                this.hideFloatingToolbar();
            });
        });
        this.floatingToolbar.addEventListener('mousedown', e => e.preventDefault());

        this._initStepperWithInput(this.ftFontSizeMinus, this.ftFontSizePlus, this.ftFontSizeInput, 1, 200, 'fontSize', 'fontsize', v => v > 0, this.fontSizeInput);
        this._initStepperWithInput(this.ftLetterSpacingMinus, this.ftLetterSpacingPlus, this.ftLetterSpacingInput, 0, 100, 'letterSpacing', 'letterspacing', v => v >= 0, this.letterSpacingInput);
    }

    async handleFileUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const validTypes = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
        if (!validTypes.includes(file.type) && !file.name.endsWith('.docx')) {
            this.showToast('Please select a Word document (.docx)', 'error');
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
            this.showToast('Please drop a Word document (.docx)', 'error');
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
                this.showToast('Document uploaded successfully', 'success');
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Upload error:', error);
            this.showToast('Failed to upload: ' + error.message, 'error');
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
        const step = (dir) => {
            const val = Math.max(min, Math.min(max, parseInt(input.value) + dir));
            input.value = val;
            onChange(val);
        };
        const startHold = (dir) => {
            step(dir);
            let delay = setTimeout(() => {
                let interval = setInterval(() => step(dir), 60);
                const stop = () => { clearInterval(interval); document.removeEventListener('mouseup', stop); document.removeEventListener('mouseleave', stop); };
                document.addEventListener('mouseup', stop);
                document.addEventListener('mouseleave', stop);
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

    resetStepperDefaults() {
        this.fontSize = '16px';
        this.letterSpacing = '0px';
        this.fontSizeInput.value = 16;
        this.letterSpacingInput.value = 0;
        this.ftFontSizeInput.value = 16;
    }

    toggleLetterSpacingPopover() {
        this.letterSpacingPopover.classList.toggle('visible');
        this.letterSpacingBtn.classList.toggle('active');
        this.adjustFloatingToolbarForPopovers();
    }

    toggleCalloutPopover() {
        const isVisible = this.calloutPopover.classList.contains('visible');
        this._closeToolPopovers();
        if (!isVisible) {
            if (!this.savedSelection) { this.showToast('Select text first', 'error'); return; }
            this.calloutPopover.classList.add('visible');
            this.calloutBtn.classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    applyCallout() {
        if (!this.savedSelection) { this.showToast('Select text first', 'error'); return; }
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

    selectTool(tool) {
        if (!this.savedSelection) { this.showToast('Select text first', 'error'); return; }
        this._closeToolPopovers();
        this.hideFloatingToolbar();
        this.applyToolToSelection(tool);
    }

    toggleFontFamilyPopover() {
        const isVisible = this.fontFamilyPopover.classList.contains('visible');
        if (!isVisible && !this.savedSelection) { this.showToast('Select text first', 'error'); return; }
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
        if (!isVisible && !this.savedSelection) { this.showToast('Select text first', 'error'); return; }
        this._closeToolPopovers();
        if (!isVisible) { this.scriptSizePopover.classList.add('visible'); this.scriptSizeBtn.classList.add('active'); }
        this.adjustFloatingToolbarForPopovers();
    }

    selectScriptSize(type) {
        if (this.savedSelection) this.applyToolToSelection(type);
        this._closeToolPopovers();
        this.adjustFloatingToolbarForPopovers();
    }

    applyToolToSelection(tool, keepSelection = false) {
        if (!this.savedSelection) return;
        const { paraIndex, startOffset, endOffset, text } = this.savedSelection;
        const isDropcap = tool === 'dropcap';
        const sOff = isDropcap ? 0 : startOffset, eOff = isDropcap ? 1 : endOffset, sText = isDropcap ? text.charAt(0) : text;
        if (keepSelection) {
            const existing = this.styles.find(s => s.type === tool && s.paraIndex === paraIndex && s.startOffset === sOff && s.endOffset === eOff);
            if (existing) { existing.color = this.getColorForTool(tool); this._refreshViews(); this.restoreSelection(paraIndex, sOff, eOff); return; }
        }
        const style = { id: this._genId(), type: tool, text: sText, color: this.getColorForTool(tool), paraIndex, startOffset: sOff, endOffset: eOff, created_at: new Date().toISOString() };
        if (tool === 'callout') style.bgColor = this.bgColor;
        this._pushHistory({ action: 'add', style });
        this.styles.push(style);
        this.logAction('add', style);
        this._refreshViews();
        if (keepSelection) { this.restoreSelection(paraIndex, sOff, eOff); }
        else { this._clearSelection(); this.promptApplyToAll(style); }
    }

    restoreSelection(paraIndex, startOffset, endOffset) {
        const para = this.documentContent.querySelector(`p[data-para="${paraIndex}"]`);
        if (!para) return;
        const walker = document.createTreeWalker(para, NodeFilter.SHOW_TEXT, {
            acceptNode: n => n.parentElement?.closest('.inline-icon') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });
        let startNode = null, startNodeOffset = 0, endNode = null, endNodeOffset = 0;
        let current, total = 0;
        while ((current = walker.nextNode())) {
            const len = current.textContent.length;
            if (!startNode && total + len >= startOffset) { startNode = current; startNodeOffset = startOffset - total; }
            if (!endNode && total + len >= endOffset) { endNode = current; endNodeOffset = endOffset - total; break; }
            total += len;
        }
        if (startNode && endNode) {
            const range = document.createRange();
            range.setStart(startNode, startNodeOffset);
            range.setEnd(endNode, endNodeOffset);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
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
        this.iconModalSubmitText.textContent = loading ? 'Generating...' : 'Generate';
        this.iconModalSpinner.style.display = loading ? 'inline-block' : 'none';
    }

    async generateIcon() {
        const description = this.iconDescription.value.trim();
        if (!description) { this.showToast('Please describe the icon', 'error'); return; }

        this.setIconModalLoading(true);

        try {
            const response = await fetch(`${this.apiBase}/generate-icon`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description })
            });
            const data = await response.json();
            if (!data.success) throw new Error(data.error || 'Failed to generate icon');

            this.closeIconModal();
            this.pendingIconData = { iconData: data.iconData, iconName: data.iconName, svgCode: data.svgCode };
            this.enterIconPlacementMode();
        } catch (error) {
            console.error('Icon generation error:', error);
            this.showToast('Failed to generate icon: ' + error.message, 'error');
            this.setIconModalLoading(false);
        }
    }

    enterIconPlacementMode() {
        this.documentContent.classList.add('icon-placement-mode');
        this.selectionHint.textContent = 'Click anywhere in text to place icon';
        this.showToast('Click in the document to place the icon', 'success');
    }

    exitIconPlacementMode() {
        this.pendingIconData = null;
        this.documentContent.classList.remove('icon-placement-mode');
        this.selectionHint.textContent = 'Select text to apply styles';
    }

    handleIconPlacement(e) {
        if (!this.pendingIconData) return;
        e.preventDefault();
        e.stopPropagation();

        const range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (!range) { this.showToast('Could not determine position', 'error'); return; }

        const para = this.getParentParagraph(range.startContainer);
        if (!para) { this.showToast('Click inside the text', 'error'); return; }

        const paraIndex = parseInt(para.dataset.para);
        const offset = this.getTextOffset(para, range.startContainer, range.startOffset);

        const style = { id: this._genId(), type: 'inlineicon', text: this.pendingIconData.iconName, color: '#000000', paraIndex, startOffset: offset, endOffset: offset, ...this.pendingIconData, created_at: new Date().toISOString() };
        this._pushHistory({ action: 'add', style });
        this.styles.push(style);
        this.logAction('add', style);
        this._refreshViews();
        this.showToast(`Icon "${style.iconName}" placed`, 'success');
        this.exitIconPlacementMode();
        window.getSelection().removeAllRanges();
    }

    handleTextSelection(e) {
        if (!this.docId) return;
        if (this.pendingIconData) return;
        if (e.target.closest('.toolbar') || e.target.closest('.styles-panel') || e.target.closest('.app-header') || e.target.closest('.modal-overlay') || e.target.closest('.floating-toolbar')) return;

        const selection = window.getSelection();
        const range = selection.rangeCount ? selection.getRangeAt(0) : null;
        const selectedText = range ? selection.toString().trim() : '';
        if (!range || selection.isCollapsed || !selectedText || !this.documentContent.contains(range.commonAncestorContainer)) {
            this._clearSelection();
            this.hideFloatingToolbar();
            return;
        }

        const startNode = this.getParentParagraph(range.startContainer);
        if (!startNode) return;

        const paraIndex = parseInt(startNode.dataset.para);
        const startOffset = this.getTextOffset(startNode, range.startContainer, range.startOffset);
        const endOffset = this.getTextOffset(startNode, range.endContainer, range.endOffset);

        this.savedSelection = { paraIndex, startOffset, endOffset, text: selectedText };
        this.selectionHint.textContent = `"${selectedText.substring(0, 20)}${selectedText.length > 20 ? '...' : ''}" selected`;

        const fontSizeStyle = this.styles.find(s => s.type === 'fontsize' && s.paraIndex === paraIndex && s.startOffset <= startOffset && s.endOffset >= endOffset);
        if (fontSizeStyle) {
            const size = parseInt(fontSizeStyle.color);
            if (size > 0) {
                this.fontSize = fontSizeStyle.color;
                this.fontSizeInput.value = size;
            }
        }

        const letterSpacingStyle = this.styles.find(s => s.type === 'letterspacing' && s.paraIndex === paraIndex && s.startOffset <= startOffset && s.endOffset >= endOffset);
        if (letterSpacingStyle) {
            const spacing = parseInt(letterSpacingStyle.color);
            if (spacing >= 0) {
                this.letterSpacing = letterSpacingStyle.color;
                this.letterSpacingInput.value = spacing;
            }
        }

        const overlapping = this.styles.filter(s =>
            s.paraIndex === paraIndex && s.startOffset < endOffset && s.endOffset > startOffset
        );
        this.showFloatingToolbar(range, overlapping);
    }

    showFloatingToolbar(range, overlappingStyles = []) {
        const rect = range.getBoundingClientRect();
        const tb = this.floatingToolbar;
        const ftH = tb.querySelector('.ft-highlight-icon');
        const ftT = tb.querySelector('.ft-textcolor-icon');
        if (ftH) ftH.style.background = this.bgColor;
        if (ftT) ftT.style.color = this.textColor;
        this.ftFontSizeInput.value = parseInt(this.fontSize);
        this.ftLetterSpacingInput.value = parseInt(this.letterSpacing);
        this.renderExistingStyleTags(overlappingStyles);
        tb.classList.add('visible');
        tb.classList.remove('above');
        const tbRect = tb.getBoundingClientRect();
        let left = rect.left + rect.width / 2 - tbRect.width / 2;
        let top = rect.top - tbRect.height - 10;
        if (top < 4) top = rect.bottom + 10;
        left = Math.max(4, Math.min(left, window.innerWidth - tbRect.width - 4));
        this._ftNaturalPos = { left, top, width: tbRect.width, height: tbRect.height };
        tb.style.left = left + 'px';
        tb.style.top = top + 'px';
        tb.classList.toggle('above', top > rect.bottom);
    }

    renderExistingStyleTags(styles) {
        const container = this.ftExistingStyles;
        container.innerHTML = '';
        if (!styles.length) {
            container.classList.remove('has-styles');
            return;
        }
        styles.forEach(s => {
            const tag = document.createElement('span');
            tag.className = 'ft-style-tag';
            let label = this.TYPE_LABELS[s.type] || s.type;
            if (s.type === 'fontsize') label += ` (${parseInt(s.color)}px)`;
            else if (s.type === 'letterspacing') label += ` (${parseInt(s.color)}px)`;
            tag.innerHTML = `${label}<button class="ft-style-tag-remove" data-style-id="${s.id}" title="Remove">&times;</button>`;
            tag.querySelector('.ft-style-tag-remove').addEventListener('mousedown', e => e.preventDefault());
            tag.querySelector('.ft-style-tag-remove').addEventListener('click', e => {
                e.stopPropagation();
                this.deleteStyle(s.id);
                tag.remove();
                if (!container.children.length) container.classList.remove('has-styles');
            });
            container.appendChild(tag);
        });
        container.classList.add('has-styles');
    }

    adjustFloatingToolbarForPopovers() {
        const tb = this.floatingToolbar;
        if (!tb.classList.contains('visible') || !this._ftNaturalPos) return;
        const { left: natLeft, top, width, height } = this._ftNaturalPos;
        let left = natLeft;
        const openPopovers = document.querySelectorAll('.toolbar .tool-popover.visible, .toolbar .color-picker-popover.visible');
        openPopovers.forEach(popover => {
            const pr = popover.getBoundingClientRect();
            const tbBottom = top + height;
            if (top < pr.bottom && tbBottom > pr.top && left < pr.right && left + width > pr.left) {
                const shiftRight = pr.right + 8;
                const shiftLeft = pr.left - width - 8;
                if (shiftRight + width <= window.innerWidth - 4) {
                    left = shiftRight;
                } else if (shiftLeft >= 4) {
                    left = shiftLeft;
                }
            }
        });
        tb.style.left = left + 'px';
    }

    hideFloatingToolbar() {
        this.floatingToolbar.classList.remove('visible');
        this.closeFtPopovers();
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
    }

    _closeToolPopovers() {
        this.currentTool = null;
        this.toolButtons.forEach(btn => btn.classList.remove('active'));
        for (const [p, b] of [[this.fontFamilyPopover, this.fontFamilyBtn], [this.scriptSizePopover, this.scriptSizeBtn], [this.letterSpacingPopover, this.letterSpacingBtn], [this.calloutPopover, this.calloutBtn]]) {
            p.classList.remove('visible'); b.classList.remove('active');
        }
        this.fontOptions.forEach(o => o.classList.remove('active'));
    }

    getParentParagraph(node) {
        while (node && node !== this.documentContent) {
            if (node.nodeName === 'P' && node.dataset?.para !== undefined) return node;
            node = node.parentNode;
        }
        return null;
    }

    getTextOffset(paragraph, node, offset) {
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
        return { textcolor: this.textColor, dropcap: this.textColor, highlight: this.bgColor, fontsize: this.fontSize, letterspacing: this.letterSpacing }[tool] || this.borderColor;
    }

    applyAllStyles() {
        this.documentContent.innerHTML = this.content.map((p, i) => `<p data-para="${i}">${this.escapeHtml(p.text)}</p>`).join('');

        const stylesByPara = {};
        this.styles.forEach(s => (stylesByPara[s.paraIndex] ??= []).push(s));

        for (const paraIndex in stylesByPara) {
            const paraStyles = stylesByPara[paraIndex];
            const para = this.documentContent.querySelector(`p[data-para="${paraIndex}"]`);
            if (!para) continue;

            const text = para.textContent;
            const iconStyles = paraStyles.filter(s => s.type === 'inlineicon');
            const calloutStyles = paraStyles.filter(s => s.type === 'callout');
            const textStyles = paraStyles.filter(s => s.type !== 'inlineicon' && s.type !== 'callout');

            const bounds = [...new Set([0, text.length, ...textStyles.flatMap(s => [Math.max(0, Math.min(s.startOffset, text.length)), Math.max(0, Math.min(s.endOffset, text.length))]), ...iconStyles.map(s => Math.max(0, Math.min(s.startOffset, text.length)))])].sort((a, b) => a - b);

            let result = '';
            for (let i = 0; i < bounds.length - 1; i++) {
                const [start, end] = [bounds[i], bounds[i + 1]];
                iconStyles.filter(s => s.startOffset === start).forEach(s => result += this._iconHtml(s));
                const seg = text.substring(start, end);
                if (!seg) continue;
                const active = textStyles.filter(s => s.startOffset <= start && s.endOffset >= end);
                result += active.length ? this.buildStyledSpan(active, seg) : this.escapeHtml(seg);
            }
            iconStyles.filter(s => s.startOffset >= text.length).forEach(s => result += this._iconHtml(s));
            para.innerHTML = result;

            if (calloutStyles.length) {
                const cs = calloutStyles[calloutStyles.length - 1];
                para.classList.add('callout-block');
                para.style.borderColor = cs.color;
                if (cs.bgColor) para.style.backgroundColor = cs.bgColor;
            }
        }
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
            this.stylesList.innerHTML = '<div class="empty-styles"><p>No styles applied</p><small>Select text and apply styles</small></div>';
            return;
        }
        const icons = { bold: '<strong>B</strong>', italic: '<em>I</em>', underline: '<u>U</u>', wavyunderline: '<span style="text-decoration:underline wavy">W</span>', strikethrough: '<s>S</s>', superscript: 'X\u00B2', subscript: 'X\u2082', highlight: '▮', textcolor: 'A', border: '□', circle: '○', sansserif: 'Aa', mono: 'T_', rounded: 'Rr', smallcaps: 'Aᴀ', fontsize: 'Tt', inlineicon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>', letterspacing: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="1" y="14" font-size="12" fill="currentColor" stroke="none">A</text><text x="15" y="14" font-size="12" fill="currentColor" stroke="none">V</text><line x1="2" y1="20" x2="22" y2="20"/><polyline points="5 22 2 20 5 18"/><polyline points="19 22 22 20 19 18"/></svg>', overline: 'O̅', callout: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="3"/><text x="12" y="16" font-size="13" font-weight="600" fill="currentColor" stroke="none" text-anchor="middle">T</text></svg>', dropcap: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="1" y="17" font-size="20" font-weight="bold" fill="currentColor" stroke="none">A</text><line x1="15" y1="5" x2="23" y2="5"/><line x1="15" y1="10" x2="23" y2="10"/><line x1="15" y1="15" x2="23" y2="15"/><line x1="1" y1="22" x2="23" y2="22"/></svg>' };
        const noColorIcon = ['fontsize', 'inlineicon', 'letterspacing'];
        const categories = [
            ['Text Style', ['bold', 'italic', 'underline', 'overline', 'wavyunderline', 'strikethrough', 'superscript', 'subscript', 'sansserif', 'mono', 'rounded', 'smallcaps', 'fontsize']],
            ['Color', ['highlight', 'textcolor']],
            ['Border', ['border', 'circle']],
            ['Layout', ['letterspacing', 'dropcap']],
            ['Insert', ['callout', 'inlineicon']]
        ];
        const renderItem = s => {
            const iconStyle = noColorIcon.includes(s.type) ? '' : ` style="color:${s.color}"`;
            const displayType = s.type === 'fontsize' ? `font size (${s.color})` : s.type === 'letterspacing' ? `letter spacing (${s.color})` : (this.TYPE_LABELS[s.type] || s.type);
            return `<div class="style-item" data-id="${s.id}">
                <div class="style-icon"${iconStyle}>${icons[s.type] || '•'}</div>
                <div class="style-details">
                    <div class="style-type">${displayType}</div>
                    <div class="style-preview">"${s.text.substring(0, 20)}${s.text.length > 20 ? '...' : ''}"</div>
                </div>
                <button class="style-delete" title="Delete">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>`;
        };

        // Frequently used techniques (5+ uses)
        const typeCounts = {};
        this.styles.forEach(s => typeCounts[s.type] = (typeCounts[s.type] || 0) + 1);
        const frequent = Object.entries(typeCounts).filter(([, c]) => c >= 5).sort((a, b) => b[1] - a[1]);
        let html = '';
        if (frequent.length) {
            html += '<div class="frequent-section"><div class="frequent-header">Frequently Used</div><div class="frequent-tags">';
            html += frequent.map(([type, cnt]) => {
                const label = this.TYPE_LABELS[type] || type;
                return `<span class="frequent-tag" data-tool="${type}" title="Click to apply"><span class="frequent-tag-icon">${icons[type] || '•'}</span>${label}<span class="frequent-tag-count">${cnt}</span></span>`;
            }).join('');
            html += '</div></div>';
        }

        // Categorized styles
        categories.forEach(([catName, types]) => {
            const catStyles = this.styles.filter(s => types.includes(s.type));
            if (!catStyles.length) return;
            html += `<div class="style-category"><div class="style-category-header">${catName}</div>`;
            html += catStyles.map(renderItem).join('');
            html += '</div>';
        });

        this.stylesList.innerHTML = html;
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
        const truncated = style.text.length > 15 ? style.text.substring(0, 15) + '...' : style.text;
        const typeLabel = this.TYPE_LABELS[style.type] || style.type;
        this.showActionToast(
            `${all.length} "${truncated}" with ${typeLabel} found — remove all?`,
            [
                { label: 'This only', primary: false, onClick: () => this._doDelete(style.id) },
                { label: `Remove all (${all.length})`, primary: true, onClick: () => this._doBatchDelete(all) }
            ]
        );
    }

    _doBatchDelete(styles) {
        const removed = [];
        styles.forEach(s => { const idx = this.styles.findIndex(st => st.id === s.id); if (idx !== -1) { removed.push(this.styles[idx]); this.styles.splice(idx, 1); this.logAction('delete', s); } });
        if (!removed.length) return;
        this._pushHistory({ action: 'batch_delete', styles: removed });
        this._refreshViews();
        this.showToast(`Removed ${removed.length} style${removed.length > 1 ? 's' : ''}`, 'success');
    }

    _removeById(id) { const idx = this.styles.findIndex(s => s.id === id); if (idx !== -1) this.styles.splice(idx, 1); }

    undo() {
        if (!this.history.length) return;
        const last = this.history.pop();
        const { action } = last;
        if (action === 'add') this._removeById(last.style.id);
        else if (action === 'delete') this.styles.push(last.style);
        else if (action === 'clear') this.styles = last.styles;
        else if (action === 'batch_add') last.styles.forEach(s => this._removeById(s.id));
        else if (action === 'batch_delete') last.styles.forEach(s => this.styles.push(s));
        this.redoStack.push(last);
        this._refreshViews();
        this.undoBtn.disabled = !this.history.length;
        this.redoBtn.disabled = false;
    }

    redo() {
        if (!this.redoStack.length) return;
        const last = this.redoStack.pop();
        const { action } = last;
        if (action === 'add') this.styles.push(last.style);
        else if (action === 'delete') this._removeById(last.style.id);
        else if (action === 'clear') this.styles = [];
        else if (action === 'batch_add') last.styles.forEach(s => this.styles.push(s));
        else if (action === 'batch_delete') last.styles.forEach(s => this._removeById(s.id));
        this.history.push(last);
        this._refreshViews();
        this.undoBtn.disabled = false;
        this.redoBtn.disabled = !this.redoStack.length;
    }

    async clearAllStyles() {
        if (!this.styles.length) { this.showToast('No styles to clear', 'error'); return; }
        if (!confirm('Clear all styles?')) return;
        this._pushHistory({ action: 'clear', styles: [...this.styles] });
        const count = this.styles.length;
        this.styles = [];
        this.logAction('clear', null, count);
        this._refreshViews();
        this.showToast('All styles cleared', 'success');
    }

    async saveStyles() {
        if (!this.docId) { this.showToast('No document loaded', 'error'); return; }
        try {
            const res = await fetch(`${this.apiBase}/document/${this.docId}/styles`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ styles: this.styles })
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.error);

            const exportRes = await fetch(`${this.apiBase}/document/${this.docId}/export`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ styles: this.styles })
            });
            const exportData = await exportRes.json();
            if (exportData.success) {
                this.showToast('Image exported! Downloading...', 'success');
                window.location.href = `${this.apiBase}/document/${this.docId}/download`;
            } else {
                throw new Error(exportData.error);
            }
        } catch (error) {
            console.error('Save error:', error);
            this.showToast('Failed to save: ' + error.message, 'error');
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
        const shortcuts = { z: () => this.undo(), y: () => this.redo(), s: () => this.saveStyles(), b: () => this.selectTool('bold'), i: () => this.selectTool('italic'), u: () => this.selectTool('underline') };
        const keys = { h: 'highlight', t: 'textcolor', r: 'border', c: 'circle', o: 'overline', w: 'wavyunderline', d: 'dropcap' };

        if (mod && (e.key === '=' || e.key === '+')) { e.preventDefault(); this.setZoom(this.zoomLevel + this.ZOOM_STEP); return; }
        if (mod && e.key === '-') { e.preventDefault(); this.setZoom(this.zoomLevel - this.ZOOM_STEP); return; }
        if (mod && e.key === '0') { e.preventDefault(); this.setZoom(100); return; }
        if (mod && shortcuts[e.key]) { e.preventDefault(); shortcuts[e.key](); }
        else if (!mod && e.key?.toLowerCase() === 'q') this.toggleCalloutPopover();
        else if (!mod && keys[e.key?.toLowerCase()]) this.selectTool(keys[e.key.toLowerCase()]);
        else if (e.key === 'Escape') {
            if (this.pendingIconData) { this.exitIconPlacementMode(); return; }
            if (this.iconModal.style.display !== 'none') { this.closeIconModal(); return; }
            this._closeToolPopovers();
            this.closeAllColorPopovers();
            this.hideFloatingToolbar();
            this._clearSelection();
        }
    }

    initColorBoards() {
        document.querySelectorAll('.color-picker-popover .color-board').forEach(board => {
            const picker = board.dataset.picker;
            this.buildColorBoard(board, color => this.selectBoardColor(picker, color));
            const current = { text: this.textColor, bg: this.bgColor, border: this.borderColor }[picker];
            this._markBoardSelected(board, current);
        });
        this.buildColorBoard(this.calloutBoardBorder, color => { this.calloutBorderColor = color; this._markBoardSelected(this.calloutBoardBorder, color); });
        this.buildColorBoard(this.calloutBoardBg, color => { this.calloutBgColor = color; this._markBoardSelected(this.calloutBoardBg, color); });
        this.calloutBorderColor = '#000000';
        this.calloutBgColor = '#ffffff';
        this._markBoardSelected(this.calloutBoardBorder, '#000000');
        this._markBoardSelected(this.calloutBoardBg, '#ffffff');
    }

    _makeSwatch(color, onClick) {
        const s = document.createElement('div');
        s.className = 'color-board-swatch'; s.style.backgroundColor = color; s.title = color; s.dataset.color = color;
        s.addEventListener('click', () => { this._addRecentColor(color); onClick(color); });
        return s;
    }

    buildColorBoard(container, onClick) {
        container.innerHTML = '';
        this.COLOR_PALETTE.forEach(row => row.forEach(color => container.appendChild(this._makeSwatch(color, onClick))));
        const recentRow = document.createElement('div'); recentRow.className = 'color-board-recent';
        container.appendChild(recentRow); this._renderRecentRow(recentRow, onClick);
        const customBtn = document.createElement('div'); customBtn.className = 'color-board-custom'; customBtn.textContent = '+ Custom';
        customBtn.addEventListener('click', () => this.openCustomColorPicker(color => { this._addRecentColor(color); onClick(color); }));
        container.appendChild(customBtn);
    }

    _addRecentColor(color) {
        const c = color.toLowerCase();
        this.recentColors = this.recentColors.filter(rc => rc !== c);
        this.recentColors.unshift(c);
        if (this.recentColors.length > this.RECENT_COLORS_MAX) this.recentColors.length = this.RECENT_COLORS_MAX;
        document.querySelectorAll('.color-board-recent').forEach(row => { const board = row.closest('.color-board'); if (board?._boardOnClick) this._renderRecentRow(row, board._boardOnClick); });
    }

    _renderRecentRow(row, onClick) {
        const board = row.closest('.color-board'); if (board) board._boardOnClick = onClick;
        row.innerHTML = '';
        if (!this.recentColors.length) { row.style.display = 'none'; return; }
        row.style.display = '';
        const label = document.createElement('div'); label.className = 'color-board-recent-label'; label.textContent = 'Recent';
        const swatches = document.createElement('div'); swatches.className = 'color-board-recent-swatches';
        this.recentColors.forEach(color => swatches.appendChild(this._makeSwatch(color, onClick)));
        row.appendChild(label); row.appendChild(swatches);
    }

    _markBoardSelected(board, color) {
        if (!board) return;
        board.querySelectorAll('.color-board-swatch').forEach(s => s.classList.toggle('selected', s.dataset.color === color.toLowerCase()));
    }

    selectBoardColor(picker, color) {
        if (picker === 'text') { this.textColor = color; this.textcolorIcon.style.color = color; this.previewText.style.backgroundColor = color; }
        else if (picker === 'bg') { this.bgColor = color; this.highlightIcon.style.background = color; this.previewBg.style.backgroundColor = color; }
        else { this.borderColor = color; this.previewBorder.style.backgroundColor = color; }
        const board = this.colorPopovers[picker].querySelector('.color-board');
        this._markBoardSelected(board, color);
        this.closeAllColorPopovers();
    }

    toggleColorPopover(picker) {
        const popover = this.colorPopovers[picker];
        const isOpen = popover.classList.contains('visible');
        this.closeAllColorPopovers();
        if (!isOpen) {
            popover.classList.add('visible');
            popover.closest('.color-picker-item').querySelector('.color-trigger').classList.add('active');
        }
        this.adjustFloatingToolbarForPopovers();
    }

    closeAllColorPopovers() {
        Object.values(this.colorPopovers).forEach(p => p.classList.remove('visible'));
        this.colorTriggers.forEach(t => t.classList.remove('active'));
        this.adjustFloatingToolbarForPopovers();
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
        this.closeAllColorPopovers();
        this._closeToolPopovers();
        this._ccModal.classList.add('visible');
        // Initialize with current preview color
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

    showActionToast(message, actions = [], duration = 8000) {
        const existing = this.toastContainer.querySelector('.toast-action');
        if (existing) existing.remove();
        const toast = document.createElement('div');
        toast.className = 'toast toast-action';
        const icon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="13"/><circle cx="12" cy="16.5" r="0.5" fill="currentColor" stroke="none"/></svg>';
        const buttonsHtml = actions.map(a =>
            `<button class="toast-action-btn ${a.primary ? 'toast-action-btn-primary' : ''}">${a.label}</button>`
        ).join('');
        toast.innerHTML = `<div class="toast-header"><span class="toast-icon">${icon}</span><span class="toast-message">${message}</span></div><div class="toast-actions">${buttonsHtml}</div>`;
        let dismissed = false;
        const dismiss = () => {
            if (dismissed) return;
            dismissed = true;
            toast.style.animation = 'slideIn 0.2s ease reverse forwards';
            setTimeout(() => toast.remove(), 200);
        };
        toast.querySelectorAll('.toast-action-btn').forEach((btn, i) => {
            btn.addEventListener('click', () => { if (actions[i].onClick) actions[i].onClick(); dismiss(); });
        });
        this.toastContainer.appendChild(toast);
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
        if (!style.text || style.text.length <= 1) return;
        if (style.type === 'inlineicon') return;
        const matches = this.findOccurrences(style.text, style.paraIndex, style.startOffset, style.endOffset);
        if (!matches.length) return;
        const truncated = style.text.length > 15 ? style.text.substring(0, 15) + '...' : style.text;
        const typeLabel = this.TYPE_LABELS[style.type] || style.type;
        this.showActionToast(
            `Found ${matches.length} more "${truncated}" \u2014 apply ${typeLabel} to all?`,
            [
                { label: 'Skip', primary: false },
                { label: `Apply to all (${matches.length})`, primary: true, onClick: () => this.applyStyleToAllOccurrences(style, matches) }
            ]
        );
    }

    applyStyleToAllOccurrences(originalStyle, matches) {
        const newStyles = matches.map(m => ({ id: this._genId(), type: originalStyle.type, text: originalStyle.text, color: originalStyle.color, paraIndex: m.paraIndex, startOffset: m.startOffset, endOffset: m.endOffset, created_at: new Date().toISOString(), ...(originalStyle.bgColor ? { bgColor: originalStyle.bgColor } : {}) }));
        this._pushHistory({ action: 'batch_add', styles: newStyles });
        newStyles.forEach(s => { this.styles.push(s); this.logAction('add', s); });
        this._refreshViews();
        this.showToast(`Applied ${originalStyle.type} to ${newStyles.length} more occurrence${newStyles.length > 1 ? 's' : ''}`, 'success');
    }
}

document.addEventListener('DOMContentLoaded', () => { window.docTypography = new DocumentTypography(); });
