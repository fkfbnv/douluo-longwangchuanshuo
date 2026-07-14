// ========== greeting.js - 斗罗大陆III 龙王传说 魂师觉醒 v4.3（完全分步） ==========
(function(){
"use strict";
const styleText=`*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
.soul-app-container{font-family:system-ui,'Microsoft YaHei',sans-serif;background:radial-gradient(ellipse at 50% 0,#1c1308 0,#0d0804 55%,#060302 100%);background-attachment:fixed;color:#e8dcc8;line-height:1.6;padding:8px 8px 20px;display:flex;justify-content:center;}
#app{max-width:560px;width:100%;padding:16px 14px 140px 14px;background:linear-gradient(170deg,#1c130a,#23180d 30%,#1a1008 60%,#140c05);border:2px solid #7a5c2e;border-radius:14px;box-shadow:0 0 40px rgba(180,130,40,.18),0 8px 32px rgba(0,0,0,.55),inset 0 0 20px rgba(120,70,20,.08);position:relative;z-index:1;overflow:hidden;}
#app::before{content:'';position:absolute;top:-1px;left:-30%;right:-30%;height:2px;background:linear-gradient(90deg,transparent,#b5343a,#f0d68a,#b5343a,transparent);opacity:.8;border-radius:0 0 50% 50%;}
.title-wrap{text-align:center;margin-bottom:6px;position:relative;}
.title-ornament{color:#f0d68a;font-size:.55em;letter-spacing:10px;opacity:.5;font-weight:300;margin-bottom:2px;}
.title-ornament span{display:inline-block;animation:ornamentPulse 3s ease-in-out infinite;}
.title-ornament span:nth-child(1){animation-delay:0s;}
.title-ornament span:nth-child(2){animation-delay:0.5s;}
.title-ornament span:nth-child(3){animation-delay:1s;}
.title-ornament span:nth-child(4){animation-delay:1.5s;}
.title-ornament span:nth-child(5){animation-delay:2s;}
@keyframes ornamentPulse{0%,100%{opacity:.4;}50%{opacity:1;}}
h1{text-align:center;color:#dc3545;font-size:2.2em;font-weight:700;letter-spacing:12px;text-shadow:0 0 30px rgba(220,50,60,.5),0 0 60px rgba(220,50,60,.2),0 2px 12px rgba(0,0,0,.6);font-family:'STKaiti','KaiTi','楷体',serif;cursor:pointer;min-height:44px;display:flex;align-items:center;justify-content:center;user-select:none;transition:.3s;position:relative;transform:scale(1);}
h1:hover{transform:scale(1.02);text-shadow:0 0 40px rgba(220,50,60,.7),0 0 80px rgba(220,50,60,.3),0 2px 16px rgba(0,0,0,.6);}
h1:active{transform:scale(.97);}
.title-divider{text-align:center;color:#f0d68a;font-size:.35em;letter-spacing:6px;opacity:.3;margin-top:-2px;font-weight:300;}
.subtitle{text-align:center;font-size:.7em;color:#b5a080;margin:4px 0 10px 0;letter-spacing:8px;font-style:italic;opacity:.7;}
.step-nav{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:8px 0 10px 0;padding:6px 10px;background:rgba(0,0,0,.3);border-radius:8px;border:1px solid rgba(180,130,40,.08);}
.step-nav .step-btn{background:rgba(255,255,255,.04);border:1px solid rgba(180,130,40,.15);color:#b5a080;border-radius:6px;padding:4px 12px;font-size:.7em;cursor:pointer;transition:.2s;touch-action:manipulation;min-height:30px;display:flex;align-items:center;gap:4px;}
.step-nav .step-btn:hover{background:rgba(255,255,255,.08);border-color:#d4a745;color:#f0d68a;}
.step-nav .step-btn:disabled{opacity:.2;cursor:default;pointer-events:none;}
.step-nav .step-btn:active{transform:scale(.92);}
.step-nav .step-info{font-size:.7em;color:#b5a080;letter-spacing:1px;flex:1;text-align:center;}
.step-nav .step-info .current{color:#f0d68a;font-weight:600;}
.step-nav .step-info .total{color:#5a4a30;}
.tb{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;align-items:center;}
.tb .p{flex:1;min-width:60px;font-size:.7em;color:#b5a080;font-weight:300;letter-spacing:1px;}
.tb .p span{color:#f0d68a;font-weight:600;}
.pb{width:100%;height:3px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden;margin-top:2px;}
.pb div{height:100%;border-radius:2px;transition:width .6s ease;}
.pb .pbar-low{background:linear-gradient(90deg,#8b3a3a,#c96a4a);}
.pb .pbar-mid{background:linear-gradient(90deg,#c8963e,#f0d68a);}
.pb .pbar-high{background:linear-gradient(90deg,#4ac9b0,#6ee7b7);}
.tool-group{display:flex;gap:3px;align-items:center;flex-shrink:0;flex-wrap:wrap;}
.bm{padding:3px 8px;font-size:.6em;border-radius:4px;border:1px solid rgba(180,130,40,.2);background:rgba(255,255,255,.04);color:#c4b090;cursor:pointer;transition:.2s;touch-action:manipulation;font-weight:300;letter-spacing:0.5px;white-space:nowrap;min-height:28px;min-width:28px;display:inline-flex;align-items:center;justify-content:center;}
.bm:active{transform:scale(.92);background:rgba(255,255,255,.08);}
.bm:hover{background:rgba(255,255,255,.08);border-color:#d4a745;color:#f0d68a;}
.bm.bm-gold{background:rgba(200,150,50,.12);border-color:#d4a745;color:#f0d68a;}
.bm.bm-gold:hover{background:rgba(200,150,50,.2);}
.bm.bm-danger{background:rgba(200,50,50,.12);border-color:#a04040;color:#dc6a6a;}
.bm.bm-danger:hover{background:rgba(200,50,50,.2);}
.awakening{text-align:center;font-size:.82em;color:#d4c5a0;padding:10px 14px;margin-bottom:10px;background:rgba(180,130,40,.06);border:1px solid rgba(180,130,40,.15);border-radius:8px;line-height:1.9;letter-spacing:1px;font-style:italic;}
.awakening .highlight{color:#f0d68a;font-style:normal;font-weight:600;}
.btn-export-persona{flex:1;padding:8px 10px;background:rgba(255,255,255,.04);color:#b5a080;border:1px solid rgba(180,130,40,.15);border-radius:12px;font-size:.7em;font-weight:400;letter-spacing:1px;cursor:pointer;transition:.2s;touch-action:manipulation;text-align:center;min-height:40px;}
.btn-export-persona:active{transform:scale(.95);background:rgba(255,255,255,.06);}
.btn-export-persona:hover{border-color:rgba(180,130,40,.3);color:#f0d68a;}
.btn-row{position:fixed;bottom:0;left:0;right:0;z-index:100;background:linear-gradient(180deg,transparent 0%,rgba(20,12,5,.95) 30%,#140c05 100%);padding:8px 12px 12px 12px;display:flex;flex-direction:row;align-items:center;gap:8px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-top:1px solid rgba(180,130,40,.12);}
.btn-row .btn-wrap{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;}
.btn-row .btn-wrap .label{font-size:.45em;color:#5a4a30;letter-spacing:2px;}
.btn-awaken{width:100%;padding:12px 0;background:linear-gradient(180deg,#c94045,#9b282d);color:#fff;border:1px solid #d47050;border-radius:12px;font-size:.95em;font-weight:700;letter-spacing:3px;cursor:pointer;transition:transform .15s,box-shadow .25s,background .25s;box-shadow:0 4px 20px rgba(180,50,55,.3),inset 0 1px 3px rgba(255,255,255,.1);text-shadow:0 1px 3px rgba(0,0,0,.4);touch-action:manipulation;text-align:center;min-height:44px;position:relative;overflow:hidden;}
.btn-awaken:hover{background:linear-gradient(180deg,#da5258,#b03338);transform:translateY(-1px);box-shadow:0 6px 28px rgba(200,55,60,.4);}
.btn-awaken:active{transform:scale(.96);}
.btn-awaken::after{content:' ✦';font-size:.7em;opacity:.5;}
.btn-awaken .particles{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden;}
.btn-awaken .particles span{position:absolute;width:6px;height:6px;background:#ffd700;border-radius:50%;box-shadow:0 0 10px #ffd700;animation:particleFly 1.2s ease-out forwards;opacity:0;}
@keyframes particleFly{0%{opacity:1;transform:translate(0,0) scale(1);}100%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(0);}}
/* 完全分步：默认所有 .sec 隐藏，由 goToStep 控制 */
.sec{display:none;margin:4px 0;}
.sec details{display:block;border-radius:6px;}
.sec summary{color:#f0d68a;font-size:.85em;font-weight:500;padding:6px 8px 6px 22px;border-bottom:1px solid rgba(160,110,30,.12);letter-spacing:2px;position:relative;cursor:pointer;user-select:none;transition:background .2s;border-radius:6px;display:flex;align-items:center;gap:6px;list-style:none;min-height:38px;}
.sec summary::-webkit-details-marker{display:none;}
.sec summary::before{content:'◆';position:absolute;left:6px;color:#d94a50;font-size:.45em;opacity:.6;}
.sec summary .ar{font-size:.6em;color:#b5a68a;transition:transform .25s ease;margin-left:auto;}
.sec details[open] summary .ar{transform:rotate(180deg);}
.sec summary .dot{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:6px;background:#4a3a28;transition:background .3s;flex-shrink:0;}
.sec summary .dot.filled{background:#f0d68a;}
.sec summary .badge{font-size:.5em;padding:1px 8px;border-radius:10px;font-weight:400;letter-spacing:0;margin-left:auto;margin-right:2px;}
.sec summary .badge.b-complete{background:rgba(74,201,176,.2);color:#4ac9b0;border:1px solid rgba(74,201,176,.2);}
.sec summary .badge.b-partial{background:rgba(200,150,50,.15);color:#c8963e;border:1px solid rgba(200,150,50,.15);}
.sec summary .badge.b-empty{background:rgba(255,255,255,.04);color:#5a4a30;border:1px solid rgba(255,255,255,.04);}
.sec .sb{padding:4px 2px 2px;}
.sec .sb .in{overflow:hidden;}
.fd{margin-bottom:5px;}
.fd label{display:block;margin-bottom:1px;color:#e8dcc8;font-size:.7em;font-weight:400;letter-spacing:1px;}
.fd label sm{color:#7a6a50;font-size:.65em;margin-left:3px;font-weight:300;}
.fd .label-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap;}
.fd .label-row .tag{font-size:.5em;padding:1px 6px;border-radius:6px;font-weight:400;}
.rw{display:flex;gap:6px;flex-wrap:wrap;}
.rw .fd{flex:1;min-width:60px;}
.rw .fd.half{flex:0 0 calc(50% - 3px);}
.rw .fd.third{flex:0 0 calc(33.33% - 4px);}
input,textarea,select{width:100%;padding:5px 8px;background:#1f150b;color:#e8dcc8;border:1px solid #4a3418;border-radius:6px;font-size:.78em;font-family:inherit;transition:border .3s,box-shadow .3s;box-shadow:inset 0 1px 4px rgba(0,0,0,.35);min-height:34px;-webkit-appearance:none;appearance:none;}
input:focus,textarea:focus,select:focus{outline:none;border-color:#d4a745;box-shadow:0 0 20px rgba(200,150,50,.12),inset 0 1px 6px rgba(200,150,40,.05);background:#261a0e;}
textarea{resize:vertical;min-height:32px;line-height:1.5;}
select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%23d4a745'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px;cursor:pointer;touch-action:manipulation;font-size:15px;}
select option{background:#1f150b;color:#e8dcc8;}
.ta{overflow:hidden;max-height:0;opacity:0;transition:max-height .35s ease,opacity .25s ease,margin .25s ease;margin-top:0;}
.ta.ac{max-height:380px;opacity:1;margin-top:4px;}
.ta .ib{background:rgba(180,120,30,.05);border:1px dashed rgba(180,130,40,.2);border-radius:6px;padding:6px 8px;}
.hl{background:rgba(180,120,30,.04);border:1px solid rgba(180,130,40,.08);border-radius:6px;padding:4px 8px;margin-bottom:4px;}
.hl .hl-title{font-size:.65em;color:#b5a080;font-weight:300;letter-spacing:2px;margin-bottom:2px;}
.hl .hl-content{display:flex;gap:4px;flex-wrap:wrap;align-items:center;}
.ring-group{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:2px;}
.ring-item{display:flex;align-items:center;gap:3px;font-size:.6em;color:#b5a080;padding:2px 4px;border-radius:4px;background:rgba(255,255,255,.02);flex-wrap:wrap;}
.ring-item .dot{width:12px;height:12px;border-radius:50%;border:1px solid rgba(255,255,255,.1);flex-shrink:0;animation:ringPulse 2s ease-in-out infinite;}
.ring-item .dot.white{background:#e8e8e8;box-shadow:0 0 8px rgba(232,232,232,.3);}
.ring-item .dot.yellow{background:#f0d68a;box-shadow:0 0 12px rgba(240,214,138,.4);}
.ring-item .dot.purple{background:#9b6bcc;box-shadow:0 0 12px rgba(155,107,204,.4);}
.ring-item .dot.black{background:#2a2a2a;border-color:#5a4a30;box-shadow:0 0 12px rgba(42,42,42,.3);}
.ring-item .dot.red{background:#dc3545;box-shadow:0 0 14px rgba(220,53,69,.5);}
.ring-item .dot.gold{background:#ffd700;box-shadow:0 0 18px rgba(255,215,0,.6);}
@keyframes ringPulse{0%,100%{transform:scale(1);opacity:.8;}50%{transform:scale(1.15);opacity:1;}}
.ring-item select,.ring-item input{min-height:24px;font-size:.7em;padding:1px 4px;width:auto;min-width:40px;flex:1;}
.ring-item .ring-del{font-size:.5em;padding:0 4px;min-height:18px;min-width:18px;background:rgba(200,50,50,.1);border-color:#5a2a2a;color:#a06060;}
.ring-item .ring-del:hover{background:rgba(200,50,50,.2);}
.ring-hint{font-size:.6em;color:#7a6a50;text-align:center;margin:2px 0;letter-spacing:1px;}
.ring-hint .match{color:#4ac9b0;}
.ring-hint .mismatch{color:#dc6a6a;}
#msg{text-align:center;margin-top:6px;color:#5cdb8b;font-weight:500;font-size:.75em;display:none;animation:f .3s;letter-spacing:1px;padding:4px 10px;border-radius:6px;background:rgba(0,0,0,.3);}
#msg.error{color:#f08080;}
@keyframes f{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
#cd{position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;}
.fb{text-align:center;margin-top:8px;font-size:.5em;color:#5a4a30;letter-spacing:4px;opacity:.4;font-style:italic;padding-bottom:4px;}
.fb span{display:inline-block;border:1px solid rgba(180,130,40,.1);padding:2px 10px;border-radius:20px;background:rgba(0,0,0,.2);}
.icon-user,.icon-face,.icon-soul,.icon-shield,.icon-pin,.icon-ghost,.icon-drop,.icon-wave,.icon-gear,.icon-compass,.icon-star,.icon-quote{width:13px;height:13px;fill:#f0d68a;vertical-align:middle;margin-right:2px;flex-shrink:0;}
.export-area{margin-top:6px;padding:6px 8px;background:rgba(0,0,0,.35);border-radius:6px;border:1px solid rgba(180,130,40,.12);display:none;}
.export-area.show{display:block;}
.export-area .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;flex-wrap:wrap;gap:4px;}
.export-area .header span{font-size:.6em;color:#b5a080;}
.export-area textarea{font-family:monospace;font-size:.6em;min-height:50px;background:#0d0804;color:#c4b090;padding:4px 6px;width:100%;resize:vertical;border-color:#3a2a18;min-height:32px;}
.export-area .footer{font-size:.5em;color:#6a5a40;margin-top:2px;text-align:right;}
#fieldIndicator{position:fixed;bottom:68px;left:50%;transform:translateX(-50%);background:rgba(20,12,5,.92);border:1px solid rgba(180,130,40,.2);border-radius:16px;padding:3px 14px;font-size:.55em;color:#b5a080;opacity:0;transition:opacity .3s;pointer-events:none;z-index:99;backdrop-filter:blur(4px);white-space:nowrap;max-width:80%;overflow:hidden;text-overflow:ellipsis;}
#fieldIndicator.show{opacity:1;}
.soul-comment{font-size:.55em;color:#7a6a50;text-align:center;margin-top:2px;min-height:18px;letter-spacing:1px;transition:opacity .3s;opacity:.6;}
.soul-comment.active{color:#f0d68a;opacity:1;}
#previewCard{margin-top:6px;padding:6px 8px;background:rgba(0,0,0,.25);border-radius:6px;border-left:3px solid #d4a745;display:none;}
#previewCard.show{display:block;}
#previewCard .preview-label{font-size:.5em;color:#7a6a50;letter-spacing:2px;margin-bottom:1px;}
#previewCard .preview-content{color:#d4c5a0;font-size:.72em;line-height:1.5;font-style:italic;padding:2px 0;}
#previewCard .preview-content .pname{color:#f0d68a;font-weight:600;font-style:normal;}
#previewCard .preview-content .pspirit{color:#4ac9b0;font-style:normal;}
#awakenOverlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:rgba(0,0,0,.92);display:none;justify-content:center;align-items:center;flex-direction:column;padding:20px;}
#awakenOverlay.active{display:flex;animation:ao .4s;}
@keyframes ao{from{opacity:0}to{opacity:1}}
#awakenOverlay .content{max-width:400px;width:100%;text-align:center;}
#awakenOverlay .title{color:#f0d68a;font-size:1.4em;font-weight:700;letter-spacing:10px;font-family:'STKaiti','KaiTi','楷体',serif;margin-bottom:14px;text-shadow:0 0 40px rgba(240,214,138,.2);}
#awakenOverlay .lines{text-align:left;padding:6px 0;}
#awakenOverlay .lines .line{color:#d4c5a0;font-size:.85em;line-height:2.0;letter-spacing:2px;opacity:0;transform:translateY(6px);transition:opacity .4s ease,transform .4s ease;font-family:'STKaiti','KaiTi','楷体',serif;}
#awakenOverlay .lines .line.show{opacity:1;transform:translateY(0);}
#awakenOverlay .lines .line.hl{color:#f0d68a;font-weight:600;}
#awakenOverlay .lines .line.dim{color:#7a6a50;font-size:.7em;letter-spacing:4px;}
#awakenOverlay .divider{width:50%;height:1px;background:linear-gradient(90deg,transparent,#f0d68a,transparent);margin:8px auto;opacity:.3;}
#awakenOverlay .close-hint{color:#5a4a30;font-size:.55em;margin-top:10px;letter-spacing:2px;opacity:0;transition:opacity .8s ease;}
#awakenOverlay .close-hint.show{opacity:.5;}
#fateModal{position:fixed;top:0;left:0;right:0;bottom:0;z-index:998;background:rgba(0,0,0,.85);display:none;justify-content:center;align-items:center;padding:16px;}
#fateModal.active{display:flex;animation:ao .3s;}
#fateModal .card{max-width:400px;width:100%;background:linear-gradient(170deg,#1c130a,#23180d 30%,#1a1008 60%,#140c05);border:2px solid #7a5c2e;border-radius:14px;padding:18px 16px;box-shadow:0 0 60px rgba(180,130,40,.15);max-height:80vh;overflow-y:auto;}
#fateModal .card .title{color:#f0d68a;font-size:1em;font-weight:700;letter-spacing:4px;text-align:center;border-bottom:1px solid rgba(180,130,40,.15);padding-bottom:8px;margin-bottom:10px;}
#fateModal .card .body{color:#d4c5a0;font-size:.72em;line-height:1.7;white-space:pre-wrap;background:rgba(0,0,0,.2);border-radius:6px;padding:8px 10px;max-height:45vh;overflow-y:auto;font-family:monospace;}
#fateModal .card .actions{display:flex;gap:6px;margin-top:10px;justify-content:center;}
#fateModal .card .actions .bm{flex:1;padding:6px;font-size:.65em;justify-content:center;}
.secondary-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
.secondary-grid .fd{flex:1;min-width:0;}
.count-input{display:flex;align-items:center;gap:6px;}
.count-input input{width:60px;text-align:center;min-height:32px;font-size:.85em;}
.count-input .count-label{font-size:.7em;color:#b5a080;}
.special-tier{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:2px;}
.special-tier .tier-tag{font-size:.5em;padding:1px 8px;border-radius:8px;background:rgba(255,255,255,.04);color:#5a4a30;border:1px solid rgba(255,255,255,.04);}
.special-tier .tier-tag.t1{color:#7a7a7a;border-color:rgba(255,255,255,.05);}
.special-tier .tier-tag.t2{color:#f0d68a;border-color:rgba(240,214,138,.15);background:rgba(240,214,138,.05);}
.special-tier .tier-tag.t3{color:#ff6b6b;border-color:rgba(255,107,107,.2);background:rgba(255,107,107,.05);}
@media(max-width:480px){#app{padding:10px 8px 120px 8px;border-radius:10px;}h1{font-size:1.6em;letter-spacing:6px;min-height:36px;}.title-ornament{font-size:.45em;letter-spacing:6px;}.title-divider{font-size:.3em;letter-spacing:4px;}.sec summary{font-size:.75em;padding:4px 6px 4px 18px;min-height:32px;letter-spacing:1px;}.sec summary::before{left:4px;font-size:.4em;}.rw{flex-direction:column;gap:2px;}.rw .fd.half,.rw .fd.third{flex:1;}input,textarea,select{font-size:.72em;padding:4px 6px;min-height:30px;}.btn-awaken{font-size:.82em;padding:8px 0;min-height:38px;max-width:100%;letter-spacing:2px;}.subtitle{font-size:.6em;letter-spacing:4px;}.awakening{font-size:.7em;padding:6px 10px;margin-bottom:8px;}.bm{font-size:.5em;padding:2px 5px;min-height:24px;min-width:24px;}.icon-user,.icon-face,.icon-soul,.icon-shield,.icon-pin,.icon-wave,.icon-drop,.icon-ghost,.icon-gear,.icon-compass,.icon-star,.icon-quote{width:11px;height:11px;margin-right:1px;}.btn-row{padding:4px 6px 8px 6px;gap:4px;}.btn-export-persona{font-size:.55em;padding:4px 6px;min-height:30px;}.step-nav{padding:4px 6px;gap:4px;}.step-nav .step-btn{font-size:.6em;padding:2px 8px;min-height:24px;}.step-nav .step-info{font-size:.6em;}.ring-item{font-size:.55em;padding:1px 3px;}.ring-item select,.ring-item input{font-size:.6em;min-height:20px;padding:1px 3px;}.fd label{font-size:.65em;}.tb .p{font-size:.6em;min-width:40px;}.soul-comment{font-size:.5em;min-height:16px;}#previewCard .preview-content{font-size:.65em;}.btn-row .btn-wrap .label{font-size:.4em;}.count-input input{width:50px;min-height:28px;}.secondary-grid{grid-template-columns:1fr 1fr;gap:4px;}}
@media(max-width:380px){.btn-awaken{font-size:.72em;padding:6px 0;min-height:34px;letter-spacing:1px;}.step-nav .step-btn{font-size:.5em;padding:1px 6px;min-height:20px;}.secondary-grid{grid-template-columns:1fr;}}
@media(min-width:481px){.rw.compact{display:grid;grid-template-columns:1fr 1fr;gap:4px;}}
input,select,textarea,.bm,.btn-awaken,.btn-export-persona,.sec summary,.ring-item select,.ring-item input,.step-btn{touch-action:manipulation;}
`;
const styleEl=document.createElement('style');
styleEl.textContent=styleText;
document.head.appendChild(styleEl);

const htmlContent=`<div class="soul-app-container"><div id="app"><div id="fieldIndicator"></div>
<div class="title-wrap"><div class="title-ornament"><span>✧</span> <span>❖</span> <span>✧</span> <span>❖</span> <span>✧</span></div><h1 id="mainTitle">魂 师 觉 醒</h1><div class="title-divider">━━━ ✦ ━━━</div></div>
<p class="subtitle">—— 斗罗大陆Ⅲ · 龙王传说 ——</p>
<div class="step-nav"><button class="step-btn" id="stepPrev">◀ 上一项</button><span class="step-info"><span class="current" id="stepCurrent">1</span> / <span class="total" id="stepTotal">4</span> · <span id="stepName">基础信息</span></span><button class="step-btn" id="stepNext">下一项 ▶</button></div>
<div class="tb"><div class="p">已填 <span id="pct">0</span>/<span id="totalFields">0</span><div class="pb"><div id="pbar" style="width:0%" class="pbar-low"></div></div></div><div class="tool-group"><button class="bm bm-gold" id="btnRandom">🎲 天命</button><button class="bm bm-danger" id="btnClearAll">🗑 归无</button></div></div>
<div class="soul-comment" id="soulComment">✦ 输入魂力等级，查看修炼评语 ✦</div>
<!-- 模块1：基础信息 -->
<div class="sec" data-step="1" data-stepname="基础信息" style="display:block;"><details open><summary><svg class="icon-user" viewBox="0 0 24 24"><path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/></svg>Ⅰ 刻下你的名字<span class="ar">▼</span></summary><div class="sb"><div class="in">
<div class="rw"><div class="fd"><label>姓名</label><input type="text" id="cn" placeholder="你的名字"></div><div class="fd"><label>性别</label><select id="gd"><option value="男">男</option><option value="女">女</option><option value="其他">其他</option></select></div></div>
<div class="rw"><div class="fd"><label>年龄 <sm>(岁)</sm></label><input type="number" id="ag" min="6" max="200" placeholder="16"></div><div class="fd"><label>身高 <sm>(cm)</sm></label><input type="number" id="ht" min="80" max="280" placeholder="175"></div><div class="fd"><label>体重 <sm>(kg)</sm></label><input type="number" id="wt" min="20" max="200" placeholder="65"></div></div>
<div class="rw"><div class="fd"><label>出身地</label><select id="og_select"><option value="">-- 你从何处来？ --</option><option value="傲来城">傲来城</option><option value="东海城">东海城</option><option value="史莱克城">史莱克城</option><option value="天斗城">天斗城</option><option value="星罗城">星罗城</option><option value="灵波城">灵波城</option><option value="明都">明都</option><option value="星斗大森林外围">星斗大森林外围</option><option value="极北之地">极北之地</option></select><input type="text" id="og" style="margin-top:3px" placeholder="或手动输入"></div><div class="fd"><label>所属阵营</label><select id="fc"><option value="史莱克学院">史莱克学院</option><option value="史莱克重建">史莱克重建</option><option value="唐门">唐门</option><option value="传灵塔">传灵塔</option><option value="传灵学院">传灵学院</option><option value="战神殿">战神殿</option><option value="血神军团">血神军团</option><option value="星罗帝国">星罗帝国</option><option value="天斗帝国">天斗帝国</option><option value="斗灵帝国">斗灵帝国</option><option value="本体宗">本体宗</option><option value="七宝琉璃宗">七宝琉璃宗</option><option value="昊天宗">昊天宗</option><option value="蓝电霸王龙家族">蓝电霸王龙家族</option><option value="原恩家族">原恩家族</option><option value="星斗大森林">星斗大森林</option><option value="极北之地">极北之地</option><option value="深渊位面">深渊位面</option><option value="自由魂师">自由魂师</option><option value="散修">散修</option><option value="其他">其他</option></select></div></div>
<div class="rw"><div class="fd"><label>家族血脉</label><select id="fbg"><option value="普通平民">普通平民</option><option value="魂师世家">魂师世家</option><option value="宗门嫡系">宗门嫡系</option><option value="皇室宗亲">皇室宗亲</option><option value="隐世家族">隐世家族</option><option value="孤儿">孤儿</option><option value="魂兽化形">魂兽化形</option><option value="神祇后裔">神祇后裔</option></select></div><div class="fd"><label>组织身份</label><input type="text" id="orgIdentity" placeholder="史莱克七怪 / 传灵塔执法者"></div></div>
</div></div></details></div>
<!-- 模块2：武魂与魂力 -->
<div class="sec" data-step="2" data-stepname="武魂与魂力"><details><summary><svg class="icon-soul" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/></svg>Ⅱ 武魂与魂力<span class="ar">▼</span></summary><div class="sb"><div class="in">
<div class="rw"><div class="fd"><label>武魂名称</label><input type="text" id="msn" placeholder="如：蓝银草"></div><div class="fd"><label>武魂类型</label><select id="mst"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="双生武魂">双生武魂</option><option value="神级武魂">神级武魂</option></select></div></div>
<div id="dsf" class="ta"><div class="ib"><div class="rw"><div class="fd"><label>第二武魂名称</label><input type="text" id="sn2" placeholder="第二武魂"></div><div class="fd"><label>第二武魂类型</label><select id="st2"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="神级武魂">神级武魂</option></select></div></div></div></div>
<div class="rw"><div class="fd"><label>先天魂力</label><select id="isp"><option value="10级（满魂力）">10级（满魂力）</option><option value="9级">9级</option><option value="8级">8级</option><option value="7级">7级</option><option value="6级">6级</option><option value="5级">5级</option><option value="4级">4级</option><option value="3级">3级</option><option value="2级">2级</option><option value="1级">1级</option><option value="0级（无魂力）">0级（无魂力）</option></select></div><div class="fd"><label>当前魂力 <sm>(级)</sm></label><input type="number" id="csr" min="0" max="200" placeholder="32"></div><div class="fd"><label>魂师称号</label><input type="text" id="soulTitle" readonly style="color:#f0d68a;font-weight:600;background:#0d0804;border-color:#4a3418;cursor:default;"></div></div>
<div class="fd"><label>精神力境界</label><select id="sp"><option value="灵元境">灵元境</option><option value="灵通境">灵通境</option><option value="灵海境">灵海境</option><option value="灵渊境">灵渊境</option><option value="灵域境">灵域境</option><option value="神元境">神元境</option><option value="神王境">神王境</option><option value="未知/未测定">未知/未测定</option></select></div>
<div class="hl"><div class="hl-title">✦ 魂环配置 <span id="ringMatchInfo" style="font-weight:400;font-size:.8em;color:#7a6a50;"></span></div><div id="ringContainer"><div class="ring-group" id="ringGroup"></div></div><div style="margin-top:2px;display:flex;gap:4px;flex-wrap:wrap;align-items:center;"><button class="bm" id="btnAddRing" style="font-size:.5em;padding:1px 6px;">➕ 添加魂环</button><button class="bm" id="btnSyncRings" style="font-size:.5em;padding:1px 6px;border-color:rgba(74,201,176,.2);color:#4ac9b0;">🔄 自动配环</button><span style="font-size:.5em;color:#5a4a30;margin-left:4px;">当前 <span id="ringCountDisplay">0</span> 环</span></div></div>
<div class="rw"><div class="fd"><label>血脉类型</label><select id="bl"><option value="无特殊血脉">无特殊血脉</option><option value="金龙王血脉">金龙王血脉</option><option value="银龙王血脉">银龙王血脉</option><option value="龙族血脉">龙族血脉</option><option value="海神血脉">海神血脉</option><option value="修罗血脉">修罗血脉</option><option value="天使血脉">天使血脉</option><option value="凤凰血脉">凤凰血脉</option><option value="泰坦血脉">泰坦血脉</option><option value="自定血脉">自定血脉</option></select></div><div class="fd"><label>血脉觉醒程度</label><select id="bll"><option value="未觉醒">未觉醒</option><option value="初步觉醒">初步觉醒</option><option value="部分觉醒">部分觉醒</option><option value="深度觉醒">深度觉醒</option><option value="完全觉醒">完全觉醒</option><option value="返祖/巅峰">返祖/巅峰</option></select></div></div>
<div id="cbg" style="display:none"><div class="fd"><label>自定血脉名称</label><input type="text" id="cbl"></div></div>
<div class="rw"><div class="fd"><label>魂核数量</label><select id="coreCount"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div><div class="fd"><label>领域名称</label><input type="text" id="domain" placeholder="如：杀戮领域、金龙领域"></div></div>
</div></div></details></div>
<!-- 模块3：装备与战力 -->
<div class="sec" data-step="3" data-stepname="装备与战力"><details><summary><svg class="icon-shield" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5L12 2zm0 2.18l6 2.25v4.66c0 4.14-2.94 7.99-6 9.01-3.06-1.02-6-4.87-6-9.01V6.43l6-2.25z"/></svg>Ⅲ 装备与战力<span class="ar">▼</span></summary><div class="sb"><div class="in">
<div class="rw"><div class="fd"><label>斗铠名称</label><input type="text" id="ban" placeholder="如：龙月"></div><div class="fd"><label>斗铠等级</label><select id="bal"><option value="无">无斗铠</option><option value="一字斗铠">一字斗铠</option><option value="二字斗铠">二字斗铠</option><option value="三字斗铠">三字斗铠</option><option value="四字斗铠">四字斗铠</option><option value="五字斗铠（神级）">五字斗铠（神级）</option><option value="六字斗铠（神级）">六字斗铠（神级）</option></select></div></div>
<div class="rw"><div class="fd"><label>斗铠侧重</label><select id="bat"><option value="均衡型">均衡型</option><option value="力量型">力量型</option><option value="敏捷型">敏捷型</option><option value="防御型">防御型</option><option value="爆发型">爆发型</option><option value="控制型">控制型</option><option value="不适用">不适用</option></select></div><div class="fd"><label>斗铠品级</label><div id="armorGrade" style="padding:4px 8px;border-radius:4px;background:#0d0804;border:1px solid #4a3418;min-height:30px;display:flex;align-items:center;gap:6px;font-size:.75em;color:#b5a080;">选择等级后显示</div></div></div>
<div class="fd"><label>斗铠部件完成数 <sm>(0-11)</sm></label><div class="count-input"><input type="number" id="armorCountInput" min="0" max="11" value="0" placeholder="0"><span class="count-label">/ 11 件</span><span id="armorPercent" style="font-size:.65em;color:#4ac9b0;min-width:36px;">0%</span></div></div>
<div class="hl"><div class="hl-title">✦ 魂骨</div><div class="rw"><div class="fd"><label>魂骨部位</label><select id="bonePart"><option value="无">无</option><option value="头部魂骨">头部魂骨</option><option value="躯干魂骨">躯干魂骨</option><option value="左臂魂骨">左臂魂骨</option><option value="右臂魂骨">右臂魂骨</option><option value="左腿魂骨">左腿魂骨</option><option value="右腿魂骨">右腿魂骨</option><option value="外附魂骨">外附魂骨</option></select></div><div class="fd"><label>魂骨年限</label><select id="boneYear"><option value="无">无</option><option value="百年魂骨">百年魂骨</option><option value="千年魂骨">千年魂骨</option><option value="万年魂骨">万年魂骨</option><option value="十万年魂骨">十万年魂骨</option><option value="百万年魂骨">百万年魂骨</option></select></div></div></div>
<div class="hl"><div class="hl-title">✦ 第二职业</div><div class="secondary-grid"><div class="fd"><label>职业类型</label><select id="secondProf"><option value="无">无</option><option value="锻造">锻造</option><option value="机甲设计">机甲设计</option><option value="机甲制造">机甲制造</option><option value="机甲修理">机甲修理</option></select></div><div class="fd"><label>等级 <sm>(1-9)</sm></label><select id="secondLevel"><option value="1">1级</option><option value="2">2级</option><option value="3">3级</option><option value="4">4级</option><option value="5">5级</option><option value="6">6级</option><option value="7">7级</option><option value="8">8级</option><option value="9">9级</option></select></div></div></div>
<div class="rw"><div class="fd"><label>机甲等级</label><select id="mechaLevel"><option value="无">无</option><option value="黄级初阶">黄级初阶</option><option value="黄级中阶">黄级中阶</option><option value="黄级高阶">黄级高阶</option><option value="紫级初阶">紫级初阶</option><option value="紫级中阶">紫级中阶</option><option value="紫级高阶">紫级高阶</option><option value="黑级初阶">黑级初阶</option><option value="黑级中阶">黑级中阶</option><option value="黑级高阶">黑级高阶</option><option value="红级（自定义）">红级（自定义）</option></select></div><div class="fd" id="mechaCustomWrap" style="display:none;"><label>红级自定义名称</label><input type="text" id="mechaCustom" placeholder="如：龙神级"></div></div>
<div class="rw"><div class="fd"><label>魂导器</label><input type="text" id="soulDevice" placeholder="如：储物魂导器"></div><div class="fd"><label>传说武器</label><input type="text" id="legendWeapon" placeholder="如：黄金龙枪"></div></div>
<div class="fd" style="margin-top:4px;"><label>斗铠描述</label><input type="text" id="badesc" placeholder="银甲金纹…"></div>
</div></div></details></div>
<!-- 模块4：背景与故事 -->
<div class="sec" data-step="4" data-stepname="背景与故事"><details><summary><svg class="icon-star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>Ⅳ 背景与故事<span class="ar">▼</span></summary><div class="sb"><div class="in">
<div class="fd"><label>性格特质</label><textarea id="pt" rows="2" placeholder="冷静、执着、重情义"></textarea></div>
<div class="fd"><label>特殊能力</label><div class="special-tier"><span class="tier-tag t1">普通</span><span class="tier-tag t2">稀有</span><span class="tier-tag t3">神级</span></div><select id="st"><option value="无">无</option><option value="天生神力">天生神力</option><option value="剑感">剑感</option><option value="钢铁意志">钢铁意志</option><option value="战斗直觉">战斗直觉</option><option value="元素亲和">元素亲和</option><option value="精神感知">精神感知</option><option value="自愈体质">自愈体质</option><option value="龙族感应">龙族感应</option><option value="空间感知">空间感知</option><option value="海神传承">海神传承</option><option value="修罗传承">修罗传承</option><option value="天使传承">天使传承</option><option value="罗刹传承">罗刹传承</option><option value="自定义">自定义</option></select><div id="stCustomWrap" style="display:none;margin-top:3px;"><input type="text" id="stCustom" placeholder="输入特殊能力名称"></div></div>
<div class="fd"><label>主要魂灵</label><input type="text" id="ssn" placeholder="如：草蛇"></div>
<div class="rw"><div class="fd"><label>魂灵类型</label><select id="sst"><option value="战斗型">战斗型</option><option value="辅助型">辅助型</option><option value="防御型">防御型</option><option value="治疗型">治疗型</option><option value="特殊型">特殊型</option><option value="无魂灵">无魂灵</option></select></div><div class="fd"><label>魂灵年限</label><select id="ssy"><option value="十年">十年</option><option value="百年">百年</option><option value="千年">千年</option><option value="万年">万年</option><option value="十万年">十万年</option><option value="凶兽（二十万年）">凶兽（二十万年）</option><option value="百万年">百万年</option><option value="不适用">不适用</option></select></div></div>
<div class="fd"><label>其他魂灵 <sm>(每行一个)</sm></label><textarea id="ess" rows="2"></textarea></div>
<div class="fd"><label>开场白</label><textarea id="greeting" rows="3" placeholder="我的剑，不是为了杀戮而存在的。"></textarea></div>
<div class="fd"><label>场景设定</label><input type="text" id="scenario" placeholder="天斗城·清晨"></div>
</div></div></details></div>
<div id="previewCard" class=""><div class="preview-label">✦ 开场白预览（实时）</div><div class="preview-content" id="previewContent"><span class="pname" id="previewName">你的名字</span>，<span class="pspirit" id="previewSpirit">你的武魂</span>。<br><span id="previewGreeting">在这里输入开场白...</span></div></div>
<div id="exportArea" class="export-area"><div class="header"><span>📋 复制下方文本到「玩家人设」中</span><button class="bm" id="btnCopyExport" style="font-size:.5em;">📋 复制</button></div><textarea id="exportPreview" rows="4" readonly></textarea><div class="footer">⏱ 导出时间：<span id="exportTime">—</span></div></div>
<div id="msg"></div><textarea id="cd"></textarea><div class="fb"><span>✦ 命运已在你手中 ✦</span></div>
<div class="btn-row"><div class="btn-wrap"><button class="btn-export-persona" id="btnExportPersona">📋 玩家人设</button><span class="label">导出</span></div><div class="btn-wrap"><button class="btn-awaken" id="btnExportJson">⚔ 觉醒 · 铸就档案<span class="particles" id="particlesContainer"></span></button><span class="label">一键铸魂</span></div></div>
</div></div>
<div id="awakenOverlay"><div class="content"><div class="title">✦ 武魂觉醒仪式 ✦</div><div class="divider"></div><div class="lines" id="awakenLines"><div class="line dim" data-delay="0">━━━━━━━━━━━━━━━━━━━━</div><div class="line" data-delay="350">🔮 检测到魂力波动...</div><div class="line" data-delay="700">⚡ 魂力正在沸腾...</div><div class="line" data-delay="1050">🌿 武魂开始共鸣...</div><div class="line" data-delay="1400">🔥 血脉之力觉醒...</div><div class="line" data-delay="1750">✨ 魂环生成中...</div><div class="line" data-delay="2100">🌟 命运之轮转动...</div><div class="line dim" data-delay="2450">━━━━━━━━━━━━━━━━━━━━</div><div class="line hl" data-delay="2800">✅ 觉醒完成 · 魂师档案已铸就</div></div><div class="close-hint" id="closeHint">✦ 点击任意处关闭 ✦</div></div></div>
<div id="fateModal"><div class="card"><div class="title">🎲 天命所归</div><div class="body" id="fateBody">加载中...</div><div class="actions"><button class="bm bm-gold" id="fateCopy" style="flex:1;justify-content:center;">📋 复制</button><button class="bm" id="fateClose" style="flex:1;justify-content:center;">✕ 关闭</button></div></div></div>
`;

const root=document.querySelector('[data-dlgithub-root="dlgh-greeting"]');
if(!root)return;
root.innerHTML=htmlContent;

(function(){
var $=function(id){return document.getElementById(id);};
var fields={
cn:$('cn'),gd:$('gd'),ag:$('ag'),ht:$('ht'),wt:$('wt'),
msn:$('msn'),mst:$('mst'),sn2:$('sn2'),st2:$('st2'),
isp:$('isp'),csr:$('csr'),soulTitle:$('soulTitle'),
sp:$('sp'),
bl:$('bl'),bll:$('bll'),cbl:$('cbl'),
coreCount:$('coreCount'),domain:$('domain'),
ban:$('ban'),bal:$('bal'),bat:$('bat'),badesc:$('badesc'),armorGrade:$('armorGrade'),
bonePart:$('bonePart'),boneYear:$('boneYear'),
mechaLevel:$('mechaLevel'),mechaCustom:$('mechaCustom'),mechaCustomWrap:$('mechaCustomWrap'),
soulDevice:$('soulDevice'),legendWeapon:$('legendWeapon'),
secondProf:$('secondProf'),secondLevel:$('secondLevel'),
og:$('og'),og_select:$('og_select'),fc:$('fc'),fbg:$('fbg'),orgIdentity:$('orgIdentity'),
pt:$('pt'),st:$('st'),stCustom:$('stCustom'),stCustomWrap:$('stCustomWrap'),
ssn:$('ssn'),sst:$('sst'),ssy:$('ssy'),ess:$('ess'),
greeting:$('greeting'),scenario:$('scenario')
};
var dsf=$('dsf'),cbg=$('cbg');
var pbar=$('pbar'),pct=$('pct');
var msg=$('msg'),cd=$('cd');
var exportArea=$('exportArea'),exportPreview=$('exportPreview'),exportTime=$('exportTime');
var fieldIndicator=$('fieldIndicator');
var armorCountInput=$('armorCountInput'),armorPercent=$('armorPercent');
var ringContainer=$('ringContainer');
var awakenOverlay=$('awakenOverlay');
var fateModal=$('fateModal'),fateBody=$('fateBody');
var soulComment=$('soulComment');
var previewCard=$('previewCard'),previewName=$('previewName'),previewSpirit=$('previewSpirit'),previewGreeting=$('previewGreeting');
var particlesContainer=$('particlesContainer');
var STORAGE_KEY='soul_archive_v4';
var stepNames=['基础信息','武魂与魂力','装备与战力','背景与故事'];
var currentStep=1;

function getVal(id){var el=fields[id];return el?(el.value||'').trim():'';}
function getLines(id){return getVal(id).split('\n').map(function(s){return s.trim();}).filter(function(s){return s!=='';});}
function getNum(id){var v=getVal(id);return v?Number(v):null;}
function getSel(id){var el=fields[id];return el?el.value:'';}

function getSoulTitle(level){var lv=Number(level);if(isNaN(lv)||lv<0)return'未测定';if(lv<=9)return'魂士';if(lv<=19)return'魂师';if(lv<=29)return'大魂师';if(lv<=39)return'魂尊';if(lv<=49)return'魂宗';if(lv<=59)return'魂王';if(lv<=69)return'魂帝';if(lv<=79)return'魂圣';if(lv<=89)return'魂斗罗';if(lv<=99)return'封号斗罗';if(lv<=109)return'超级斗罗';if(lv<=119)return'极限斗罗';return'神级';}
function getRingCount(level){var lv=Number(level);if(isNaN(lv)||lv<0)return 0;if(lv<=9)return 0;if(lv<=19)return 1;if(lv<=29)return 2;if(lv<=39)return 3;if(lv<=49)return 4;if(lv<=59)return 5;if(lv<=69)return 6;if(lv<=79)return 7;if(lv<=89)return 8;return 9;}
function getSoulComment(level){var lv=Number(level);if(isNaN(lv)||lv<0)return'✦ 输入魂力等级，查看修炼评语 ✦';if(lv<=9)return'🌱 初出茅庐，你的武魂正在苏醒...';if(lv<=19)return'🌿 魂师之境，根基渐稳，未来可期。';if(lv<=29)return'💪 大魂师！你已踏入修炼的正轨。';if(lv<=39)return'⚔️ 魂尊！足以独当一面的强者。';if(lv<=49)return'🔥 魂宗！你的名字开始被人传颂。';if(lv<=59)return'🌟 魂王！距离传奇只差一步之遥。';if(lv<=69)return'👑 魂帝！一方霸主，威震天下。';if(lv<=79)return'✨ 魂圣！接近半神之体，超凡脱俗。';if(lv<=89)return'💀 魂斗罗！大陆顶尖的存在。';if(lv<=99)return'⚡ 封号斗罗！至强者之名，响彻大陆！';if(lv<=109)return'🌌 超级斗罗！已触碰神之领域。';if(lv<=119)return'🌀 极限斗罗！人间巅峰，半步成神。';return'🌠 神级！你的名字将永远铭刻在斗罗大陆的历史中。';}
function getArmorGrade(level){var map={'无':{text:'无斗铠',color:'#5a4a30'},'一字斗铠':{text:'一字斗铠 · 白',color:'#b5b5b5'},'二字斗铠':{text:'二字斗铠 · 黄',color:'#f0d68a'},'三字斗铠':{text:'三字斗铠 · 紫',color:'#9b6bcc'},'四字斗铠':{text:'四字斗铠 · 黑',color:'#3a3a3a'},'五字斗铠（神级）':{text:'五字斗铠 · 红',color:'#dc3545'},'六字斗铠（神级）':{text:'六字斗铠 · 金',color:'#ffd700'}};return map[level]||{text:level,color:'#5a4a30'};}
function getRingColor(year){var map={'十年':'#e8e8e8','百年':'#f0d68a','千年':'#9b6bcc','万年':'#2a2a2a','十万年':'#dc3545','凶兽（二十万年）':'#dc3545','百万年':'#ffd700'};return map[year]||'#5a4a30';}
function getRingClass(year){var map={'十年':'white','百年':'yellow','千年':'purple','万年':'black','十万年':'red','凶兽（二十万年）':'red','百万年':'gold'};return map[year]||'white';}

// ★★★ 核心修改：完全分步显示/隐藏 ★★★
function goToStep(step){
  var maxStep=4;
  if(step<1)step=1;
  if(step>maxStep)step=maxStep;
  currentStep=step;
  document.getElementById('stepCurrent').textContent=step;
  document.getElementById('stepTotal').textContent=maxStep;
  document.getElementById('stepName').textContent=stepNames[step-1];
  document.getElementById('stepPrev').disabled=(step===1);
  var nextBtn=document.getElementById('stepNext');
  if(step===maxStep){
    nextBtn.textContent='⚔ 觉醒';
    nextBtn.style.borderColor='rgba(200,50,50,.3)';
    nextBtn.style.color='#dc6a6a';
  }else{
    nextBtn.textContent='下一项 ▶';
    nextBtn.style.borderColor='';
    nextBtn.style.color='';
  }
  // 完全隐藏/显示 .sec 容器
  var secs=document.querySelectorAll('.sec');
  secs.forEach(function(sec,idx){
    if(idx+1===step){
      sec.style.display='block';
      setTimeout(function(){sec.scrollIntoView({block:'start',behavior:'smooth'});},150);
    }else{
      sec.style.display='none';
    }
  });
}

function updateSpecialAbility(){var val=getSel('st');var map={'海神传承':'海神三叉戟','修罗传承':'修罗魔剑','天使传承':'天使圣剑','罗刹传承':'罗刹魔镰'};if(map[val]){fields.legendWeapon.value=map[val];showSoulLog('⚡ 传承之力觉醒！传说武器已显形：'+map[val]);}}

var rings=[];
function initRings(){var saved=localStorage.getItem('soul_rings_v4');if(saved){try{rings=JSON.parse(saved);}catch(_){}}if(!rings.length)rings=[{year:'百年',name:'',effect:''}];renderRings();updateRingInfo();}
function renderRings(){ringContainer.innerHTML='';rings.forEach(function(ring,idx){var div=document.createElement('div');div.className='ring-item';var dotColor=getRingColor(ring.year);var dotClass=getRingClass(ring.year);div.innerHTML='<span class="dot '+dotClass+'" style="background:'+dotColor+';border-color:'+dotColor+';"></span><select data-ring-year="'+idx+'"><option value="十年"'+(ring.year==='十年'?'selected':'')+'>十年</option><option value="百年"'+(ring.year==='百年'?'selected':'')+'>百年</option><option value="千年"'+(ring.year==='千年'?'selected':'')+'>千年</option><option value="万年"'+(ring.year==='万年'?'selected':'')+'>万年</option><option value="十万年"'+(ring.year==='十万年'?'selected':'')+'>十万年</option><option value="凶兽（二十万年）"'+(ring.year==='凶兽（二十万年）'?'selected':'')+'>凶兽</option><option value="百万年"'+(ring.year==='百万年'?'selected':'')+'>百万年</option></select><input type="text" placeholder="魂技名" value="'+(ring.name||'')+'" data-ring-name="'+idx+'"><input type="text" placeholder="效果" value="'+(ring.effect||'')+'" data-ring-effect="'+idx+'"><button class="bm ring-del" data-ring-del="'+idx+'">✕</button>';ringContainer.appendChild(div);});ringContainer.querySelectorAll('[data-ring-year]').forEach(function(el){el.addEventListener('change',function(){var idx=Number(this.dataset.ringYear);rings[idx].year=this.value;localStorage.setItem('soul_rings_v4',JSON.stringify(rings));renderRings();updateRingInfo();updateProgress();saveDraft();showSoulLog('魂环'+(idx+1)+' 年份更新为 '+this.value);});});ringContainer.querySelectorAll('[data-ring-name]').forEach(function(el){el.addEventListener('input',function(){var idx=Number(this.dataset.ringName);rings[idx].name=this.value;localStorage.setItem('soul_rings_v4',JSON.stringify(rings));saveDraft();updatePreview();});});ringContainer.querySelectorAll('[data-ring-effect]').forEach(function(el){el.addEventListener('input',function(){var idx=Number(this.dataset.ringEffect);rings[idx].effect=this.value;localStorage.setItem('soul_rings_v4',JSON.stringify(rings));saveDraft();});});ringContainer.querySelectorAll('[data-ring-del]').forEach(function(el){el.addEventListener('click',function(){var idx=Number(this.dataset.ringDel);if(rings.length<=1){showMessage('至少保留一个魂环',true);return;}rings.splice(idx,1);localStorage.setItem('soul_rings_v4',JSON.stringify(rings));renderRings();updateRingInfo();updateProgress();saveDraft();showSoulLog('已移除一个魂环');});});updateRingInfo();}
function updateRingInfo(){var count=rings.length;var lv=getVal('csr');var expected=getRingCount(lv);var el=document.getElementById('ringCountDisplay');if(el)el.textContent=count;var info=document.getElementById('ringMatchInfo');if(info){if(lv===''||lv===undefined){info.textContent='';}else if(count===expected){info.innerHTML='<span class="match">✅ '+count+'/'+expected+' 环匹配</span>';}else if(count<expected){info.innerHTML='<span class="mismatch">⚠️ 应配 '+expected+' 环，当前 '+count+' 环</span>';}else{info.innerHTML='<span class="mismatch">⚠️ 已超出 '+expected+' 环建议</span>';}}}
function syncRingsToLevel(){var lv=getVal('csr');var expected=getRingCount(lv);if(expected===0&&rings.length>0&&rings[0].name===''&&rings[0].effect===''){rings=[];}else if(expected>rings.length){for(var i=rings.length;i<expected;i++){rings.push({year:'百年',name:'',effect:''});}}else if(expected<rings.length&&expected>0){rings=rings.slice(0,expected);}localStorage.setItem('soul_rings_v4',JSON.stringify(rings));renderRings();updateRingInfo();updateProgress();saveDraft();showSoulLog('🔄 已同步魂环：'+rings.length+' 环');}
function updateArmorPercent(){var val=Number(armorCountInput.value)||0;if(val<0)val=0;if(val>11)val=11;armorCountInput.value=val;var pct=Math.round((val/11)*100);armorPercent.textContent=pct+'%';}
function updateMechaCustom(){if(getSel('mechaLevel')==='红级（自定义）'){fields.mechaCustomWrap.style.display='block';}else{fields.mechaCustomWrap.style.display='none';fields.mechaCustom.value='';}}
function getMechaDisplay(){var level=getSel('mechaLevel');if(level==='红级（自定义）'){var custom=getVal('mechaCustom');return custom?'红级·'+custom:'红级（未命名）';}return level;}
function updateInnateOptions(){var isDivine=(getSel('mst')==='神级武魂');var select=fields.isp;var currentVal=select.value;var options=[{val:'10级（满魂力）',label:'10级（满魂力）'},{val:'9级',label:'9级'},{val:'8级',label:'8级'},{val:'7级',label:'7级'},{val:'6级',label:'6级'},{val:'5级',label:'5级'},{val:'4级',label:'4级'},{val:'3级',label:'3级'},{val:'2级',label:'2级'},{val:'1级',label:'1级'},{val:'0级（无魂力）',label:'0级（无魂力）'}];if(isDivine){options.unshift({val:'20级（神赐）',label:'20级（神赐）'});}select.innerHTML='';options.forEach(function(o){var opt=document.createElement('option');opt.value=o.val;opt.textContent=o.label;select.appendChild(opt);});var found=false;for(var i=0;i<select.options.length;i++){if(select.options[i].value===currentVal){select.value=currentVal;found=true;break;}}if(!found&&isDivine){select.value='20级（神赐）';}else if(!found){select.value='10级（满魂力）';}saveDraft();updateProgress();}
function updateRolePosition(){var map={'兽武魂':'强攻系','器武魂':'强攻系','植物武魂':'控制系','元素武魂':'控制系','辅助武魂':'辅助系','食物武魂':'食物系','变异武魂':'敏攻系','双生武魂':'全能系','神级武魂':'全能系','本体武魂':'强攻系'};var type=getSel('mst');var rp=document.getElementById('rp');if(rp&&map[type]){var opts=Array.from(rp.options);var match=opts.find(function(o){return o.value===map[type];});if(match){rp.value=map[type];}}}
function updateCamp(){var map={'史莱克城':'史莱克学院','天斗城':'天斗帝国','星罗城':'星罗帝国','灵波城':'传灵学院','明都':'星罗帝国','星斗大森林外围':'自由魂师','极北之地':'极北之地','傲来城':'自由魂师','东海城':'自由魂师'};var origin=getSel('og_select');if(origin&&map[origin]){var fc=fields.fc;var opts=Array.from(fc.options);var match=opts.find(function(o){return o.value===map[origin];});if(match){fc.value=map[origin];}}}
function updateSpiritLevel(){var lv=Number(getVal('csr'));if(isNaN(lv))return;var sp=fields.sp;var target='未知/未测定';if(lv<=19)target='灵元境';else if(lv<=39)target='灵通境';else if(lv<=59)target='灵海境';else if(lv<=79)target='灵渊境';else if(lv<=99)target='灵域境';else if(lv<=119)target='神元境';else target='神王境';var opts=Array.from(sp.options);var match=opts.find(function(o){return o.value===target;});if(match){sp.value=target;}}
function updatePreview(){var name=getVal('cn')||'你的名字';var spirit=getVal('msn')||'你的武魂';var greeting=getVal('greeting')||'在这里输入开场白...';previewName.textContent=name;previewSpirit.textContent=spirit;previewGreeting.textContent=greeting;if(name!=='你的名字'||spirit!=='你的武魂'||getVal('greeting')){previewCard.classList.add('show');}else{previewCard.classList.remove('show');}}
function showSoulLog(text){var logMsg=$('msg');if(!logMsg)return;logMsg.textContent='📟 '+text;logMsg.className='';logMsg.style.display='block';clearTimeout(logMsg._timer);logMsg._timer=setTimeout(function(){logMsg.style.display='none';},2500);}

function collectData(){var dual=(getSel('mst')==='双生武魂');var bt=getSel('bl');var fb=(bt==='自定血脉')?getVal('cbl'):bt;var soul;if(dual){soul={"武魂类型":"双生武魂","第一武魂":{"武魂名称":getVal('msn')||'未填写',"武魂类型":"（双生武魂，请参考第二武魂类型）"},"第二武魂":{"武魂名称":getVal('sn2')||'未填写',"武魂类型":getSel('st2')},"先天魂力":getSel('isp'),"当前魂力等级":getVal('csr')?getVal('csr')+'级':'未填写',"魂师称号":getSoulTitle(getVal('csr'))};}else{soul={"武魂名称":getVal('msn')||'未填写',"武魂类型":getSel('mst'),"先天魂力":getSel('isp'),"当前魂力等级":getVal('csr')?getVal('csr')+'级':'未填写',"魂师称号":getSoulTitle(getVal('csr'))};}var spVal=getVal('st');if(spVal==='自定义'){spVal=getVal('stCustom')||'自定义';}var ringData=rings.map(function(r){return{"年份":r.year,"魂技名称":r.name||'未命名',"魂技效果":r.effect||'无'};});var armorCount=Number(armorCountInput.value)||0;return{"基本信息":{"姓名":getVal('cn')||'未命名',"性别":getSel('gd'),"年龄":getNum('ag'),"身高_cm":getNum('ht'),"体重_kg":getNum('wt')},"背景与阵营":{"出身地":getVal('og')||'',"所属阵营":getSel('fc'),"组织身份":getVal('orgIdentity')||'',"家族背景":getSel('fbg')},"武魂与魂力":soul,"精神力":{"精神力等级":getSel('sp')},"血脉传承":{"血脉类型":fb||'',"血脉觉醒程度":getSel('bll')},"魂核与领域":{"魂核数量":getSel('coreCount'),"领域名称":getVal('domain')||''},"魂环":ringData,"魂灵":{"主要魂灵名称":getVal('ssn')||'',"魂灵类型":getSel('sst'),"魂灵年限":getSel('ssy'),"其他魂灵":getLines('ess')},"斗铠":{"斗铠名称":getVal('ban')||'',"斗铠等级":getSel('bal'),"斗铠侧重":getSel('bat'),"斗铠品级":getArmorGrade(getSel('bal')).text,"斗铠部件完成数":armorCount+'/11',"斗铠描述":getVal('badesc')||''},"魂骨":{"魂骨部位":getSel('bonePart'),"魂骨年限":getSel('boneYear')},"第二职业":{"职业类型":getSel('secondProf'),"等级":getSel('secondLevel')+'级'},"机甲与魂导器":{"机甲等级":getMechaDisplay(),"魂导器名称":getVal('soulDevice')||'',"传说武器":getVal('legendWeapon')||''},"性格与特质":{"性格特质":getLines('pt'),"特殊能力":spVal},"开场白与场景":{"开场白":getVal('greeting')||'',"场景设定":getVal('scenario')||''}};}
function updateProgress(){var fieldIds=['cn','gd','ag','ht','wt','msn','mst','isp','csr','sp','bl','bll','ssn','sst','ssy','ban','bal','bat','og','fc','fbg','orgIdentity','coreCount','domain','bonePart','boneYear','secondProf','secondLevel','mechaLevel','soulDevice','legendWeapon','greeting','scenario'];var filled=0;var total=fieldIds.length;for(var i=0;i<fieldIds.length;i++){var id=fieldIds[i];var el=fields[id];if(el&&el.value&&el.value.trim()!==''&&el.value!=='无'&&el.value!=='无斗铠')filled++;}rings.forEach(function(r){if(r.name&&r.name.trim())filled++;if(r.effect&&r.effect.trim())filled++;});var armorCnt=Number(armorCountInput.value)||0;filled+=armorCnt;var totalFields=document.getElementById('totalFields');if(totalFields)totalFields.textContent=(total+rings.length*2+11);var pctVal=Math.min(100,Math.round((filled/(total+rings.length*2+11))*100));pct.textContent=filled;pbar.style.width=pctVal+'%';pbar.className='';if(pctVal<30)pbar.classList.add('pbar-low');else if(pctVal<70)pbar.classList.add('pbar-mid');else pbar.classList.add('pbar-high');document.querySelectorAll('.sec').forEach(function(sec){var inputs=sec.querySelectorAll('input, textarea, select');var hasVal=false;inputs.forEach(function(inp){if(inp.value&&inp.value.trim()!==''&&inp.value!=='无'&&inp.value!=='无斗铠')hasVal=true;});var dot=sec.querySelector('.dot');if(dot){if(hasVal)dot.classList.add('filled');else dot.classList.remove('filled');}});}
function saveDraft(){try{var data=collectData();data._rings=rings;data._armorCount=Number(armorCountInput.value)||0;localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}catch(_){}}
function loadDraft(){try{var raw=localStorage.getItem(STORAGE_KEY);if(!raw)return;var data=JSON.parse(raw);if(!data||typeof data!=='object')return;if(data._rings&&Array.isArray(data._rings)&&data._rings.length){rings=data._rings;renderRings();}if(data._armorCount!==undefined){armorCountInput.value=data._armorCount;updateArmorPercent();}var map={'cn':'基本信息.姓名','gd':'基本信息.性别','ag':'基本信息.年龄','ht':'基本信息.身高_cm','wt':'基本信息.体重_kg','msn':'武魂与魂力.武魂名称','mst':'武魂与魂力.武魂类型','isp':'武魂与魂力.先天魂力','csr':'武魂与魂力.当前魂力等级','sn2':'武魂与魂力.第二武魂.武魂名称','st2':'武魂与魂力.第二武魂.武魂类型','sp':'精神力.精神力等级','bl':'血脉传承.血脉类型','bll':'血脉传承.血脉觉醒程度','cbl':'血脉传承.血脉类型','ssn':'魂灵.主要魂灵名称','sst':'魂灵.魂灵类型','ssy':'魂灵.魂灵年限','ess':'魂灵.其他魂灵','ban':'斗铠.斗铠名称','bal':'斗铠.斗铠等级','bat':'斗铠.斗铠侧重','badesc':'斗铠.斗铠描述','og':'背景与阵营.出身地','fc':'背景与阵营.所属阵营','fbg':'背景与阵营.家族背景','pt':'性格与特质.性格特质','st':'性格与特质.特殊能力','greeting':'开场白与场景.开场白','scenario':'开场白与场景.场景设定'};function setField(id,path){var el=fields[id];if(!el)return;var val=data;var parts=path.split('.');for(var i=0;i<parts.length;i++){if(val&&typeof val==='object'&&parts[i]in val)val=val[parts[i]];else{val=undefined;break;}}if(val===undefined||val===null)return;if(Array.isArray(val))val=val.join('\n');if(el.tagName==='SELECT'){var opts=Array.from(el.options);var match=opts.find(function(o){return o.value===String(val);});if(match)el.value=String(val);else el.value=val;}else{el.value=val;}}for(var key in map){if(map.hasOwnProperty(key))setField(key,map[key]);}if(data.背景与阵营&&data.背景与阵营.组织身份)fields.orgIdentity.value=data.背景与阵营.组织身份;if(data.魂核与领域){if(data.魂核与领域.魂核数量)fields.coreCount.value=data.魂核与领域.魂核数量;if(data.魂核与领域.领域名称)fields.domain.value=data.魂核与领域.领域名称;}if(data.魂骨){if(data.魂骨.魂骨部位)fields.bonePart.value=data.魂骨.魂骨部位;if(data.魂骨.魂骨年限)fields.boneYear.value=data.魂骨.魂骨年限;}if(data.第二职业){if(data.第二职业.职业类型)fields.secondProf.value=data.第二职业.职业类型;if(data.第二职业.等级){var lv=data.第二职业.等级.replace('级','');var opts=Array.from(fields.secondLevel.options);var match=opts.find(function(o){return o.value===lv;});if(match)fields.secondLevel.value=lv;}}if(data.机甲与魂导器){var mech=data.机甲与魂导器.机甲等级||'';var found=false;var opts=Array.from(fields.mechaLevel.options);for(var i=0;i<opts.length;i++){if(opts[i].value===mech){fields.mechaLevel.value=mech;found=true;break;}}if(!found&&mech.startsWith('红级·')){fields.mechaLevel.value='红级（自定义）';fields.mechaCustom.value=mech.replace('红级·','');fields.mechaCustomWrap.style.display='block';}if(data.机甲与魂导器.魂导器名称)fields.soulDevice.value=data.机甲与魂导器.魂导器名称;if(data.机甲与魂导器.传说武器)fields.legendWeapon.value=data.机甲与魂导器.传说武器;}if(fields.og_select){var ogVal=getVal('og');var opts2=Array.from(fields.og_select.options);var match2=opts2.find(function(o){return o.value===ogVal;});if(match2)fields.og_select.value=ogVal;else fields.og_select.value='';}var stVal=getVal('st');if(stVal&&!Array.from(fields.st.options).find(function(o){return o.value===stVal;})){fields.st.value='自定义';fields.stCustom.value=stVal;fields.stCustomWrap.style.display='block';}else{fields.st.value=stVal||'无';fields.stCustomWrap.style.display='none';}updateSoulTitle();updateSoulComment();updateArmorGrade();toggleDualSoul();toggleCustomBlood();updateProgress();updatePreview();updateRingInfo();goToStep(1);}catch(_){}}
function updateSoulTitle(){var lv=getVal('csr');var title=getSoulTitle(lv);fields.soulTitle.value=title;}
function updateSoulComment(){var lv=getVal('csr');var comment=getSoulComment(lv);soulComment.textContent=comment;soulComment.className='soul-comment'+(getVal('csr')?' active':'');}
function updateArmorGrade(){var level=getSel('bal');var info=getArmorGrade(level);fields.armorGrade.innerHTML='<span style="color:'+info.color+';font-weight:600;font-size:1.2em;">●</span> '+info.text;}
function toggleDualSoul(){dsf.classList.toggle('ac',getSel('mst')==='双生武魂');}
function toggleCustomBlood(){cbg.style.display=(getSel('bl')==='自定血脉')?'block':'none';}
function showMessage(text,isError){msg.textContent=text;msg.className=isError?'error':'';msg.style.display='block';clearTimeout(msg._timer);msg._timer=setTimeout(function(){msg.style.display='none';},3000);}
function copyToClipboard(text,silent){try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).catch(function(){fallbackCopy(text,silent);});}else{fallbackCopy(text,silent);}}catch(_){fallbackCopy(text,silent);}}
function fallbackCopy(text,silent){cd.value=text;cd.style.position='static';cd.style.opacity='1';cd.style.width='100%';cd.style.height='60px';cd.style.pointerEvents='auto';cd.style.marginTop='4px';cd.select();try{if(document.execCommand('copy')){if(!silent)showMessage('✅ 已复制！');}else{if(!silent)showMessage('⚠️ 请手动复制');}}catch(_){if(!silent)showMessage('⚠️ 请手动复制');}setTimeout(function(){cd.style.position='absolute';cd.style.left='-9999px';cd.style.top='-9999px';cd.style.opacity='0';cd.style.width='1px';cd.style.height='1px';cd.style.pointerEvents='none';},3000);}
function generatePersonaText(){var d=collectData();var v=d.武魂与魂力;var lines=[];lines.push('【玩家：'+(d.基本信息.姓名||'未命名')+'】');lines.push('');lines.push('基本信息：');lines.push('- 姓名：'+(d.基本信息.姓名||'未命名'));lines.push('- 性别：'+(d.基本信息.性别||'未填写'));if(d.基本信息.年龄)lines.push('- 年龄：'+d.基本信息.年龄+'岁');if(d.基本信息.身高_cm)lines.push('- 身高：'+d.基本信息.身高_cm+'cm');if(d.基本信息.体重_kg)lines.push('- 体重：'+d.基本信息.体重_kg+'kg');lines.push('');if(d.背景与阵营.出身地)lines.push('- 出身地：'+d.背景与阵营.出身地);if(d.背景与阵营.所属阵营)lines.push('- 所属阵营：'+d.背景与阵营.所属阵营);if(d.背景与阵营.组织身份)lines.push('- 组织身份：'+d.背景与阵营.组织身份);if(d.背景与阵营.家族背景)lines.push('- 家族背景：'+d.背景与阵营.家族背景);lines.push('');lines.push('武魂与魂力：');if(v.武魂类型==='双生武魂'){lines.push('- 武魂：'+(v.第一武魂.武魂名称||'未填写')+'（'+v.武魂类型+'）');if(v.第二武魂.武魂名称&&v.第二武魂.武魂名称!=='未填写'){lines.push('- 第二武魂：'+v.第二武魂.武魂名称+'（'+(v.第二武魂.武魂类型||'未填写')+'）');}}else{lines.push('- 武魂：'+(v.武魂名称||'未填写')+'（'+v.武魂类型+'）');}if(v.先天魂力)lines.push('- 先天魂力：'+v.先天魂力);if(v.当前魂力等级&&v.当前魂力等级!=='未填写'){lines.push('- 当前魂力：'+v.当前魂力等级);if(v.魂师称号)lines.push('- 魂师称号：'+v.魂师称号);}lines.push('');if(d.精神力.精神力等级){lines.push('精神力：');lines.push('- 精神力境界：'+d.精神力.精神力等级);lines.push('');}if(d.血脉传承.血脉类型&&d.血脉传承.血脉类型!==''&&d.血脉传承.血脉类型!=='未填写'){lines.push('血脉：');lines.push('- 血脉类型：'+d.血脉传承.血脉类型);if(d.血脉传承.血脉觉醒程度)lines.push('- 觉醒程度：'+d.血脉传承.血脉觉醒程度);lines.push('');}if(d.魂核与领域){if(d.魂核与领域.魂核数量&&d.魂核与领域.魂核数量!=='0')lines.push('- 魂核数量：'+d.魂核与领域.魂核数量);if(d.魂核与领域.领域名称)lines.push('- 领域：'+d.魂核与领域.领域名称);if(lines[lines.length-1].startsWith('- 魂核')||lines[lines.length-1].startsWith('- 领域'))lines.push('');}if(d.魂环&&d.魂环.length){lines.push('魂环配置：');var colorMap={'十年':'白','百年':'黄','千年':'紫','万年':'黑','十万年':'红','凶兽（二十万年）':'红','百万年':'金'};d.魂环.forEach(function(r,idx){lines.push('- 第'+(idx+1)+'魂环：'+r.年份+'（'+(colorMap[r.年份]||'?')+'）· '+r.魂技名称+'：'+r.魂技效果);});lines.push('');}if(d.魂灵.主要魂灵名称&&d.魂灵.主要魂灵名称!==''&&d.魂灵.主要魂灵名称!=='未填写'){lines.push('魂灵：');lines.push('- 主要魂灵：'+d.魂灵.主要魂灵名称+'（'+d.魂灵.魂灵类型+'·'+d.魂灵.魂灵年限+'）');if(d.魂灵.其他魂灵.length){d.魂灵.其他魂灵.forEach(function(s){lines.push('- 其他魂灵：'+s);});}lines.push('');}if(d.斗铠.斗铠名称&&d.斗铠.斗铠名称!==''&&d.斗铠.斗铠名称!=='未填写'){lines.push('斗铠：');lines.push('- 斗铠名称：'+d.斗铠.斗铠名称);if(d.斗铠.斗铠等级&&d.斗铠.斗铠等级!=='无')lines.push('- 斗铠等级：'+d.斗铠.斗铠等级);if(d.斗铠.斗铠品级)lines.push('- 斗铠品级：'+d.斗铠.斗铠品级);if(d.斗铠.斗铠侧重&&d.斗铠.斗铠侧重!=='不适用')lines.push('- 斗铠侧重：'+d.斗铠.斗铠侧重);if(d.斗铠.斗铠部件完成数)lines.push('- 部件完成度：'+d.斗铠.斗铠部件完成数);if(d.斗铠.斗铠描述)lines.push('- 斗铠描述：'+d.斗铠.斗铠描述);lines.push('');}if(d.魂骨&&d.魂骨.魂骨部位&&d.魂骨.魂骨部位!=='无'){lines.push('魂骨：');lines.push('- 魂骨部位：'+d.魂骨.魂骨部位);if(d.魂骨.魂骨年限&&d.魂骨.魂骨年限!=='无')lines.push('- 魂骨年限：'+d.魂骨.魂骨年限);lines.push('');}if(d.第二职业&&d.第二职业.职业类型&&d.第二职业.职业类型!=='无'){lines.push('第二职业：');lines.push('- 职业：'+d.第二职业.职业类型);lines.push('- 等级：'+d.第二职业.等级);lines.push('');}if(d.机甲与魂导器){if(d.机甲与魂导器.机甲等级&&d.机甲与魂导器.机甲等级!=='无')lines.push('- 机甲等级：'+d.机甲与魂导器.机甲等级);if(d.机甲与魂导器.魂导器名称)lines.push('- 魂导器：'+d.机甲与魂导器.魂导器名称);if(d.机甲与魂导器.传说武器)lines.push('- 传说武器：'+d.机甲与魂导器.传说武器);if(lines[lines.length-1].startsWith('- 机甲')||lines[lines.length-1].startsWith('- 魂导器')||lines[lines.length-1].startsWith('- 传说武器'))lines.push('');}if(d.性格与特质.性格特质.length)lines.push('性格特质：'+d.性格与特质.性格特质.join('、'));if(d.性格与特质.特殊能力&&d.性格与特质.特殊能力!=='无'&&d.性格与特质.特殊能力!=='')lines.push('特殊能力：'+d.性格与特质.特殊能力);if(d.开场白与场景.开场白){lines.push('');lines.push('开场白：'+d.开场白与场景.开场白);}if(d.开场白与场景.场景设定)lines.push('场景：'+d.开场白与场景.场景设定);return lines.join('\n');}
function showExport(){var text=generatePersonaText();exportPreview.value=text;exportArea.classList.add('show');var now=new Date();exportTime.textContent=now.toLocaleString();copyToClipboard(text,true);showMessage('✅ 玩家人设已导出并复制！');if(navigator.vibrate)navigator.vibrate(20);}
function spawnParticles(){particlesContainer.innerHTML='';for(var i=0;i<30;i++){var span=document.createElement('span');var angle=Math.random()*2*Math.PI;var dist=40+Math.random()*80;var tx=Math.cos(angle)*dist;var ty=Math.sin(angle)*dist-20;span.style.setProperty('--tx',tx+'px');span.style.setProperty('--ty',ty+'px');span.style.left='50%';span.style.top='50%';span.style.animationDelay=(Math.random()*0.3)+'s';span.style.width=(3+Math.random()*5)+'px';span.style.height=span.style.width;particlesContainer.appendChild(span);}setTimeout(function(){particlesContainer.innerHTML='';},1500);}
function showAwakenAnimation(){
  var data=collectData();
  var json=JSON.stringify(data,function(k,v){return Array.isArray(v)&&v.length===0?[]:v;},2);
  copyToClipboard(json);
  showMessage('✅ 觉醒档案已铸就！');
  var secs=document.querySelectorAll('.sec details');
  secs.forEach(function(d){d.removeAttribute('open');});
  spawnParticles();
  awakenOverlay.classList.add('active');
  var lines=awakenOverlay.querySelectorAll('.line');
  lines.forEach(function(line){
    line.classList.remove('show');
    var delay=parseInt(line.dataset.delay)||0;
    setTimeout(function(){line.classList.add('show');},delay);
  });
  setTimeout(function(){
    var hint=document.getElementById('closeHint');
    if(hint)hint.classList.add('show');
  },3200);
  var autoClose=setTimeout(function(){
    awakenOverlay.classList.remove('active');
    var hint=document.getElementById('closeHint');
    if(hint)hint.classList.remove('show');
  },5500);
  awakenOverlay.addEventListener('click',function handler(){
    clearTimeout(autoClose);
    awakenOverlay.classList.remove('active');
    var hint=document.getElementById('closeHint');
    if(hint)hint.classList.remove('show');
    awakenOverlay.removeEventListener('click',handler);
  });
}
function exportJson(){var data=collectData();var json=JSON.stringify(data,function(k,v){return Array.isArray(v)&&v.length===0?[]:v;},2);copyToClipboard(json);showMessage('✅ 觉醒档案已铸就！');}
function randomGenerate(){
  var surnames=['唐','李','王','张','刘','陈','杨','赵','黄','周','吴','徐','孙','胡','朱','高','林','何','郭','马'];
  var givenNames=['舞麟','小舞','唐三','霍雨浩','王冬','贝贝','徐三石','和菜头','萧萧','江楠楠','戴沐白','奥斯卡','朱竹清','宁荣荣','凌风','云岚','星辰'];
  var spirits=['蓝银草','白虎','凤凰','灵猫','龙','剑','枪','锤','书','琴','鼎','塔','荆棘','冰雪','火焰','雷霆','圣光','暗影'];
  var spiritTypes=['兽武魂','器武魂','植物武魂','元素武魂','变异武魂'];
  var bloods=['无特殊血脉','金龙王血脉','银龙王血脉','龙族血脉','海神血脉','凤凰血脉','泰坦血脉'];
  var camps=['史莱克学院','唐门','传灵塔','星罗帝国','天斗帝国','自由魂师','本体宗','七宝琉璃宗','昊天宗'];
  var specs=['无','天生神力','剑感','元素亲和','精神感知','自愈体质','龙族感应','空间感知','战斗直觉','钢铁意志'];
  var currentName=getVal('cn');
  if(!currentName){
    var name=surnames[Math.floor(Math.random()*surnames.length)]+givenNames[Math.floor(Math.random()*givenNames.length)];
    fields.cn.value=name;
  }
  var gender=Math.random()>0.5?'男':'女';
  var age=Math.floor(Math.random()*20)+6;
  var height=Math.floor(Math.random()*60)+150;
  var weight=Math.floor(Math.random()*30)+50;
  var spirit=spirits[Math.floor(Math.random()*spirits.length)];
  var spiritType=spiritTypes[Math.floor(Math.random()*spiritTypes.length)];
  var innate=['10级（满魂力）','9级','8级','7级','6级','5级','4级','3级'][Math.floor(Math.random()*8)];
  var soulLevel=Math.floor(Math.random()*50)+10;
  var blood=bloods[Math.floor(Math.random()*bloods.length)];
  var camp=camps[Math.floor(Math.random()*camps.length)];
  var spec=specs[Math.floor(Math.random()*specs.length)];
  fields.gd.value=gender;
  fields.ag.value=age;
  fields.ht.value=height;
  fields.wt.value=weight;
  fields.msn.value=spirit;
  fields.mst.value=spiritType;
  fields.isp.value=innate;
  fields.csr.value=soulLevel;
  fields.bl.value=blood;
  fields.bll.value=['未觉醒','初步觉醒','部分觉醒','深度觉醒','完全觉醒'][Math.floor(Math.random()*5)];
  fields.fc.value=camp;
  fields.st.value=spec;
  if(spec==='自定义'){fields.stCustomWrap.style.display='block';}else{fields.stCustomWrap.style.display='none';}
  var ringYears=['十年','百年','百年','千年','千年','万年','十万年'];
  rings=[];
  var ringCount=Math.min(getRingCount(soulLevel),9);
  if(ringCount===0)ringCount=1;
  var ringNames=['缠绕','冲击','守护','治愈','瞬移','狂暴','冰封','烈焰','雷霆','破甲','复苏'];
  for(var i=0;i<ringCount;i++){
    var y=ringYears[Math.floor(Math.random()*ringYears.length)];
    rings.push({year:y,name:ringNames[Math.floor(Math.random()*ringNames.length)]+'魂技',effect:'造成'+(Math.floor(Math.random()*40)+20)+'% 魂力伤害'});
  }
  localStorage.setItem('soul_rings_v4',JSON.stringify(rings));
  renderRings();
  updateSoulTitle();
  updateSoulComment();
  updateArmorGrade();
  toggleDualSoul();
  toggleCustomBlood();
  updateRolePosition();
  updateCamp();
  updateSpiritLevel();
  updateSpecialAbility();
  updateRingInfo();
  saveDraft();
  updateProgress();
  updatePreview();
  showSoulLog('🎲 天命已定 · 魂师档案已随机生成');
  var text=generatePersonaText();
  fateBody.textContent=text;
  fateModal.classList.add('active');
}
function clearAll(){
  if(!confirm('确定清空所有字段吗？'))return;
  for(var key in fields){
    if(fields.hasOwnProperty(key)&&fields[key]){
      if(fields[key].tagName==='SELECT')fields[key].selectedIndex=0;
      else fields[key].value='';
    }
  }
  fields.stCustomWrap.style.display='none';
  fields.mechaCustomWrap.style.display='none';
  rings=[{year:'百年',name:'',effect:''}];
  localStorage.setItem('soul_rings_v4',JSON.stringify(rings));
  renderRings();
  armorCountInput.value=0;
  updateArmorPercent();
  localStorage.removeItem(STORAGE_KEY);
  toggleDualSoul();
  toggleCustomBlood();
  updateSoulTitle();
  updateSoulComment();
  updateArmorGrade();
  updateProgress();
  updatePreview();
  updateRingInfo();
  showMessage('🗑 已清空');
}
function bindEvents(){
  document.getElementById('mainTitle').addEventListener('click',function(){
    var first=document.querySelector('.sec details');
    var isOpen=first?first.hasAttribute('open'):false;
    var details=document.querySelectorAll('.sec details');
    details.forEach(function(d){if(isOpen)d.removeAttribute('open');else d.setAttribute('open','open');});
    showMessage(isOpen?'📂 全部收起':'📂 全部展开');
  });
  document.getElementById('stepPrev').addEventListener('click',function(){
    if(currentStep>1)goToStep(currentStep-1);
  });
  document.getElementById('stepNext').addEventListener('click',function(){
    if(currentStep===4){
      showAwakenAnimation();
    }else if(currentStep<4){
      goToStep(currentStep+1);
    }
  });
  fields.mst.addEventListener('change',function(){
    toggleDualSoul();
    updateInnateOptions();
    updateRolePosition();
    if(getSel('mst')==='神级武魂'){fields.isp.value='20级（神赐）';}
    saveDraft();
    updateProgress();
    showSoulLog('武魂类型更新：'+getSel('mst'));
  });
  fields.bl.addEventListener('change',function(){
    toggleCustomBlood();
    updateSpecialAbility();
    saveDraft();
    updateProgress();
    if(getSel('bl')!=='无特殊血脉')showSoulLog('血脉之力：'+getSel('bl')+' 已觉醒');
  });
  fields.og_select.addEventListener('change',function(){
    fields.og.value=this.value;
    updateCamp();
    saveDraft();
    updateProgress();
  });
  fields.st.addEventListener('change',function(){
    if(this.value==='自定义'){fields.stCustomWrap.style.display='block';fields.stCustom.focus();}
    else{fields.stCustomWrap.style.display='none';}
    updateSpecialAbility();
    saveDraft();
    updateProgress();
  });
  fields.csr.addEventListener('input',function(){
    updateSoulTitle();
    updateSoulComment();
    updateSpiritLevel();
    updateRingInfo();
    saveDraft();
    updateProgress();
    var lv=getVal('csr');
    if(lv)showSoulLog('魂力更新：'+lv+'级 → '+getSoulTitle(lv));
  });
  fields.bal.addEventListener('change',function(){
    updateArmorGrade();
    saveDraft();
    updateProgress();
    var info=getArmorGrade(getSel('bal'));
    showSoulLog('斗铠品级：'+info.text);
  });
  armorCountInput.addEventListener('input',function(){
    updateArmorPercent();
    saveDraft();
    updateProgress();
  });
  fields.mechaLevel.addEventListener('change',function(){
    updateMechaCustom();
    saveDraft();
    updateProgress();
    showSoulLog('机甲等级：'+getMechaDisplay());
  });
  var autoSave=function(){saveDraft();updateProgress();updatePreview();};
  var inputs=document.querySelectorAll('input, textarea, select');
  for(var i=0;i<inputs.length;i++){
    inputs[i].addEventListener('input',autoSave);
    inputs[i].addEventListener('change',autoSave);
  }
  document.querySelectorAll('input, textarea, select').forEach(function(el){
    el.addEventListener('focus',function(){
      var label=this.closest('.fd');
      if(label){var lbl=label.querySelector('label');if(lbl){fieldIndicator.textContent=lbl.textContent.trim().replace(/[🔹◆◈]/g,'').trim();fieldIndicator.classList.add('show');clearTimeout(fieldIndicator._timer);fieldIndicator._timer=setTimeout(function(){fieldIndicator.classList.remove('show');},1800);}}
      setTimeout(function(){el.scrollIntoView({block:'center',behavior:'smooth'});},300);
    });
  });
  $('btnExportPersona').addEventListener('click',showExport);
  $('btnExportJson').addEventListener('click',function(){showAwakenAnimation();});
  $('btnClearAll').addEventListener('click',clearAll);
  $('btnRandom').addEventListener('click',randomGenerate);
  $('btnCopyExport').addEventListener('click',function(){copyToClipboard(exportPreview.value);showMessage('已复制！');});
  $('btnAddRing').addEventListener('click',function(){
    if(rings.length>=9){showMessage('最多9个魂环',true);return;}
    rings.push({year:'百年',name:'',effect:''});
    localStorage.setItem('soul_rings_v4',JSON.stringify(rings));
    renderRings();
    updateRingInfo();
    updateProgress();
    saveDraft();
    showSoulLog('已添加魂环槽位');
  });
  $('btnSyncRings').addEventListener('click',function(){syncRingsToLevel();});
  $('fateCopy').addEventListener('click',function(){
    copyToClipboard(fateBody.textContent);
    showMessage('✅ 已复制天命档案！');
  });
  $('fateClose').addEventListener('click',function(){fateModal.classList.remove('active');});
  fateModal.addEventListener('click',function(e){
    if(e.target===fateModal)fateModal.classList.remove('active');
  });
  document.querySelectorAll('.sec details').forEach(function(detail){
    var summary=detail.querySelector('summary');
    if(summary){
      summary.addEventListener('click',function(e){
        e.preventDefault();
        var isOpen=detail.hasAttribute('open');
        if(isOpen)detail.removeAttribute('open');
        else detail.setAttribute('open','open');
      });
    }
  });
  exportPreview.addEventListener('focus',function(){this.select();});
}
function init(){
  updateInnateOptions();
  initRings();
  loadDraft();
  toggleDualSoul();
  toggleCustomBlood();
  updateSoulTitle();
  updateSoulComment();
  updateArmorGrade();
  updateRolePosition();
  updateCamp();
  updateSpiritLevel();
  updateSpecialAbility();
  updateMechaCustom();
  updateArmorPercent();
  bindEvents();
  updateProgress();
  updatePreview();
  goToStep(1);
  setTimeout(function(){showSoulLog('✦ 魂导终端已启动 · 开始你的觉醒之旅 ✦');},500);
}
init();
})();
})();