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
                margin-bottom: 8px;
            }

            [data-dlgithub-root="dlgh-character-create"] .fd label {
                display: block;
                margin-bottom: 2px;
                color: #e8dcc8;
                font-size: 0.72em;
                font-weight: 400;
                letter-spacing: 0.5px;
            }

            [data-dlgithub-root="dlgh-character-create"] .fd label sm {
                color: #7a6a50;
                font-size: 0.7em;
                margin-left: 4px;
            }

            [data-dlgithub-root="dlgh-character-create"] .rw {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
            }

            [data-dlgithub-root="dlgh-character-create"] .rw .fd {
                flex: 1;
                min-width: 70px;
            }

            [data-dlgithub-root="dlgh-character-create"] input,
            [data-dlgithub-root="dlgh-character-create"] textarea,
            [data-dlgithub-root="dlgh-character-create"] select {
                width: 100%;
                padding: 6px 10px;
                background: #1f150b;
                color: #e8dcc8;
                border: 1px solid #4a3418;
                border-radius: 6px;
                font-size: 0.8em;
                font-family: inherit;
                transition: border 0.3s, box-shadow 0.3s;
                box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.35);
                min-height: 36px;
                -webkit-appearance: none;
                appearance: none;
            }

            [data-dlgithub-root="dlgh-character-create"] input:focus,
            [data-dlgithub-root="dlgh-character-create"] textarea:focus,
            [data-dlgithub-root="dlgh-character-create"] select:focus {
                outline: none;
                border-color: #d4a745;
                box-shadow: 0 0 20px rgba(200, 150, 50, 0.12), inset 0 1px 6px rgba(200, 150, 40, 0.05);
                background: #261a0e;
            }

            [data-dlgithub-root="dlgh-character-create"] textarea {
                resize: vertical;
                min-height: 34px;
                line-height: 1.6;
            }

            [data-dlgithub-root="dlgh-character-create"] select {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%23d4a745'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 10px center;
                padding-right: 32px;
                cursor: pointer;
                font-size: 16px;
            }

            [data-dlgithub-root="dlgh-character-create"] select option {
                background: #1f150b;
                color: #e8dcc8;
            }

            [data-dlgithub-root="dlgh-character-create"] .ta {
                overflow: hidden;
                max-height: 0;
                opacity: 0;
                transition: max-height 0.35s ease, opacity 0.25s ease;
                margin-top: 0;
            }

            [data-dlgithub-root="dlgh-character-create"] .ta.ac {
                max-height: 220px;
                opacity: 1;
                margin-top: 6px;
            }

            [data-dlgithub-root="dlgh-character-create"] .ta .ib {
                background: rgba(180, 120, 30, 0.04);
                border: 1px dashed rgba(180, 130, 40, 0.15);
                border-radius: 6px;
                padding: 8px 10px;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-actions {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-top: 14px;
                padding-top: 14px;
                border-top: 1px solid rgba(160, 110, 30, 0.12);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-actions button {
                flex: 1;
                min-width: 80px;
                padding: 10px 16px;
                border-radius: 8px;
                border: 1px solid rgba(180, 130, 40, 0.2);
                background: rgba(255, 255, 255, 0.04);
                color: #c4b090;
                cursor: pointer;
                font-size: 0.78em;
                font-weight: 500;
                letter-spacing: 1px;
                transition: 0.2s;
                touch-action: manipulation;
                font-family: inherit;
                text-align: center;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-actions button:active {
                transform: scale(0.95);
                background: rgba(255, 255, 255, 0.06);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-actions .btn-primary {
                background: linear-gradient(180deg, #c94045, #9b282d);
                color: #fff;
                border-color: #d47050;
                box-shadow: 0 4px 20px rgba(180, 50, 55, 0.25);
                font-weight: 700;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-actions .btn-primary:active {
                background: linear-gradient(180deg, #b83a3f, #8a2227);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-msg {
                text-align: center;
                margin-top: 10px;
                color: #5cdb8b;
                font-weight: 500;
                font-size: 0.8em;
                display: none;
                padding: 6px 12px;
                border-radius: 6px;
                background: rgba(0, 0, 0, 0.25);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-msg.error {
                color: #f08080;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-msg.show {
                display: block;
                animation: msgFade 0.3s ease;
            }

            @keyframes msgFade {
                from { opacity: 0; transform: translateY(6px); }
                to { opacity: 1; transform: translateY(0); }
            }

            [data-dlgithub-root="dlgh-character-create"] .char-progress {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
                align-items: center;
                margin-bottom: 12px;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-progress .p {
                flex: 1;
                min-width: 60px;
                font-size: 0.7em;
                color: #b5a080;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-progress .p span {
                color: #f0d68a;
                font-weight: 600;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-progress .pb {
                width: 100%;
                height: 2px;
                background: rgba(255, 255, 255, 0.06);
                border-radius: 2px;
                overflow: hidden;
                margin-top: 2px;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-progress .pb div {
                height: 100%;
                border-radius: 2px;
                transition: width 0.5s ease;
                background: linear-gradient(90deg, #8b3a3a, #f0d68a);
            }

            [data-dlgithub-root="dlgh-character-create"] .char-dot {
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                margin-right: 6px;
                background: #4a3a28;
                transition: background 0.3s;
                flex-shrink: 0;
            }

            [data-dlgithub-root="dlgh-character-create"] .char-dot.filled {
                background: #f0d68a;
            }

            .hidden-helper {
                position: absolute !important;
                left: -9999px !important;
                top: -9999px !important;
                width: 1px !important;
                height: 1px !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }

            @media (max-width: 480px) {
                [data-dlgithub-root="dlgh-character-create"] .char-container {
                    padding: 14px 12px 20px;
                    border-radius: 10px;
                }
                [data-dlgithub-root="dlgh-character-create"] .char-header h2 {
                    font-size: 1.2em;
                    letter-spacing: 4px;
                }
                [data-dlgithub-root="dlgh-character-create"] .char-section summary {
                    font-size: 0.75em;
                    padding: 6px 8px 6px 16px;
                    min-height: 34px;
                }
                [data-dlgithub-root="dlgh-character-create"] .rw {
                    flex-direction: column;
                    gap: 4px;
                }
                [data-dlgithub-root="dlgh-character-create"] input,
                [data-dlgithub-root="dlgh-character-create"] textarea,
                [data-dlgithub-root="dlgh-character-create"] select {
                    font-size: 0.75em;
                    padding: 5px 8px;
                    min-height: 32px;
                }
                [data-dlgithub-root="dlgh-character-create"] .char-actions button {
                    font-size: 0.7em;
                    padding: 8px 12px;
                }
            }
        `;
        document.head.appendChild(style);

        // 构建HTML
        root.innerHTML = `
            <div class="char-container">
                <div class="char-header">
                    <h2>✦ 魂 师 档 案 ✦</h2>
                    <p>—— 斗罗大陆Ⅲ · 龙王传说 ——</p>
                </div>

                <div class="char-progress">
                    <div class="p">已填 <span id="charPct">0</span>/<span id="charTotal">39</span>
                        <div class="pb"><div id="charPbar" style="width:0%"></div></div>
                    </div>
                </div>

                <!-- 1. 基本信息 -->
                <details class="char-section" open>
                    <summary><span class="char-dot" id="dot_cn"></span> Ⅰ 刻下你的名字 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="rw"><div class="fd"><label>姓名</label><input type="text" id="cn" placeholder="你的名字"></div><div class="fd"><label>性别</label><select id="gd"><option value="男">男</option><option value="女">女</option><option value="其他">其他</option></select></div></div>
                        <div class="rw"><div class="fd"><label>年龄 <sm>(岁)</sm></label><input type="number" id="ag" min="6" max="200" placeholder="16"></div><div class="fd"><label>身高 <sm>(cm)</sm></label><input type="number" id="ht" min="80" max="280" placeholder="175"></div><div class="fd"><label>体重 <sm>(kg)</sm></label><input type="number" id="wt" min="20" max="200" placeholder="65"></div></div>
                    </div></div>
                </details>

                <!-- 2. 面容 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_hc"></span> Ⅱ 你的面容 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="rw"><div class="fd"><label>发色</label><input type="text" id="hc" placeholder="黑"></div><div class="fd"><label>瞳色</label><input type="text" id="ec" placeholder="深棕"></div></div>
                        <div class="fd"><label>面容与气质</label><textarea id="ff" rows="2" placeholder="五官端正…"></textarea></div>
                    </div></div>
                </details>

                <!-- 3. 武魂 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_msn"></span> Ⅲ 武魂 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="fd"><label>武魂名称</label><input type="text" id="msn" placeholder="如：蓝银草"></div>
                        <div class="fd"><label>武魂类型</label><select id="mst"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="双生武魂">双生武魂</option><option value="神级武魂">神级武魂</option></select></div>
                        <div class="ta" id="dsf"><div class="ib"><div class="rw"><div class="fd"><label>第二武魂名称</label><input type="text" id="sn2" placeholder="第二武魂"></div><div class="fd"><label>第二武魂类型</label><select id="st2"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="神级武魂">神级武魂</option></select></div></div></div></div>
                        <div class="rw"><div class="fd"><label>先天魂力</label><select id="isp"><option value="20级（神赐）">20级（神赐）</option><option value="10级（满魂力）">10级（满魂力）</option><option value="9级">9级</option><option value="8级">8级</option><option value="7级">7级</option><option value="6级">6级</option><option value="5级">5级</option><option value="4级">4级</option><option value="3级">3级</option><option value="2级">2级</option><option value="1级">1级</option><option value="0级（无魂力）">0级（无魂力）</option></select></div>
                        <div class="fd"><label>当前魂力 <sm>(级)</sm></label><input type="number" id="csr" min="0" max="200" placeholder="32"></div></div>
                        <div class="fd"><label>魂力等级称号</label><select id="soul_rank"><option value="">-- 请选择 --</option><option value="魂士">魂士</option><option value="魂师">魂师</option><option value="大魂师">大魂师</option><option value="魂尊">魂尊</option><option value="魂宗">魂宗</option><option value="魂王">魂王</option><option value="魂帝">魂帝</option><option value="魂圣">魂圣</option><option value="魂斗罗">魂斗罗</option><option value="封号斗罗">封号斗罗</option></select></div>
                    </div></div>
                </details>

                <!-- 4. 精神力 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_sp"></span> Ⅳ 精神之海 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="fd"><label>精神力境界</label><select id="sp"><option value="灵元境">灵元境</option><option value="灵通境">灵通境</option><option value="灵海境">灵海境</option><option value="灵渊境">灵渊境</option><option value="灵域境">灵域境</option><option value="神元境">神元境</option><option value="神王境">神王境</option><option value="未知/未测定">未知/未测定</option></select></div>
                    </div></div>
                </details>

                <!-- 5. 血脉 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_bl"></span> Ⅴ 血脉 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="rw"><div class="fd"><label>血脉类型</label><select id="bl"><option value="无特殊血脉">无特殊血脉</option><option value="金龙王血脉">金龙王血脉</option><option value="银龙王血脉">银龙王血脉</option><option value="龙族血脉">龙族血脉</option><option value="凤凰血脉">凤凰血脉</option><option value="泰坦血脉">泰坦血脉</option><option value="天使血脉">天使血脉</option><option value="海神血脉">海神血脉</option><option value="自定血脉">自定血脉</option></select></div>
                        <div class="fd"><label>觉醒程度</label><select id="bll"><option value="未觉醒">未觉醒</option><option value="初步觉醒">初步觉醒</option><option value="部分觉醒">部分觉醒</option><option value="深度觉醒">深度觉醒</option><option value="完全觉醒">完全觉醒</option><option value="返祖/巅峰">返祖/巅峰</option></select></div></div>
                        <div id="cbg" style="display:none"><div class="fd"><label>自定血脉名称</label><input type="text" id="cbl"></div></div>
                    </div></div>
                </details>

                <!-- 6. 魂灵 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_ssn"></span> Ⅵ 魂灵 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="rw"><div class="fd"><label>主要魂灵</label><input type="text" id="ssn" placeholder="如：草蛇"></div><div class="fd"><label>魂灵类型</label><select id="sst"><option value="战斗型">战斗型</option><option value="辅助型">辅助型</option><option value="防御型">防御型</option><option value="治疗型">治疗型</option><option value="特殊型">特殊型</option><option value="无魂灵">无魂灵</option></select></div></div>
                        <div class="fd"><label>魂灵年限</label><select id="ssy"><option value="十年">十年</option><option value="百年">百年</option><option value="千年">千年</option><option value="万年">万年</option><option value="十万年">十万年</option><option value="凶兽（二十万年）">凶兽（二十万年）</option><option value="百万年">百万年</option><option value="不适用">不适用</option></select></div>
                        <div class="fd"><label>其他魂灵 <sm>(每行一个)</sm></label><textarea id="ess" rows="2"></textarea></div>
                    </div></div>
                </details>

                <!-- 7. 斗铠 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_ban"></span> Ⅶ 斗铠 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="rw"><div class="fd"><label>斗铠名称</label><input type="text" id="ban" placeholder="如：龙月"></div><div class="fd"><label>斗铠等级</label><select id="bal"><option value="无">无斗铠</option><option value="一字斗铠">一字斗铠</option><option value="二字斗铠">二字斗铠</option><option value="三字斗铠">三字斗铠</option><option value="四字斗铠">四字斗铠</option><option value="五字斗铠（神级）">五字斗铠（神级）</option><option value="六字斗铠（神级）">六字斗铠（神级）</option></select></div></div>
                        <div class="fd"><label>斗铠侧重</label><select id="bat"><option value="均衡型">均衡型</option><option value="力量型">力量型</option><option value="敏捷型">敏捷型</option><option value="防御型">防御型</option><option value="爆发型">爆发型</option><option value="控制型">控制型</option><option value="不适用">不适用</option></select></div>
                        <div class="fd"><label>斗铠描述</label><input type="text" id="badesc" placeholder="银甲金纹…"></div>
                    </div></div>
                </details>

                <!-- 8. 第二职业 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_second"></span> Ⅷ 第二职业 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="rw"><div class="fd"><label>第二职业类型</label><select id="second_prof"><option value="无">无</option><option value="锻造">锻造</option><option value="机甲设计">机甲设计</option><option value="机甲制造">机甲制造</option><option value="机甲修理">机甲修理</option><option value="药剂">药剂</option><option value="其他">其他</option></select></div>
                        <div class="fd"><label>第二职业等级</label><select id="second_level"><option value="1">1级</option><option value="2">2级</option><option value="3">3级</option><option value="4">4级</option><option value="5">5级</option><option value="6">6级</option><option value="7">7级</option><option value="8">8级</option><option value="9">9级</option></select></div></div>
                    </div></div>
                </details>

                <!-- 9. 来处 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_og"></span> Ⅸ 你的来处 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="fd"><label>出身地</label>
                            <select id="og_select"><option value="">-- 请选择 --</option><option value="傲来城">傲来城</option><option value="东海城">东海城</option><option value="史莱克城">史莱克城</option><option value="天斗城">天斗城</option><option value="星罗城">星罗城</option><option value="灵波城">灵波城</option><option value="明都">明都</option><option value="星斗大森林外围">星斗大森林外围</option><option value="极北之地">极北之地</option><option value="自定义">自定义</option></select>
                            <input type="text" id="og" style="margin-top:4px" placeholder="或手动输入">
                        </div>
                        <div class="rw"><div class="fd"><label>所属阵营</label><select id="fc"><option value="史莱克学院">史莱克学院</option><option value="史莱克重建">史莱克重建</option><option value="唐门">唐门</option><option value="传灵塔">传灵塔</option><option value="传灵学院">传灵学院</option><option value="战神殿">战神殿</option><option value="血神军团">血神军团</option><option value="星罗帝国">星罗帝国</option><option value="斗灵帝国">斗灵帝国</option><option value="斗罗联邦">斗罗联邦</option><option value="本体宗">本体宗</option><option value="七宝琉璃宗">七宝琉璃宗</option><option value="昊天宗">昊天宗</option><option value="蓝电霸王龙家族">蓝电霸王龙家族</option><option value="原恩家族">原恩家族</option><option value="星斗大森林">星斗大森林</option><option value="极北之地">极北之地</option><option value="深渊位面">深渊位面</option><option value="自由魂师">自由魂师</option><option value="散修">散修</option><option value="其他">其他</option></select></div>
                        <div class="fd"><label>家族血脉</label><select id="fbg"><option value="普通平民">普通平民</option><option value="魂师世家">魂师世家</option><option value="宗门嫡系">宗门嫡系</option><option value="皇室宗亲">皇室宗亲</option><option value="隐世家族">隐世家族</option><option value="孤儿">孤儿</option><option value="魂兽化形">魂兽化形</option><option value="神祇后裔">神祇后裔</option></select></div></div>
                    </div></div>
                </details>

                <!-- 10. 道路 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_rp"></span> Ⅹ 你的道路 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="fd"><label>魂师定位</label><select id="rp"><option value="控制系">控制系</option><option value="强攻系">强攻系</option><option value="敏攻系">敏攻系</option><option value="辅助系">辅助系</option><option value="治疗系">治疗系</option><option value="食物系">食物系</option><option value="防御系">防御系</option><option value="敏防系">敏防系</option><option value="全能系">全能系</option></select></div>
                    </div></div>
                </details>

                <!-- 11. 灵魂 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_pt"></span> Ⅺ 你的灵魂 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="fd"><label>性格特质</label><textarea id="pt" rows="2" placeholder="冷静、执着、重情义"></textarea></div>
                        <div class="fd"><label>特殊能力</label>
                            <select id="st"><option value="无">无</option><option value="天生神力">天生神力</option><option value="剑感">剑感</option><option value="元素亲和">元素亲和</option><option value="精神感知">精神感知</option><option value="自愈体质">自愈体质</option><option value="龙族感应">龙族感应</option><option value="空间感知">空间感知</option><option value="战斗直觉">战斗直觉</option><option value="钢铁意志">钢铁意志</option><option value="自定义">自定义</option></select>
                            <div id="stCustomWrap" style="display:none;margin-top:4px;"><input type="text" id="stCustom" placeholder="输入特殊能力名称"></div>
                        </div>
                    </div></div>
                </details>

                <!-- 12. 扩展 -->
                <details class="char-section">
                    <summary><span class="char-dot" id="dot_ext"></span> Ⅻ 开场白与扩展 <span class="arrow">▼</span></summary>
                    <div class="body"><div class="inner">
                        <div class="fd"><label>开场白</label><textarea id="greeting" rows="3" placeholder="我的剑，不是为了杀戮而存在的。"></textarea></div>
                        <div class="fd"><label>人际关系</label><textarea id="relationships" rows="2" placeholder="与唐舞麟是同期学员，受古月照顾…"></textarea></div>
                        <div class="fd"><label>当前所处场景</label><input type="text" id="scenario" placeholder="天斗城·清晨"></div>
                        <div class="fd"><label>魂环配置</label><textarea id="soul_ring" rows="2" placeholder="黄黄紫紫黑黑黑黑红"></textarea></div>
                        <div class="fd"><label>魂技列表 <sm>(每行一个)</sm></label><textarea id="soul_skills" rows="3" placeholder="第一魂技：缠绕&#10;第二魂技：寄生"></textarea></div>
                        <div class="fd"><label>魂骨 <sm>(部位·年限·技能)</sm></label><textarea id="soul_bones" rows="2" placeholder="左臂·万年·力量增幅"></textarea></div>
                        <div class="fd"><label>领域</label><input type="text" id="domain" placeholder="杀神领域"></div>
                        <div class="fd"><label>神位/神祇</label><input type="text" id="godhood" placeholder="海神"></div>
                        <div class="fd"><label>武器/魂导器</label><input type="text" id="weapon" placeholder="白龙枪"></div>
                        <div class="fd"><label>备注/其他</label><textarea id="notes" rows="2" placeholder="其他需要记录的内容…"></textarea></div>
                    </div></div>
                </details>

                <!-- 按钮区域 -->
                <div class="char-actions">
                    <button id="charLoadBtn">📂 读取角色</button>
                    <button id="charSaveBtn" class="btn-primary">⚔ 觉醒·写入档案</button>
                    <button id="charExportBtn">📋 导出文本</button>
                    <button id="charClearBtn">🗑 清空</button>
                </div>

                <div class="char-msg" id="charMsg"></div>
            </div>
        `;

        // ===== 绑定交互逻辑 =====
        bindEvents();
        updateProgress();

        // 读取角色数据（如果有）
        loadFromCharacter();

        console.log('✦ 斗罗魂师档案已加载');
    }

    // ===== 事件绑定 =====
    function bindEvents() {
        const root = getRoot();
        if (!root) return;

        const elements = {
            mst: document.getElementById('mst'),
            bl: document.getElementById('bl'),
            og_select: document.getElementById('og_select'),
            st: document.getElementById('st'),
            isp: document.getElementById('isp'),
        };

        // 双生武魂切换
        if (elements.mst) {
            elements.mst.addEventListener('change', function() {
                const dsf = document.getElementById('dsf');
                if (dsf) dsf.classList.toggle('ac', this.value === '双生武魂');
                toggleGodSoul(this.value);
                updateProgress();
            });
        }

        // 神级武魂处理
        function toggleGodSoul(v) {
            const isp = document.getElementById('isp');
            if (!isp) return;
            if (v === '神级武魂') {
                isp.value = '20级（神赐）';
                isp.disabled = true;
            } else {
                isp.disabled = false;
                if (isp.value === '20级（神赐）') isp.value = '10级（满魂力）';
            }
        }

        // 血脉自定义
        if (elements.bl) {
            elements.bl.addEventListener('change', function() {
                const cbg = document.getElementById('cbg');
                if (cbg) cbg.style.display = this.value === '自定血脉' ? 'block' : 'none';
                updateProgress();
            });
        }

        // 出身地联动
        if (elements.og_select) {
            elements.og_select.addEventListener('change', function() {
                const og = document.getElementById('og');
                if (og) og.value = this.value === '自定义' ? '' : this.value;
                updateProgress();
            });
        }

        // 特殊能力自定义
        if (elements.st) {
            elements.st.addEventListener('change', function() {
                const wrap = document.getElementById('stCustomWrap');
                if (wrap) wrap.style.display = this.value === '自定义' ? 'block' : 'none';
                updateProgress();
            });
        }

        // 所有输入自动保存进度
        const inputs = root.querySelectorAll('input, textarea, select');
        inputs.forEach(el => {
            el.addEventListener('input', updateProgress);
            el.addEventListener('change', updateProgress);
        });

        // 按钮
        const saveBtn = document.getElementById('charSaveBtn');
        if (saveBtn) saveBtn.addEventListener('click', saveToCharacter);

        const loadBtn = document.getElementById('charLoadBtn');
        if (loadBtn) loadBtn.addEventListener('click', loadFromCharacter);

        const exportBtn = document.getElementById('charExportBtn');
        if (exportBtn) exportBtn.addEventListener('click', exportText);

        const clearBtn = document.getElementById('charClearBtn');
        if (clearBtn) clearBtn.addEventListener('click', clearAll);

        // 初始化神级武魂状态
        if (elements.mst) {
            toggleGodSoul(elements.mst.value);
            if (elements.mst.value === '双生武魂') {
                const dsf = document.getElementById('dsf');
                if (dsf) dsf.classList.add('ac');
            }
        }

        // 初始化血脉自定义
        if (elements.bl && elements.bl.value === '自定血脉') {
            const cbg = document.getElementById('cbg');
            if (cbg) cbg.style.display = 'block';
        }

        // 初始化特殊能力自定义
        if (elements.st && elements.st.value === '自定义') {
            const wrap = document.getElementById('stCustomWrap');
            if (wrap) wrap.style.display = 'block';
        }
    }

    // ===== 收集数据 =====
    function collectData() {
        return {
            cn: getVal('cn') || '未命名',
            gd: getSel('gd'),
            ag: getNum('ag'),
            ht: getNum('ht'),
            wt: getNum('wt'),
            hc: getVal('hc'),
            ec: getVal('ec'),
            ff: getLines('ff'),
            msn: getVal('msn'),
            mst: getSel('mst'),
            sn2: getVal('sn2'),
            st2: getSel('st2'),
            isp: getSel('isp'),
            csr: getVal('csr'),
            soul_rank: getSel('soul_rank'),
            sp: getSel('sp'),
            bl: getSel('bl'),
            bll: getSel('bll'),
            cbl: getVal('cbl'),
            ssn: getVal('ssn'),
            sst: getSel('sst'),
            ssy: getSel('ssy'),
            ess: getLines('ess'),
            ban: getVal('ban'),
            bal: getSel('bal'),
            bat: getSel('bat'),
            badesc: getVal('badesc'),
            second_prof: getSel('second_prof'),
            second_level: getSel('second_level'),
            og: getVal('og'),
            fc: getSel('fc'),
            fbg: getSel('fbg'),
            rp: getSel('rp'),
            pt: getLines('pt'),
            st: getVal('st') === '自定义' ? getVal('stCustom') || '自定义' : getVal('st'),
            greeting: getVal('greeting'),
            relationships: getVal('relationships'),
            scenario: getVal('scenario'),
            soul_ring: getVal('soul_ring'),
            soul_skills: getLines('soul_skills'),
            soul_bones: getLines('soul_bones'),
            domain: getVal('domain'),
            godhood: getVal('godhood'),
            weapon: getVal('weapon'),
            notes: getVal('notes')
        };
    }

    // ===== 更新进度条 =====
    function updateProgress() {
        const fieldIds = ['cn', 'gd', 'ag', 'ht', 'wt', 'hc', 'ec', 'msn', 'mst', 'isp', 'csr', 'soul_rank', 'sp', 'bl', 'bll', 'ssn', 'sst', 'ssy', 'ban', 'bal', 'bat', 'second_prof', 'second_level', 'og', 'fc', 'fbg', 'rp', 'greeting', 'relationships', 'scenario', 'soul_ring', 'soul_skills', 'soul_bones', 'domain', 'godhood', 'weapon', 'notes'];
        let filled = 0;
        fieldIds.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.value && el.value.trim() !== '') filled++;
        });
        const total = fieldIds.length;
        const pct = document.getElementById('charPct');
        const totalEl = document.getElementById('charTotal');
        const pbar = document.getElementById('charPbar');
        if (pct) pct.textContent = filled;
        if (totalEl) totalEl.textContent = total;
        if (pbar) {
            const p = Math.round((filled / total) * 100);
            pbar.style.width = p + '%';
        }

        // 更新各section的dot
        const sections = root.querySelectorAll('.char-section');
        sections.forEach(sec => {
            const inputs = sec.querySelectorAll('input, textarea, select');
            let hasVal = false;
            inputs.forEach(inp => {
                if (inp.value && inp.value.trim() !== '') hasVal = true;
            });
            const dot = sec.querySelector('.char-dot');
            if (dot) {
                dot.classList.toggle('filled', hasVal);
            }
        });
    }

    // ===== 生成格式化文本 =====
    function generateText() {
        const d = collectData();
        const lines = [];
        lines.push('【玩家：' + d.cn + '】');
        lines.push('');
        lines.push('基本信息：');
        lines.push('- 姓名：' + d.cn);
        lines.push('- 性别：' + d.gd);
        lines.push('');

        // 武魂
        lines.push('武魂与魂力：');
        const isDual = d.mst === '双生武魂';
        if (isDual) {
            lines.push('- 武魂：' + (d.msn || '未填写') + '（' + d.mst + '）');
            if (d.sn2) lines.push('- 第二武魂：' + d.sn2 + '（' + d.st2 + '）');
        } else {
            lines.push('- 武魂：' + (d.msn || '未填写') + '（' + d.mst + '）');
        }
        if (d.soul_rank) lines.push('- 魂力等级称号：' + d.soul_rank);
        lines.push('');

        // 血脉
        const bloodType = d.bl === '自定血脉' ? d.cbl : d.bl;
        lines.push('血脉：');
        lines.push('- 血脉类型：' + (bloodType || '无特殊血脉'));
        lines.push('');

        // 外貌
        if (d.hc || d.ec || d.ff.length) {
            lines.push('外貌：');
            if (d.hc) lines.push('- 发色：' + d.hc);
            if (d.ec) lines.push('- 瞳色：' + d.ec);
            if (d.ff.length) lines.push('- 面容：' + d.ff.join('、'));
            lines.push('');
        }

        // 魂灵（条件）
        if (d.ssn) {
            lines.push('魂灵：');
            lines.push('- 主要魂灵：' + d.ssn);
            lines.push('');
        }

        // 斗铠（条件）
        if (d.ban) {
            lines.push('斗铠：');
            lines.push('- 斗铠名称：' + d.ban);
            lines.push('');
        }

        lines.push('战斗与背景：');
        if (d.rp) lines.push('- 魂师定位：' + d.rp);
        if (d.pt.length) lines.push('- 性格特质：' + d.pt.join('、'));
        if (d.st && d.st !== '无') lines.push('- 特殊能力：' + d.st);

        if (d.soul_ring) lines.push('- 魂环配置：' + d.soul_ring);

        const skills = d.soul_skills;
        if (skills.length) {
            lines.push('- 魂技：');
            skills.forEach(s => lines.push('  · ' + s));
        }

        const bones = d.soul_bones;
        if (bones.length) {
            lines.push('- 魂骨：');
            bones.forEach(b => lines.push('  · ' + b));
        }

        if (d.domain) lines.push('- 领域：' + d.domain);
        if (d.godhood) lines.push('- 神位/神祇：' + d.godhood);
        if (d.weapon) lines.push('- 武器/魂导器：' + d.weapon);
        if (d.notes) lines.push('- 备注：' + d.notes);

        lines.push('');
        if (d.greeting) lines.push('开场白：' + d.greeting);
        if (d.relationships) lines.push('人际关系：' + d.relationships);

        return lines.join('\n');
    }

    // ===== 保存到SillyTavern角色卡 =====
    function saveToCharacter() {
        const data = collectData();
        const text = generateText();

        // 尝试写入SillyTavern
        try {
            if (typeof window.SillyTavern !== 'undefined' && window.SillyTavern.getContext) {
                const context = window.SillyTavern.getContext();
                if (context && context.character) {
                    // 写入角色卡字段
                    context.character.name = data.cn || '未命名';
                    context.character.description = text;
                    // 如果有场景字段也写入
                    if (context.character.scenario && data.scenario) {
                        context.character.scenario = data.scenario;
                    }
                    // 触发保存
                    if (typeof context.saveCharacter === 'function') {
                        context.saveCharacter();
                    } else if (typeof window.SillyTavern.saveCharacter === 'function') {
                        window.SillyTavern.saveCharacter();
                    }
                    showMessage('✅ 角色已写入档案！', false);
                    // 触感反馈
                    if (navigator.vibrate) navigator.vibrate(30);
                    return;
                }
            }
            // 降级方案：尝试通过DOM操作
            const descTextarea = document.querySelector('textarea[data-id="character_description"], textarea#character_description, textarea[name="description"]');
            if (descTextarea) {
                descTextarea.value = text;
                descTextarea.dispatchEvent(new Event('input', { bubbles: true }));
                showMessage('✅ 已写入角色描述！', false);
                return;
            }
            // 如果都不行，复制到剪贴板
            navigator.clipboard.writeText(text).then(() => {
                showMessage('📋 已复制文本，请手动粘贴到角色卡', false);
            }).catch(() => {
                prompt('请复制以下文本到角色卡：', text);
            });
        } catch (e) {
            console.warn('保存失败:', e);
            // 降级：复制到剪贴板
            navigator.clipboard.writeText(text).catch(() => {
                prompt('请复制以下文本到角色卡：', text);
            });
            showMessage('📋 已复制到剪贴板，请手动粘贴', false);
        }
    }

    // ===== 从SillyTavern读取角色 =====
    function loadFromCharacter() {
        try {
            let text = '';
            let name = '';

            // 尝试从SillyTavern读取
            if (typeof window.SillyTavern !== 'undefined' && window.SillyTavern.getContext) {
                const context = window.SillyTavern.getContext();
                if (context && context.character) {
                    const char = context.character;
                    if (char.name) name = char.name;
                    if (char.description) text = char.description;
                    // 如果有场景也读取
                    if (char.scenario) {
                        const scenarioEl = document.getElementById('scenario');
                        if (scenarioEl) scenarioEl.value = char.scenario;
                    }
                    showMessage('📂 已读取角色数据', false);
                }
            }

            // 如果没读到description，尝试从DOM读取
            if (!text) {
                const descTextarea = document.querySelector('textarea[data-id="character_description"], textarea#character_description, textarea[name="description"]');
                if (descTextarea) {
                    text = descTextarea.value;
                    showMessage('📂 已读取角色描述', false);
                }
            }

            if (text) {
                // 尝试解析文本填充表单
                parseTextToForm(text);
            }
            if (name) {
                const nameEl = document.getElementById('cn');
                if (nameEl && !nameEl.value) nameEl.value = name;
            }

            updateProgress();
        } catch (e) {
            console.warn('读取失败:', e);
            showMessage('⚠️ 读取失败，请手动填写', true);
        }
    }

    // ===== 解析文本填充表单（简化版） =====
    function parseTextToForm(text) {
        const lines = text.split('\n');
        let currentSection = '';

        // 武魂名称
        const vMatch = text.match(/[-*]\s*武魂[：:]\s*(.+?)\s*（(.+?)）/);
        if (vMatch) {
            setVal('msn', vMatch[1].trim());
            const typeMap = {
                '兽武魂': '兽武魂',
                '器武魂': '器武魂',
                '本体武魂': '本体武魂',
                '植物武魂': '植物武魂',
                '元素武魂': '元素武魂',
                '辅助武魂': '辅助武魂',
                '食物武魂': '食物武魂',
                '变异武魂': '变异武魂',
                '双生武魂': '双生武魂',
                '神级武魂': '神级武魂'
            };
            const found = Object.keys(typeMap).find(k => vMatch[2].includes(k));
            if (found) setVal('mst', found);
        }

        // 魂力等级称号
        const rankMatch = text.match(/[-*]\s*魂力等级称号[：:]\s*(.+)/);
        if (rankMatch) {
            const rank = rankMatch[1].trim();
            const rankEl = document.getElementById('soul_rank');
            if (rankEl) {
                const opts = Array.from(rankEl.options);
                const match = opts.find(o => o.value === rank);
                if (match) rankEl.value = rank;
            }
        }

        // 血脉类型
        const bloodMatch = text.match(/[-*]\s*血脉类型[：:]\s*(.+)/);
        if (bloodMatch) {
            const blood = bloodMatch[1].trim();
            const blEl = document.getElementById('bl');
            if (blEl) {
                const opts = Array.from(blEl.options);
                const match = opts.find(o => o.value === blood);
                if (match) blEl.value = blood;
                else {
                    blEl.value = '自定血脉';
                    setVal('cbl', blood);
                    const cbg = document.getElementById('cbg');
                    if (cbg) cbg.style.display = 'block';
                }
            }
        }

        // 发色
        const hcMatch = text.match(/[-*]\s*发色[：:]\s*(.+)/);
        if (hcMatch) setVal('hc', hcMatch[1].trim());

        // 瞳色
        const ecMatch = text.match(/[-*]\s*瞳色[：:]\s*(.+)/);
        if (ecMatch) setVal('ec', ecMatch[1].trim());

        // 面容
        const ffMatch = text.match(/[-*]\s*面容[：:]\s*(.+)/);
        if (ffMatch) setVal('ff', ffMatch[1].trim());

        // 魂师定位
        const rpMatch = text.match(/[-*]\s*魂师定位[：:]\s*(.+)/);
        if (rpMatch) {
            const rp = rpMatch[1].trim();
            const rpEl = document.getElementById('rp');
            if (rpEl) {
                const opts = Array.from(rpEl.options);
                const match = opts.find(o => o.value === rp);
                if (match) rpEl.value = rp;
            }
        }

        // 性格特质
        const ptMatch = text.match(/[-*]\s*性格特质[：:]\s*(.+)/);
        if (ptMatch) setVal('pt', ptMatch[1].trim());

        // 特殊能力
        const stMatch = text.match(/[-*]\s*特殊能力[：:]\s*(.+)/);
        if (stMatch) {
            const st = stMatch[1].trim();
            const stEl = document.getElementById('st');
            if (stEl) {
                const opts = Array.from(stEl.options);
                const match = opts.find(o => o.value === st);
                if (match) stEl.value = st;
                else {
                    stEl.value = '自定义';
                    setVal('stCustom', st);
                    const wrap = document.getElementById('stCustomWrap');
                    if (wrap) wrap.style.display = 'block';
                }
            }
        }

        // 开场白
        const greetMatch = text.match(/开场白[：:]\s*(.+)/);
        if (greetMatch) setVal('greeting', greetMatch[1].trim());

        // 人际关系
        const relMatch = text.match(/人际关系[：:]\s*(.+)/);
        if (relMatch) setVal('relationships', relMatch[1].trim());

        updateProgress();
    }

    // ===== 导出文本 =====
    function exportText() {
        const text = generateText();
        navigator.clipboard.writeText(text).then(() => {
            showMessage('✅ 已复制到剪贴板！', false);
        }).catch(() => {
            prompt('复制以下文本：', text);
        });
    }

    // ===== 清空所有 =====
    function clearAll() {
        if (!confirm('确定清空所有字段吗？')) return;
        const inputs = root.querySelectorAll('input, textarea, select');
        inputs.forEach(el => {
            if (el.tagName === 'SELECT') {
                const firstOption = el.querySelector('option:not([value=""])');
                if (firstOption) el.value = firstOption.value;
                else el.selectedIndex = 0;
            } else {
                el.value = '';
            }
        });
        // 隐藏自定义区域
        const cbg = document.getElementById('cbg');
        if (cbg) cbg.style.display = 'none';
        const wrap = document.getElementById('stCustomWrap');
        if (wrap) wrap.style.display = 'none';
        // 重置神级武魂
        const isp = document.getElementById('isp');
        if (isp) { isp.disabled = false; isp.value = '10级（满魂力）'; }
        updateProgress();
        showMessage('🗑 已清空所有字段', false);
    }

    // ===== 显示消息 =====
    function showMessage(text, isError) {
        const msg = document.getElementById('charMsg');
        if (!msg) return;
        msg.textContent = text;
        msg.className = 'char-msg show' + (isError ? ' error' : '');
        clearTimeout(msg._timer);
        msg._timer = setTimeout(() => {
            msg.className = 'char-msg';
        }, 4000);
    }

    // ===== 辅助函数：setVal（覆盖原有） =====
    function setVal(id, val) {
        const el = document.getElementById(id);
        if (!el) return;
        if (val === undefined || val === null) val = '';
        if (Array.isArray(val)) val = val.join('\n');
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // ===== 初始化 =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', render);
    } else {
        // 确保在SillyTavern环境中延迟执行
        setTimeout(render, 100);
    }

    // 导出标记
    if (typeof window !== 'undefined') {
        window.__dlgh_character_create_loaded = true;
    }
})();
