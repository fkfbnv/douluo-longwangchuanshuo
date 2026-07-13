// ========== greeting.js - 斗罗大陆III 龙王传说 魂师觉醒 v2 ==========
(function () {
  "use strict";

  // ===== 1. 注入样式 =====
  const styleText = `
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
.soul-app-container{font-family:system-ui,'Microsoft YaHei',sans-serif;background:radial-gradient(ellipse at 50% 0,#1c1308 0,#0d0804 55%,#060302 100%);background-attachment:fixed;color:#e8dcc8;line-height:1.8;padding:12px 8px 20px;display:flex;justify-content:center;}
#app{max-width:560px;width:100%;padding:20px 18px 130px 18px;background:linear-gradient(170deg,#1c130a,#23180d 30%,#1a1008 60%,#140c05);border:2px solid #7a5c2e;border-radius:14px;box-shadow:0 0 40px rgba(180,130,40,.18),0 8px 32px rgba(0,0,0,.55),inset 0 0 20px rgba(120,70,20,.08);position:relative;z-index:1;}
#app::before{content:'';position:absolute;top:-1px;left:-30%;right:-30%;height:2px;background:linear-gradient(90deg,transparent,#b5343a,#f0d68a,#b5343a,transparent);opacity:.8;border-radius:0 0 50% 50%;}
h1{text-align:center;color:#dc3545;font-size:1.8em;font-weight:700;letter-spacing:6px;text-shadow:0 0 18px rgba(220,50,60,.5),0 2px 8px rgba(0,0,0,.6);font-family:'STKaiti','KaiTi','楷体',serif;cursor:pointer;min-height:44px;display:flex;align-items:center;justify-content:center;gap:10px;user-select:none;transition:.3s;}
h1:hover{text-shadow:0 0 30px rgba(220,50,60,.7),0 2px 12px rgba(0,0,0,.6);}
h1 .hint{font-size:.3em;color:#7a6a50;letter-spacing:1px;font-weight:300;opacity:.5;}
.subtitle{text-align:center;font-size:.75em;color:#b5a080;margin:-4px 0 12px 0;letter-spacing:8px;font-style:italic;opacity:.7;}
.awakening{text-align:center;font-size:.85em;color:#d4c5a0;padding:14px 16px;margin-bottom:14px;background:rgba(180,130,40,.06);border:1px solid rgba(180,130,40,.15);border-radius:8px;line-height:2.0;letter-spacing:1px;font-style:italic;}
.awakening .highlight{color:#f0d68a;font-style:normal;font-weight:600;}
.tb{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center;}
.tb .p{flex:1;min-width:70px;font-size:.78em;color:#b5a080;font-weight:300;letter-spacing:1px;}
.tb .p span{color:#f0d68a;font-weight:600;}
.pb{width:100%;height:3px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden;margin-top:2px;}
.pb div{height:100%;border-radius:2px;transition:width .6s ease;}
.pb .pbar-low{background:linear-gradient(90deg,#8b3a3a,#c96a4a);}
.pb .pbar-mid{background:linear-gradient(90deg,#c8963e,#f0d68a);}
.pb .pbar-high{background:linear-gradient(90deg,#4ac9b0,#6ee7b7);}
.tool-group{display:flex;gap:4px;align-items:center;flex-shrink:0;flex-wrap:wrap;}
.bm{padding:4px 10px;font-size:.65em;border-radius:4px;border:1px solid rgba(180,130,40,.2);background:rgba(255,255,255,.04);color:#c4b090;cursor:pointer;transition:.2s;touch-action:manipulation;font-weight:300;letter-spacing:0.5px;white-space:nowrap;min-height:32px;min-width:32px;display:inline-flex;align-items:center;justify-content:center;}
.bm:active{transform:scale(.92);background:rgba(255,255,255,.08);}
.bm:hover{background:rgba(255,255,255,.08);border-color:#d4a745;color:#f0d68a;}
.bm.bm-gold{background:rgba(200,150,50,.12);border-color:#d4a745;color:#f0d68a;}
.bm.bm-gold:hover{background:rgba(200,150,50,.2);}
.btn-export-persona{display:block;width:auto;margin:0 auto 6px auto;padding:8px 20px;background:rgba(255,255,255,.04);color:#b5a080;border:1px solid rgba(180,130,40,.15);border-radius:20px;font-size:.72em;font-weight:400;letter-spacing:1px;cursor:pointer;transition:.2s;touch-action:manipulation;text-align:center;}
.btn-export-persona:active{transform:scale(.95);background:rgba(255,255,255,.06);}
.btn-export-persona:hover{border-color:rgba(180,130,40,.3);color:#f0d68a;}
.btn-row{position:fixed;bottom:0;left:0;right:0;z-index:100;background:linear-gradient(180deg,transparent 0%,rgba(20,12,5,.95) 30%,#140c05 100%);padding:10px 16px 16px 16px;display:flex;flex-direction:column;align-items:center;gap:4px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-top:1px solid rgba(180,130,40,.12);}
.btn-awaken{width:100%;max-width:320px;padding:14px 0;background:linear-gradient(180deg,#c94045,#9b282d);color:#fff;border:1px solid #d47050;border-radius:12px;font-size:1.05em;font-weight:700;letter-spacing:4px;cursor:pointer;transition:transform .15s,box-shadow .25s,background .25s;box-shadow:0 4px 20px rgba(180,50,55,.3),inset 0 1px 3px rgba(255,255,255,.1);text-shadow:0 1px 3px rgba(0,0,0,.4);touch-action:manipulation;text-align:center;min-height:52px;}
.btn-awaken:hover{background:linear-gradient(180deg,#da5258,#b03338);transform:translateY(-2px);box-shadow:0 6px 28px rgba(200,55,60,.4);}
.btn-awaken:active{transform:scale(.96);}
.btn-awaken::after{content:' ✦';font-size:.7em;opacity:.5;}
.sec{margin:6px 0;}
.sec details{display:block;border-radius:6px;}
.sec summary{color:#f0d68a;font-size:.9em;font-weight:500;padding:8px 10px 8px 26px;border-bottom:1px solid rgba(160,110,30,.15);letter-spacing:2px;position:relative;cursor:pointer;user-select:none;transition:background .2s;border-radius:6px;display:flex;align-items:center;gap:6px;list-style:none;min-height:44px;}
.sec summary::-webkit-details-marker{display:none;}
.sec summary::before{content:'◆';position:absolute;left:6px;color:#d94a50;font-size:.5em;opacity:.6;}
.sec summary .ar{font-size:.65em;color:#b5a68a;transition:transform .25s ease;margin-left:auto;}
.sec details[open] summary .ar{transform:rotate(180deg);}
.sec summary .dot{display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:8px;background:#4a3a28;transition:background .3s;flex-shrink:0;}
.sec summary .dot.filled{background:#f0d68a;}
.sec summary .badge{font-size:.55em;padding:2px 10px;border-radius:10px;font-weight:400;letter-spacing:0;margin-left:auto;margin-right:4px;}
.sec summary .badge.b-complete{background:rgba(74,201,176,.2);color:#4ac9b0;border:1px solid rgba(74,201,176,.2);}
.sec summary .badge.b-partial{background:rgba(200,150,50,.15);color:#c8963e;border:1px solid rgba(200,150,50,.15);}
.sec summary .badge.b-empty{background:rgba(255,255,255,.04);color:#5a4a30;border:1px solid rgba(255,255,255,.04);}
.sec .sb{padding:6px 4px 2px;}
.sec .sb .in{overflow:hidden;}
.fd{margin-bottom:10px;}
.fd label{display:block;margin-bottom:2px;color:#e8dcc8;font-size:.78em;font-weight:400;letter-spacing:1px;}
.fd label sm{color:#7a6a50;font-size:.7em;margin-left:4px;font-weight:300;}
.fd .label-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.fd .label-row .tag{font-size:.55em;padding:2px 8px;border-radius:8px;font-weight:400;}
.rw{display:flex;gap:10px;flex-wrap:wrap;}
.rw .fd{flex:1;min-width:80px;}
.rw .fd.half{flex:0 0 calc(50% - 5px);}
.rw .fd.third{flex:0 0 calc(33.33% - 7px);}
input,textarea,select{width:100%;padding:8px 12px;background:#1f150b;color:#e8dcc8;border:1px solid #4a3418;border-radius:6px;font-size:.85em;font-family:inherit;transition:border .3s,box-shadow .3s;box-shadow:inset 0 1px 4px rgba(0,0,0,.35);min-height:44px;-webkit-appearance:none;appearance:none;}
input:focus,textarea:focus,select:focus{outline:none;border-color:#d4a745;box-shadow:0 0 20px rgba(200,150,50,.15),inset 0 1px 6px rgba(200,150,40,.05);background:#261a0e;}
textarea{resize:vertical;min-height:40px;line-height:1.6;}
select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%23d4a745'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px;cursor:pointer;touch-action:manipulation;font-size:16px;}
select option{background:#1f150b;color:#e8dcc8;}
.ta{overflow:hidden;max-height:0;opacity:0;transition:max-height .35s ease,opacity .25s ease,margin .25s ease;margin-top:0;}
.ta.ac{max-height:420px;opacity:1;margin-top:8px;}
.ta .ib{background:rgba(180,120,30,.05);border:1px dashed rgba(180,130,40,.2);border-radius:6px;padding:10px 12px;}
.hl{background:rgba(180,120,30,.04);border:1px solid rgba(180,130,40,.08);border-radius:6px;padding:6px 10px;margin-bottom:8px;}
.hl .hl-title{font-size:.7em;color:#b5a080;font-weight:300;letter-spacing:2px;margin-bottom:4px;}
.hl .hl-content{display:flex;gap:6px;flex-wrap:wrap;align-items:center;}
.ring-group{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px;}
.ring-item{display:flex;align-items:center;gap:4px;font-size:.7em;color:#b5a080;padding:2px 6px;border-radius:4px;background:rgba(255,255,255,.02);}
.ring-item .dot{width:10px;height:10px;border-radius:50%;border:1px solid rgba(255,255,255,.1);flex-shrink:0;}
.ring-item .dot.white{background:#e8e8e8;}
.ring-item .dot.yellow{background:#f0d68a;}
.ring-item .dot.purple{background:#9b6bcc;}
.ring-item .dot.black{background:#2a2a2a;border-color:#5a4a30;}
.ring-item .dot.red{background:#dc3545;}
.ring-item .dot.gold{background:#ffd700;box-shadow:0 0 8px rgba(255,215,0,.3);}
.part-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px;}
.part-grid .part-item{display:flex;align-items:center;gap:6px;font-size:.7em;color:#b5a080;padding:3px 6px;border-radius:4px;background:rgba(255,255,255,.02);cursor:pointer;transition:.2s;touch-action:manipulation;}
.part-grid .part-item:active{transform:scale(.95);}
.part-grid .part-item .pcheck{width:14px;height:14px;border:1px solid #4a3418;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;transition:.2s;background:transparent;color:transparent;font-size:10px;}
.part-grid .part-item.done .pcheck{background:#4ac9b0;border-color:#4ac9b0;color:#1a1008;}
.part-grid .part-item.done{color:#e8dcc8;}
#msg{text-align:center;margin-top:10px;color:#5cdb8b;font-weight:500;font-size:.85em;display:none;animation:f .3s;letter-spacing:1px;padding:8px 12px;border-radius:6px;background:rgba(0,0,0,.3);}
#msg.error{color:#f08080;}
@keyframes f{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
#cd{position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;}
.fb{text-align:center;margin-top:14px;font-size:.6em;color:#5a4a30;letter-spacing:4px;opacity:.4;font-style:italic;padding-bottom:20px;}
.fb span{display:inline-block;border:1px solid rgba(180,130,40,.1);padding:2px 14px;border-radius:20px;background:rgba(0,0,0,.2);}
.icon-user,.icon-face,.icon-soul,.icon-shield,.icon-pin,.icon-ghost,.icon-drop,.icon-wave,.icon-gear,.icon-compass,.icon-star,.icon-quote{width:16px;height:16px;fill:#f0d68a;vertical-align:middle;margin-right:3px;flex-shrink:0;}
.export-area{margin-top:10px;padding:10px 12px;background:rgba(0,0,0,.35);border-radius:6px;border:1px solid rgba(180,130,40,.12);display:none;}
.export-area.show{display:block;}
.export-area .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:6px;}
.export-area .header span{font-size:.72em;color:#b5a080;}
.export-area textarea{font-family:monospace;font-size:.72em;min-height:70px;background:#0d0804;color:#c4b090;padding:6px 8px;width:100%;resize:vertical;border-color:#3a2a18;min-height:44px;}
.export-area .footer{font-size:.6em;color:#6a5a40;margin-top:4px;text-align:right;}
.export-area .btn-group{display:flex;gap:6px;flex-wrap:wrap;}
#fieldIndicator{position:fixed;bottom:76px;left:50%;transform:translateX(-50%);background:rgba(20,12,5,.92);border:1px solid rgba(180,130,40,.2);border-radius:20px;padding:4px 16px;font-size:.65em;color:#b5a080;opacity:0;transition:opacity .3s;pointer-events:none;z-index:99;backdrop-filter:blur(4px);white-space:nowrap;max-width:80%;overflow:hidden;text-overflow:ellipsis;}
#fieldIndicator.show{opacity:1;}
.soul-title{text-align:center;margin:4px 0 8px;font-size:.55em;color:#5a4a30;letter-spacing:6px;opacity:.5;}
/* 觉醒动画遮罩 */
#awakenOverlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:rgba(0,0,0,.88);display:none;justify-content:center;align-items:center;flex-direction:column;padding:30px;}
#awakenOverlay.active{display:flex;animation:ao .4s;}
@keyframes ao{from{opacity:0}to{opacity:1}}
#awakenOverlay .content{max-width:460px;width:100%;text-align:center;}
#awakenOverlay .title{color:#f0d68a;font-size:1.6em;font-weight:700;letter-spacing:12px;font-family:'STKaiti','KaiTi','楷体',serif;margin-bottom:20px;text-shadow:0 0 30px rgba(240,214,138,.2);}
#awakenOverlay .lines{text-align:left;padding:10px 0;}
#awakenOverlay .lines .line{color:#d4c5a0;font-size:.95em;line-height:2.2;letter-spacing:2px;opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .5s ease;font-family:'STKaiti','KaiTi','楷体',serif;}
#awakenOverlay .lines .line.show{opacity:1;transform:translateY(0);}
#awakenOverlay .lines .line.hl{color:#f0d68a;font-weight:600;}
#awakenOverlay .lines .line.dim{color:#7a6a50;font-size:.8em;letter-spacing:4px;}
#awakenOverlay .divider{width:60%;height:1px;background:linear-gradient(90deg,transparent,#f0d68a,transparent);margin:12px auto;opacity:.3;}
#awakenOverlay .close-hint{color:#5a4a30;font-size:.65em;margin-top:16px;letter-spacing:2px;opacity:0;transition:opacity .8s ease;}
#awakenOverlay .close-hint.show{opacity:.5;}
@media(max-width:480px){#app{padding:14px 12px 120px 12px;border-radius:10px;}h1{font-size:1.4em;letter-spacing:4px;}.sec summary{font-size:.82em;padding:6px 8px 6px 22px;}.rw{flex-direction:column;gap:3px;}.rw .fd.half,.rw .fd.third{flex:1;}input,textarea,select{font-size:.8em;padding:6px 10px;min-height:40px;}.btn-awaken{font-size:.95em;padding:12px 0;min-height:48px;max-width:100%;}.subtitle{font-size:.65em;letter-spacing:4px;}.awakening{font-size:.78em;padding:10px 12px;}.bm{font-size:.6em;padding:2px 6px;min-height:28px;min-width:28px;}.icon-user,.icon-face,.icon-soul,.icon-shield,.icon-pin,.icon-wave,.icon-drop,.icon-ghost,.icon-gear,.icon-compass,.icon-star,.icon-quote{width:14px;height:14px;}.btn-row{padding:8px 12px 12px 12px;}.btn-export-persona{font-size:.65em;padding:6px 16px;}#fieldIndicator{font-size:.6em;bottom:68px;}.part-grid{grid-template-columns:1fr 1fr;}#awakenOverlay .title{font-size:1.2em;letter-spacing:8px;}#awakenOverlay .lines .line{font-size:.82em;}}
@media(max-width:380px){.btn-awaken{font-size:.85em;padding:10px 0;min-height:44px;letter-spacing:2px;}.part-grid{grid-template-columns:1fr;}}
input,select,textarea,.bm,.btn-awaken,.btn-export-persona,.sec summary,.part-item{touch-action:manipulation;}
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = styleText;
  document.head.appendChild(styleEl);

  // ===== 2. 注入 HTML =====
  const htmlContent = `
<div class="soul-app-container">
<div id="app">
<div id="fieldIndicator"></div>
<h1 id="mainTitle">魂 师 觉 醒 <span class="hint">双击展开/收起</span></h1>
<p class="subtitle">—— 斗罗大陆Ⅲ · 龙王传说 ——</p>
<div class="awakening">
  一股暖融融的力量从你胸口深处涌起，<br>
  像一簇被压抑了太久的火苗，终于找到了出口。<br>
  你眼前忽然亮了——<br>
  不是光线，是某种从你体内生长出来的光。<br>
  <span class="highlight">你的武魂，正在回应你的呼吸。</span>
</div>
<div class="tb">
  <div class="p">已填 <span id="pct">0</span>/<span id="totalFields">24</span><div class="pb"><div id="pbar" style="width:0%" class="pbar-low"></div></div></div>
  <div class="tool-group">
    <button class="bm bm-gold" id="btnRandom">🎲 天命</button>
    <button class="bm" id="btnClearAll">🗑 归无</button>
  </div>
</div>

<!-- ===== 模块1：基础信息 ===== -->
<div class="sec">
  <details open>
    <summary>
      <svg class="icon-user" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg>
      Ⅰ 刻下你的名字
      <span class="ar">▼</span>
    </summary>
    <div class="sb"><div class="in">
      <div class="rw"><div class="fd"><label><svg class="icon-user" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg> 姓名</label><input type="text" id="cn" placeholder="你的名字"></div><div class="fd"><label><svg class="icon-user" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg> 性别</label><select id="gd"><option value="男">男</option><option value="女">女</option><option value="其他">其他</option></select></div></div>
      <div class="rw"><div class="fd"><label><svg class="icon-user" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg> 年龄 <sm>(岁)</sm></label><input type="number" id="ag" min="6" max="200" placeholder="16"></div><div class="fd"><label><svg class="icon-user" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg> 身高 <sm>(cm)</sm></label><input type="number" id="ht" min="80" max="280" placeholder="175"></div><div class="fd"><label><svg class="icon-user" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg> 体重 <sm>(kg)</sm></label><input type="number" id="wt" min="20" max="200" placeholder="65"></div></div>
      <div class="rw"><div class="fd"><label><svg class="icon-pin" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> 出身地</label>
        <select id="og_select"><option value="">-- 你从何处来？ --</option><option value="傲来城">傲来城</option><option value="东海城">东海城</option><option value="史莱克城">史莱克城</option><option value="天斗城">天斗城</option><option value="星罗城">星罗城</option><option value="灵波城">灵波城</option><option value="明都">明都</option><option value="星斗大森林外围">星斗大森林外围</option><option value="极北之地">极北之地</option></select>
        <input type="text" id="og" style="margin-top:4px" placeholder="或手动输入">
      </div>
      <div class="fd"><label><svg class="icon-pin" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg> 所属阵营</label><select id="fc"><option value="史莱克学院">史莱克学院</option><option value="史莱克重建">史莱克重建</option><option value="唐门">唐门</option><option value="传灵塔">传灵塔</option><option value="传灵学院">传灵学院</option><option value="战神殿">战神殿</option><option value="血神军团">血神军团</option><option value="星罗帝国">星罗帝国</option><option value="天斗帝国">天斗帝国</option><option value="斗灵帝国">斗灵帝国</option><option value="本体宗">本体宗</option><option value="七宝琉璃宗">七宝琉璃宗</option><option value="昊天宗">昊天宗</option><option value="蓝电霸王龙家族">蓝电霸王龙家族</option><option value="原恩家族">原恩家族</option><option value="星斗大森林">星斗大森林</option><option value="极北之地">极北之地</option><option value="深渊位面">深渊位面</option><option value="自由魂师">自由魂师</option><option value="散修">散修</option><option value="其他">其他</option></select></div></div>
      <div class="rw"><div class="fd"><label><svg class="icon-pin" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg> 家族血脉</label><select id="fbg"><option value="普通平民">普通平民</option><option value="魂师世家">魂师世家</option><option value="宗门嫡系">宗门嫡系</option><option value="皇室宗亲">皇室宗亲</option><option value="隐世家族">隐世家族</option><option value="孤儿">孤儿</option><option value="魂兽化形">魂兽化形</option><option value="神祇后裔">神祇后裔</option></select></div>
      <div class="fd"><label><svg class="icon-pin" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg> 组织身份</label><input type="text" id="orgIdentity" placeholder="史莱克七怪 / 传灵塔执法者"></div></div>
    </div></div>
  </details>
</div>

<!-- ===== 模块2：武魂与魂力 ===== -->
<div class="sec">
  <details>
    <summary>
      <svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg>
      Ⅱ 武魂与魂力
      <span class="ar">▼</span>
    </summary>
    <div class="sb"><div class="in">
      <div class="rw"><div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 武魂名称</label><input type="text" id="msn" placeholder="如：蓝银草"></div>
      <div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 武魂类型</label>
        <select id="mst"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="双生武魂">双生武魂</option><option value="神级武魂">神级武魂</option></select>
      </div></div>
      <div id="dsf" class="ta"><div class="ib"><div class="rw"><div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 第二武魂名称</label><input type="text" id="sn2" placeholder="第二武魂"></div><div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 第二武魂类型</label><select id="st2"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="神级武魂">神级武魂</option></select></div></div></div></div>
      <div class="rw"><div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 先天魂力</label>
        <select id="isp"><option value="10级（满魂力）">10级（满魂力）</option><option value="9级">9级</option><option value="8级">8级</option><option value="7级">7级</option><option value="6级">6级</option><option value="5级">5级</option><option value="4级">4级</option><option value="3级">3级</option><option value="2级">2级</option><option value="1级">1级</option><option value="0级（无魂力）">0级（无魂力）</option></select>
      </div>
      <div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 当前魂力 <sm>(级)</sm></label>
        <input type="number" id="csr" min="0" max="200" placeholder="32">
      </div>
      <div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 魂师称号</label>
        <input type="text" id="soulTitle" readonly style="color:#f0d68a;font-weight:600;background:#0d0804;border-color:#4a3418;cursor:default;">
      </div></div>
      <div class="fd"><label><svg class="icon-wave" viewBox="0 0 24 24"><path d="M2 12c2.21-3.33 4.21-5 6-5s3.79 1.67 6 5 3.79 5 6 5 3.79-1.67 6-5"/><path d="M4 8c2.21-3.33 4.21-5 6-5s3.79 1.67 6 5 3.79 5 6 5"/><path d="M6 4c2.21-3.33 4.21-5 6-5s3.79 1.67 6 5 3.79 5 6 5"/></svg> 精神力境界</label><select id="sp"><option value="灵元境">灵元境</option><option value="灵通境">灵通境</option><option value="灵海境">灵海境</option><option value="灵渊境">灵渊境</option><option value="灵域境">灵域境</option><option value="神元境">神元境</option><option value="神王境">神王境</option><option value="未知/未测定">未知/未测定</option></select></div>
      <div class="hl"><div class="hl-title">✦ 魂环配置</div>
        <div id="ringContainer"><div class="ring-group" id="ringGroup"></div></div>
        <div style="margin-top:4px;"><button class="bm" id="btnAddRing" style="font-size:.6em;">➕ 添加魂环</button></div>
      </div>
      <div class="rw"><div class="fd"><label><svg class="icon-drop" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> 血脉类型</label><select id="bl"><option value="无特殊血脉">无特殊血脉</option><option value="金龙王血脉">金龙王血脉</option><option value="银龙王血脉">银龙王血脉</option><option value="龙族血脉">龙族血脉</option><option value="海神血脉">海神血脉</option><option value="修罗血脉">修罗血脉</option><option value="天使血脉">天使血脉</option><option value="凤凰血脉">凤凰血脉</option><option value="泰坦血脉">泰坦血脉</option><option value="自定血脉">自定血脉</option></select></div>
      <div class="fd"><label><svg class="icon-drop" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> 血脉觉醒程度</label><select id="bll"><option value="未觉醒">未觉醒</option><option value="初步觉醒">初步觉醒</option><option value="部分觉醒">部分觉醒</option><option value="深度觉醒">深度觉醒</option><option value="完全觉醒">完全觉醒</option><option value="返祖/巅峰">返祖/巅峰</option></select></div></div>
      <div id="cbg" style="display:none"><div class="fd"><label><svg class="icon-drop" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> 自定血脉名称</label><input type="text" id="cbl"></div></div>
      <div class="rw"><div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 魂核数量</label>
        <select id="coreCount"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select>
      </div>
      <div class="fd"><label><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 领域名称</label><input type="text" id="domain" placeholder="如：杀戮领域、金龙领域"></div></div>
    </div></div>
  </details>
</div>

<!-- ===== 模块3：装备与战力 ===== -->
<div class="sec">
  <details>
    <summary>
      <svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2zm0 2.18l6 2.25v4.66c0 4.14-2.94 7.99-6 9.01-3.06-1.02-6-4.87-6-9.01V6.43l6-2.25z"/></svg>
      Ⅲ 装备与战力
      <span class="ar">▼</span>
    </summary>
    <div class="sb"><div class="in">
      <div class="rw"><div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2zm0 2.18l6 2.25v4.66c0 4.14-2.94 7.99-6 9.01-3.06-1.02-6-4.87-6-9.01V6.43l6-2.25z"/></svg> 斗铠名称</label><input type="text" id="ban" placeholder="如：龙月"></div>
      <div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 斗铠等级</label>
        <select id="bal"><option value="无">无斗铠</option><option value="一字斗铠">一字斗铠</option><option value="二字斗铠">二字斗铠</option><option value="三字斗铠">三字斗铠</option><option value="四字斗铠">四字斗铠</option><option value="五字斗铠（神级）">五字斗铠（神级）</option><option value="六字斗铠（神级）">六字斗铠（神级）</option></select>
      </div></div>
      <div class="rw"><div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 斗铠侧重</label><select id="bat"><option value="均衡型">均衡型</option><option value="力量型">力量型</option><option value="敏捷型">敏捷型</option><option value="防御型">防御型</option><option value="爆发型">爆发型</option><option value="控制型">控制型</option><option value="不适用">不适用</option></select></div>
      <div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 斗铠品级</label>
        <div id="armorGrade" style="padding:6px 10px;border-radius:4px;background:#0d0804;border:1px solid #4a3418;min-height:40px;display:flex;align-items:center;gap:8px;font-size:.85em;color:#b5a080;">选择等级后显示</div>
      </div></div>
      <div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 斗铠部件 <sm>(点击标记完成)</sm></label>
        <div class="part-grid" id="armorParts"></div>
        <div style="margin-top:4px;font-size:.7em;color:#7a6a50;">完成：<span id="armorCount">0</span>/11</div>
      </div>
      <div class="hl"><div class="hl-title">✦ 魂骨</div>
        <div class="rw"><div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 魂骨部位</label><select id="bonePart"><option value="无">无</option><option value="头部魂骨">头部魂骨</option><option value="躯干魂骨">躯干魂骨</option><option value="左臂魂骨">左臂魂骨</option><option value="右臂魂骨">右臂魂骨</option><option value="左腿魂骨">左腿魂骨</option><option value="右腿魂骨">右腿魂骨</option><option value="外附魂骨">外附魂骨</option></select></div>
      <div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 魂骨年限</label><select id="boneYear"><option value="无">无</option><option value="百年魂骨">百年魂骨</option><option value="千年魂骨">千年魂骨</option><option value="万年魂骨">万年魂骨</option><option value="十万年魂骨">十万年魂骨</option><option value="百万年魂骨">百万年魂骨</option></select></div></div></div>
      <div class="rw"><div class="fd"><label><svg class="icon-gear" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.33-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.3-.06.61-.06.94 0 .33.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg> 机甲等级</label><select id="mechaLevel"><option value="无">无</option><option value="1级机甲师">1级机甲师</option><option value="2级机甲师">2级机甲师</option><option value="3级机甲师">3级机甲师</option><option value="4级机甲师">4级机甲师</option><option value="5级机甲师">5级机甲师</option><option value="6级机甲师">6级机甲师</option><option value="7级机甲师">7级机甲师</option><option value="8级机甲师">8级机甲师</option><option value="9级机甲师">9级机甲师</option></select></div>
      <div class="fd"><label><svg class="icon-gear" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.33-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.3-.06.61-.06.94 0 .33.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg> 魂导器</label><input type="text" id="soulDevice" placeholder="如：储物魂导器、飞行魂导器"></div></div>
      <div class="fd"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 传说武器</label><input type="text" id="legendWeapon" placeholder="如：黄金龙枪、海神三叉戟"></div>
      <div class="fd" style="margin-top:6px;"><label><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2z"/></svg> 斗铠描述</label><input type="text" id="badesc" placeholder="银甲金纹…"></div>
    </div></div>
  </details>
</div>

<!-- ===== 模块4：背景与故事 ===== -->
<div class="sec">
  <details>
    <summary>
      <svg class="icon-star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      Ⅳ 背景与故事
      <span class="ar">▼</span>
    </summary>
    <div class="sb"><div class="in">
      <div class="fd"><label><svg class="icon-star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> 性格特质</label><textarea id="pt" rows="2" placeholder="冷静、执着、重情义"></textarea></div>
      <div class="fd"><label><svg class="icon-star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> 特殊能力</label>
        <select id="st"><option value="无">无</option><option value="天生神力">天生神力</option><option value="剑感">剑感</option><option value="元素亲和">元素亲和</option><option value="精神感知">精神感知</option><option value="自愈体质">自愈体质</option><option value="龙族感应">龙族感应</option><option value="空间感知">空间感知</option><option value="战斗直觉">战斗直觉</option><option value="钢铁意志">钢铁意志</option><option value="自定义">自定义</option></select>
        <div id="stCustomWrap" style="display:none;margin-top:4px;"><input type="text" id="stCustom" placeholder="输入特殊能力名称"></div>
      </div>
      <div class="fd"><label><svg class="icon-ghost" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/><path d="M9 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 主要魂灵</label><input type="text" id="ssn" placeholder="如：草蛇"></div>
      <div class="rw"><div class="fd"><label><svg class="icon-ghost" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/><path d="M9 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 魂灵类型</label><select id="sst"><option value="战斗型">战斗型</option><option value="辅助型">辅助型</option><option value="防御型">防御型</option><option value="治疗型">治疗型</option><option value="特殊型">特殊型</option><option value="无魂灵">无魂灵</option></select></div>
      <div class="fd"><label><svg class="icon-ghost" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/><path d="M9 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 魂灵年限</label><select id="ssy"><option value="十年">十年</option><option value="百年">百年</option><option value="千年">千年</option><option value="万年">万年</option><option value="十万年">十万年</option><option value="凶兽（二十万年）">凶兽（二十万年）</option><option value="百万年">百万年</option><option value="不适用">不适用</option></select></div></div>
      <div class="fd"><label><svg class="icon-ghost" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/><path d="M9 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg> 其他魂灵 <sm>(每行一个)</sm></label><textarea id="ess" rows="2"></textarea></div>
      <div class="fd"><label><svg class="icon-quote" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg> 开场白</label><textarea id="greeting" rows="3" placeholder="我的剑，不是为了杀戮而存在的。"></textarea></div>
      <div class="fd"><label><svg class="icon-quote" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg> 场景设定</label><input type="text" id="scenario" placeholder="天斗城·清晨"></div>
    </div></div>
  </details>
</div>

<div id="exportArea" class="export-area">
  <div class="header"><span>📋 复制下方文本到「玩家人设」中</span><button class="bm" id="btnCopyExport" style="font-size:.6em;">📋 复制</button></div>
  <textarea id="exportPreview" rows="6" readonly></textarea>
  <div class="footer">⏱ 导出时间：<span id="exportTime">—</span></div>
</div>
<div id="msg"></div>
<textarea id="cd"></textarea>
<div class="fb"><span>✦ 命运已在你手中 ✦</span></div>
<div class="btn-row">
  <button class="btn-export-persona" id="btnExportPersona">📋 导出玩家人设</button>
  <button class="btn-awaken" id="btnExportJson">⚔ 觉醒 · 铸就档案</button>
</div>
</div>
</div>

<!-- ===== 觉醒动画遮罩 ===== -->
<div id="awakenOverlay">
  <div class="content">
    <div class="title">✦ 武魂觉醒仪式 ✦</div>
    <div class="divider"></div>
    <div class="lines" id="awakenLines">
      <div class="line dim" data-delay="0">━━━━━━━━━━━━━━━━━━━━</div>
      <div class="line" data-delay="400">🔮 检测到魂力波动...</div>
      <div class="line" data-delay="800">⚡ 魂力正在沸腾...</div>
      <div class="line" data-delay="1200">🌿 武魂开始共鸣...</div>
      <div class="line" data-delay="1600">🔥 血脉之力觉醒...</div>
      <div class="line" data-delay="2000">✨ 魂环生成中...</div>
      <div class="line" data-delay="2400">🌟 命运之轮转动...</div>
      <div class="line dim" data-delay="2800">━━━━━━━━━━━━━━━━━━━━</div>
      <div class="line hl" data-delay="3200">✅ 觉醒完成 · 魂师档案已铸就</div>
    </div>
    <div class="close-hint" id="closeHint">✦ 点击任意处关闭 ✦</div>
  </div>
</div>
  `;

  const root = document.querySelector('[data-dlgithub-root="dlgh-greeting"]');
  if (!root) return;
  root.innerHTML = htmlContent;

  // ===== 3. JavaScript 逻辑 =====
  (function() {
    var $ = function(id) { return document.getElementById(id); };

    // ----- 字段映射 -----
    var fields = {
      cn: $('cn'), gd: $('gd'), ag: $('ag'), ht: $('ht'), wt: $('wt'),
      hc: $('hc'), ec: $('ec'), ff: $('ff'),
      msn: $('msn'), mst: $('mst'), sn2: $('sn2'), st2: $('st2'),
      isp: $('isp'), csr: $('csr'), soulTitle: $('soulTitle'),
      sp: $('sp'),
      bl: $('bl'), bll: $('bll'), cbl: $('cbl'),
      coreCount: $('coreCount'), domain: $('domain'),
      ban: $('ban'), bal: $('bal'), bat: $('bat'), badesc: $('badesc'), armorGrade: $('armorGrade'),
      bonePart: $('bonePart'), boneYear: $('boneYear'),
      mechaLevel: $('mechaLevel'), soulDevice: $('soulDevice'), legendWeapon: $('legendWeapon'),
      og: $('og'), og_select: $('og_select'), fc: $('fc'), fbg: $('fbg'), orgIdentity: $('orgIdentity'),
      rp: $('rp'),
      pt: $('pt'), st: $('st'), stCustom: $('stCustom'), stCustomWrap: $('stCustomWrap'),
      ssn: $('ssn'), sst: $('sst'), ssy: $('ssy'), ess: $('ess'),
      greeting: $('greeting'), scenario: $('scenario')
    };
    var dsf = $('dsf'), cbg = $('cbg');
    var pbar = $('pbar'), pct = $('pct');
    var msg = $('msg'), cd = $('cd');
    var exportArea = $('exportArea'), exportPreview = $('exportPreview'), exportTime = $('exportTime');
    var fieldIndicator = $('fieldIndicator');
    var armorParts = $('armorParts'), armorCount = $('armorCount');
    var ringContainer = $('ringContainer');
    var awakenOverlay = $('awakenOverlay');
    var STORAGE_KEY = 'soul_archive_v2';

    // ----- 辅助函数 -----
    function getVal(id) { var el = fields[id]; return el ? (el.value || '').trim() : ''; }
    function getLines(id) { return getVal(id).split('\n').map(function(s){return s.trim();}).filter(function(s){return s!=='';}); }
    function getNum(id) { var v = getVal(id); return v ? Number(v) : null; }
    function getSel(id) { var el = fields[id]; return el ? el.value : ''; }

    // ----- 魂师称号自动换算 -----
    function getSoulTitle(level) {
      var lv = Number(level);
      if (isNaN(lv) || lv < 0) return '未测定';
      if (lv >= 0 && lv <= 9) return '魂士';
      if (lv >= 10 && lv <= 19) return '魂师';
      if (lv >= 20 && lv <= 29) return '大魂师';
      if (lv >= 30 && lv <= 39) return '魂尊';
      if (lv >= 40 && lv <= 49) return '魂宗';
      if (lv >= 50 && lv <= 59) return '魂王';
      if (lv >= 60 && lv <= 69) return '魂帝';
      if (lv >= 70 && lv <= 79) return '魂圣';
      if (lv >= 80 && lv <= 89) return '魂斗罗';
      if (lv >= 90 && lv <= 99) return '封号斗罗';
      if (lv >= 100 && lv <= 109) return '超级斗罗';
      if (lv >= 110 && lv <= 119) return '极限斗罗';
      if (lv >= 120) return '神级';
      return '未知';
    }

    // ----- 斗铠品级颜色 -----
    function getArmorGrade(level) {
      var map = {
        '无': { text: '无斗铠', color: '#5a4a30' },
        '一字斗铠': { text: '一字斗铠 · 白', color: '#b5b5b5' },
        '二字斗铠': { text: '二字斗铠 · 黄', color: '#f0d68a' },
        '三字斗铠': { text: '三字斗铠 · 紫', color: '#9b6bcc' },
        '四字斗铠': { text: '四字斗铠 · 黑', color: '#3a3a3a' },
        '五字斗铠（神级）': { text: '五字斗铠 · 红', color: '#dc3545' },
        '六字斗铠（神级）': { text: '六字斗铠 · 金', color: '#ffd700' }
      };
      return map[level] || { text: level, color: '#5a4a30' };
    }

    // ----- 魂环颜色 -----
    function getRingColor(year) {
      var map = {
        '十年': '#e8e8e8',
        '百年': '#f0d68a',
        '千年': '#9b6bcc',
        '万年': '#2a2a2a',
        '十万年': '#dc3545',
        '凶兽（二十万年）': '#dc3545',
        '百万年': '#ffd700'
      };
      return map[year] || '#5a4a30';
    }

    // ----- 斗铠部件 -----
    var partNames = ['头箍', '胸铠', '护腰', '左臂', '右臂', '左腿', '右腿', '左战靴', '右战靴', '左护肩', '右护肩'];
    var partState = {};

    function initParts() {
      var saved = localStorage.getItem('armor_parts_v2');
      if (saved) { try { partState = JSON.parse(saved); } catch(_) {} }
      renderParts();
    }

    function renderParts() {
      armorParts.innerHTML = '';
      var count = 0;
      partNames.forEach(function(name) {
        var done = !!partState[name];
        if (done) count++;
        var div = document.createElement('div');
        div.className = 'part-item' + (done ? ' done' : '');
        div.innerHTML = '<span class="pcheck">' + (done ? '✓' : '') + '</span><span>' + name + '</span>';
        div.addEventListener('click', function() {
          partState[name] = !partState[name];
          localStorage.setItem('armor_parts_v2', JSON.stringify(partState));
          renderParts();
          updateProgress();
          saveDraft();
          showSoulLog('斗铠部件「' + name + '」' + (partState[name] ? '✅ 已装配' : '⬜ 已卸下'));
        });
        armorParts.appendChild(div);
      });
      armorCount.textContent = count;
    }

    // ----- 魂环管理 -----
    var rings = [];

    function initRings() {
      var saved = localStorage.getItem('soul_rings_v2');
      if (saved) { try { rings = JSON.parse(saved); } catch(_) {} }
      if (!rings.length) rings = [{ year: '百年', name: '', effect: '' }];
      renderRings();
    }

    function renderRings() {
      ringContainer.innerHTML = '';
      rings.forEach(function(ring, idx) {
        var div = document.createElement('div');
        div.className = 'ring-item';
        var dotColor = getRingColor(ring.year);
        div.innerHTML = '<span class="dot" style="background:' + dotColor + ';border-color:' + dotColor + ';"></span>' +
          '<select data-ring-year="' + idx + '">' +
          '<option value="十年"' + (ring.year === '十年' ? 'selected' : '') + '>十年</option>' +
          '<option value="百年"' + (ring.year === '百年' ? 'selected' : '') + '>百年</option>' +
          '<option value="千年"' + (ring.year === '千年' ? 'selected' : '') + '>千年</option>' +
          '<option value="万年"' + (ring.year === '万年' ? 'selected' : '') + '>万年</option>' +
          '<option value="十万年"' + (ring.year === '十万年' ? 'selected' : '') + '>十万年</option>' +
          '<option value="凶兽（二十万年）"' + (ring.year === '凶兽（二十万年）' ? 'selected' : '') + '>凶兽（二十万年）</option>' +
          '<option value="百万年"' + (ring.year === '百万年' ? 'selected' : '') + '>百万年</option>' +
          '</select>' +
          '<input type="text" placeholder="魂技名称" value="' + (ring.name || '') + '" data-ring-name="' + idx + '">' +
          '<input type="text" placeholder="魂技效果" value="' + (ring.effect || '') + '" data-ring-effect="' + idx + '">' +
          '<button class="bm" data-ring-del="' + idx + '" style="font-size:.5em;padding:2px 6px;min-height:20px;min-width:20px;">✕</button>';
        ringContainer.appendChild(div);
      });
      // 绑定事件
      ringContainer.querySelectorAll('[data-ring-year]').forEach(function(el) {
        el.addEventListener('change', function() {
          var idx = Number(this.dataset.ringYear);
          rings[idx].year = this.value;
          localStorage.setItem('soul_rings_v2', JSON.stringify(rings));
          renderRings();
          updateProgress();
          saveDraft();
          showSoulLog('魂环' + (idx + 1) + ' 年份更新为 ' + this.value);
        });
      });
      ringContainer.querySelectorAll('[data-ring-name]').forEach(function(el) {
        el.addEventListener('input', function() {
          var idx = Number(this.dataset.ringName);
          rings[idx].name = this.value;
          localStorage.setItem('soul_rings_v2', JSON.stringify(rings));
          saveDraft();
        });
      });
      ringContainer.querySelectorAll('[data-ring-effect]').forEach(function(el) {
        el.addEventListener('input', function() {
          var idx = Number(this.dataset.ringEffect);
          rings[idx].effect = this.value;
          localStorage.setItem('soul_rings_v2', JSON.stringify(rings));
          saveDraft();
        });
      });
      ringContainer.querySelectorAll('[data-ring-del]').forEach(function(el) {
        el.addEventListener('click', function() {
          var idx = Number(this.dataset.ringDel);
          if (rings.length <= 1) { showMessage('至少保留一个魂环', true); return; }
          rings.splice(idx, 1);
          localStorage.setItem('soul_rings_v2', JSON.stringify(rings));
          renderRings();
          updateProgress();
          saveDraft();
          showSoulLog('已移除一个魂环');
        });
      });
    }

    // ----- 魂导日志（沉浸式反馈）-----
    function showSoulLog(text) {
      var logMsg = $('msg');
      if (!logMsg) return;
      logMsg.textContent = '📟 ' + text;
      logMsg.className = '';
      logMsg.style.display = 'block';
      clearTimeout(logMsg._timer);
      logMsg._timer = setTimeout(function() { logMsg.style.display = 'none'; }, 2500);
    }

    // ----- 收集数据 -----
    function collectData() {
      var dual = (getSel('mst') === '双生武魂');
      var bt = getSel('bl');
      var fb = (bt === '自定血脉') ? getVal('cbl') : bt;
      var soul;
      if (dual) {
        soul = {
          "武魂类型": "双生武魂",
          "第一武魂": { "武魂名称": getVal('msn') || '未填写', "武魂类型": "（双生武魂，请参考第二武魂类型）" },
          "第二武魂": { "武魂名称": getVal('sn2') || '未填写', "武魂类型": getSel('st2') },
          "先天魂力": getSel('isp'),
          "当前魂力等级": getVal('csr') ? getVal('csr') + '级' : '未填写',
          "魂师称号": getSoulTitle(getVal('csr'))
        };
      } else {
        soul = {
          "武魂名称": getVal('msn') || '未填写',
          "武魂类型": getSel('mst'),
          "先天魂力": getSel('isp'),
          "当前魂力等级": getVal('csr') ? getVal('csr') + '级' : '未填写',
          "魂师称号": getSoulTitle(getVal('csr'))
        };
      }
      var spVal = getVal('st');
      if (spVal === '自定义') { spVal = getVal('stCustom') || '自定义'; }

      // 收集魂环
      var ringData = rings.map(function(r) {
        return { "年份": r.year, "魂技名称": r.name || '未命名', "魂技效果": r.effect || '无' };
      });

      // 收集斗铠部件
      var partsDone = partNames.filter(function(n) { return !!partState[n]; });

      return {
        "基本信息": {
          "姓名": getVal('cn') || '未命名',
          "性别": getSel('gd'),
          "年龄": getNum('ag'),
          "身高_cm": getNum('ht'),
          "体重_kg": getNum('wt')
        },
        "背景与阵营": {
          "出身地": getVal('og') || '',
          "所属阵营": getSel('fc'),
          "组织身份": getVal('orgIdentity') || '',
          "家族背景": getSel('fbg')
        },
        "武魂与魂力": soul,
        "精神力": { "精神力等级": getSel('sp') },
        "血脉传承": {
          "血脉类型": fb || '',
          "血脉觉醒程度": getSel('bll')
        },
        "魂核与领域": {
          "魂核数量": getSel('coreCount'),
          "领域名称": getVal('domain') || ''
        },
        "魂环": ringData,
        "魂灵": {
          "主要魂灵名称": getVal('ssn') || '',
          "魂灵类型": getSel('sst'),
          "魂灵年限": getSel('ssy'),
          "其他魂灵": getLines('ess')
        },
        "斗铠": {
          "斗铠名称": getVal('ban') || '',
          "斗铠等级": getSel('bal'),
          "斗铠侧重": getSel('bat'),
          "斗铠品级": getArmorGrade(getSel('bal')).text,
          "斗铠部件完成度": partsDone.length + '/' + partNames.length,
          "斗铠描述": getVal('badesc') || ''
        },
        "魂骨": {
          "魂骨部位": getSel('bonePart'),
          "魂骨年限": getSel('boneYear')
        },
        "机甲与魂导器": {
          "机甲等级": getSel('mechaLevel'),
          "魂导器名称": getVal('soulDevice') || '',
          "传说武器": getVal('legendWeapon') || ''
        },
        "性格与特质": {
          "性格特质": getLines('pt'),
          "特殊能力": spVal
        },
        "开场白与场景": {
          "开场白": getVal('greeting') || '',
          "场景设定": getVal('scenario') || ''
        }
      };
    }

    // ----- 更新进度 -----
    function updateProgress() {
      var fieldIds = ['cn','gd','ag','ht','wt','hc','ec','msn','mst','isp','csr','sp','bl','bll','ssn','sst','ssy','ban','bal','bat','second_prof','second_level','og','fc','fbg','rp','greeting','scenario','orgIdentity','coreCount','domain','bonePart','boneYear','mechaLevel','soulDevice','legendWeapon'];
      var filled = 0;
      var total = fieldIds.length;
      for (var i = 0; i < fieldIds.length; i++) {
        var id = fieldIds[i];
        var el = fields[id];
        if (el && el.value && el.value.trim() !== '' && el.value !== '无' && el.value !== '无斗铠') filled++;
      }
      // 魂环额外计数
      rings.forEach(function(r) { if (r.name && r.name.trim()) filled++; if (r.effect && r.effect.trim()) filled++; });
      // 斗铠部件
      partNames.forEach(function(n) { if (partState[n]) filled++; });

      var pctVal = Math.min(100, Math.round((filled / (total + rings.length * 2 + partNames.length)) * 100));
      pct.textContent = filled;
      var totalEl = document.getElementById('totalFields');
      if (totalEl) totalEl.textContent = (total + rings.length * 2 + partNames.length);
      pbar.style.width = pctVal + '%';
      pbar.className = '';
      if (pctVal < 30) pbar.classList.add('pbar-low');
      else if (pctVal < 70) pbar.classList.add('pbar-mid');
      else pbar.classList.add('pbar-high');

      // 模块完成度标记
      document.querySelectorAll('.sec').forEach(function(sec) {
        var inputs = sec.querySelectorAll('input, textarea, select');
        var hasVal = false;
        inputs.forEach(function(inp) {
          if (inp.value && inp.value.trim() !== '' && inp.value !== '无' && inp.value !== '无斗铠') hasVal = true;
        });
        var dot = sec.querySelector('.dot');
        if (dot) { if (hasVal) dot.classList.add('filled'); else dot.classList.remove('filled'); }
      });
    }

    // ----- 保存与加载 -----
    function saveDraft() {
      try {
        var data = collectData();
        data._rings = rings;
        data._parts = partState;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch(_) {}
    }

    function loadDraft() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        var data = JSON.parse(raw);
        if (!data || typeof data !== 'object') return;
        // 恢复魂环
        if (data._rings && Array.isArray(data._rings) && data._rings.length) {
          rings = data._rings;
          renderRings();
        }
        // 恢复部件
        if (data._parts && typeof data._parts === 'object') {
          partState = data._parts;
          renderParts();
        }
        // 恢复字段
        var map = {
          'cn': '基本信息.姓名', 'gd': '基本信息.性别', 'ag': '基本信息.年龄',
          'ht': '基本信息.身高_cm', 'wt': '基本信息.体重_kg',
          'hc': '外貌特征.发色', 'ec': '外貌特征.瞳色', 'ff': '外貌特征.面部特征',
          'msn': '武魂与魂力.武魂名称', 'mst': '武魂与魂力.武魂类型',
          'isp': '武魂与魂力.先天魂力', 'csr': '武魂与魂力.当前魂力等级',
          'sn2': '武魂与魂力.第二武魂.武魂名称', 'st2': '武魂与魂力.第二武魂.武魂类型',
          'sp': '精神力.精神力等级', 'bl': '血脉传承.血脉类型',
          'bll': '血脉传承.血脉觉醒程度', 'cbl': '血脉传承.血脉类型',
          'ssn': '魂灵.主要魂灵名称', 'sst': '魂灵.魂灵类型',
          'ssy': '魂灵.魂灵年限', 'ess': '魂灵.其他魂灵',
          'ban': '斗铠.斗铠名称', 'bal': '斗铠.斗铠等级',
          'bat': '斗铠.斗铠侧重', 'badesc': '斗铠.斗铠描述',
          'og': '背景与阵营.出身地', 'fc': '背景与阵营.所属阵营',
          'fbg': '背景与阵营.家族背景', 'rp': '魂师定位.魂师定位',
          'pt': '性格与特质.性格特质', 'st': '性格与特质.特殊能力',
          'greeting': '开场白与场景.开场白', 'scenario': '开场白与场景.场景设定'
        };
        function setField(id, path) {
          var el = fields[id];
          if (!el) return;
          var val = data;
          var parts = path.split('.');
          for (var i = 0; i < parts.length; i++) {
            if (val && typeof val === 'object' && parts[i] in val) val = val[parts[i]];
            else { val = undefined; break; }
          }
          if (val === undefined || val === null) return;
          if (Array.isArray(val)) val = val.join('\n');
          if (el.tagName === 'SELECT') {
            var opts = Array.from(el.options);
            var match = opts.find(function(o) { return o.value === String(val); });
            if (match) el.value = String(val);
            else el.value = val;
          } else { el.value = val; }
        }
        for (var key in map) { if (map.hasOwnProperty(key)) setField(key, map[key]); }
        // 额外字段
        if (data.背景与阵营 && data.背景与阵营.组织身份) {
          fields.orgIdentity.value = data.背景与阵营.组织身份;
        }
        if (data.魂核与领域) {
          if (data.魂核与领域.魂核数量) fields.coreCount.value = data.魂核与领域.魂核数量;
          if (data.魂核与领域.领域名称) fields.domain.value = data.魂核与领域.领域名称;
        }
        if (data.魂骨) {
          if (data.魂骨.魂骨部位) fields.bonePart.value = data.魂骨.魂骨部位;
          if (data.魂骨.魂骨年限) fields.boneYear.value = data.魂骨.魂骨年限;
        }
        if (data.机甲与魂导器) {
          if (data.机甲与魂导器.机甲等级) fields.mechaLevel.value = data.机甲与魂导器.机甲等级;
          if (data.机甲与魂导器.魂导器名称) fields.soulDevice.value = data.机甲与魂导器.魂导器名称;
          if (data.机甲与魂导器.传说武器) fields.legendWeapon.value = data.机甲与魂导器.传说武器;
        }
        if (fields.og_select) {
          var ogVal = getVal('og');
          var opts2 = Array.from(fields.og_select.options);
          var match2 = opts2.find(function(o) { return o.value === ogVal; });
          if (match2) fields.og_select.value = ogVal;
          else fields.og_select.value = '';
        }
        var stVal = getVal('st');
        if (stVal && !Array.from(fields.st.options).find(function(o) { return o.value === stVal; })) {
          fields.st.value = '自定义';
          fields.stCustom.value = stVal;
          fields.stCustomWrap.style.display = 'block';
        } else {
          fields.st.value = stVal || '无';
          fields.stCustomWrap.style.display = 'none';
        }
        // 更新魂师称号
        updateSoulTitle();
        // 更新斗铠品级
        updateArmorGrade();
        toggleDualSoul();
        toggleCustomBlood();
        updateProgress();
      } catch(_) {}
    }

    // ----- 魂师称号更新 -----
    function updateSoulTitle() {
      var lv = getVal('csr');
      var title = getSoulTitle(lv);
      fields.soulTitle.value = title;
    }

    // ----- 斗铠品级更新 -----
    function updateArmorGrade() {
      var level = getSel('bal');
      var info = getArmorGrade(level);
      fields.armorGrade.innerHTML = '<span style="color:' + info.color + ';font-weight:600;">●</span> ' + info.text;
    }

    // ----- 切换函数 -----
    function toggleDualSoul() { dsf.classList.toggle('ac', getSel('mst') === '双生武魂'); }
    function toggleCustomBlood() { cbg.style.display = (getSel('bl') === '自定血脉') ? 'block' : 'none'; }

    // ----- 消息 -----
    function showMessage(text, isError) {
      msg.textContent = text;
      msg.className = isError ? 'error' : '';
      msg.style.display = 'block';
      clearTimeout(msg._timer);
      msg._timer = setTimeout(function() { msg.style.display = 'none'; }, 3000);
    }

    // ----- 复制 -----
    function copyToClipboard(text, silent) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).catch(function() { fallbackCopy(text, silent); });
        } else { fallbackCopy(text, silent); }
      } catch(_) { fallbackCopy(text, silent); }
    }
    function fallbackCopy(text, silent) {
      cd.value = text;
      cd.style.position = 'static';
      cd.style.opacity = '1';
      cd.style.width = '100%';
      cd.style.height = '80px';
      cd.style.pointerEvents = 'auto';
      cd.style.marginTop = '8px';
      cd.select();
      try {
        if (document.execCommand('copy')) { if (!silent) showMessage('✅ 已复制！'); }
        else { if (!silent) showMessage('⚠️ 请手动复制'); }
      } catch(_) { if (!silent) showMessage('⚠️ 请手动复制'); }
      setTimeout(function() {
        cd.style.position = 'absolute';
        cd.style.left = '-9999px';
        cd.style.top = '-9999px';
        cd.style.opacity = '0';
        cd.style.width = '1px';
        cd.style.height = '1px';
        cd.style.pointerEvents = 'none';
      }, 6000);
    }

    // ----- 导出人设（纯文本）-----
    function generatePersonaText() {
      var d = collectData();
      var v = d.武魂与魂力;
      var lines = [];
      lines.push('【玩家：' + (d.基本信息.姓名 || '未命名') + '】');
      lines.push('');
      lines.push('基本信息：');
      lines.push('- 姓名：' + (d.基本信息.姓名 || '未命名'));
      lines.push('- 性别：' + (d.基本信息.性别 || '未填写'));
      if (d.基本信息.年龄) lines.push('- 年龄：' + d.基本信息.年龄 + '岁');
      if (d.基本信息.身高_cm) lines.push('- 身高：' + d.基本信息.身高_cm + 'cm');
      if (d.基本信息.体重_kg) lines.push('- 体重：' + d.基本信息.体重_kg + 'kg');
      lines.push('');
      if (d.背景与阵营.出身地) lines.push('- 出身地：' + d.背景与阵营.出身地);
      if (d.背景与阵营.所属阵营) lines.push('- 所属阵营：' + d.背景与阵营.所属阵营);
      if (d.背景与阵营.组织身份) lines.push('- 组织身份：' + d.背景与阵营.组织身份);
      if (d.背景与阵营.家族背景) lines.push('- 家族背景：' + d.背景与阵营.家族背景);
      lines.push('');
      lines.push('武魂与魂力：');
      if (v.武魂类型 === '双生武魂') {
        lines.push('- 武魂：' + (v.第一武魂.武魂名称 || '未填写') + '（' + v.武魂类型 + '）');
        if (v.第二武魂.武魂名称 && v.第二武魂.武魂名称 !== '未填写') {
          lines.push('- 第二武魂：' + v.第二武魂.武魂名称 + '（' + (v.第二武魂.武魂类型 || '未填写') + '）');
        }
      } else {
        lines.push('- 武魂：' + (v.武魂名称 || '未填写') + '（' + v.武魂类型 + '）');
      }
      if (v.先天魂力) lines.push('- 先天魂力：' + v.先天魂力);
      if (v.当前魂力等级 && v.当前魂力等级 !== '未填写') {
        lines.push('- 当前魂力：' + v.当前魂力等级);
        if (v.魂师称号) lines.push('- 魂师称号：' + v.魂师称号);
      }
      lines.push('');
      if (d.精神力.精神力等级) {
        lines.push('精神力：');
        lines.push('- 精神力境界：' + d.精神力.精神力等级);
        lines.push('');
      }
      if (d.血脉传承.血脉类型 && d.血脉传承.血脉类型 !== '' && d.血脉传承.血脉类型 !== '未填写') {
        lines.push('血脉：');
        lines.push('- 血脉类型：' + d.血脉传承.血脉类型);
        if (d.血脉传承.血脉觉醒程度) lines.push('- 觉醒程度：' + d.血脉传承.血脉觉醒程度);
        lines.push('');
      }
      if (d.魂核与领域) {
        if (d.魂核与领域.魂核数量 && d.魂核与领域.魂核数量 !== '0') {
          lines.push('- 魂核数量：' + d.魂核与领域.魂核数量);
        }
        if (d.魂核与领域.领域名称) lines.push('- 领域：' + d.魂核与领域.领域名称);
        if (lines[lines.length - 1].startsWith('- 魂核') || lines[lines.length - 1].startsWith('- 领域')) lines.push('');
      }
      if (d.魂环 && d.魂环.length) {
        lines.push('魂环配置：');
        d.魂环.forEach(function(r, idx) {
          var colorMap = { '十年':'白', '百年':'黄', '千年':'紫', '万年':'黑', '十万年':'红', '凶兽（二十万年）':'红', '百万年':'金' };
          lines.push('- 第' + (idx + 1) + '魂环：' + r.年份 + '（' + (colorMap[r.年份] || '?') + '）· ' + r.魂技名称 + '：' + r.魂技效果);
        });
        lines.push('');
      }
      if (d.魂灵.主要魂灵名称 && d.魂灵.主要魂灵名称 !== '' && d.魂灵.主要魂灵名称 !== '未填写') {
        lines.push('魂灵：');
        lines.push('- 主要魂灵：' + d.魂灵.主要魂灵名称 + '（' + d.魂灵.魂灵类型 + '·' + d.魂灵.魂灵年限 + '）');
        if (d.魂灵.其他魂灵.length) {
          d.魂灵.其他魂灵.forEach(function(s) { lines.push('- 其他魂灵：' + s); });
        }
        lines.push('');
      }
      if (d.斗铠.斗铠名称 && d.斗铠.斗铠名称 !== '' && d.斗铠.斗铠名称 !== '未填写') {
        lines.push('斗铠：');
        lines.push('- 斗铠名称：' + d.斗铠.斗铠名称);
        if (d.斗铠.斗铠等级 && d.斗铠.斗铠等级 !== '无') lines.push('- 斗铠等级：' + d.斗铠.斗铠等级);
        if (d.斗铠.斗铠品级) lines.push('- 斗铠品级：' + d.斗铠.斗铠品级);
        if (d.斗铠.斗铠侧重 && d.斗铠.斗铠侧重 !== '不适用') lines.push('- 斗铠侧重：' + d.斗铠.斗铠侧重);
        if (d.斗铠.斗铠部件完成度) lines.push('- 部件完成度：' + d.斗铠.斗铠部件完成度);
        if (d.斗铠.斗铠描述) lines.push('- 斗铠描述：' + d.斗铠.斗铠描述);
        lines.push('');
      }
      if (d.魂骨) {
        if (d.魂骨.魂骨部位 && d.魂骨.魂骨部位 !== '无') {
          lines.push('魂骨：');
          lines.push('- 魂骨部位：' + d.魂骨.魂骨部位);
          if (d.魂骨.魂骨年限 && d.魂骨.魂骨年限 !== '无') lines.push('- 魂骨年限：' + d.魂骨.魂骨年限);
          lines.push('');
        }
      }
      if (d.机甲与魂导器) {
        if (d.机甲与魂导器.机甲等级 && d.机甲与魂导器.机甲等级 !== '无') {
          lines.push('- 机甲等级：' + d.机甲与魂导器.机甲等级);
        }
        if (d.机甲与魂导器.魂导器名称) lines.push('- 魂导器：' + d.机甲与魂导器.魂导器名称);
        if (d.机甲与魂导器.传说武器) lines.push('- 传说武器：' + d.机甲与魂导器.传说武器);
        if (lines[lines.length - 1].startsWith('- 机甲') || lines[lines.length - 1].startsWith('- 魂导器') || lines[lines.length - 1].startsWith('- 传说武器')) lines.push('');
      }
      if (d.性格与特质.性格特质.length) {
        lines.push('性格特质：' + d.性格与特质.性格特质.join('、'));
      }
      if (d.性格与特质.特殊能力 && d.性格与特质.特殊能力 !== '无' && d.性格与特质.特殊能力 !== '') {
        lines.push('特殊能力：' + d.性格与特质.特殊能力);
      }
      if (d.开场白与场景.开场白) {
        lines.push('');
        lines.push('开场白：' + d.开场白与场景.开场白);
      }
      if (d.开场白与场景.场景设定) {
        lines.push('场景：' + d.开场白与场景.场景设定);
      }
      return lines.join('\n');
    }

    function showExport() {
      var text = generatePersonaText();
      exportPreview.value = text;
      exportArea.classList.add('show');
      var now = new Date();
      exportTime.textContent = now.toLocaleString();
      copyToClipboard(text, true);
      showMessage('✅ 玩家人设已导出并复制！');
      if (navigator.vibrate) navigator.vibrate(30);
      exportPreview.focus();
      exportPreview.select();
    }

    // ----- 觉醒动画（带文字动画）-----
    function showAwakenAnimation() {
      awakenOverlay.classList.add('active');
      var lines = awakenOverlay.querySelectorAll('.line');
      lines.forEach(function(line) {
        line.classList.remove('show');
        var delay = parseInt(line.dataset.delay) || 0;
        setTimeout(function() { line.classList.add('show'); }, delay);
      });
      // 显示关闭提示
      setTimeout(function() {
        var hint = document.getElementById('closeHint');
        if (hint) hint.classList.add('show');
      }, 3600);
      // 自动关闭（6秒后）
      var autoClose = setTimeout(function() {
        awakenOverlay.classList.remove('active');
        var hint = document.getElementById('closeHint');
        if (hint) hint.classList.remove('show');
        // 然后执行导出
        exportJson();
      }, 6000);
      // 点击关闭
      awakenOverlay.addEventListener('click', function handler() {
        clearTimeout(autoClose);
        awakenOverlay.classList.remove('active');
        var hint = document.getElementById('closeHint');
        if (hint) hint.classList.remove('show');
        awakenOverlay.removeEventListener('click', handler);
        // 执行导出
        exportJson();
      });
    }

    // ----- 导出 JSON（觉醒）-----
    function exportJson() {
      var data = collectData();
      var json = JSON.stringify(data, function(k, v) { return Array.isArray(v) && v.length === 0 ? [] : v; }, 2);
      copyToClipboard(json);
      showMessage('✅ 觉醒档案已铸就！');
    }

    // ----- 随机生成（天命轮盘）-----
    function randomGenerate() {
      var surnames = ['唐', '李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马'];
      var givenNames = ['舞麟', '小舞', '唐三', '霍雨浩', '王冬', '贝贝', '徐三石', '和菜头', '萧萧', '江楠楠', '戴沐白', '奥斯卡', '朱竹清', '宁荣荣'];
      var spirits = ['蓝银草', '白虎', '凤凰', '灵猫', '龙', '剑', '枪', '锤', '书', '琴', '鼎', '塔', '荆棘', '冰雪', '火焰'];
      var spiritTypes = ['兽武魂', '器武魂', '植物武魂', '元素武魂', '变异武魂'];

      // 随机选
      var name = surnames[Math.floor(Math.random() * surnames.length)] + givenNames[Math.floor(Math.random() * givenNames.length)];
      var gender = Math.random() > 0.5 ? '男' : '女';
      var age = Math.floor(Math.random() * 20) + 6;
      var height = Math.floor(Math.random() * 60) + 150;
      var weight = Math.floor(Math.random() * 30) + 50;
      var spirit = spirits[Math.floor(Math.random() * spirits.length)];
      var spiritType = spiritTypes[Math.floor(Math.random() * spiritTypes.length)];
      var innate = ['10级（满魂力）', '9级', '8级', '7级', '6级', '5级', '4级', '3级'][Math.floor(Math.random() * 8)];
      var soulLevel = Math.floor(Math.random() * 40) + 10;
      var bloods = ['无特殊血脉', '金龙王血脉', '银龙王血脉', '龙族血脉', '海神血脉', '凤凰血脉', '泰坦血脉'];
      var blood = bloods[Math.floor(Math.random() * bloods.length)];

      // 填入
      fields.cn.value = name;
      fields.gd.value = gender;
      fields.ag.value = age;
      fields.ht.value = height;
      fields.wt.value = weight;
      fields.msn.value = spirit;
      fields.mst.value = spiritType;
      fields.isp.value = innate;
      fields.csr.value = soulLevel;
      fields.bl.value = blood;
      fields.bll.value = ['未觉醒', '初步觉醒', '部分觉醒', '深度觉醒'][Math.floor(Math.random() * 4)];

      // 随机生成魂环
      var ringYears = ['十年', '百年', '百年', '百年', '千年', '千年', '万年', '十万年'];
      rings = [];
      var ringCount = Math.floor(Math.random() * 3) + 1;
      for (var i = 0; i < ringCount; i++) {
        var y = ringYears[Math.floor(Math.random() * ringYears.length)];
        var names = ['缠绕', '冲击', '守护', '治愈', '瞬移', '狂暴', '冰封', '烈焰'];
        rings.push({ year: y, name: names[Math.floor(Math.random() * names.length)] + '魂技', effect: '造成' + (Math.floor(Math.random() * 50) + 20) + '%伤害' });
      }
      localStorage.setItem('soul_rings_v2', JSON.stringify(rings));
      renderRings();

      // 随机生成血脉觉醒程度
      if (blood !== '无特殊血脉') {
        var levels = ['未觉醒', '初步觉醒', '部分觉醒', '深度觉醒', '完全觉醒'];
        fields.bll.value = levels[Math.floor(Math.random() * levels.length)];
      }

      // 更新UI
      updateSoulTitle();
      updateArmorGrade();
      toggleDualSoul();
      toggleCustomBlood();
      saveDraft();
      updateProgress();
      showSoulLog('🎲 天命已定 · 魂师档案已随机生成');
      showMessage('🎲 已生成随机角色！');
    }

    // ----- 清空 -----
    function clearAll() {
      if (!confirm('确定清空所有字段吗？')) return;
      for (var key in fields) {
        if (fields.hasOwnProperty(key) && fields[key]) {
          if (fields[key].tagName === 'SELECT') fields[key].selectedIndex = 0;
          else fields[key].value = '';
        }
      }
      fields.stCustomWrap.style.display = 'none';
      rings = [{ year: '百年', name: '', effect: '' }];
      localStorage.setItem('soul_rings_v2', JSON.stringify(rings));
      renderRings();
      partState = {};
      localStorage.setItem('armor_parts_v2', JSON.stringify(partState));
      renderParts();
      localStorage.removeItem(STORAGE_KEY);
      toggleDualSoul();
      toggleCustomBlood();
      updateSoulTitle();
      updateArmorGrade();
      updateProgress();
      showMessage('🗑 已清空');
    }

    // ----- 绑定事件 -----
    function bindEvents() {
      // 武魂类型切换
      fields.mst.addEventListener('change', function() {
        toggleDualSoul();
        if (getSel('mst') === '神级武魂') {
          fields.isp.value = '10级（满魂力）';
          fields.isp.disabled = true;
        } else { fields.isp.disabled = false; }
        saveDraft();
        updateProgress();
      });
      // 血脉切换
      fields.bl.addEventListener('change', function() { toggleCustomBlood(); saveDraft(); updateProgress(); });
      // 出身地
      fields.og_select.addEventListener('change', function() { fields.og.value = this.value; saveDraft(); updateProgress(); });
      // 特殊能力
      fields.st.addEventListener('change', function() {
        if (this.value === '自定义') { fields.stCustomWrap.style.display = 'block'; fields.stCustom.focus(); }
        else { fields.stCustomWrap.style.display = 'none'; }
        saveDraft(); updateProgress();
      });
      // 魂力等级 → 自动更新称号
      fields.csr.addEventListener('input', function() {
        updateSoulTitle();
        saveDraft();
        updateProgress();
        var lv = getVal('csr');
        if (lv) showSoulLog('魂力等级更新：' + lv + '级 → ' + getSoulTitle(lv));
      });
      // 斗铠等级 → 更新品级
      fields.bal.addEventListener('change', function() {
        updateArmorGrade();
        saveDraft();
        updateProgress();
        var info = getArmorGrade(getSel('bal'));
        showSoulLog('斗铠等级更新：' + info.text);
      });

      // 自动保存
      var autoSave = function() { saveDraft(); updateProgress(); };
      var inputs = document.querySelectorAll('input, textarea, select');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', autoSave);
        inputs[i].addEventListener('change', autoSave);
      }

      // 焦点提示
      document.querySelectorAll('input, textarea, select').forEach(function(el) {
        el.addEventListener('focus', function() {
          var label = this.closest('.fd');
          if (label) { var lbl = label.querySelector('label'); if (lbl) { fieldIndicator.textContent = lbl.textContent.trim().replace(/[🔹◆◈]/g,'').trim(); fieldIndicator.classList.add('show'); clearTimeout(fieldIndicator._timer); fieldIndicator._timer = setTimeout(function(){ fieldIndicator.classList.remove('show'); }, 2000); } }
          setTimeout(function(){ el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 300);
        });
      });

      // 双击标题展开/收起
      document.getElementById('mainTitle').addEventListener('dblclick', function() {
        var first = document.querySelector('.sec details');
        var isOpen = first ? first.hasAttribute('open') : false;
        var details = document.querySelectorAll('.sec details');
        details.forEach(function(d) { if (isOpen) d.removeAttribute('open'); else d.setAttribute('open', 'open'); });
        showMessage(isOpen ? '全部收起' : '全部展开');
      });

      // 按钮
      $('btnExportPersona').addEventListener('click', showExport);
      $('btnExportJson').addEventListener('click', function() {
        // 触发觉醒动画
        showAwakenAnimation();
      });
      $('btnClearAll').addEventListener('click', clearAll);
      $('btnRandom').addEventListener('click', randomGenerate);
      $('btnCopyExport').addEventListener('click', function() { copyToClipboard(exportPreview.value); showMessage('已复制！'); });
      $('btnAddRing').addEventListener('click', function() {
        if (rings.length >= 9) { showMessage('最多9个魂环', true); return; }
        rings.push({ year: '百年', name: '', effect: '' });
        localStorage.setItem('soul_rings_v2', JSON.stringify(rings));
        renderRings();
        updateProgress();
        saveDraft();
        showSoulLog('已添加一个新的魂环槽位');
      });
    }

    // ----- 初始化 -----
    function init() {
      fields.isp.disabled = (getSel('mst') === '神级武魂');
      initParts();
      initRings();
      loadDraft();
      toggleDualSoul();
      toggleCustomBlood();
      updateSoulTitle();
      updateArmorGrade();
      bindEvents();
      updateProgress();

      // 折叠面板点击展开/收起
      document.querySelectorAll('.sec details').forEach(function(detail) {
        var summary = detail.querySelector('summary');
        if (summary) {
          summary.addEventListener('click', function(e) {
            e.preventDefault();
            var isOpen = detail.hasAttribute('open');
            if (isOpen) detail.removeAttribute('open');
            else detail.setAttribute('open', 'open');
          });
        }
      });

      exportPreview.addEventListener('focus', function() { this.select(); });

      // 魂导日志启动提示
      setTimeout(function() { showSoulLog('✦ 魂导终端已启动 · 开始你的觉醒之旅 ✦'); }, 500);
    }

    init();
  })();
})();