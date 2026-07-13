// character-create.js - 斗罗大陆 · 魂师档案 角色创建模块
(function() {
    'use strict';

    const rootSelector = '[data-dlgithub-root="dlgh-character-create"]';

    function getRoot() {
        return document.querySelector(rootSelector);
    }

    // ===== 工具函数 =====
    function getVal(id) {
        const el = document.getElementById(id);
        return el ? (el.value || '').trim() : '';
    }

    function getLines(id) {
        return getVal(id).split('\n').map(s => s.trim()).filter(s => s !== '');
    }

    function getSel(id) {
        const el = document.getElementById(id);
        return el ? el.value : '';
    }

    function getNum(id) {
        const v = getVal(id);
        return v ? Number(v) : null;
    }

    function setVal(id, val) {
        const el = document.getElementById(id);
        if (!el) return;
        if (val === undefined || val === null) val = '';
        if (Array.isArray(val)) val = val.join('\n');
        el.value = val;
        // 触发input事件
        el.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // ===== 生成HTML界面 =====
    function render() {
        const root = getRoot();
        if (!root) return;

        root.dataset.state = '';
        root.style.display = 'block';
        root.style.width = '100%';
        root.style.padding = '0';
        root.style.background = 'transparent';
        root.style.fontFamily = 'system-ui, "Microsoft YaHei", sans-serif';
        root.style.color = '#e8dcc8';

        // 注入样式
        const style = document.createElement('style');
        style.textContent = `
            [data-dlgithub-root="dlgh-character-create"] {
                display: block;
                width: 100%;
                box-sizing: border-box;
            }

            [data-dlgithub-root="dlgh-character-create"] * {
                box-sizing: border-box;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-container {
                max-width: 540px;
                width: 100%;
                margin: 0 auto;
                padding: 20px 18px 30px;
                background: linear-gradient(170deg, #1c130a, #23180d 30%, #1a1008 60%, #140c05);
                border: 2px solid #7a5c2e;
                border-radius: 14px;
                box-shadow: 0 0 40px rgba(180, 130, 40, 0.12), 0 8px 32px rgba(0, 0, 0, 0.45), inset 0 0 20px rgba(120, 70, 20, 0.05);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-header {
                text-align: center;
                padding-bottom: 12px;
                border-bottom: 1px solid rgba(160, 110, 30, 0.15);
                margin-bottom: 16px;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-header h2 {
                color: #dc3545;
                font-size: 1.5em;
                font-weight: 700;
                letter-spacing: 6px;
                text-shadow: 0 0 18px rgba(220, 50, 60, 0.3);
                font-family: 'STKaiti', 'KaiTi', '楷体', serif;
                margin: 0 0 4px 0;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-header p {
                color: #b5a080;
                font-size: 0.7em;
                letter-spacing: 6px;
                opacity: 0.6;
                margin: 0;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-section {
                margin-bottom: 12px;
                border-radius: 8px;
                overflow: hidden;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-section summary {
                color: #f0d68a;
                font-size: 0.82em;
                font-weight: 500;
                padding: 8px 10px 8px 20px;
                border-bottom: 1px solid rgba(160, 110, 30, 0.1);
                cursor: pointer;
                user-select: none;
                display: flex;
                align-items: center;
                gap: 6px;
                list-style: none;
                min-height: 38px;
                background: rgba(180, 130, 40, 0.03);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-section summary::-webkit-details-marker {
                display: none;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-section summary .arrow {
                margin-left: auto;
                font-size: 0.6em;
                color: #b5a68a;
                transition: transform 0.25s ease;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-section[open] summary .arrow {
                transform: rotate(180deg);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-section .body {
                padding: 8px 4px 4px;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-section .body .inner {
                overflow: hidden;
            }

            [data-dlgithub-root="dlgh-character-create"] .fd {
                margin-bottom
