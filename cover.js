// cover.js - 斗罗大陆 · 魂师觉醒 封面模块
(function() {
    'use strict';

    const rootSelector = '[data-dlgithub-root="dlgh-cover"]';

    function getRoot() {
        return document.querySelector(rootSelector);
    }

    function render() {
        const root = getRoot();
        if (!root) return;

        // 移除loading状态
        root.dataset.state = '';

        // 注入样式
        const style = document.createElement('style');
        style.textContent = `
            [data-dlgithub-root="dlgh-cover"] {
                display: block;
                width: 100%;
                min-height: 420px;
                border-radius: 16px;
                overflow: hidden;
                position: relative;
                background: radial-gradient(ellipse at 50% 0%, #1c1308 0%, #0d0804 55%, #060302 100%);
                padding: 40px 24px 50px;
                text-align: center;
                border: 2px solid rgba(180, 130, 40, 0.25);
                box-shadow: 0 0 60px rgba(180, 130, 40, 0.08), inset 0 0 80px rgba(180, 130, 40, 0.03);
                font-family: system-ui, 'Microsoft YaHei', sans-serif;
                color: #e8dcc8;
                box-sizing: border-box;
                user-select: none;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-bg-particles {
                position: absolute;
                inset: 0;
                pointer-events: none;
                overflow: hidden;
                z-index: 0;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-bg-particles span {
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(240, 214, 138, 0.25);
                border-radius: 50%;
                animation: floatParticle 6s infinite alternate ease-in-out;
            }

            @keyframes floatParticle {
                0% { transform: translate(0, 0) scale(1); opacity: 0.15; }
                100% { transform: translate(var(--tx, 30px), var(--ty, -40px)) scale(1.6); opacity: 0.6; }
            }

            [data-dlgithub-root="dlgh-cover"] .cover-content {
                position: relative;
                z-index: 1;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-title {
                font-size: 2.2em;
                font-weight: 700;
                color: #dc3545;
                letter-spacing: 8px;
                text-shadow: 0 0 30px rgba(220, 50, 60, 0.35), 0 2px 12px rgba(0, 0, 0, 0.5);
                font-family: 'STKaiti', 'KaiTi', '楷体', serif;
                margin-bottom: 4px;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-title .gold {
                color: #f0d68a;
                text-shadow: 0 0 40px rgba(240, 214, 138, 0.25);
            }

            [data-dlgithub-root="dlgh-cover"] .cover-subtitle {
                font-size: 0.8em;
                color: #b5a080;
                letter-spacing: 10px;
                font-style: italic;
                opacity: 0.7;
                margin-bottom: 28px;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-awaken {
                font-size: 0.9em;
                color: #d4c5a0;
                line-height: 2.0;
                padding: 18px 16px;
                background: rgba(180, 130, 40, 0.05);
                border: 1px solid rgba(180, 130, 40, 0.1);
                border-radius: 10px;
                margin-bottom: 28px;
                max-width: 420px;
                margin-left: auto;
                margin-right: auto;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-awaken .hl {
                color: #f0d68a;
                font-weight: 600;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-btn {
                display: inline-block;
                padding: 14px 48px;
                background: linear-gradient(180deg, #c94045, #9b282d);
                color: #fff;
                border: 1px solid #d47050;
                border-radius: 10px;
                font-size: 1.05em;
                font-weight: 700;
                letter-spacing: 4px;
                cursor: pointer;
                transition: transform 0.15s, box-shadow 0.25s;
                box-shadow: 0 4px 24px rgba(180, 50, 55, 0.3);
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                font-family: inherit;
                touch-action: manipulation;
            }

            [data-dlgithub-root="dlgh-cover"] .cover-btn:hover {
                transform: scale(1.03);
                box-shadow: 0 6px 32px rgba(180, 50, 55, 0.45);
            }

            [data-dlgithub-root="dlgh-cover"] .cover-btn:active {
                transform: scale(0.95);
            }

            [data-dlgithub-root="dlgh-cover"] .cover-btn::after {
                content: ' ✦';
                font-size: 0.7em;
                opacity: 0.5;
            }

            [data-dlgithub-root="dlgh-cover"] .co
