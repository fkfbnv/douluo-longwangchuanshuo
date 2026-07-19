// ========== greeting.js - 斗罗大陆III 龙王传说 魂师档案 v21.0（滚动根治版）==========
(function() {
    "use strict";

    const styleText = `
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html,body{height:100%;margin:0;padding:0;overflow-y:auto;-webkit-overflow-scrolling:touch;touch-action:pan-y;background:#060d1a}
.soul-app-container{font-family:system-ui,'Microsoft YaHei',sans-serif;background:radial-gradient(ellipse at 50% 20%, #0f1a2e 0%, #0a1220 50%, #060d1a 100%);background-attachment:scroll;color:#e2e8f0;line-height:1.6;padding:12px 8px 24px;display:flex;justify-content:center;min-height:100%;position:relative;-webkit-overflow-scrolling:touch}
.soul-app-container::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background-image:radial-gradient(1px 1px at 10% 20%, rgba(255,200,100,0.3), transparent),radial-gradient(1.5px 1.5px at 30% 60%, rgba(255,150,255,0.2), transparent),radial-gradient(1px 1px at 50% 80%, rgba(100,200,255,0.25), transparent),radial-gradient(1.5px 1.5px at 70% 30%, rgba(255,100,100,0.2), transparent),radial-gradient(1px 1px at 90% 70%, rgba(100,255,200,0.2), transparent),radial-gradient(1px 1px at 15% 85%, rgba(255,200,50,0.25), transparent),radial-gradient(1.5px 1.5px at 55% 15%, rgba(200,150,255,0.2), transparent),radial-gradient(1px 1px at 85% 50%, rgba(255,80,80,0.2), transparent);background-size:100% 100%;pointer-events:none;z-index:0;animation:none;opacity:0.6}
@keyframes archiveRise{0%{opacity:0;transform:translateY(20px) scale(0.98);filter:blur(4px)}100%{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}}
#app{max-width:540px;width:100%;padding:18px 14px 130px 14px;background:linear-gradient(170deg,rgba(10,18,32,0.94),rgba(20,30,50,0.88) 30%,rgba(10,18,32,0.94));border:1px solid rgba(255,215,0,0.15);border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,0.6),0 0 80px rgba(255,215,0,0.04),inset 0 1px 0 rgba(255,215,0,0.06);position:relative;z-index:1;touch-action:auto;animation:archiveRise 0.5s cubic-bezier(0.16,1,0.3,1) forwards}
#app .title-wrap{position:relative;text-align:center;margin-bottom:6px}
#app .title-wrap::before,#app .title-wrap::after{content:'';position:absolute;top:50%;width:30px;height:2px;background:linear-gradient(90deg,transparent,#ff2d2d);opacity:0.2}
#app .title-wrap::before{left:-10px;transform:translateY(-50%)}
#app .title-wrap::after{right:-10px;transform:translateY(-50%) rotate(180deg)}
#app .title-wrap .corner{position:absolute;width:16px;height:16px;border:1px solid rgba(255,45,45,0.2);border-radius:2px;opacity:0.4}
#app .title-wrap .corner.tl{top:-2px;left:-2px;border-right:none;border-bottom:none}
#app .title-wrap .corner.tr{top:-2px;right:-2px;border-left:none;border-bottom:none}
#app .title-wrap .corner.bl{bottom:-2px;left:-2px;border-right:none;border-top:none}
#app .title-wrap .corner.br{bottom:-2px;right:-2px;border-left:none;border-top:none}
.title-ornament{font-size:.55em;letter-spacing:10px;opacity:.7;font-weight:300;margin-bottom:2px}
.title-ornament span{display:inline-block;animation:none;color:#ff2d2d}
h1{text-align:center;color:#ff2d2d;font-size:2em;font-weight:700;letter-spacing:8px;text-shadow:0 0 20px rgba(255,0,0,0.3),0 0 60px rgba(255,0,0,0.1),0 2px 12px rgba(0,0,0,0.6);font-family:'STKaiti','KaiTi','楷体',serif;min-height:44px;display:flex;align-items:center;justify-content:center;user-select:none;position:relative;background:linear-gradient(135deg,#ff2d2d 0%,#ff6b6b 50%,#ff2d2d 100%);background-size:100% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:none}
h1::after{content:'';position:absolute;bottom:-4px;width:60%;height:2px;background:linear-gradient(90deg,transparent,#ff2d2d,transparent);opacity:.3;border-radius:2px;animation:none}
.title-divider{text-align:center;font-size:.3em;letter-spacing:4px;opacity:.4;margin-top:-2px;font-weight:300}
.title-divider span{display:inline-block;animation:none;color:#94a3b8}
.subtitle{text-align:center;font-size:.65em;color:#94a3b8;margin:6px 0 12px 0;letter-spacing:6px;font-style:italic;opacity:.7;font-weight:300}
@keyframes breakFlash{0%{box-shadow:0 0 0 rgba(255,215,0,0);background:rgba(255,215,0,0)}20%{box-shadow:0 0 60px rgba(255,215,0,0.3);background:rgba(255,215,0,0.08)}60%{box-shadow:0 0 80px rgba(255,215,0,0.15);background:rgba(255,215,0,0.03)}100%{box-shadow:0 0 0 rgba(255,215,0,0);background:transparent}}
.break-flash{animation:breakFlash 0.8s ease-out forwards}
#toast{position:fixed;top:12px;left:50%;transform:translateX(-50%) translateY(-20px);z-index:999;background:rgba(10,18,32,0.96);border:1px solid rgba(255,215,0,0.2);border-radius:14px;padding:8px 20px;color:#fbbf24;font-size:.75em;letter-spacing:1px;opacity:0;transition:opacity .4s,transform .4s;pointer-events:none;box-shadow:0 4px 30px rgba(0,0,0,0.5),0 0 30px rgba(255,215,0,0.05)}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.step-nav{display:flex;align-items:center;justify-content:space-between;gap:6px;margin:8px 0 10px 0;padding:6px 10px;background:rgba(0,0,0,0.3);border-radius:12px;border:1px solid rgba(255,215,0,0.06)}
.step-nav .step-btn{background:transparent;border:1px solid rgba(255,215,0,0.12);color:#94a3b8;border-radius:8px;padding:4px 12px;font-size:.65em;font-weight:700;cursor:pointer;transition:.2s;touch-action:manipulation;min-height:28px;display:flex;align-items:center;gap:3px}
.step-nav .step-btn:hover{background:rgba(255,215,0,0.06);border-color:rgba(255,215,0,0.25);color:#fbbf24}
.step-nav .step-btn:disabled{opacity:.15;cursor:default;pointer-events:none}
.step-nav .step-btn:active{transform:scale(.92)}
.step-nav .step-btn-primary{background:rgba(255,215,0,0.08);border-color:rgba(255,215,0,0.2);color:#fbbf24}
.step-nav .step-btn-primary:hover{background:rgba(255,215,0,0.15);border-color:rgba(255,215,0,0.35)}
.step-nav .step-info{font-size:.65em;color:#64748b;letter-spacing:0.5px;flex:1;text-align:center;font-weight:300}
.step-nav .step-info .current{color:#fbbf24;font-weight:700}
.step-nav .step-info .total{color:#475569}
.step-nav .step-status{display:inline-flex;align-items:center;gap:4px;font-size:.55em;color:#4ac9b0;margin-left:4px}
.step-nav .step-status .dot{width:8px;height:8px;border-radius:50%;display:inline-block;background:#4ac9b0;opacity:0;transition:opacity .3s}
.step-nav .step-status .dot.done{opacity:1}
.step-nav .tool-group{display:flex;gap:3px}
.step-nav .bm-clear{font-size:.55em;padding:2px 8px;border-radius:6px;border:1px solid rgba(200,50,50,0.15);background:rgba(200,50,50,0.05);color:#f87171;cursor:pointer;transition:.2s;touch-action:manipulation;min-height:26px;display:inline-flex;align-items:center;gap:3px}
.step-nav .bm-clear:hover{background:rgba(200,50,50,0.12);border-color:#f87171}
.step-nav .bm-clear:active{transform:scale(.92)}
.sec{display:none;margin:2px 0;animation:stepFade .3s ease}
.sec.active{display:block}
@keyframes stepFade{0%{opacity:0;transform:translateY(8px) scale(0.99)}100%{opacity:1;transform:translateY(0) scale(1)}}
.step-guide{font-size:.6em;color:#94a3b8;font-weight:700;letter-spacing:2px;margin-bottom:10px;padding:6px 12px;background:rgba(255,215,0,0.04);border-radius:8px;border-left:2px solid rgba(255,215,0,0.2);font-style:italic}
.sec details{display:block;border-radius:8px;margin-bottom:4px;background:rgba(0,0,0,0.2);border:1px solid rgba(255,215,0,0.04)}
.sec summary{color:#fbbf24;font-size:.75em;font-weight:700;padding:6px 8px 6px 20px;border-bottom:1px solid rgba(255,215,0,0.04);letter-spacing:1px;position:relative;cursor:pointer;user-select:none;transition:.2s;border-radius:8px;display:flex;align-items:center;gap:4px;list-style:none;min-height:32px}
.sec summary::-webkit-details-marker{display:none}
.sec summary::before{content:'◆';position:absolute;left:4px;color:#fbbf24;font-size:.4em;opacity:.4}
.sec summary .ar{font-size:.55em;color:#64748b;transition:transform .25s ease;margin-left:auto}
.sec details[open] summary .ar{transform:rotate(180deg)}
.sec .sb{padding:4px 4px 2px}
.sec .sb .in{overflow:hidden}
.fd{margin-bottom:5px}
.fd label{display:block;margin-bottom:1px;color:#94a3b8;font-size:.7em;font-weight:700;letter-spacing:0.5px}
.fd label sm{color:#64748b;font-size:.7em;margin-left:2px;font-weight:400}
.fd .label-row{display:flex;align-items:center;gap:4px;flex-wrap:wrap}
.fd .label-row .suffix{font-size:.7em;color:#94a3b8;font-weight:400}
.fd .label-row .random-btn{font-size:.45em;padding:1px 8px;border-radius:10px;border:1px solid rgba(72,219,251,0.12);background:rgba(72,219,251,0.04);color:#48dbfb;cursor:pointer;transition:.2s;touch-action:manipulation}
.fd .label-row .random-btn:hover{background:rgba(72,219,251,0.12);border-color:#48dbfb;color:#7fdbff}
.tag-group{display:flex;flex-wrap:wrap;gap:3px;margin:2px 0}
.rw{display:flex;gap:4px;flex-wrap:wrap}
.rw .fd{flex:1;min-width:55px}
.rw .fd.half{flex:0 0 calc(50% - 2px)}
input,textarea,select{width:100%;padding:5px 10px;background:rgba(10,18,32,0.6);color:#e2e8f0;border:1px solid #334155;border-radius:6px;font-size:.78em;font-family:inherit;transition:border .25s,box-shadow .25s;box-shadow:inset 0 1px 3px rgba(0,0,0,.3);min-height:32px;-webkit-appearance:none;appearance:none}
input:focus,textarea:focus,select:focus{outline:none;border-color:#fbbf24;box-shadow:0 0 20px rgba(255,215,0,0.06),inset 0 1px 4px rgba(255,215,0,0.04);background:rgba(10,18,32,0.85)}
textarea{resize:vertical;min-height:28px;line-height:1.4}
select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='%23fbbf24'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:26px;cursor:pointer;touch-action:manipulation;font-size:14px}
select option{background:#0f1a2e;color:#e2e8f0}
.ta{overflow:hidden;max-height:0;opacity:0;transition:max-height .3s ease,opacity .25s ease,margin .25s ease;margin-top:0}
.ta.ac{max-height:300px;opacity:1;margin-top:4px}
.ta .ib{background:rgba(255,215,0,0.03);border:1px dashed rgba(255,215,0,0.06);border-radius:6px;padding:5px 8px}
.hl{background:rgba(255,215,0,0.02);border:1px solid rgba(255,215,0,0.04);border-radius:6px;padding:4px 8px;margin-bottom:4px}
.hl .hl-title{font-size:.65em;color:#94a3b8;font-weight:700;letter-spacing:1px;margin-bottom:2px}
.core-group{background:rgba(255,215,0,0.02);border:1px solid rgba(255,215,0,0.04);border-radius:6px;padding:4px 8px;margin-bottom:4px}
.core-group .core-label{font-size:.55em;color:#64748b;font-weight:700;letter-spacing:2px;margin-bottom:2px;text-transform:uppercase;opacity:.6}
.desc-text{font-size:.55em;color:#94a3b8;padding:4px 8px;background:rgba(0,0,0,0.15);border-radius:4px;margin-top:2px;font-style:italic;min-height:20px;display:none}
.desc-text.show{display:block}
.ring-group{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:2px}
.ring-item{display:flex;align-items:center;gap:3px;font-size:.55em;color:#94a3b8;padding:2px 4px;border-radius:4px;background:rgba(255,255,255,0.01);flex-wrap:wrap}
.ring-item .dot{width:16px;height:16px;border-radius:50%;flex-shrink:0;position:relative;animation:none}
.ring-item .dot.white{background:#e8e8e8;border:1px solid #b0b0b0;box-shadow:0 0 6px rgba(200,200,200,0.15)}
.ring-item .dot.white::after{content:'';position:absolute;top:2px;left:2px;right:2px;bottom:2px;border-radius:50%;border:1px dashed rgba(160,160,160,0.3)}
.ring-item .dot.yellow{background:#fcd34d;border:1px solid #d4a017;box-shadow:0 0 12px rgba(252,211,77,0.3)}
.ring-item .dot.yellow::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;background:radial-gradient(circle at 30% 30%, rgba(255,255,200,0.4), transparent 60%)}
.ring-item .dot.purple{background:#9b6bcc;border:1px solid #7a4a9a;box-shadow:0 0 14px rgba(155,107,204,0.25)}
.ring-item .dot.purple::after{content:'';position:absolute;top:1px;left:1px;right:1px;bottom:1px;border-radius:50%;background:radial-gradient(circle at 40% 30%, rgba(200,180,255,0.3), transparent 60%)}
.ring-item .dot.black{background:#2a2a2a;border:1px solid #4a3a2a;box-shadow:0 0 10px rgba(42,42,42,0.2)}
.ring-item .dot.black::after{content:'';position:absolute;top:2px;left:2px;right:2px;bottom:2px;border-radius:50%;border:1px solid rgba(80,70,60,0.3);background:radial-gradient(circle at 30% 30%, rgba(100,100,100,0.2), transparent 60%)}
.ring-item .dot.red{background:#dc3545;border:2px solid #ffd700;box-shadow:0 0 20px rgba(220,53,69,0.4),inset 0 0 10px rgba(255,215,0,0.15)}
.ring-item .dot.red::after{content:'';position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;border-radius:50%;border:1px solid rgba(255,215,0,0.3)}
.ring-item .dot.orangegold{background:#e8a317;border:2px solid #ff8c00;box-shadow:0 0 25px rgba(232,163,23,0.45)}
.ring-item .dot.orangegold::after{content:'';position:absolute;top:1px;left:1px;right:1px;bottom:1px;border-radius:50%;background:conic-gradient(from 45deg, transparent 0deg, rgba(255,215,0,0.15) 30deg, transparent 60deg, rgba(255,215,0,0.1) 90deg, transparent 120deg, rgba(255,215,0,0.15) 150deg, transparent 180deg, rgba(255,215,0,0.1) 210deg, transparent 240deg, rgba(255,215,0,0.15) 270deg, transparent 300deg, rgba(255,215,0,0.1) 330deg, transparent 360deg)}
.ring-item select{min-height:20px;font-size:.7em;padding:1px 4px;width:auto;min-width:32px;flex:1;background:rgba(0,0,0,0.2)}
.ring-item .ring-del{font-size:.45em;padding:0 6px;min-height:24px;min-width:24px;background:rgba(200,50,50,0.08);border-color:#3a1a1a;color:#6a3a3a}
.ring-item .ring-del:hover{background:rgba(200,50,50,0.15)}
.ring-hint{font-size:.55em;color:#64748b;text-align:center;margin:1px 0;letter-spacing:0.5px}
.ring-hint .match{color:#4ac9b0}
.ring-hint .mismatch{color:#f87171}
.ring-legend{display:flex;flex-wrap:wrap;gap:4px;margin:2px 0;padding:2px 4px;background:rgba(0,0,0,0.15);border-radius:4px}
.ring-legend .legend-item{display:flex;align-items:center;gap:2px;font-size:.45em;color:#94a3b8}
.ring-legend .legend-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.ring-legend .legend-dot.l-white{background:#e8e8e8;border:1px solid #b0b0b0}
.ring-legend .legend-dot.l-yellow{background:#fcd34d;border:1px solid #d4a017}
.ring-legend .legend-dot.l-purple{background:#9b6bcc;border:1px solid #7a4a9a}
.ring-legend .legend-dot.l-black{background:#2a2a2a;border:1px solid #4a3a2a}
.ring-legend .legend-dot.l-red{background:#dc3545;border:1px solid #ffd700}
.ring-legend .legend-dot.l-orangegold{background:#e8a317;border:1px solid #ff8c00;box-shadow:0 0 8px rgba(232,163,23,0.3)}
.spirit-dot{width:11px;height:11px;border-radius:50%;flex-shrink:0;display:inline-block;vertical-align:middle;margin-right:2px}
.spirit-dot.s-white{background:#e8e8e8;border:1px solid #b0b0b0}
.spirit-dot.s-yellow{background:#fcd34d;border:1px solid #d4a017}
.spirit-dot.s-purple{background:#9b6bcc;border:1px solid #7a4a9a}
.spirit-dot.s-black{background:#2a2a2a;border:1px solid #4a3a2a}
.spirit-dot.s-red{background:#dc3545;border:1px solid #ffd700;box-shadow:0 0 8px rgba(220,53,69,0.2)}
.spirit-dot.s-orangegold{background:#e8a317;border:1px solid #ff8c00;box-shadow:0 0 10px rgba(232,163,23,0.3)}
#msg{text-align:center;margin-top:4px;color:#4ac9b0;font-weight:400;font-size:.7em;display:none;animation:f .3s;letter-spacing:0.5px;padding:4px 10px;border-radius:6px;background:rgba(0,0,0,0.15)}
#msg.error{color:#f87171}
@keyframes f{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:translateY(0)}}
#cd{position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none}
.fb{text-align:center;margin-top:8px;font-size:.45em;color:#475569;letter-spacing:4px;opacity:.4;font-style:italic;padding-bottom:2px}
.fb span{display:inline-block;border:1px solid rgba(255,215,0,0.04);padding:2px 10px;border-radius:20px;background:rgba(0,0,0,0.1)}
.export-area{margin-top:4px;padding:4px 8px;background:rgba(0,0,0,0.15);border-radius:6px;border:1px solid rgba(255,215,0,0.04);display:none}
.export-area.show{display:block}
.export-area .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;flex-wrap:wrap;gap:3px}
.export-area .header span{font-size:.55em;color:#64748b;font-weight:700}
.export-area .header .export-actions{display:flex;gap:3px;align-items:center}
.export-area textarea{font-family:monospace;font-size:.55em;min-height:40px;background:rgba(0,0,0,0.2);color:#cbd5e1;padding:4px 8px;width:100%;resize:vertical;border-color:#1e293b;min-height:30px}
.export-area .footer{font-size:.45em;color:#475569;margin-top:1px;text-align:right}
.export-area .footer .btn-export-persona{font-size:.8em;padding:1px 8px;border-radius:10px;border:1px solid rgba(255,215,0,0.06);background:transparent;color:#475569;cursor:pointer;transition:.2s}
.export-area .footer .btn-export-persona:hover{color:#94a3b8;border-color:rgba(255,215,0,0.1)}
.enter-world-wrap{margin-top:10px;padding:6px 0}
.enter-world-wrap .enter-hint{font-size:.5em;color:#64748b;text-align:center;margin-bottom:4px;letter-spacing:1px;opacity:.6}
#fieldIndicator{position:fixed;bottom:62px;left:50%;transform:translateX(-50%);background:rgba(10,18,32,0.96);border:1px solid rgba(255,215,0,0.1);border-radius:12px;padding:3px 14px;font-size:.5em;color:#94a3b8;opacity:0;transition:opacity .3s;pointer-events:none;z-index:98;white-space:nowrap;max-width:80%;overflow:hidden;text-overflow:ellipsis}
#fieldIndicator.show{opacity:1}
.soul-comment{font-size:.5em;color:#64748b;text-align:center;margin-top:2px;min-height:18px;letter-spacing:0.5px;transition:opacity .3s;opacity:.6}
.soul-comment.active{color:#fbbf24;opacity:1;font-weight:700}
.title-epithet{font-size:.55em;color:#94a3b8;text-align:center;margin-top:2px;padding:4px 8px;background:rgba(255,215,0,0.04);border-radius:6px;border-left:2px solid rgba(255,215,0,0.1);font-style:italic;min-height:24px;display:none}
.title-epithet.show{display:block}
.btn-row{position:fixed;bottom:0;left:0;right:0;z-index:100;background:linear-gradient(180deg,transparent 0%,rgba(10,18,32,0.98) 25%,#0a1220 100%);padding:6px 16px 10px 16px;display:flex;flex-direction:row;align-items:center;gap:8px;border-top:1px solid rgba(255,215,0,0.04)}
.btn-row .btn-wrap{flex:1}
.btn-row .btn-wrap-small{flex:0 0 auto}
.btn-export-persona-bottom{padding:4px 10px;background:transparent;color:#475569;border:1px solid rgba(255,215,0,0.04);border-radius:8px;font-size:.45em;letter-spacing:1px;cursor:pointer;transition:.2s;touch-action:manipulation;min-height:28px}
.btn-export-persona-bottom:hover{color:#94a3b8;border-color:rgba(255,215,0,0.08)}
.btn-export-persona-bottom:active{transform:scale(.95)}
#awakenOverlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;background:rgba(0,0,0,0.94);display:none;justify-content:center;align-items:center;flex-direction:column;padding:20px}
#awakenOverlay.active{display:flex;animation:ao .3s}
@keyframes ao{from{opacity:0}to{opacity:1}}
#awakenOverlay .content{max-width:360px;width:100%;text-align:center}
#awakenOverlay .title{color:#fbbf24;font-size:1.4em;font-weight:700;letter-spacing:10px;font-family:'STKaiti','KaiTi','楷体',serif;margin-bottom:14px;text-shadow:0 0 40px rgba(255,215,0,0.15)}
#awakenOverlay .lines{text-align:left;padding:4px 0}
#awakenOverlay .lines .line{color:#cbd5e1;font-size:.85em;line-height:2.0;letter-spacing:1px;opacity:0;transform:translateY(5px);transition:opacity .4s ease,transform .4s ease}
#awakenOverlay .lines .line.show{opacity:1;transform:translateY(0)}
#awakenOverlay .lines .line.hl{color:#fbbf24;font-weight:700}
#awakenOverlay .lines .line.dim{color:#475569;font-size:.7em;letter-spacing:3px}
#awakenOverlay .divider{width:40%;height:1px;background:linear-gradient(90deg,transparent,#fbbf24,transparent);margin:8px auto;opacity:.2}
#awakenOverlay .close-hint{color:#475569;font-size:.5em;margin-top:10px;letter-spacing:1px;opacity:0;transition:opacity .8s ease}
#awakenOverlay .close-hint.show{opacity:.4}
#fateModal{position:fixed;top:0;left:0;right:0;bottom:0;z-index:998;background:rgba(0,0,0,0.85);display:none;justify-content:center;align-items:center;padding:16px}
#fateModal.active{display:flex;animation:ao .3s}
#fateModal .card{max-width:380px;width:100%;background:linear-gradient(170deg,#1c130a,#23180d 30%,#1a1008 60%,#140c05);border:1px solid rgba(255,215,0,0.15);border-radius:14px;padding:18px 16px;box-shadow:0 0 60px rgba(255,215,0,0.04);max-height:80vh;overflow-y:auto}
#fateModal .card .title{color:#fbbf24;font-size:.95em;font-weight:700;letter-spacing:4px;text-align:center;border-bottom:1px solid rgba(255,215,0,0.06);padding-bottom:8px;margin-bottom:10px}
#fateModal .card .body{color:#cbd5e1;font-size:.68em;line-height:1.7;white-space:pre-wrap;background:rgba(0,0,0,0.15);border-radius:6px;padding:8px 10px;max-height:45vh;overflow-y:auto;font-family:monospace}
#fateModal .card .actions{display:flex;gap:5px;margin-top:10px;justify-content:center}
#fateModal .card .actions .bm{flex:1;padding:6px;font-size:.6em;justify-content:center}
.special-tier{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:2px}
.special-tier .tier-tag{font-size:.5em;padding:2px 12px;border-radius:12px;cursor:pointer;transition:.2s;background:rgba(255,255,255,0.02);color:#64748b;border:1px solid rgba(255,255,255,0.03)}
.special-tier .tier-tag.t1{color:#94a3b8;border-color:rgba(255,255,255,0.03)}
.special-tier .tier-tag.t1.active{background:rgba(148,163,184,0.1);border-color:#94a3b8;color:#cbd5e1}
.special-tier .tier-tag.t2{color:#fbbf24;border-color:rgba(255,215,0,0.08);background:rgba(255,215,0,0.03)}
.special-tier .tier-tag.t2.active{background:rgba(255,215,0,0.12);border-color:#fbbf24;color:#fcd34d}
.special-tier .tier-tag.t3{color:#48dbfb;border-color:rgba(72,219,251,0.08);background:rgba(72,219,251,0.03)}
.special-tier .tier-tag.t3.active{background:rgba(72,219,251,0.12);border-color:#48dbfb;color:#7fdbff}
.special-tier .tier-tag.t4{color:#a29bfe;border-color:rgba(162,155,254,0.08);background:rgba(162,155,254,0.03)}
.special-tier .tier-tag.t4.active{background:rgba(162,155,254,0.12);border-color:#a29bfe;color:#c5bfff}
.special-tier .tier-tag.t5{color:#fd79a8;border-color:rgba(253,121,168,0.08);background:rgba(253,121,168,0.03)}
.special-tier .tier-tag.t5.active{background:rgba(253,121,168,0.12);border-color:#fd79a8;color:#ffb8d0}
.special-tier .tier-tag.t6{color:#ff6b6b;border-color:rgba(255,107,107,0.08);background:rgba(255,107,107,0.03)}
.special-tier .tier-tag.t6.active{background:rgba(255,107,107,0.12);border-color:#ff6b6b;color:#ff8a8a}
.secondary-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px}
.secondary-grid .fd{flex:1;min-width:0}
.backpack-grid{display:flex;flex-wrap:wrap;gap:3px;margin:2px 0}
.backpack-grid .bp-item{font-size:.5em;padding:1px 8px;border-radius:10px;background:rgba(255,215,0,0.04);border:1px solid rgba(255,215,0,0.06);color:#94a3b8;display:inline-flex;align-items:center;gap:3px}
.backpack-grid .bp-item .bp-del{cursor:pointer;color:#6a3a3a;font-size:.8em;margin-left:2px}
.backpack-grid .bp-item .bp-del:hover{color:#f87171}
.stage-detail-card{background:rgba(255,215,0,0.03);border:1px solid rgba(255,215,0,0.08);border-radius:8px;padding:8px 10px;margin-top:4px}
.stage-detail-card .stage-meta{font-size:.7em;color:#94a3b8;margin-bottom:4px}
.stage-detail-card .stage-meta strong{color:#fbbf24;font-weight:700}
.stage-detail-card .stage-events{margin-top:4px}
.stage-detail-card .stage-events .event-select{margin-top:2px}
.stage-detail-card .stage-events .event-select select{font-size:.7em;min-height:26px;padding:2px 8px}
.part-group{display:flex;flex-wrap:wrap;gap:3px;margin:2px 0}
.bm-part{font-size:.5em;padding:1px 6px;border-radius:10px;border:1px solid rgba(255,215,0,0.06);background:rgba(255,215,0,0.02);color:#64748b;min-height:22px;cursor:pointer;transition:.2s;touch-action:manipulation}
.bm-part.done{background:rgba(74,201,176,0.12);border-color:#4ac9b0;color:#4ac9b0}
.bm-part:hover{background:rgba(255,215,0,0.08);border-color:rgba(255,215,0,0.15);color:#fbbf24}
.bm{padding:2px 8px;font-size:.55em;border-radius:6px;border:1px solid rgba(255,215,0,0.1);background:rgba(255,255,255,.02);color:#94a3b8;cursor:pointer;transition:.2s;touch-action:manipulation;font-weight:400;letter-spacing:0.3px;white-space:nowrap;min-height:26px;min-width:26px;display:inline-flex;align-items:center;justify-content:center}
.bm:active{transform:scale(.92);background:rgba(255,255,255,.04)}
.bm:hover{background:rgba(255,215,0,0.06);border-color:rgba(255,215,0,0.2);color:#fbbf24}
.bm-gold{background:rgba(255,215,0,0.06);border-color:rgba(255,215,0,0.12);color:#fbbf24}
.bm-gold:hover{background:rgba(255,215,0,0.12);color:#fcd34d}
.bm-danger{background:rgba(200,50,50,0.06);border-color:rgba(200,50,50,0.12);color:#f87171}
.bm-danger:hover{background:rgba(200,50,50,0.12);color:#fca5a5}
.bm-enter{font-size:.7em;padding:8px 0;border-color:rgba(255,215,0,0.2);color:#fbbf24;background:rgba(255,215,0,0.08);min-height:44px;width:100%;justify-content:center;font-weight:700;letter-spacing:3px}
.bm-enter:hover{background:rgba(255,215,0,0.18);border-color:rgba(255,215,0,0.35);color:#fcd34d}
.bm-enter:active{transform:scale(.97)}
@media(max-width:480px){#app{padding:12px 10px 110px 10px;border-radius:14px}h1{font-size:1.4em;letter-spacing:5px;min-height:34px}.title-ornament{font-size:.4em;letter-spacing:4px}.title-divider{font-size:.25em;letter-spacing:3px}.subtitle{font-size:.55em;letter-spacing:4px}.step-nav{padding:4px 6px;gap:3px}.step-nav .step-btn{font-size:.55em;padding:2px 8px;min-height:24px}.step-nav .step-info{font-size:.55em}.rw{flex-direction:column;gap:2px}.rw .fd.half{flex:1}input,textarea,select{font-size:.72em;padding:4px 8px;min-height:28px}.bm{font-size:.5em;padding:2px 5px;min-height:22px;min-width:22px}.btn-row{padding:4px 8px 8px 8px;gap:4px}.ring-item{font-size:.5em;padding:1px 3px}.ring-item select{font-size:.6em;min-height:20px;padding:1px 3px}.ring-item .dot{width:14px;height:14px}.fd label{font-size:.65em}.soul-comment{font-size:.45em;min-height:16px}.secondary-grid{grid-template-columns:1fr 1fr;gap:3px}.sec summary{font-size:.7em;min-height:28px;padding:4px 6px 4px 16px}.sec summary::before{font-size:.35em;left:4px}.core-group{padding:4px 6px}.step-guide{font-size:.5em;padding:4px 8px}#toast{font-size:.65em;padding:5px 14px}.special-tier .tier-tag{font-size:.45em;padding:2px 8px}.backpack-grid .bp-item{font-size:.45em;padding:1px 6px}.stage-detail-card .stage-meta{font-size:.6em}.stage-detail-card .stage-events .event-select select{font-size:.6em}.ring-legend .legend-item{font-size:.4em}.bm-part{font-size:.45em;padding:1px 5px;min-height:20px}.title-epithet{font-size:.5em;padding:3px 6px}.desc-text{font-size:.5em}.bm-enter{font-size:.6em;padding:6px 0;min-height:38px}.btn-export-persona-bottom{font-size:.4em;padding:2px 6px;min-height:22px}.fd .label-row .random-btn{font-size:.4em;padding:1px 6px}}
@media(max-width:380px){.step-nav .step-btn{font-size:.5em;padding:1px 6px;min-height:20px}.secondary-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){*{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important}#app{animation:none;transform:none}.ring-item .dot{animation:none}}
input,select,textarea,.bm,.btn-export-persona-bottom,.sec summary,.ring-item select,.ring-item input,.step-btn,.special-tier .tier-tag,.backpack-grid .bp-item,.bm-part{touch-action:manipulation}
`;

    const styleEl = document.createElement('style');
    styleEl.textContent = styleText;
    document.head.appendChild(styleEl);

    const htmlContent = `
<div class="soul-app-container">
<div id="app">
<div id="fieldIndicator"></div>
<div id="toast"></div>
<div class="title-wrap">
  <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
  <div class="title-ornament"><span>◈</span> <span>❖</span> <span>◈</span> <span>❖</span> <span>◈</span></div>
  <h1 id="mainTitle">魂 师 绝 密 档 案</h1>
  <div class="title-divider"><span>━</span><span>━</span><span>━</span> <span>✦</span> <span>━</span><span>━</span><span>━</span></div>
</div>
<p class="subtitle">—— 斗罗大陆Ⅲ · 龙王传说 ——</p>
<div class="step-nav">
  <button class="step-btn" id="stepPrev">◀</button>
  <span class="step-info"><span class="current" id="stepCurrent">1</span>/<span class="total" id="stepTotal">8</span> · <span id="stepName">刻下你的名字</span><span class="step-status" id="stepStatus"><span class="dot" id="stepDot"></span></span></span>
  <button class="step-btn step-btn-primary" id="stepNext">▶</button>
  <div class="tool-group"><button class="bm-clear" id="btnClearAll">🗑 清空</button></div>
</div>
<div class="soul-comment" id="soulComment">✦ 输入魂力等级，查看修炼评语 ✦</div>
<div class="sec active" data-step="1">
  <div class="step-guide">✦ 第一步 · 刻下你的名字与灵魂</div>
  <div class="core-group">
    <div class="core-label">◈ 你是谁</div>
    <div class="rw"><div class="fd"><label>姓名</label><input type="text" id="cn" placeholder="你的名字"></div><div class="fd"><label>性别</label><select id="gd"><option value="男">男</option><option value="女">女</option><option value="其他">其他</option></select></div></div>
    <div class="fd"><div class="label-row"><label>年龄</label><span class="suffix">岁</span></div><input type="number" id="ag" min="6" max="200" value="6"></div>
  </div>
  <div class="core-group">
    <div class="core-label">◈ 性格</div>
    <div class="fd"><label>性格</label><input type="text" id="personality" placeholder="如：冷静、热血"></div>
    <div class="tag-group" id="personalityTags"></div>
  </div>
  <div class="fd"><label>外貌描述</label><textarea id="appearance" rows="2" placeholder="黑发金瞳，左颊有一道细长疤痕…"></textarea></div>
</div>
<div class="sec" data-step="2">
  <div class="step-guide">✦ 第二步 · 出身与阵营</div>
  <div class="fd"><label>出身地</label><select id="og_select"><option value="">-- 选择 --</option></select><input type="text" id="og" style="margin-top:2px" placeholder="或手动输入"></div>
  <div class="rw"><div class="fd"><label>所属阵营</label><select id="fc"><option value="无">无</option><option value="史莱克学院">史莱克学院</option><option value="唐门">唐门</option><option value="传灵塔">传灵塔</option><option value="战神殿">战神殿</option><option value="血神军团">血神军团</option><option value="星罗帝国">星罗帝国</option><option value="天斗帝国">天斗帝国</option><option value="本体宗">本体宗</option><option value="七宝琉璃宗">七宝琉璃宗</option><option value="昊天宗">昊天宗</option><option value="蓝电霸王龙家族">蓝电霸王龙家族</option><option value="原恩家族">原恩家族</option><option value="自由魂师">自由魂师</option><option value="散修">散修</option></select></div><div class="fd"><label>阵营身份</label><select id="fbg"><option value="无">无</option></select></div></div>
  <div class="fd"><label>组织身份</label><input type="text" id="orgIdentity" placeholder="如：史莱克七怪、斗魂堂成员"></div>
  <div class="rw"><div class="fd"><label>血脉觉醒程度</label><select id="bloodAwaken"><option value="未觉醒">未觉醒</option><option value="初步觉醒">初步觉醒</option><option value="深度觉醒">深度觉醒</option><option value="完全觉醒">完全觉醒</option><option value="返祖/巅峰">返祖/巅峰</option></select></div><div class="fd"><label>血脉选项</label><select id="bloodType"><option value="人族（普通）">人族（普通）</option><option value="人族（魂兽化形）">人族（魂兽化形）</option><option value="龙族（金龙王血脉）">龙族（金龙王血脉）</option><option value="龙族（银龙王血脉）">龙族（银龙王血脉）</option><option value="龙族（普通龙族）">龙族（普通龙族）</option><option value="神祇后裔">神祇后裔</option><option value="本体宗血脉">本体宗血脉</option><option value="昊天宗血脉">昊天宗血脉</option><option value="蓝电霸王龙血脉">蓝电霸王龙血脉</option><option value="自定义">自定义</option></select></div></div>
  <div id="bloodCustomWrap" style="display:none;margin-top:2px;"><div class="fd"><label>自定义血脉名称</label><input type="text" id="bloodCustom" placeholder="如：混沌血脉"></div></div>
</div>
<div class="sec" data-step="3">
  <div class="step-guide">✦ 第三步 · 觉醒你的武魂与魂力</div>
  <div class="core-group">
    <div class="core-label">◈ 核心武魂</div>
    <div class="rw"><div class="fd"><label>武魂名称</label><input type="text" id="msn" placeholder="如：蓝银草"></div><div class="fd"><label>武魂类型</label><select id="mst"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="双生武魂">双生武魂</option><option value="神级武魂">神级武魂</option></select></div></div>
  </div>
  <div id="dsf" class="ta"><div class="ib"><div class="rw"><div class="fd"><label>第二武魂名称</label><input type="text" id="sn2" placeholder="第二武魂"></div><div class="fd"><label>第二武魂类型</label><select id="st2"><option value="兽武魂">兽武魂</option><option value="器武魂">器武魂</option><option value="本体武魂">本体武魂</option><option value="植物武魂">植物武魂</option><option value="元素武魂">元素武魂</option><option value="辅助武魂">辅助武魂</option><option value="食物武魂">食物武魂</option><option value="变异武魂">变异武魂</option><option value="神级武魂">神级武魂</option></select></div></div></div></div>
  <div class="core-group" style="margin-top:6px;">
    <div class="core-label">◈ 魂力核心</div>
    <div class="rw"><div class="fd"><label>先天魂力</label><select id="isp"><option value="10级（满魂力）">10级（满魂力）</option></select></div><div class="fd"><label>当前魂力</label><input type="number" id="csr" min="0" max="150" placeholder="32"></div><div class="fd"><label>魂师称号</label><input type="text" id="soulTitle" readonly style="color:#fbbf24;font-weight:700;background:rgba(0,0,0,0.25);border-color:#334155;cursor:default;"></div></div>
    <div id="titleNameWrap" style="display:none;margin-top:2px;"><div class="fd"><label>封号名称</label><input type="text" id="titleName" placeholder="如：昊天斗罗"></div></div>
    <div id="titleEpithet" class="title-epithet"></div>
  </div>
</div>
<div class="sec" data-step="4">
  <div class="step-guide">✦ 第四步 · 精神力、定位与魂骨</div>
  <div class="core-group">
    <div class="core-label">◈ 精神力</div>
    <div class="fd"><label>精神力境界</label><select id="sp"><option value="灵元境">灵元境</option><option value="灵通境">灵通境</option><option value="灵海境">灵海境</option><option value="灵渊境">灵渊境</option><option value="灵域境">灵域境</option><option value="神元境">神元境</option><option value="神王境">神王境</option><option value="未知/未测定">未知/未测定</option></select></div>
    <div id="spiritDesc" class="desc-text"></div>
    <div id="spiritWarn" style="font-size:.55em;color:#f87171;display:none;padding:2px 6px;background:rgba(200,50,50,0.06);border-radius:4px;margin-top:2px;"></div>
  </div>
  <div class="core-group">
    <div class="core-label">◈ 魂师定位</div>
    <div class="fd"><select id="positionSelect"><option value="无">无</option><option value="强攻系">强攻系</option><option value="控制系">控制系</option><option value="敏攻系">敏攻系</option><option value="防御系">防御系</option><option value="辅助系">辅助系</option><option value="食物系">食物系</option><option value="治疗系">治疗系</option><option value="全能系">全能系</option></select></div>
  </div>
  <div class="core-group">
    <div class="core-label">◈ 魂骨</div>
    <div class="part-group" id="bonePartsGroup"></div>
    <div style="font-size:.5em;color:#64748b;margin-top:2px;">已装备：<span id="boneDoneCount">0</span>/<span id="boneTotalCount">7</span></div>
  </div>
</div>
<div class="sec" data-step="5">
  <div class="step-guide">✦ 第五步 · 魂灵与魂环</div>
  <div class="hl">
    <div class="hl-title">✦ 魂灵配置</div>
    <div class="fd"><label>主要魂灵</label><input type="text" id="ssn" placeholder="如：草蛇"></div>
    <div class="fd"><label>魂灵类型</label><select id="sst"><option value="战斗型">战斗型</option><option value="辅助型">辅助型</option><option value="防御型">防御型</option><option value="治疗型">治疗型</option><option value="特殊型">特殊型</option><option value="无魂灵">无魂灵</option></select></div>
    <div class="fd"><label>年限</label>
      <div class="spirit-year-select">
        <span class="spirit-dot s-white" id="spiritDot"></span>
        <select id="ssy"><option value="十年">十年</option><option value="百年">百年</option><option value="千年">千年</option><option value="万年">万年</option><option value="十万年">十万年</option><option value="凶兽">凶兽</option></select>
      </div>
    </div>
    <div class="fd"><label>其他魂灵 <sm>(每行一个)</sm></label><textarea id="ess" rows="2"></textarea></div>
    <div class="ring-legend" style="margin-top:2px;">
      <span class="legend-item"><span class="legend-dot l-white"></span>十年</span>
      <span class="legend-item"><span class="legend-dot l-yellow"></span>百年</span>
      <span class="legend-item"><span class="legend-dot l-purple"></span>千年</span>
      <span class="legend-item"><span class="legend-dot l-black"></span>万年</span>
      <span class="legend-item"><span class="legend-dot l-red"></span>十万年</span>
      <span class="legend-item"><span class="legend-dot l-orangegold"></span>凶兽</span>
    </div>
  </div>
  <div class="hl" style="margin-top:6px;">
    <div class="hl-title">✦ 魂环配置 <span id="ringMatchInfo" style="font-weight:300;font-size:.7em;color:#64748b;"></span></div>
    <div class="ring-legend" id="ringLegend">
      <span class="legend-item"><span class="legend-dot l-white"></span>十年</span>
      <span class="legend-item"><span class="legend-dot l-yellow"></span>百年</span>
      <span class="legend-item"><span class="legend-dot l-purple"></span>千年</span>
      <span class="legend-item"><span class="legend-dot l-black"></span>万年</span>
      <span class="legend-item"><span class="legend-dot l-red"></span>十万年</span>
      <span class="legend-item"><span class="legend-dot l-orangegold"></span>凶兽</span>
    </div>
    <div id="ringContainer"><div class="ring-group" id="ringGroup"></div></div>
    <div style="margin-top:2px;display:flex;gap:3px;flex-wrap:wrap;align-items:center;">
      <button class="bm" id="btnAddRing" style="font-size:.45em;padding:1px 6px;">➕ 添加</button>
      <span style="font-size:.45em;color:#64748b;">当前 <span id="ringCountDisplay">0</span> 环</span>
    </div>
    <div id="ringEmptyHint" style="font-size:.5em;color:#64748b;margin-top:2px;font-style:italic;display:none;">当前无魂环，点击 ➕ 添加</div>
  </div>
</div>
<div class="sec" data-step="6">
  <div class="step-guide">✦ 第六步 · 斗铠、机甲与第二职业</div>
  <div class="core-group">
    <div class="core-label">◈ 斗铠</div>
    <div class="rw"><div class="fd"><label>斗铠名称</label><input type="text" id="ban" placeholder="如：龙月"></div><div class="fd"><label>斗铠等级</label><select id="bal"><option value="无">无斗铠</option><option value="一字斗铠">一字斗铠</option><option value="二字斗铠">二字斗铠</option><option value="三字斗铠">三字斗铠</option><option value="四字斗铠">四字斗铠</option><option value="五字斗铠（神级）">五字斗铠（神级）</option><option value="六字斗铠（神级）">六字斗铠（神级）</option></select></div></div>
    <div class="fd"><label>斗铠侧重</label><select id="bat"><option value="均衡型">均衡型</option><option value="力量型">力量型</option><option value="敏捷型">敏捷型</option><option value="防御型">防御型</option><option value="爆发型">爆发型</option><option value="控制型">控制型</option><option value="不适用">不适用</option></select></div>
    <div class="fd"><label>斗铠品级</label><div id="armorGrade" style="padding:2px 8px;border-radius:4px;background:rgba(0,0,0,0.2);border:1px solid #1e293b;min-height:28px;display:flex;align-items:center;gap:4px;font-size:.75em;color:#94a3b8;">选择等级</div></div>
  </div>
  <details><summary>✦ 机甲 <span class="ar">▼</span></summary>
    <div class="sb"><div class="in">
      <div class="fd"><label>机甲等级</label><select id="mechaLevel"><option value="无">无</option><option value="黄级初阶">黄级初阶</option><option value="黄级中阶">黄级中阶</option><option value="黄级高阶">黄级高阶</option><option value="紫级初阶">紫级初阶</option><option value="紫级中阶">紫级中阶</option><option value="紫级高阶">紫级高阶</option><option value="黑级初阶">黑级初阶</option><option value="黑级中阶">黑级中阶</option><option value="黑级高阶">黑级高阶</option><option value="红级（自定义）">红级（自定义）</option></select></div>
      <div class="fd" id="mechaCustomWrap" style="display:none;"><label>红级名称</label><input type="text" id="mechaCustom" placeholder="如：龙神级"></div>
    </div></div>
  </details>
  <details><summary>✦ 第二职业 <span class="ar">▼</span></summary>
    <div class="sb"><div class="in">
      <div class="secondary-grid"><div class="fd"><label>第二职业</label><select id="secondProf"><option value="无">无</option><option value="锻造师">锻造师</option><option value="机甲制作">机甲制作</option><option value="机甲设计">机甲设计</option><option value="机甲维修">机甲维修</option><option value="自定义">自定义</option></select></div><div class="fd"><label>等级</label><select id="secondLevel"><option value="1">1级</option><option value="2">2级</option><option value="3">3级</option><option value="4">4级</option><option value="5">5级</option><option value="6">6级</option><option value="7">7级</option><option value="8">8级</option><option value="9">9级</option></select></div></div>
      <div id="secondProfCustomWrap" style="display:none;margin-top:2px;"><div class="fd"><label>自定义职业名称</label><input type="text" id="secondProfCustom" placeholder="如：炼金术"></div></div>
      <div id="secondProfDesc" class="desc-text"></div>
    </div></div>
  </details>
</div>
<div class="sec" data-step="7">
  <div class="step-guide">✦ 第七步 · 特殊能力（1~6级）</div>
  <div class="fd"><label>能力等级</label>
    <div class="special-tier" id="specialTier">
      <span class="tier-tag t1 active" data-tier="t1">1级</span>
      <span class="tier-tag t2" data-tier="t2">2级</span>
      <span class="tier-tag t3" data-tier="t3">3级</span>
      <span class="tier-tag t4" data-tier="t4">4级</span>
      <span class="tier-tag t5" data-tier="t5">5级</span>
      <span class="tier-tag t6" data-tier="t6">6级</span>
    </div>
    <select id="st" style="color:#e2e8f0;"></select>
    <div id="stDesc" style="font-size:.55em;color:#94a3b8;margin-top:2px;padding:2px 6px;background:rgba(0,0,0,0.15);border-radius:4px;min-height:18px;font-style:italic;"></div>
    <div id="specialWeaponWrap" style="display:none;margin-top:4px;background:rgba(255,215,0,0.04);border:1px dashed rgba(255,215,0,0.1);border-radius:6px;padding:4px 8px;">
      <div class="fd"><label>专属武魂</label><input type="text" id="specialWeapon" readonly style="background:rgba(0,0,0,0.2);border-color:#334155;color:#fbbf24;font-weight:700;"></div>
      <div id="specialArtifactWrap" style="display:none;"><div class="fd"><label>专属神器</label><input type="text" id="specialArtifact" readonly style="background:rgba(0,0,0,0.2);border-color:#334155;color:#ff6b6b;font-weight:700;"></div></div>
      <div style="font-size:.5em;color:#94a3b8;margin-top:2px;" id="costDesc"></div>
    </div>
    <div id="customSpecialWrap" style="display:none;margin-top:2px;">
      <div class="fd"><label>自定义能力名称</label><input type="text" id="customSpecialName" placeholder="如：星辰之力"></div>
      <div class="fd"><label>自定义能力描述</label><input type="text" id="customSpecialDesc" placeholder="如：可引动星辰之力进行攻击"></div>
    </div>
  </div>
</div>
<div class="sec" data-step="8">
  <div class="step-guide">✦ 第八步 · 降临与命运 + 背包</div>
  <details><summary>✦ 降临与命运 <span class="ar">▼</span></summary>
    <div class="sb"><div class="in">
      <div class="fd"><label>降临阶段</label><select id="stageSelect"><option value="">-- 请选择 --</option></select></div>
      <div id="stageDetail" style="display:none;">
        <div class="stage-detail-card">
          <div class="stage-meta"><strong id="stageDisplayId"></strong> · <span id="stageDisplayName"></span></div>
          <div class="stage-meta">年龄：<span id="stageDisplayAge"></span>　|　<span id="stageDisplayDate"></span></div>
          <div class="stage-events">
            <div class="event-select"><label style="font-size:.6em;color:#94a3b8;font-weight:700;">切入事件</label>
              <select id="stageEventSelect"><option value="">-- 请选择 --</option></select>
            </div>
            <div style="margin-top:2px;font-size:.55em;color:#64748b;font-style:italic;" id="stageEventDisplay"></div>
          </div>
        </div>
      </div>
      <div class="fd" style="margin-top:6px;"><label>神器（独立）</label><input type="text" id="legendWeapon" placeholder="如：海神三叉戟"></div>
      <div class="fd" style="margin-top:6px;"><label>开场白与场景</label><textarea id="greeting" rows="3" placeholder="天斗城·清晨｜我的剑，不是为了杀戮而存在的。"></textarea></div>
    </div></div>
  </details>
  <div class="fd"><label>背包 <sm>(点击标签可移除，可添加储物魂导器作为物品)</sm></label>
    <div class="backpack-grid" id="backpackGrid"></div>
    <div style="display:flex;gap:3px;margin-top:2px;">
      <input type="text" id="backpackInput" placeholder="添加道具，如：储物魂导器(容量30)" style="flex:1;min-height:28px;font-size:.7em;">
      <button class="bm" id="btnAddBackpack" style="font-size:.55em;">➕</button>
    </div>
  </div>
  <div class="enter-world-wrap">
    <div class="enter-hint">✦ 一切就绪，准备降临斗罗大陆 ✦</div>
    <button class="bm bm-enter" id="btnEnterWorld">✦ 进入魂师世界 ✦</button>
  </div>
</div>
<div id="exportArea" class="export-area">
  <div class="header">
    <span>📋 人设预览</span>
    <div class="export-actions">
      <button class="bm" id="btnCopyExport" style="font-size:.45em;">📋 复制</button>
    </div>
  </div>
  <textarea id="exportPreview" rows="3" readonly></textarea>
  <div class="footer">
    <span id="exportTime">—</span>
    <button class="btn-export-persona" id="btnExportPersona">📋 导出玩家人设</button>
  </div>
</div>
<div id="msg"></div><textarea id="cd"></textarea>
<div class="fb"><span>✦ 命运已在你手中 ✦</span></div>
<div class="btn-row">
  <div class="btn-wrap"></div>
</div>
</div></div>
<div id="awakenOverlay"><div class="content"><div class="title">✦ 武魂觉醒仪式 ✦</div><div class="divider"></div><div class="lines" id="awakenLines"><div class="line dim" data-delay="0">━━━━━━━━━━━━━━━━━━━━</div><div class="line" data-delay="300">🔮 检测到魂力波动...</div><div class="line" data-delay="600">⚡ 魂力正在沸腾...</div><div class="line" data-delay="900">🌿 武魂开始共鸣...</div><div class="line" data-delay="1200">🔥 血脉之力觉醒...</div><div class="line" data-delay="1500">✨ 魂环生成中...</div><div class="line" data-delay="1800">🌟 命运之轮转动...</div><div class="line dim" data-delay="2100">━━━━━━━━━━━━━━━━━━━━</div><div class="line hl" data-delay="2400">✅ 觉醒完成 · 档案已铸就</div></div><div class="close-hint" id="closeHint">✦ 点击任意处关闭 ✦</div></div></div>
<div id="fateModal"><div class="card"><div class="title">🎲 天命所归</div><div class="body" id="fateBody">加载中...</div><div class="actions"><button class="bm bm-gold" id="fateCopy">📋 复制</button><button class="bm" id="fateClose">✕ 关闭</button></div></div></div>
`;

    const root = document.querySelector('[data-dlgithub-root="dlgh-greeting"]');
    if (!root) return;
    root.innerHTML = htmlContent;

    (function() {
        var $ = function(id) { return document.getElementById(id); };

        var fields = {
            cn: $('cn'), gd: $('gd'), ag: $('ag'), personality: $('personality'), appearance: $('appearance'),
            og: $('og'), og_select: $('og_select'), fc: $('fc'), fbg: $('fbg'), orgIdentity: $('orgIdentity'),
            bloodAwaken: $('bloodAwaken'), bloodType: $('bloodType'), bloodCustom: $('bloodCustom'), bloodCustomWrap: $('bloodCustomWrap'),
            msn: $('msn'), mst: $('mst'), sn2: $('sn2'), st2: $('st2'),
            isp: $('isp'), csr: $('csr'), soulTitle: $('soulTitle'), titleName: $('titleName'), titleNameWrap: $('titleNameWrap'),
            sp: $('sp'), spiritDesc: $('spiritDesc'), spiritWarn: $('spiritWarn'),
            ban: $('ban'), bal: $('bal'), bat: $('bat'), armorGrade: $('armorGrade'),
            mechaLevel: $('mechaLevel'), mechaCustom: $('mechaCustom'), mechaCustomWrap: $('mechaCustomWrap'),
            secondProf: $('secondProf'), secondLevel: $('secondLevel'), secondProfCustomWrap: $('secondProfCustomWrap'),
            secondProfCustom: $('secondProfCustom'), secondProfDesc: $('secondProfDesc'),
            st: $('st'), stDesc: $('stDesc'), customSpecialName: $('customSpecialName'), customSpecialDesc: $('customSpecialDesc'),
            customSpecialWrap: $('customSpecialWrap'), specialWeaponWrap: $('specialWeaponWrap'), specialWeapon: $('specialWeapon'),
            specialArtifactWrap: $('specialArtifactWrap'), specialArtifact: $('specialArtifact'), costDesc: $('costDesc'),
            ssn: $('ssn'), sst: $('sst'), ssy: $('ssy'), ess: $('ess'),
            greeting: $('greeting'), stageSelect: $('stageSelect'), stageDetail: $('stageDetail'),
            stageDisplayId: $('stageDisplayId'), stageDisplayName: $('stageDisplayName'),
            stageDisplayAge: $('stageDisplayAge'), stageDisplayDate: $('stageDisplayDate'),
            stageEventSelect: $('stageEventSelect'), stageEventDisplay: $('stageEventDisplay'),
            spiritDot: $('spiritDot'), backpackInput: $('backpackInput'), backpackGrid: $('backpackGrid'),
            bonePartsGroup: $('bonePartsGroup'), soulComment: $('soulComment'), titleEpithet: $('titleEpithet'),
            exportArea: $('exportArea'), exportPreview: $('exportPreview'), exportTime: $('exportTime'),
            msg: $('msg'), cd: $('cd'), toast: $('toast'), fieldIndicator: $('fieldIndicator'),
            awakenOverlay: $('awakenOverlay'), fateModal: $('fateModal'), fateBody: $('fateBody'),
            ringGroup: $('ringGroup'), ringContainer: $('ringContainer'), ringCountDisplay: $('ringCountDisplay'),
            ringMatchInfo: $('ringMatchInfo'), ringEmptyHint: $('ringEmptyHint'),
            positionSelect: $('positionSelect'),
            legendWeapon: $('legendWeapon')
        };

        var dsf = $('dsf'), msg = $('msg'), cd = $('cd'), exportArea = $('exportArea'),
            exportPreview = $('exportPreview'), exportTime = $('exportTime'),
            fieldIndicator = $('fieldIndicator'), ringContainer = $('ringContainer'),
            awakenOverlay = $('awakenOverlay'), fateModal = $('fateModal'), fateBody = $('fateBody'),
            soulComment = $('soulComment'), toast = $('toast'), backpackGrid = $('backpackGrid'),
            backpackInput = $('backpackInput'), bonePartsGroup = $('bonePartsGroup'),
            titleEpithet = $('titleEpithet'), spiritWarn = $('spiritWarn'),
            ringEmptyHint = $('ringEmptyHint'), stepDot = $('stepDot');

        var STORAGE_KEY = 'soul_archive_v21';
        var stepNames = ['刻下你的名字', '出身与阵营', '武魂与魂力', '精神力与定位与魂骨', '魂灵与魂环', '斗铠与机甲与第二职业', '特殊能力', '降临与命运+背包'];
        var currentStep = 1, totalSteps = 8;

        var personalityTagsList = ['冷静','热血','沉稳','急躁','温柔','坚毅','狡黠','豪爽','孤傲','乐观','悲观','执着','随和','果断','内向','外向','敏感','豁达','严谨','浪漫','务实','冒险','保守','独立','依赖'];
        var originList = ['东海城','傲来城','史莱克城','天斗城','星罗城','灵波城','明都','星斗大森林外围','极北之地','西海城','南海城','北海城','落日森林','龙谷外围','血神军团驻地','魔鬼岛','无尽山脉入口','海神岛'];
        var campIdentityLinks = {
            '无':['无'],'史莱克学院':['外院学员','内院学员','海神阁弟子','史莱克七怪','工读生','监察团成员'],
            '唐门':['外门弟子','内门弟子','斗魂堂成员','敏堂成员','力堂成员','御堂成员','供奉堂成员'],
            '传灵塔':['灵塔守卫','魂灵师','传灵使','长老','副塔主','塔主亲传'],
            '战神殿':['预备战神','战神','神将'],
            '血神军团':['普通士兵','精英战士','血神卫','血神营成员'],
            '星罗帝国':['皇室成员','贵族','御林军','边防军','供奉殿成员'],
            '天斗帝国':['皇室成员','贵族','御林军','边防军'],
            '本体宗':['本体战士','核心弟子','长老','宗主亲传'],
            '七宝琉璃宗':['外门弟子','内门弟子','长老'],
            '昊天宗':['外门弟子','内门弟子','护宗长老'],
            '蓝电霸王龙家族':['家族精英','龙卫','家族长老'],
            '原恩家族':['家族精英','泰坦卫','家族长老'],
            '自由魂师':['自由魂师'],
            '散修':['散修']
        };
        var allIdentityOptions = ['无','外院学员','内院学员','海神阁弟子','史莱克七怪','工读生','监察团成员','外门弟子','内门弟子','斗魂堂成员','敏堂成员','力堂成员','御堂成员','供奉堂成员','灵塔守卫','魂灵师','传灵使','长老','副塔主','塔主亲传','预备战神','战神','神将','普通士兵','精英战士','血神卫','血神营成员','皇室成员','贵族','御林军','边防军','供奉殿成员','本体战士','核心弟子','宗主亲传','家族精英','龙卫','家族长老','泰坦卫','自由魂师','散修','普通平民','魂师世家','宗门嫡系','皇室宗亲','隐世家族','孤儿','魂兽化形','神祇后裔','龙族后裔'];
        var backpackPresets = {
            '史莱克学院':['史莱克学员令牌','史莱克校服','基础魂导器','学习手册'],
            '唐门':['唐门弟子令牌','暗器·诸葛神弩','暗器·袖箭','唐门秘籍（残）'],
            '传灵塔':['传灵塔令牌','魂灵契约卷轴','魂灵增幅器','魂灵图鉴'],
            '战神殿':['战神殿令牌','军用通讯魂导器','战术地图','军用干粮'],
            '血神军团':['血神军团徽章','军用通讯魂导器','急救包','军用干粮'],
            '星罗帝国':['星罗帝国贵族纹章','星罗金币','传讯魂导器','城市地图'],
            '天斗帝国':['天斗帝国贵族纹章','天斗金币','传讯魂导器','城市地图'],
            '本体宗':['本体宗令牌','炼体丹药','修炼手册','元素石'],
            '七宝琉璃宗':['七宝琉璃宗令牌','宝石护符','增幅魂导器','宝石原石'],
            '昊天宗':['昊天宗令牌','昊天锤（仿）','修炼手册','锻造图纸'],
            '蓝电霸王龙家族':['蓝电霸王龙家族徽章','龙血药剂','修炼手册','龙鳞护符'],
            '原恩家族':['原恩家族徽章','泰坦护符','修炼手册','大地结晶'],
            '自由魂师':['自由魂师凭证','基础魂导器','干粮','地图'],
            '散修':['散修行囊','基础魂导器','地图','绳索'],
            '无':[]
        };
        var backpackOriginPresets = {
            '东海城':['东海城渔民证','海图','防水袋'],'傲来城':['傲来城户籍牌','朴素行囊','干粮'],
            '史莱克城':['史莱克城通行证','城市地图','史莱克校服（旧）'],'天斗城':['天斗城商队凭证','城市地图','商队令牌'],
            '星罗城':['星罗城入城令牌','城市地图','星罗金币'],'灵波城':['灵波城居民证','城市地图','水域通行证'],
            '明都':['明都贵族徽记','城市地图','精致饰品'],'星斗大森林外围':['星斗森林采集许可','野外生存包','驱虫香'],
            '极北之地':['极北之地探险者徽章','野外生存包','保暖衣物'],'西海城':['西海城通行证','城市地图','海产干货'],
            '南海城':['南海城通行证','城市地图','珍珠护符'],'北海城':['北海城通行证','城市地图','冰晶采集工具'],
            '落日森林':['落日森林采集许可','野外生存包','草药袋'],'龙谷外围':['龙谷外围地图','龙鳞碎片','野外生存包'],
            '血神军团驻地':['血神军团徽章（临）','军用干粮','急救包'],'魔鬼岛':['魔鬼岛准入令牌','特殊训练手册','军粮'],
            '无尽山脉入口':['无尽山脉地图','登山工具','野外生存包'],'海神岛':['海神岛通行令牌','海洋图鉴','防水魂导器']
        };

        var specialDataT1 = [
            { name: '天生神力', desc: '力量远超同体型常人，可徒手碎石。', side: '中等副作用：体力消耗加快，长时间战斗易脱力。' },
            { name: '夜视', desc: '黑暗中可视物如昼，视野无阻碍。', side: '中等副作用：白天强光下畏光，需戴墨镜。' },
            { name: '快速愈合', desc: '轻伤数分钟愈合，骨折数天恢复。', side: '中等副作用：愈合过程消耗大量营养和能量。' },
            { name: '毒性抗性', desc: '对大多数神经毒素和烈性毒药免疫。', side: '中等副作用：对特定迷幻类药物反而敏感。' },
            { name: '铁胃', desc: '可消化任何有机物，包括变质食物。', side: '中等副作用：味觉迟钝，难以分辨精细风味。' },
            { name: '嗅觉灵敏', desc: '可追踪气味残留长达数天。', side: '中等副作用：对恶臭极度敏感，易眩晕。' },
            { name: '听觉超常', desc: '可听到百米外的窃窃私语。', side: '中等副作用：噪音环境下易头痛、耳鸣。' },
            { name: '攀爬者', desc: '可徒手攀爬垂直光滑表面。', side: '中等副作用：在平地行走时平衡感略差。' },
            { name: '水性精通', desc: '水中憋气可达一刻钟，游速如鱼。', side: '中等副作用：在干燥环境中皮肤易开裂。' },
            { name: '平衡大师', desc: '在任何地形上保持完美平衡，永不摔倒。', side: '中等副作用：静止站立时会有轻微眩晕感。' },
            { name: '伪装天赋', desc: '可模仿周围环境颜色和纹理，融入背景。', side: '中等副作用：长期伪装导致自我认知模糊。' },
            { name: '野兽直觉', desc: '能预判危险，对敌意有超前感知。', side: '中等副作用：对突然声响或惊吓过度反应。' },
            { name: '战斗直觉', desc: '在近战中能预判对手出招方向。', side: '中等副作用：过度依赖直觉，忽略战术细节。' },
            { name: '剑感', desc: '持剑时能感知剑的“呼吸”与意志。', side: '中等副作用：对非剑类武器掌握笨拙。' },
            { name: '语言通晓', desc: '可快速掌握任何语言，理解其文化逻辑。', side: '中等副作用：母语表达能力偶尔退化。' }
        ];
        var specialDataT2 = [
            { name: '元素亲和', desc: '与火、水、风、土等元素产生微弱共鸣，可引导其流动。', side: '轻微副作用：长时间操控后精神疲劳。' },
            { name: '生命亲和', desc: '可感知植物情绪，与草木沟通，促进植物生长。', side: '轻微副作用：对枯萎植物产生强烈悲伤。' },
            { name: '龙族亲和', desc: '龙形魂兽或龙类武魂不会主动攻击你。', side: '轻微副作用：被龙族天敌（如屠龙者）仇视。' },
            { name: '灵犀之心', desc: '可与魂兽进行心灵对话，建立信任。', side: '轻微副作用：容易受魂兽情绪冲击。' },
            { name: '星辰指引', desc: '夜间通过星辰辨认方位，并获得微弱的运势提升。', side: '轻微副作用：白天方向感下降。' },
            { name: '危险预知', desc: '对即将发生的危险产生模糊警示（如冷汗、心悸）。', side: '轻微副作用：预知过于频繁会导致神经衰弱。' },
            { name: '读心', desc: '可感知他人表层情绪和意图。', side: '轻微副作用：无法屏蔽大量人群的杂念涌入。' },
            { name: '空间感知', desc: '可感知周围空间的扭曲和折叠，发现隐藏通道。', side: '轻微副作用：在狭小空间内容易眩晕。' },
            { name: '灵魂嗅觉', desc: '可通过气味感知他人灵魂的纯净度或邪恶程度。', side: '轻微副作用：对灵魂肮脏者会产生生理厌恶。' },
            { name: '天气感知', desc: '可通过空气湿度、气压预判未来数小时天气。', side: '轻微副作用：对极端天气变化敏感，易偏头痛。' },
            { name: '物体记忆', desc: '触摸物体可感知其经历过的强烈情感片段。', side: '轻微副作用：容易受物体残留情绪干扰。' },
            { name: '相位偏移', desc: '短暂将自己部分身体虚化，穿透薄层障碍。', side: '轻微副作用：消耗精神，且不能全身虚化。' },
            { name: '能量嗅觉', desc: '可感知魂力波动的强弱和属性。', side: '轻微副作用：对高浓度魂力环境会感到压迫。' },
            { name: '回声定位', desc: '通过发出声波感知周围地形，如蝙蝠。', side: '轻微副作用：在嘈杂环境中效果大减。' }
        ];
        var specialDataT3 = [
            { name: '元素掌控', desc: '可同时操控两种以上元素进行战斗或辅助。' },
            { name: '暗影潜行', desc: '融入阴影，可在暗处移动且不易被发现。' },
            { name: '风之翼', desc: '凝聚风元素成翼，持续飞行约10分钟。' },
            { name: '治愈之触', desc: '通过接触治愈轻度伤口，缓解痛苦。' },
            { name: '魂力吞噬', desc: '主动吸收他人外放的魂力，转化率约30%。' },
            { name: '永愈之体', desc: '伤口自动再生，断肢重生需数月。' },
            { name: '精神屏障', desc: '构建精神护盾，抵御精神攻击和幻术。' },
            { name: '念动力', desc: '用意念移动小物体（不超过10公斤）。' },
            { name: '分子级伪装', desc: '改变自身肤色、纹理，模拟周围环境。' },
            { name: '温度调节', desc: '自身可适应极端温度（-50℃～80℃）。' },
            { name: '磁场感知', desc: '感知金属矿物或机械内部结构。' },
            { name: '梦境预知', desc: '在梦中预见未来片段，模糊但可指向。' },
            { name: '吸收转化', desc: '吸收外部能量（如火焰、雷电）转化为魂力。' }
        ];
        var specialDataT4 = [
            { name: '金龙王之力', desc: '爆发全力时力量翻倍，肉体短暂化为金色。' },
            { name: '银龙王之力', desc: '元素操控力大幅提升，可同时使用四大元素。' },
            { name: '蓝银皇控制', desc: '操控植物生长，制造藤蔓牢笼。' },
            { name: '七杀剑意', desc: '剑意外放形成剑气，可远程攻击。' },
            { name: '昊天锤重击', desc: '凝聚力量发动毁灭性一击。' },
            { name: '白虎变', desc: '短暂兽化，力量敏捷大幅度提升。' },
            { name: '九心海棠治愈', desc: '可治愈群体，范围十米内所有创伤。' },
            { name: '火凤凰涅槃', desc: '受到致命伤时燃烧重生，每日一次。' },
            { name: '冰凤凰霜冻', desc: '释放寒冰领域，冻结范围内敌人。' },
            { name: '九尾狐魅惑', desc: '精神控制，使敌人短暂听从指令。' },
            { name: '泰坦之力', desc: '获得大地之力，防御和体重剧增。' },
            { name: '时空锚点', desc: '可标记一个位置，瞬移回该点（距离有限）。' }
        ];
        var specialDataT5 = [
            { name: '时间加速', desc: '自身时间流速加快，获得两倍速度，持续10秒。', spirit: '时间之翼', cost: '日常无代价，逆天时轻微代价：使用后虚弱一天。' },
            { name: '空间跳跃', desc: '瞬间移动至视线内任意地点，距离限制50米。', spirit: '虚空行者', cost: '日常无代价，逆天时轻微代价：使用后精神恍惚。' },
            { name: '因果偏转', desc: '改变一次小概率事件的结果（如箭矢偏转）。', spirit: '命运丝线', cost: '日常无代价，逆天时轻微代价：使用后运气低迷数小时。' },
            { name: '情绪操控', desc: '改变周围人的情绪倾向（愤怒→平静）。', spirit: '情感之灵', cost: '日常无代价，逆天时轻微代价：使用后自身情感麻木片刻。' },
            { name: '命运之线', desc: '窥探他人命运线的走向，预判其行为。', spirit: '命运之眼', cost: '日常无代价，逆天时轻微代价：过度使用会导致视物模糊。' },
            { name: '灵魂出窍', desc: '神识离体，可查看远处场景但无法互动。', spirit: '魂灵之影', cost: '日常无代价，逆天时轻微代价：离体超过一分钟会头晕。' },
            { name: '元素化', desc: '将身体转化为元素形态，免疫物理攻击。', spirit: '元素之心', cost: '日常无代价，逆天时轻微代价：维持状态消耗大量魂力。' },
            { name: '虚实转化', desc: '使自己或物体暂时虚化，穿透障碍。', spirit: '虚实之镜', cost: '日常无代价，逆天时轻微代价：转化时无法攻击。' },
            { name: '复制', desc: '短暂复制他人一个魂技，威力减半。', spirit: '镜面之魂', cost: '日常无代价，逆天时轻微代价：使用后自身魂力紊乱。' },
            { name: '重力操控', desc: '改变小范围重力方向或大小。', spirit: '重力核心', cost: '日常无代价，逆天时轻微代价：使用后腿部酸麻。' }
        ];
        var specialDataT6 = [
            { name: '法则豁免', desc: '暂时无视一种法则（如重力、温度、时间流）。', spirit: '法则圣体', artifact: '法则之环', cost: '逆天时中等代价：豁免后身体崩裂，可借神器缓解。' },
            { name: '因果重塑', desc: '改写过去5秒内发生的一次事件结果。', spirit: '因果之轮', artifact: '因果沙漏', cost: '逆天时中等代价：重塑后自身记忆混乱，可借神器缓解。' },
            { name: '时间回溯', desc: '将自身状态回退到10秒前（不包括记忆）。', spirit: '时光龙', artifact: '时光之眼', cost: '逆天时中等代价：回溯后虚弱数天，可借神器缓解。' },
            { name: '空间折叠', desc: '折叠空间，将两点距离压缩为零。', spirit: '空间之主', artifact: '空间之门', cost: '逆天时中等代价：折叠后空间紊乱，可借神器缓解。' },
            { name: '命运编织', desc: '主动编织一条命运线，引导未来走向。', spirit: '命运女神', artifact: '命运纺锤', cost: '逆天时中等代价：编织后自身运势枯竭，可借神器缓解。' },
            { name: '混沌之体', desc: '免疫大部分伤害，但无法主动攻击。', spirit: '混沌兽', artifact: '混沌之心', cost: '逆天时中等代价：维持时自噬生命力，可借神器缓解。' },
            { name: '本源之力', desc: '调用世界本源能量，释放超强一击。', spirit: '源初之灵', artifact: '源初之核', cost: '逆天时中等代价：本源反噬重伤，可借神器缓解。' },
            { name: '轮回之眼', desc: '看到目标的前世今生，洞察弱点。', spirit: '轮回之瞳', artifact: '轮回镜', cost: '逆天时中等代价：使用后双目失明片刻，可借神器缓解。' },
            { name: '虚无之触', desc: '触摸可让物体短暂“不存在”（消失）。', spirit: '虚无之影', artifact: '虚无之刃', cost: '逆天时中等代价：触碰后自身存在感下降，可借神器缓解。' },
            { name: '自定义', desc: '自定义超脱能力', spirit: '', artifact: '', cost: '逆天时中等代价，可自定义' }
        ];

        var specialData = { 't1': specialDataT1, 't2': specialDataT2, 't3': specialDataT3, 't4': specialDataT4, 't5': specialDataT5, 't6': specialDataT6 };
        var tierNames = { 't1':'1级', 't2':'2级', 't3':'3级', 't4':'4级', 't5':'5级', 't6':'6级' };
        var currentTier = 't1';

        var bonePartNames = ['头部魂骨','躯干魂骨','左臂魂骨','右臂魂骨','左腿魂骨','右腿魂骨','外附魂骨'];
        var boneParts = {};
        bonePartNames.forEach(function(n){ boneParts[n] = false; });

        var rings = [];
        var ringYearOptions = ['十年','百年','千年','万年','十万年','凶兽（二十万年）'];
        var spiritYearOptions = ['十年','百年','千年','万年','十万年','凶兽'];
        var backpackItems = [];

        var stageData = [
            { id: "第零阶段", name: "神界遗孤·金龙王封印（开端前）", age: "0岁", date: "龙王历630年1月18日", events: ["神界乱流，金龙王破封，神核注入婴儿体内","唐三设下18道封印后送子下界","被唐孜然夫妇收养，取名唐舞麟"] },
            { id: "第一阶段", name: "东海学院·蓝银觉醒", age: "6岁", date: "龙王历636年1月-2月", events: ["红山学院武魂觉醒仪式，蓝银草被判定为废武魂","因天生神力被关注，但魂力低下仍受歧视","金龙王封印出现裂痕，身体开始出现异常"] },
            { id: "第二阶段", name: "天生神力·娜儿之约", age: "6岁", date: "龙王历636年2月-3月", events: ["街头一拳打碎石阶，展现超常力量","遇到失忆的娜儿，将其带回家中生活","与娜儿约定，承诺将来保护她"] },
            { id: "第三阶段", name: "东海学院·拜师舞长空", age: "6岁", date: "龙王历636年9月", events: ["东海学院入学考核，通过基础测试","舞长空发现其潜力，破格收为弟子","初次了解唐门历史与暗器百解"] },
            { id: "第四阶段", name: "加入唐门·锻造初途", age: "6岁-7岁", date: "龙王历636年9月-12月", events: ["通过唐门入门考核，成为唐门外门弟子","学习锻造基础，首次接触千锻概念","展现远超同龄人的锻造天赋"] },
            { id: "第五阶段", name: "结识伙伴·雏形初现", age: "7岁", date: "龙王历637年1月-3月", events: ["与谢邂因冲突相识，后化敌为友","许小言插班加入，星轮冰杖武魂展示","团队默契初步建立"] },
            { id: "第六阶段", name: "零班成军·联赛初战", age: "7岁", date: "龙王历637年3月-6月", events: ["古月转学至东海学院，展现超强实力","舞长空宣布零班正式成立","首次参加学院联赛，配合初显威力"] },
            { id: "第七阶段", name: "史莱克考核·叩关入门", age: "7岁-8岁", date: "龙王历637年9月", events: ["升灵台试炼，突破第二道封印（黄金龙体）","史莱克补考：精神威压、斗兽场、铡刀门、灵锻考核","浊世出面，破格录取为零班工读生"] },
            { id: "第八阶段", name: "班长竞选·班级之争", age: "约13岁", date: "龙王历637年9月-12月", events: ["班长争霸战，与舞丝朵对决","年级对抗赛初露锋芒","班级凝聚力逐步形成"] },
            { id: "第九阶段", name: "锻造委员·浊世传艺", age: "约13岁-14岁", date: "龙王历638年1月-3月", events: ["枫无羽强收为徒，锻造师协会打工","浊世传授金龙惊天第一式","锻造水平突破灵锻"] },
            { id: "第十阶段", name: "武魂融合·神龙初现", age: "约14岁", date: "龙王历638年3月-6月", events: ["年级对抗赛中意外触发武魂融合技","七彩龙影震惊全场","老唐现身警告，禁止再次使用"] },
            { id: "第十一阶段", name: "蓝银皇觉醒", age: "约14岁", date: "龙王历638年9月", events: ["深海特训四十九天，承受极限压力","牧野以特殊手法激发血脉","蓝银草蜕变，二次觉醒为蓝银皇"] },
            { id: "第十二阶段", name: "星罗联谊·群英荟萃", age: "约14岁", date: "龙王历638年9月-10月", events: ["星罗号巨轮联谊宴会","结识星罗帝国各方青年才俊","与怪物学院选手初次交锋"] },
            { id: "第十三阶段", name: "星罗大赛·小组赛", age: "约14岁", date: "龙王历638年10月-11月", events: ["小组赛多场连胜","史莱克七怪配合愈发默契","引起星罗帝国高层关注"] },
            { id: "第十四阶段", name: "星罗大赛·夺冠扬名", age: "约14岁", date: "龙王历638年11月-12月", events: ["个人赛连战连捷","决赛龙跃重创唐舞麟，牧野出手相救","冲破第六道封印，拔出黄金龙枪","七对七神龙变碾压龙跃，史莱克夺冠"] },
            { id: "第十五阶段", name: "龙谷行动·启程", age: "约15岁", date: "龙王历639年1月", events: ["唐门发布龙谷行动召集令","与星罗帝国选手组队进入","穿越龙谷入口的能量屏障"] },
            { id: "第十六阶段", name: "龙谷探秘·千日葬龙", age: "15岁-18岁", date: "龙王历639年1月-642年1月", events: ["进入龙谷，武魂被封印","吸收龙云强化体魄，救助戴云儿","龙墓安葬巨龙骸骨（耗时三年四个月）","获赠山龙王躯干骨"] },
            { id: "第十七阶段", name: "金龙王核心传承", age: "约18岁", date: "龙王历642年1月-2月", events: ["通过龙族最终考验","金龙王核心融入体内","封印进一步松动，力量暴涨"] },
            { id: "第十八阶段", name: "回归史莱克·海神缘前", age: "约18岁", date: "龙王历642年9月", events: ["从龙谷归来，修为大增","史莱克学院以英雄之礼迎接","海神缘大会即将召开"] },
            { id: "第十九阶段", name: "海神缘定情", age: "约18岁", date: "龙王历642年9月", events: ["海神缘大会上力压群雄","与古月互诉心声","正式确立情侣关系"] },
            { id: "第二十阶段", name: "魔鬼岛特训启程", age: "约18岁", date: "龙王历642年10月", events: ["收到魔鬼岛特训征召","与七怪一同登船前往","抵达魔鬼群岛"] },
            { id: "第二十一阶段", name: "魔鬼岛极限磨砺", age: "18岁-19岁", date: "龙王历642年10月-643年3月", events: ["魔鬼岛七老魔试炼（碎骨重组、恐惧幻境、欲望测试）","生命潮汐中凝聚魂核雏形","团队配合愈发默契"] },
            { id: "第二十二阶段", name: "北海军团偷飞机", age: "约19岁", date: "龙王历643年3月-4月", events: ["奉命窃取北海军团新型机甲","成功完成任务并全身而退","引发军方震动，反被嘉奖"] },
            { id: "第二十三阶段", name: "圣灵教初现", age: "约19岁", date: "龙王历643年4月-6月", events: ["大陆各地多次出现邪魂师作乱","圣灵教渗透传灵塔与联邦高层","史莱克学院开始警觉"] },
            { id: "第二十四阶段", name: "深渊威胁显现", age: "约19岁", date: "龙王历643年6月-9月", events: ["深渊生物开始在极北之地出现","血神军团发出警报","联邦高层内部分歧加剧"] },
            { id: "第二十五阶段", name: "史莱克浩劫", age: "约19岁", date: "龙王历643年9月-10月", events: ["圣灵教发射弑神级炮弹","史莱克城被毁，云冥牺牲","海神阁几乎全军覆没"] },
            { id: "第二十六阶段", name: "流亡之路", age: "19岁-20岁", date: "龙王历643年10月-12月", events: ["七怪幸存，进入地下避难层","分兵潜伏，各自历练","唐舞麟带古月前往西方"] },
            { id: "第二十七阶段", name: "冰火两仪眼", age: "约20岁", date: "龙王历644年1月-6月", events: ["冰火两仪眼，六大植物凶兽献祭","绮罗郁金香等成为本命魂灵","实力暴涨，奠定魂圣基础"] },
            { id: "第二十八阶段", name: "极北之地冒险", age: "20岁-21岁", date: "龙王历644年6月-12月", events: ["极北之地遭遇深渊生物袭击","与当地魂师势力建立联系","自然之种进一步生长"] },
            { id: "第二十九阶段", name: "唐昊现身", age: "约21岁", date: "龙王历645年1月-3月", events: ["唐昊以神识之体降临","告知唐三与神界的安排","唐舞麟初知自己的神界身世"] },
            { id: "第三十阶段", name: "圣灵教终极阴谋", age: "约21岁", date: "龙王历645年3月-6月", events: ["圣灵教渗透联邦最高议会","传灵塔被邪魂师控制","深渊位面与圣灵教暗中勾结"] },
            { id: "第三十一阶段", name: "深渊决战开启", age: "约21岁", date: "龙王历645年6月-9月", events: ["极北防线全面告急","生命子树扎根极北","唐舞麟统帅联军迎战"] },
            { id: "第三十二阶段", name: "使命对立", age: "21岁-22岁", date: "龙王历645年9月-12月", events: ["古月娜身份彻底暴露（银龙王）","魂兽阵营与人类阵营对峙","两人因使命对立而决裂"] },
            { id: "第三十三阶段", name: "最终对决", age: "约22岁", date: "龙王历646年1月-3月", events: ["两人于万米高空对决","龙神之力VS银龙王之力","难分胜负，双双力竭"] },
            { id: "第三十四阶段", name: "永冻冰封", age: "26岁", date: "龙王历656年1月18日", events: ["古月娜发动冰封禁咒","两人相拥坠入极北冰海","身体被永恒冰层包裹，沉入海底","为终极斗罗唐舞麟复活埋下伏笔"] }
        ];

        function getVal(id){ var el = fields[id]; return el ? (el.value||'').trim() : ''; }
        function getLines(id){ return getVal(id).split('\n').map(function(s){return s.trim();}).filter(function(s){return s!=='';}); }
        function getNum(id){ var v = getVal(id); return v ? Number(v) : null; }
        function getSel(id){ var el = fields[id]; return el ? el.value : ''; }
        function getSoulLevelFromInnate(innate){ var m = innate.match(/(\d+)/); return m ? parseInt(m[0]) : 0; }
        function getRingCount(level){ var lv = Number(level); if(isNaN(lv)||lv<0) return 0; if(lv<=9) return 0; if(lv<=19) return 1; if(lv<=29) return 2; if(lv<=39) return 3; if(lv<=49) return 4; if(lv<=59) return 5; if(lv<=69) return 6; if(lv<=79) return 7; if(lv<=89) return 8; return 9; }
        function getSoulComment(level){ var lv=Number(level); if(isNaN(lv)||lv<0) return ''; if(lv<=9) return '🌱 初出茅庐'; if(lv<=19) return '🌿 魂师之境'; if(lv<=29) return '💪 大魂师！'; if(lv<=39) return '⚔️ 魂尊！'; if(lv<=49) return '🔥 魂宗！'; if(lv<=59) return '🌟 魂王！'; if(lv<=69) return '👑 魂帝！'; if(lv<=79) return '✨ 魂圣！'; if(lv<=89) return '💀 魂斗罗！'; if(lv<=94) return '⚡ 封号斗罗！'; if(lv<=98) return '🌌 超级斗罗！'; if(lv<=99) return '🌀 极限斗罗！'; if(lv<=150) return '🌠 神级！'; return '🌠 超神级！'; }
        function getSoulTitle(level){ var lv=Number(level); if(isNaN(lv)||lv<0) return '未测定'; if(lv===0) return '无魂力'; if(lv<=9) return '魂士'; if(lv<=19) return '魂师'; if(lv<=29) return '大魂师'; if(lv<=39) return '魂尊'; if(lv<=49) return '魂宗'; if(lv<=59) return '魂王'; if(lv<=69) return '魂帝'; if(lv<=79) return '魂圣'; if(lv<=89) return '魂斗罗'; if(lv<=94) return '封号斗罗'; if(lv<=98) return '超级斗罗'; if(lv<=99) return '极限斗罗'; if(lv<=150) return '神级'; return '超神级'; }
        var titleEpithets = {'无魂力':'你尚未觉醒魂力，但命运之轮已经开始转动。','魂士':'你刚刚触摸到魂力的门槛，前路漫漫，但每一步都值得珍惜。','魂师':'你踏入了魂师的世界，真正的修行才刚刚开始。','大魂师':'你已经超越了凡人，但距离真正的强者，还有很长的路要走。','魂尊':'三环已成，你已是一方人物，但真正的考验还在前方。','魂宗':'四环之力，你已经拥有了改变战局的能力。','魂王':'五环魂王，你的名字已经开始在魂师界流传。','魂帝':'六环魂帝，你已经站在了无数魂师的顶点。','魂圣':'七环魂圣，武魂真身初现，你已经触摸到了传说的边缘。','魂斗罗':'八环魂斗罗，你已成为大陆上令人敬畏的存在。','封号斗罗':'九环封号斗罗，你的封号将铭刻于大陆的历史之中。','超级斗罗':'你超越了封号斗罗的极限，站在了魂师的巅峰之上。','极限斗罗':'极限之上，便是神祇的门槛，你已无限接近神的领域。','神级':'你已超脱凡俗，成为传说中的存在。','超神级':'你已超越神祇，立于万界之巅。'};
        var spiritDescs = {'灵元境':'精神力初醒，如晨露微光，仅能感知自身魂力波动。','灵通境':'精神力贯通经络，可感知周围数丈内的生命气息。','灵海境':'精神之海初成，可外放探查，洞察细微变化。','灵渊境':'精神之海深不见底，可窥探他人内心，影响低阶魂兽。','灵域境':'精神力化为领域，万物皆在感知之中，一念可震慑群敌。','神元境':'精神力触及神之领域，一念可动天地，与天地共鸣。','神王境':'精神力已达神王层次，言出法随，精神不灭。','未知/未测定':'精神力尚未觉醒或无法测定，潜力待发掘。'};
        var secondProfDescs = {'1':'初窥门径，仅掌握最基础的操作手法。','2':'略有所成，能独立完成简单的作品。','3':'技艺初显，在当地小有名气。','4':'炉火纯青，作品已具备一定水准。','5':'大师之姿，行业内公认的佼佼者。','6':'宗师境界，作品被各方争相收藏。','7':'巨匠风范，影响一方技艺传承。','8':'泰斗级存在，作品代表时代巅峰。','9':'传奇不朽，技艺已臻化境，前无古人。'};
        function getArmorGrade(level){ var map={'无':{text:'无斗铠',color:'#64748b'},'一字斗铠':{text:'一字·白',color:'#b5b5b5'},'二字斗铠':{text:'二字·黄',color:'#c0a868'},'三字斗铠':{text:'三字·紫',color:'#9b6bcc'},'四字斗铠':{text:'四字·黑',color:'#4a3a2a'},'五字斗铠（神级）':{text:'五字·红',color:'#b06050'},'六字斗铠（神级）':{text:'六字·金',color:'#d4b878'}}; return map[level]||{text:level,color:'#64748b'}; }
        function getRingColor(year){ var map={'十年':'#e8e8e8','百年':'#fcd34d','千年':'#9b6bcc','万年':'#2a2a2a','十万年':'#dc3545','凶兽（二十万年）':'#e8a317','凶兽':'#e8a317'}; return map[year]||'#a89880'; }
        function getRingClass(year){ var map={'十年':'white','百年':'yellow','千年':'purple','万年':'black','十万年':'red','凶兽（二十万年）':'orangegold','凶兽':'orangegold'}; return map[year]||'white'; }
        function getSpiritClass(year){ var map={'十年':'s-white','百年':'s-yellow','千年':'s-purple','万年':'s-black','十万年':'s-red','凶兽':'s-orangegold'}; return map[year]||'s-white'; }
        function getSpiritColor(year){ var map={'十年':'#e8e8e8','百年':'#fcd34d','千年':'#9b6bcc','万年':'#2a2a2a','十万年':'#dc3545','凶兽':'#e8a317'}; return map[year]||'#a89880'; }
        function getMaxRingYearBySpirit(sp){ var map={'灵元境':'百年','灵通境':'千年','灵海境':'万年','灵渊境':'十万年','灵域境':'凶兽','神元境':'凶兽','神王境':'凶兽','未知/未测定':'百年'}; return map[sp]||'百年'; }
        function getRingYearWeight(year){ var weights={'十年':1,'百年':2,'千年':3,'万年':4,'十万年':5,'凶兽（二十万年）':6,'凶兽':6}; return weights[year]||1; }

        function debounce(fn, delay) { var timer; return function(){ var args=arguments; clearTimeout(timer); timer=setTimeout(function(){ fn.apply(this, args); }, delay); }; }

        function showToast(text, isError){ toast.textContent = text; toast.className = 'show' + (isError ? ' error' : ''); clearTimeout(toast._timer); toast._timer = setTimeout(function(){ toast.className = ''; }, 2000); }

        function showPane(n) {
            if(n<1) n=1; if(n>totalSteps) n=totalSteps;
            currentStep = n;
            $('stepCurrent').textContent = n;
            $('stepTotal').textContent = totalSteps;
            $('stepName').textContent = stepNames[n-1];
            $('stepPrev').disabled = (n===1);
            var nextBtn = $('stepNext');
            if(n===totalSteps){ nextBtn.style.display = 'none'; } else { nextBtn.style.display = 'flex'; nextBtn.textContent = '▶'; }
            var secs = document.querySelectorAll('.sec');
            secs.forEach(function(sec, idx){
                if(idx+1===n){ sec.style.display = 'block'; sec.classList.add('active'); if(n===1){ setTimeout(function(){ window.scrollTo(0, 0); }, 100); } }
                else { sec.style.display = 'none'; sec.classList.remove('active'); }
            });
            if(n===2){ updateBackpackByCamp(); updateIdentityByCamp(); }
            updateStepStatus();
        }
        function goNextStep(){ if(currentStep===totalSteps){ showAwakenAnimation(); } else { showPane(currentStep+1); } }
        function goPrevStep(){ if(currentStep>1) showPane(currentStep-1); }

        function updateStepStatus() {
            var done = false;
            var step = currentStep;
            if (step === 1) {
                done = getVal('cn') !== '' && getVal('ag') !== '' && getVal('ag') !== '0';
            } else if (step === 2) {
                done = getVal('og') !== '' || getVal('fc') !== '无';
            } else if (step === 3) {
                done = getVal('msn') !== '' && getVal('csr') !== '';
            } else if (step === 4) {
                done = getVal('sp') !== '' && getSel('positionSelect') !== '无';
            } else if (step === 5) {
                done = true;
            } else if (step === 6) {
                done = true;
            } else if (step === 7) {
                done = fields.st.options.length > 0 && fields.st.value !== '';
            } else if (step === 8) {
                done = true;
            }
            if (done) { stepDot.classList.add('done'); } else { stepDot.classList.remove('done'); }
        }

        function setupTags(){
            var container = $('personalityTags');
            personalityTagsList.forEach(function(tag){
                var span = document.createElement('span');
                span.className = 'bm bm-tag';
                span.dataset.tag = tag;
                span.textContent = tag;
                span.addEventListener('click', function(){
                    this.classList.toggle('active');
                    var vals = [];
                    container.querySelectorAll('.bm-tag.active').forEach(function(t){ vals.push(t.dataset.tag); });
                    fields.personality.value = vals.join('、');
                    saveDraft();
                    updateStepStatus();
                });
                container.appendChild(span);
            });
            syncPersonalityTags();
        }
        function syncPersonalityTags(){
            var val = fields.personality.value;
            var vals = val.split(/[、，, ]/).map(function(s){ return s.trim(); }).filter(function(s){ return s!==''; });
            var container = $('personalityTags');
            container.querySelectorAll('.bm-tag').forEach(function(tag){
                if(vals.indexOf(tag.dataset.tag) > -1) tag.classList.add('active');
                else tag.classList.remove('active');
            });
        }
        fields.personality.addEventListener('input', function(){ syncPersonalityTags(); updateStepStatus(); });

        function populateOriginSelect(){
            var select = fields.og_select;
            select.innerHTML = '<option value="">-- 选择 --</option>';
            originList.forEach(function(origin){
                var opt = document.createElement('option');
                opt.value = origin;
                opt.textContent = origin;
                select.appendChild(opt);
            });
        }

        function updateIdentityByCamp(){
            var camp = getSel('fc');
            var identities = campIdentityLinks[camp] || ['无'];
            var select = fields.fbg;
            var currentVal = select.value;
            select.innerHTML = '';
            identities.forEach(function(id){ var opt = document.createElement('option'); opt.value = id; opt.textContent = id; select.appendChild(opt); });
            var existing = {}; for(var i=0; i<select.options.length; i++){ existing[select.options[i].value] = true; }
            allIdentityOptions.forEach(function(id){ if(!existing[id]){ var opt = document.createElement('option'); opt.value = id; opt.textContent = id; select.appendChild(opt); } });
            var found = false;
            for(var i=0; i<select.options.length; i++){ if(select.options[i].value === currentVal){ select.value = currentVal; found = true; break; } }
            if(!found && select.options.length > 0) select.value = select.options[0].value;
        }

        function renderBackpack(){
            backpackGrid.innerHTML = '';
            backpackItems.forEach(function(item, idx){
                var span = document.createElement('span');
                span.className = 'bp-item';
                span.innerHTML = item + ' <span class="bp-del" data-bp-del="' + idx + '">✕</span>';
                backpackGrid.appendChild(span);
            });
            backpackGrid.querySelectorAll('[data-bp-del]').forEach(function(el){
                el.addEventListener('click', function(){
                    var idx = Number(this.dataset.bpDel);
                    backpackItems.splice(idx, 1);
                    localStorage.setItem('backpack_items_v21', JSON.stringify(backpackItems));
                    renderBackpack();
                    saveDraft();
                });
            });
        }
        function addBackpackItem(item){
            if(!item || item.trim()==='') return;
            item = item.trim();
            if(backpackItems.indexOf(item) === -1){
                backpackItems.push(item);
                localStorage.setItem('backpack_items_v21', JSON.stringify(backpackItems));
                renderBackpack();
                saveDraft();
                showToast('✅ 已添加：' + item);
            } else { showToast('⏳ 已存在该道具', true); }
        }
        function updateBackpackByCamp(){
            var camp = getSel('fc');
            var origin = getSel('og_select');
            var identity = getSel('fbg');
            var preset = backpackPresets[camp] || [];
            var originPreset = backpackOriginPresets[origin] || [];
            var allPresets = preset.concat(originPreset);
            if(identity === '孤儿'){
                allPresets = allPresets.filter(function(item){ return item.indexOf('徽章')===-1 && item.indexOf('家族')===-1 && item.indexOf('贵族')===-1 && item.indexOf('皇室')===-1 && item.indexOf('令牌')===-1 && item.indexOf('纹章')===-1; });
            }
            if(identity === '魂兽化形'){
                allPresets = allPresets.filter(function(item){ return item.indexOf('户籍')===-1 && item.indexOf('居民证')===-1 && item.indexOf('通行证')===-1; });
            }
            var added = 0;
            allPresets.forEach(function(item){ if(backpackItems.indexOf(item)===-1){ backpackItems.push(item); added++; } });
            if(added > 0){
                localStorage.setItem('backpack_items_v21', JSON.stringify(backpackItems));
                renderBackpack();
                saveDraft();
                showToast('🎒 已添加 ' + added + ' 件道具');
            }
        }
        function loadBackpack(){
            var saved = localStorage.getItem('backpack_items_v21');
            if(saved){ try{ backpackItems = JSON.parse(saved); } catch(_){} }
            if(!Array.isArray(backpackItems)) backpackItems = [];
            renderBackpack();
        }

        function renderBoneParts(){
            bonePartsGroup.innerHTML = '';
            var done = 0;
            bonePartNames.forEach(function(name){
                var btn = document.createElement('span');
                btn.className = 'bm bm-part' + (boneParts[name] ? ' done' : '');
                btn.textContent = name;
                btn.dataset.part = name;
                btn.addEventListener('click', function(){
                    var p = this.dataset.part;
                    boneParts[p] = !boneParts[p];
                    renderBoneParts();
                    updateBoneStats();
                    saveDraft();
                });
                bonePartsGroup.appendChild(btn);
                if(boneParts[name]) done++;
            });
            $('boneDoneCount').textContent = done;
            $('boneTotalCount').textContent = bonePartNames.length;
        }
        function updateBoneStats(){ var done=0; bonePartNames.forEach(function(n){ if(boneParts[n]) done++; }); $('boneDoneCount').textContent = done; }

        function initRings(){
            var saved = localStorage.getItem('soul_rings_v21');
            if(saved){ try{ rings = JSON.parse(saved); } catch(_){} }
            if(!rings || !Array.isArray(rings)) rings = [];
            renderRings();
            updateRingInfo();
            validateRings();
        }
        function renderRings(){
            var fragment = document.createDocumentFragment();
            rings.forEach(function(ring, idx){
                var div = document.createElement('div');
                div.className = 'ring-item';
                div.dataset.ringIndex = idx;
                var dotColor = getRingColor(ring.year);
                var dotClass = getRingClass(ring.year);
                var optionsHtml = ringYearOptions.map(function(opt){ return '<option value="' + opt + '"' + (ring.year === opt ? ' selected' : '') + '>' + opt + '</option>'; }).join('');
                div.innerHTML = '<span class="dot ' + dotClass + '" style="background:' + dotColor + ';"></span><select data-ring-year="' + idx + '">' + optionsHtml + '</select><button class="bm ring-del" data-ring-del="' + idx + '">✕</button>';
                fragment.appendChild(div);
            });
            ringContainer.innerHTML = '';
            ringContainer.appendChild(fragment);
            ringContainer.querySelectorAll('[data-ring-year]').forEach(function(el){
                el.addEventListener('change', function(){
                    var idx = Number(this.dataset.ringYear);
                    rings[idx].year = this.value;
                    localStorage.setItem('soul_rings_v21', JSON.stringify(rings));
                    renderRings();
                    updateRingInfo();
                    validateRings();
                    saveDraft();
                    showToast('魂环' + (idx+1) + ' → ' + this.value);
                });
            });
            ringContainer.querySelectorAll('[data-ring-del]').forEach(function(el){
                el.addEventListener('click', function(){
                    var idx = Number(this.dataset.ringDel);
                    rings.splice(idx, 1);
                    localStorage.setItem('soul_rings_v21', JSON.stringify(rings));
                    renderRings();
                    updateRingInfo();
                    validateRings();
                    saveDraft();
                    showToast('已移除魂环');
                });
            });
            updateRingInfo();
            validateRings();
            if (rings.length === 0) {
                ringEmptyHint.style.display = 'block';
            } else {
                ringEmptyHint.style.display = 'none';
            }
        }
        function updateRingInfo(){
            var count = rings.length;
            var lv = getVal('csr');
            var expected = getRingCount(lv);
            var el = $('ringCountDisplay');
            if(el) el.textContent = count;
            var info = $('ringMatchInfo');
            if(info){
                if(lv === '' || lv === undefined){ info.textContent = ''; }
                else if(count === expected){ info.innerHTML = '<span class="match">✅ ' + count + '/' + expected + '</span>'; }
                else if(count < expected){ info.innerHTML = '<span class="mismatch">⚠️ ' + count + '/' + expected + '</span>'; }
                else { info.innerHTML = '<span class="mismatch">⚠️ 超限</span>'; }
            }
            validateRings();
            if (ringEmptyHint) {
                if (rings.length === 0) ringEmptyHint.style.display = 'block';
                else ringEmptyHint.style.display = 'none';
            }
        }
        function validateRings(){
            var spiritLevel = getSel('sp');
            var maxYear = getMaxRingYearBySpirit(spiritLevel);
            var maxWeight = getRingYearWeight(maxYear);
            var warnEl = spiritWarn;
            var hasIssue = false, issues = [];
            rings.forEach(function(ring, idx){
                var weight = getRingYearWeight(ring.year);
                if(weight > maxWeight){ hasIssue = true; issues.push('第'+(idx+1)+'环（'+ring.year+'）超出精神力上限（'+maxYear+'）'); }
            });
            if(hasIssue){ warnEl.textContent = '⚠️ ' + issues.join('；'); warnEl.style.display = 'block'; warnEl.style.color = '#f87171'; }
            else { warnEl.style.display = 'none'; }
            return !hasIssue;
        }

        function updateSoulTitle(){
            var lv = getVal('csr');
            var title = getSoulTitle(lv);
            fields.soulTitle.value = title;
            var wrap = fields.titleNameWrap;
            if(lv && Number(lv) >= 90) wrap.style.display = 'block';
            else wrap.style.display = 'none';
            updateTitleEpithet();
            updateSoulComment();
            updateStepStatus();
        }
        function updateTitleEpithet(){
            var title = getSoulTitle(getVal('csr'));
            var epithet = titleEpithets[title] || '';
            if(epithet && getVal('csr') !== ''){
                titleEpithet.textContent = '✦ ' + epithet;
                titleEpithet.className = 'title-epithet show';
            } else { titleEpithet.className = 'title-epithet'; }
        }
        function updateSoulComment(){
            var lv = getVal('csr');
            var comment = getSoulComment(lv);
            soulComment.textContent = comment;
            soulComment.className = 'soul-comment' + (getVal('csr') !== '' ? ' active' : '');
        }

        function updateSpiritDesc(){
            var sp = fields.sp.value;
            var desc = spiritDescs[sp] || '';
            if(desc){ fields.spiritDesc.textContent = '✦ ' + desc; fields.spiritDesc.className = 'desc-text show'; }
            else { fields.spiritDesc.className = 'desc-text'; }
            validateRings();
        }

        function updateSpiritDot(){
            var year = fields.ssy.value;
            var color = getSpiritColor(year);
            var cls = getSpiritClass(year);
            fields.spiritDot.className = 'spirit-dot ' + cls;
            fields.spiritDot.style.background = color;
        }

        function updateSecondProf(){
            var val = fields.secondProf.value;
            if(val === '自定义'){ fields.secondProfCustomWrap.style.display = 'block'; }
            else { fields.secondProfCustomWrap.style.display = 'none'; }
            updateSecondProfDesc();
        }
        function updateSecondProfDesc(){
            var level = fields.secondLevel.value;
            var desc = secondProfDescs[level] || '';
            if(desc && fields.secondProf.value !== '无'){
                var name = fields.secondProf.value;
                if(name === '自定义') name = fields.secondProfCustom.value || '自定义职业';
                fields.secondProfDesc.textContent = '✦ ' + name + '：' + desc;
                fields.secondProfDesc.className = 'desc-text show';
            } else { fields.secondProfDesc.className = 'desc-text'; }
        }

        function updateArmorGrade(){
            var level = getSel('bal');
            var info = getArmorGrade(level);
            fields.armorGrade.innerHTML = '<span style="color:' + info.color + ';font-weight:600;">●</span> ' + info.text;
        }

        function updateMechaCustom(){
            if(getSel('mechaLevel') === '红级（自定义）'){ fields.mechaCustomWrap.style.display = 'block'; }
            else { fields.mechaCustomWrap.style.display = 'none'; fields.mechaCustom.value = ''; }
        }

        function toggleDualSoul(){ dsf.classList.toggle('ac', getSel('mst') === '双生武魂'); }

        function updateInnateOptions(){
            var mst = getSel('mst');
            var st2 = getSel('st2');
            var isDivine = (mst === '神级武魂');
            var isDualDivine = (mst === '双生武魂' && st2 === '神级武魂');
            var show20 = isDivine || isDualDivine;
            var select = fields.isp;
            var currentVal = select.value;
            var options = [];
            if(show20){
                options = [{ val: '20级（神赐）', label: '20级（神赐）' }];
            } else {
                options = [{ val: '10级（满魂力）', label: '10级（满魂力）' },{ val: '9级', label: '9级' },{ val: '8级', label: '8级' },{ val: '7级', label: '7级' },{ val: '6级', label: '6级' },{ val: '5级', label: '5级' },{ val: '4级', label: '4级' },{ val: '3级', label: '3级' },{ val: '2级', label: '2级' },{ val: '1级', label: '1级' },{ val: '0级（无魂力）', label: '0级（无魂力）' }];
            }
            select.innerHTML = '';
            options.forEach(function(o){ var opt = document.createElement('option'); opt.value = o.val; opt.textContent = o.label; select.appendChild(opt); });
            var found = false;
            for(var i=0; i<select.options.length; i++){ if(select.options[i].value === currentVal){ select.value = currentVal; found = true; break; } }
            if(!found) select.value = options[0].val;
            var age = parseInt(getVal('ag'));
            if(age === 6){ var level = getSoulLevelFromInnate(select.value); if(!isNaN(level) && level >= 0) fields.csr.value = level; }
            saveDraft();
        }

        function enforceSoulLevel(){
            var val = parseInt(fields.csr.value);
            if(!isNaN(val) && val > 150){ fields.csr.value = 150; showToast('魂力上限为150级', true); }
            updateSoulTitle();
            updateSpiritLevel();
            updateRingInfo();
            validateRings();
            saveDraft();
        }
        function updateSpiritLevel(){
            var lv = Number(getVal('csr'));
            if(isNaN(lv)) return;
            var sp = fields.sp;
            var target = '未知/未测定';
            if(lv <= 19) target = '灵元境';
            else if(lv <= 39) target = '灵通境';
            else if(lv <= 59) target = '灵海境';
            else if(lv <= 79) target = '灵渊境';
            else if(lv <= 99) target = '灵域境';
            else if(lv <= 119) target = '神元境';
            else if(lv <= 150) target = '神王境';
            var opts = Array.from(sp.options);
            var match = opts.find(function(o){ return o.value === target; });
            if(match) sp.value = target;
            validateRings();
        }

        function populateStageSelect(){
            var select = fields.stageSelect;
            select.innerHTML = '<option value="">-- 请选择 --</option>';
            stageData.forEach(function(s){
                var opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = s.id + ' · ' + s.name;
                select.appendChild(opt);
            });
        }
        function onStageSelect(){
            var id = fields.stageSelect.value;
            var detail = fields.stageDetail;
            if(!id){ detail.style.display = 'none'; return; }
            var stage = stageData.find(function(s){ return s.id === id; });
            if(!stage){ detail.style.display = 'none'; return; }
            detail.style.display = 'block';
            fields.stageDisplayId.textContent = stage.id;
            fields.stageDisplayName.textContent = stage.name;
            fields.stageDisplayAge.textContent = stage.age;
            fields.stageDisplayDate.textContent = stage.date;
            var sel = fields.stageEventSelect;
            sel.innerHTML = '<option value="">-- 请选择切入事件 --</option>';
            stage.events.forEach(function(evt){ var opt = document.createElement('option'); opt.value = evt; opt.textContent = evt; sel.appendChild(opt); });
            fields.stageEventDisplay.textContent = '';
            var ageMatch = stage.age.match(/(\d+)/);
            if(ageMatch) fields.ag.value = ageMatch[0];
            saveDraft();
            updateStepStatus();
        }
        function onStageEventSelect(){ fields.stageEventDisplay.textContent = fields.stageEventSelect.value; saveDraft(); }

        function switchSpecialTier(tier){
            currentTier = tier;
            document.querySelectorAll('.special-tier .tier-tag').forEach(function(t){
                t.classList.toggle('active', t.dataset.tier === tier);
            });
            renderSpecialOptions();
            saveDraft();
            updateStepStatus();
        }
        function renderSpecialOptions(){
            var data = specialData[currentTier] || [];
            var select = fields.st;
            var currentVal = select.value;
            select.innerHTML = '';
            data.forEach(function(item){
                var opt = document.createElement('option');
                opt.value = item.name;
                opt.textContent = item.name;
                select.appendChild(opt);
            });
            var found = false;
            for(var i=0; i<select.options.length; i++){ if(select.options[i].value === currentVal){ select.value = currentVal; found = true; break; } }
            if(!found && select.options.length > 0) select.value = select.options[0].value;
            updateSpecialDesc();
            toggleCustomSpecial();
            updateStepStatus();
        }
        function toggleCustomSpecial(){
            var name = fields.st.value;
            if(name === '自定义' && (currentTier === 't5' || currentTier === 't6')){
                fields.customSpecialWrap.style.display = 'block';
            } else { fields.customSpecialWrap.style.display = 'none'; }
        }
        function updateSpecialDesc(){
            var name = fields.st.value;
            var data = specialData[currentTier] || [];
            var found = null;
            for(var i=0; i<data.length; i++){ if(data[i].name === name){ found = data[i]; break; } }
            var descText = '';
            if(found && found.name === '自定义'){
                var cn = fields.customSpecialName.value || '自定义能力';
                var cd = fields.customSpecialDesc.value || '请填写描述';
                descText = '📖 ' + cn + '：' + cd;
                fields.specialWeaponWrap.style.display = 'block';
                fields.specialWeapon.value = '';
                fields.specialArtifactWrap.style.display = 'none';
                fields.specialArtifact.value = '';
                var cost = (currentTier === 't5') ? '日常无代价，逆天时轻微代价（可逆）' :
                           (currentTier === 't6') ? '逆天时中等代价，可借神器减轻' : '';
                fields.costDesc.textContent = cost;
            } else if(found) {
                var sideText = found.side ? ' ⚠️ ' + found.side : '';
                descText = '📖 ' + found.desc + sideText;
                if(currentTier === 't5'){
                    fields.specialWeaponWrap.style.display = 'block';
                    fields.specialWeapon.value = found.spirit || '';
                    fields.specialArtifactWrap.style.display = 'none';
                    fields.costDesc.textContent = '日常无代价，逆天时轻微代价（可逆）';
                } else if(currentTier === 't6'){
                    fields.specialWeaponWrap.style.display = 'block';
                    fields.specialWeapon.value = found.spirit || '';
                    fields.specialArtifactWrap.style.display = 'block';
                    fields.specialArtifact.value = found.artifact || '';
                    fields.costDesc.textContent = '逆天时中等代价，可借神器减轻';
                } else {
                    fields.specialWeaponWrap.style.display = 'none';
                    fields.specialArtifactWrap.style.display = 'none';
                    fields.costDesc.textContent = '';
                }
            } else {
                fields.specialWeaponWrap.style.display = 'none';
                fields.specialArtifactWrap.style.display = 'none';
            }
            fields.stDesc.textContent = descText;
        }
        function getSpecialDisplay(){
            var name = fields.st.value;
            if(name === '自定义' && (currentTier === 't5' || currentTier === 't6')){
                var cn = fields.customSpecialName.value || '自定义能力';
                var cd = fields.customSpecialDesc.value || '';
                return cn + (cd ? '：' + cd : '');
            }
            return name;
        }

        function validateRequired(){
            var errors = [];
            if (getVal('cn') === '') errors.push('姓名');
            if (getVal('ag') === '' || getVal('ag') === '0') errors.push('年龄');
            if (getVal('msn') === '') errors.push('武魂名称');
            if (getVal('csr') === '') errors.push('当前魂力');
            if (getSel('positionSelect') === '无') errors.push('魂师定位（建议选择）');
            return errors;
        }

        function collectData(){
            var dual = (getSel('mst') === '双生武魂');
            var soul;
            if(dual){
                soul = { "武魂类型":"双生武魂", "第一武魂":{ "武魂名称": getVal('msn')||'未填写', "武魂类型":"（双生武魂，请参考第二武魂类型）" }, "第二武魂":{ "武魂名称": getVal('sn2')||'未填写', "武魂类型": getSel('st2') }, "先天魂力": getSel('isp'), "当前魂力等级": getVal('csr') ? getVal('csr')+'级' : '未填写', "魂师称号": getSoulTitle(getVal('csr')) };
            } else {
                soul = { "武魂名称": getVal('msn')||'未填写', "武魂类型": getSel('mst'), "先天魂力": getSel('isp'), "当前魂力等级": getVal('csr') ? getVal('csr')+'级' : '未填写', "魂师称号": getSoulTitle(getVal('csr')) };
            }
            if(Number(getVal('csr')) >= 90){ soul["封号名称"] = getVal('titleName') || '未填写'; }
            var spVal = getSpecialDisplay();
            var ringData = rings.map(function(r){ return { "年份": r.year }; });
            var boneDone = 0; bonePartNames.forEach(function(n){ if(boneParts[n]) boneDone++; });
            var stageId = getVal('stageSelect');
            var stage = stageData.find(function(s){ return s.id === stageId; });
            var eventVal = fields.stageEventSelect.value;
            var greetingText = getVal('greeting') || '';
            var lines = greetingText.split('\n').filter(function(s){ return s.trim() !== ''; });
            var scene = '', greeting = '';
            if(lines.length > 0){
                var first = lines[0];
                if(first.indexOf('｜') > -1 || first.indexOf('|') > -1){
                    var parts = first.split(/[｜|]/);
                    scene = parts[0].trim();
                    greeting = parts.slice(1).join('｜').trim() || lines.slice(1).join('\n');
                } else { scene = first; greeting = lines.slice(1).join('\n'); }
            }
            var pos = getSel('positionSelect');
            var bloodType = getSel('bloodType');
            if(bloodType === '自定义') bloodType = getVal('bloodCustom') || '自定义血脉';
            var secondProfName = getSel('secondProf');
            if(secondProfName === '自定义') secondProfName = getVal('secondProfCustom') || '自定义职业';
            var mechaLevel = getSel('mechaLevel');
            if(mechaLevel === '红级（自定义）'){ var custom = getVal('mechaCustom'); mechaLevel = custom ? '红级·' + custom : '红级（未命名）'; }
            return {
                "基本信息": { "姓名": getVal('cn')||'未命名', "性别": getSel('gd'), "年龄": getNum('ag'), "性格": getVal('personality')||'', "外貌": getVal('appearance')||'' },
                "出身与阵营": { "出身地": getVal('og')||'', "所属阵营": getSel('fc'), "阵营身份": getSel('fbg'), "组织身份": getVal('orgIdentity')||'', "血脉觉醒程度": getSel('bloodAwaken'), "血脉选项": bloodType },
                "武魂与魂力": soul,
                "精神力": { "精神力境界": getSel('sp') },
                "魂师定位": pos,
                "魂环": ringData,
                "魂灵": { "主要魂灵名称": getVal('ssn')||'', "魂灵类型": getSel('sst'), "魂灵年限": getSel('ssy'), "其他魂灵": getLines('ess') },
                "斗铠": { "斗铠名称": getVal('ban')||'', "斗铠等级": getSel('bal'), "斗铠侧重": getSel('bat'), "斗铠品级": getArmorGrade(getSel('bal')).text },
                "魂骨": { "已装备魂骨": boneDone + '/' + bonePartNames.length, "魂骨列表": bonePartNames.filter(function(n){ return boneParts[n]; }) },
                "第二职业": { "职业类型": secondProfName, "等级": getSel('secondLevel') + '级' },
                "机甲": { "机甲等级": mechaLevel },
                "降临阶段": stage ? { "阶段": stage.id, "名称": stage.name, "年龄": stage.age, "时间": stage.date, "切入事件": eventVal||'' } : null,
                "背包": backpackItems.slice(),
                "特殊能力": spVal,
                "神器": getVal('legendWeapon') || '',
                "开场白": greeting || '',
                "场景设定": scene || ''
            };
        }

        var saveDraft = debounce(function(){
            try {
                var data = collectData();
                data._rings = rings;
                data._boneParts = boneParts;
                data._specialTier = currentTier;
                data._specialValue = fields.st.value;
                data._backpack = backpackItems;
                data._stageId = getVal('stageSelect');
                data._stageEvent = fields.stageEventSelect.value;
                data._position = getSel('positionSelect');
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            } catch(_) {}
        }, 500);

        function loadDraft(){
            try {
                var raw = localStorage.getItem(STORAGE_KEY);
                if(!raw) return;
                var data = JSON.parse(raw);
                if(!data || typeof data !== 'object') return;
                if(data._rings && Array.isArray(data._rings)){ rings = data._rings; renderRings(); }
                if(data._boneParts){ Object.keys(data._boneParts).forEach(function(k){ if(bonePartNames.indexOf(k) > -1) boneParts[k] = data._boneParts[k]; }); }
                renderBoneParts();
                if(data._specialTier){
                    currentTier = data._specialTier;
                    document.querySelectorAll('.special-tier .tier-tag').forEach(function(t){ t.classList.toggle('active', t.dataset.tier === currentTier); });
                    renderSpecialOptions();
                    if(data._specialValue){
                        setTimeout(function(){ fields.st.value = data._specialValue; updateSpecialDesc(); toggleCustomSpecial(); }, 50);
                    }
                }
                if(data._backpack && Array.isArray(data._backpack)){ backpackItems = data._backpack; renderBackpack(); }
                if(data._stageId){
                    setTimeout(function(){
                        fields.stageSelect.value = data._stageId;
                        onStageSelect();
                        if(data._stageEvent){
                            setTimeout(function(){ fields.stageEventSelect.value = data._stageEvent; onStageEventSelect(); }, 50);
                        }
                    }, 100);
                }
                if(data._position){ fields.positionSelect.value = data._position; }
                var map = {
                    'cn':'基本信息.姓名','gd':'基本信息.性别','ag':'基本信息.年龄','personality':'基本信息.性格','appearance':'基本信息.外貌',
                    'og':'出身与阵营.出身地','fc':'出身与阵营.所属阵营','fbg':'出身与阵营.阵营身份','orgIdentity':'出身与阵营.组织身份',
                    'bloodAwaken':'出身与阵营.血脉觉醒程度','bloodType':'出身与阵营.血脉选项',
                    'msn':'武魂与魂力.武魂名称','mst':'武魂与魂力.武魂类型','isp':'武魂与魂力.先天魂力','csr':'武魂与魂力.当前魂力等级',
                    'sn2':'武魂与魂力.第二武魂.武魂名称','st2':'武魂与魂力.第二武魂.武魂类型',
                    'sp':'精神力.精神力等级','ssn':'魂灵.主要魂灵名称','sst':'魂灵.魂灵类型','ssy':'魂灵.魂灵年限','ess':'魂灵.其他魂灵',
                    'ban':'斗铠.斗铠名称','bal':'斗铠.斗铠等级','bat':'斗铠.斗铠侧重',
                    'secondProf':'第二职业.职业类型','secondLevel':'第二职业.等级','mechaLevel':'机甲.机甲等级',
                    'greeting':'开场白','legendWeapon':'神器'
                };
                function setField(id, path){
                    var el = fields[id];
                    if(!el) return;
                    var val = data;
                    var parts = path.split('.');
                    for(var i=0; i<parts.length; i++){ if(val && typeof val === 'object' && parts[i] in val) val = val[parts[i]]; else { val = undefined; break; } }
                    if(val === undefined || val === null) return;
                    if(Array.isArray(val)) val = val.join('\n');
                    if(el.tagName === 'SELECT'){
                        var opts = Array.from(el.options);
                        var match = opts.find(function(o){ return o.value === String(val); });
                        if(match) el.value = String(val);
                        else el.value = val;
                    } else { el.value = val; }
                }
                for(var key in map){ if(map.hasOwnProperty(key)) setField(key, map[key]); }
                if(data.第二职业){
                    if(data.第二职业.职业类型){
                        var prof = data.第二职业.职业类型;
                        var profOpts = Array.from(fields.secondProf.options);
                        var match = profOpts.find(function(o){ return o.value === prof; });
                        if(match) fields.secondProf.value = prof;
                        else if(prof !== '无'){ fields.secondProf.value = '自定义'; fields.secondProfCustom.value = prof; }
                    }
                    if(data.第二职业.等级){
                        var lv = data.第二职业.等级.replace('级','');
                        var lvOpts = Array.from(fields.secondLevel.options);
                        var matchLv = lvOpts.find(function(o){ return o.value === lv; });
                        if(matchLv) fields.secondLevel.value = lv;
                    }
                }
                if(data.机甲){
                    var mech = data.机甲.机甲等级 || '';
                    var mechOpts = Array.from(fields.mechaLevel.options);
                    var found = false;
                    for(var i=0; i<mechOpts.length; i++){ if(mechOpts[i].value === mech){ fields.mechaLevel.value = mech; found = true; break; } }
                    if(!found && mech.startsWith('红级·')){ fields.mechaLevel.value = '红级（自定义）'; fields.mechaCustom.value = mech.replace('红级·',''); fields.mechaCustomWrap.style.display = 'block'; }
                }
                if(fields.og_select){
                    var ogVal = getVal('og');
                    var ogOpts = Array.from(fields.og_select.options);
                    var matchOg = ogOpts.find(function(o){ return o.value === ogVal; });
                    if(matchOg) fields.og_select.value = ogVal;
                    else fields.og_select.value = '';
                }
                if(data.武魂与魂力 && data.武魂与魂力.封号名称){ fields.titleName.value = data.武魂与魂力.封号名称; }
                if(getSel('bloodType') === '自定义'){ fields.bloodCustomWrap.style.display = 'block'; if(data.出身与阵营 && data.出身与阵营.血脉选项 && data.出身与阵营.血脉选项 !== '自定义'){ fields.bloodCustom.value = data.出身与阵营.血脉选项; } }
                if(getSel('secondProf') === '自定义'){ fields.secondProfCustomWrap.style.display = 'block'; }
                updateIdentityByCamp();
                updateSoulTitle();
                updateArmorGrade();
                toggleDualSoul();
                updateSpiritDesc();
                updateSecondProfDesc();
                updateSpiritDot();
                updateMechaCustom();
                updateInnateOptions();
                showPane(1);
                updateStepStatus();
            } catch(_) {}
        }

        function generatePersonaText(){
            var d = collectData();
            var lines = [];
            lines.push('【玩家：' + (d.基本信息.姓名 || '未命名') + '】');
            lines.push('');
            lines.push('基本信息：');
            lines.push('- 姓名：' + (d.基本信息.姓名 || '未命名'));
            lines.push('- 性别：' + (d.基本信息.性别 || '未填写'));
            if(d.基本信息.年龄) lines.push('- 年龄：' + d.基本信息.年龄 + '岁');
            if(d.基本信息.性格) lines.push('- 性格：' + d.基本信息.性格);
            if(d.基本信息.外貌) lines.push('- 外貌：' + d.基本信息.外貌);
            lines.push('');
            if(d.出身与阵营.出身地) lines.push('- 出身地：' + d.出身与阵营.出身地);
            if(d.出身与阵营.所属阵营 && d.出身与阵营.所属阵营 !== '无') lines.push('- 所属阵营：' + d.出身与阵营.所属阵营);
            if(d.出身与阵营.阵营身份 && d.出身与阵营.阵营身份 !== '无') lines.push('- 阵营身份：' + d.出身与阵营.阵营身份);
            if(d.出身与阵营.组织身份) lines.push('- 组织身份：' + d.出身与阵营.组织身份);
            if(d.出身与阵营.血脉觉醒程度 && d.出身与阵营.血脉觉醒程度 !== '未觉醒') lines.push('- 血脉觉醒程度：' + d.出身与阵营.血脉觉醒程度);
            if(d.出身与阵营.血脉选项) lines.push('- 血脉选项：' + d.出身与阵营.血脉选项);
            lines.push('');
            lines.push('武魂与魂力：');
            var v = d.武魂与魂力;
            if(v.武魂类型 === '双生武魂'){
                lines.push('- 武魂：' + (v.第一武魂.武魂名称 || '未填写') + '（' + v.武魂类型 + '）');
                if(v.第二武魂.武魂名称 && v.第二武魂.武魂名称 !== '未填写'){ lines.push('- 第二武魂：' + v.第二武魂.武魂名称 + '（' + (v.第二武魂.武魂类型 || '未填写') + '）'); }
            } else { lines.push('- 武魂：' + (v.武魂名称 || '未填写') + '（' + v.武魂类型 + '）'); }
            if(v.先天魂力) lines.push('- 先天魂力：' + v.先天魂力);
            if(v.当前魂力等级 && v.当前魂力等级 !== '未填写'){ lines.push('- 当前魂力：' + v.当前魂力等级); if(v.魂师称号) lines.push('- 魂师称号：' + v.魂师称号); if(v.封号名称) lines.push('- 封号名称：' + v.封号名称); }
            lines.push('');
            if(d.精神力.精神力等级){ lines.push('精神力：'); lines.push('- 精神力境界：' + d.精神力.精神力等级); lines.push(''); }
            if(d.魂师定位 && d.魂师定位 !== '无') lines.push('魂师定位：' + d.魂师定位);
            if(d.魂环 && d.魂环.length){
                lines.push('');
                lines.push('魂环配置：');
                var colorMap = {'十年':'白','百年':'黄','千年':'紫','万年':'黑','十万年':'红','凶兽（二十万年）':'橙金','凶兽':'橙金'};
                d.魂环.forEach(function(r, idx){ lines.push('- 第' + (idx+1) + '魂环：' + r.年份 + '（' + (colorMap[r.年份]||'?') + '）'); });
            }
            if(d.魂灵.主要魂灵名称 && d.魂灵.主要魂灵名称 !== '' && d.魂灵.主要魂灵名称 !== '未填写'){
                lines.push('');
                lines.push('魂灵：');
                var sc = {'十年':'白','百年':'黄','千年':'紫','万年':'黑','十万年':'红','凶兽':'橙金'};
                lines.push('- 主要魂灵：' + d.魂灵.主要魂灵名称 + '（' + d.魂灵.魂灵类型 + '·' + d.魂灵.魂灵年限 + ' ' + (sc[d.魂灵.魂灵年限]||'?') + '）');
                if(d.魂灵.其他魂灵.length){ d.魂灵.其他魂灵.forEach(function(s){ lines.push('- 其他魂灵：' + s); }); }
            }
            if(d.斗铠.斗铠名称 && d.斗铠.斗铠名称 !== '' && d.斗铠.斗铠名称 !== '未填写'){
                lines.push('');
                lines.push('斗铠：');
                lines.push('- 斗铠名称：' + d.斗铠.斗铠名称);
                if(d.斗铠.斗铠等级 && d.斗铠.斗铠等级 !== '无') lines.push('- 斗铠等级：' + d.斗铠.斗铠等级);
                if(d.斗铠.斗铠品级) lines.push('- 斗铠品级：' + d.斗铠.斗铠品级);
                if(d.斗铠.斗铠侧重 && d.斗铠.斗铠侧重 !== '不适用') lines.push('- 斗铠侧重：' + d.斗铠.斗铠侧重);
            }
            if(d.魂骨.已装备魂骨 && d.魂骨.已装备魂骨 !== '0/7'){
                lines.push('');
                lines.push('魂骨：');
                lines.push('- 已装备魂骨：' + d.魂骨.已装备魂骨);
                if(d.魂骨.魂骨列表 && d.魂骨.魂骨列表.length){ lines.push('- 魂骨列表：' + d.魂骨.魂骨列表.join('、')); }
            }
            if(d.第二职业 && d.第二职业.职业类型 && d.第二职业.职业类型 !== '无'){
                lines.push('');
                lines.push('第二职业：');
                lines.push('- 职业：' + d.第二职业.职业类型);
                lines.push('- 等级：' + d.第二职业.等级);
            }
            if(d.机甲.机甲等级 && d.机甲.机甲等级 !== '无') lines.push('- 机甲等级：' + d.机甲.机甲等级);
            if(d.神器) lines.push('- 神器：' + d.神器);
            if(d.背包 && d.背包.length){ lines.push('- 背包：' + d.背包.join('、')); }
            if(d.降临阶段){
                lines.push('');
                lines.push('╔═══════════════════════════╗');
                lines.push('║   ✦ 降临阶段 ✦            ║');
                lines.push('╚═══════════════════════════╝');
                lines.push('- 阶段：' + d.降临阶段.阶段 + ' · ' + d.降临阶段.名称);
                lines.push('- 年龄：' + d.降临阶段.年龄);
                lines.push('- 时间：' + d.降临阶段.时间);
                if(d.降临阶段.切入事件) lines.push('- 切入事件：' + d.降临阶段.切入事件);
            }
            if(d.特殊能力 && d.特殊能力 !== '无' && d.特殊能力 !== ''){ lines.push(''); lines.push('特殊能力：' + d.特殊能力); }
            if(d.场景设定){ lines.push(''); lines.push('场景：' + d.场景设定); }
            if(d.开场白){ lines.push(''); lines.push('开场白：' + d.开场白); }
            return lines.join('\n');
        }

        function showExport(){
            var errors = validateRequired();
            if (errors.length > 0) {
                showToast('⚠️ 请先填写：' + errors.join('、'), true);
                return;
            }
            refreshExport();
            exportArea.classList.add('show');
            showToast('✅ 已导出');
        }
        function refreshExport(){ exportPreview.value = generatePersonaText(); var now = new Date(); exportTime.textContent = now.toLocaleString(); }
        function copyToClipboard(text, silent){
            try {
                if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).catch(function(){ fallbackCopy(text, silent); }); }
                else { fallbackCopy(text, silent); }
            } catch(_){ fallbackCopy(text, silent); }
        }
        function fallbackCopy(text, silent){
            cd.value = text;
            cd.style.position = 'static';
            cd.style.opacity = '1';
            cd.style.width = '100%';
            cd.style.height = '50px';
            cd.style.pointerEvents = 'auto';
            cd.style.marginTop = '3px';
            cd.select();
            try { if(document.execCommand('copy')){ if(!silent) showMessage('✅ 已复制！'); } else { if(!silent) showMessage('⚠️ 手动复制'); } }
            catch(_){ if(!silent) showMessage('⚠️ 手动复制'); }
            setTimeout(function(){
                cd.style.position = 'absolute';
                cd.style.left = '-9999px';
                cd.style.top = '-9999px';
                cd.style.opacity = '0';
                cd.style.width = '1px';
                cd.style.height = '1px';
                cd.style.pointerEvents = 'none';
            }, 2500);
        }
        function showMessage(text, isError){ msg.textContent = text; msg.className = isError ? 'error' : ''; msg.style.display = 'block'; clearTimeout(msg._timer); msg._timer = setTimeout(function(){ msg.style.display = 'none'; }, 2500); }

        function showAwakenAnimation(){
            var data = collectData();
            var json = JSON.stringify(data, function(k, v){ return Array.isArray(v) && v.length === 0 ? [] : v; }, 2);
            copyToClipboard(json);
            showToast('✅ 觉醒档案已铸就！');
            awakenOverlay.classList.add('active');
            var lines = awakenOverlay.querySelectorAll('.line');
            lines.forEach(function(line){
                line.classList.remove('show');
                var delay = parseInt(line.dataset.delay) || 0;
                setTimeout(function(){ line.classList.add('show'); }, delay);
            });
            setTimeout(function(){ var hint = $('closeHint'); if(hint) hint.classList.add('show'); }, 2800);
            var autoClose = setTimeout(function(){ awakenOverlay.classList.remove('active'); var hint = $('closeHint'); if(hint) hint.classList.remove('show'); }, 4800);
            awakenOverlay.addEventListener('click', function handler(){ clearTimeout(autoClose); awakenOverlay.classList.remove('active'); var hint = $('closeHint'); if(hint) hint.classList.remove('show'); awakenOverlay.removeEventListener('click', handler); });
        }

        function generateGreeting(){
            var d = collectData();
            var lines = [];
            lines.push('【姓名】' + (d.基本信息.姓名 || '未命名'));
            lines.push('【性别】' + (d.基本信息.性别 || '未填写'));
            lines.push('【年龄】' + (d.基本信息.年龄 || '未填写') + '岁');
            lines.push('【性格】' + (d.基本信息.性格 || '未填写'));
            lines.push('【外貌】' + (d.基本信息.外貌 || '未填写'));
            lines.push('');
            var v = d.武魂与魂力;
            if(v.武魂类型 === '双生武魂'){
                lines.push('【武魂】' + (v.第一武魂.武魂名称 || '未填写') + '（双生武魂）');
                if(v.第二武魂.武魂名称 && v.第二武魂.武魂名称 !== '未填写'){ lines.push('【第二武魂】' + v.第二武魂.武魂名称 + '（' + (v.第二武魂.武魂类型 || '未填写') + '）'); }
            } else { lines.push('【武魂】' + (v.武魂名称 || '未填写') + '（' + v.武魂类型 + '）'); }
            lines.push('【先天魂力】' + (v.先天魂力 || '未填写'));
            lines.push('【当前魂力】' + (v.当前魂力等级 || '未填写'));
            lines.push('【魂师称号】' + (v.魂师称号 || '未测定'));
            if(v.封号名称) lines.push('【封号】' + v.封号名称);
            lines.push('【精神力】' + (d.精神力.精神力等级 || '未填写'));
            if(d.魂师定位 && d.魂师定位 !== '无') lines.push('【魂师定位】' + d.魂师定位);
            var bg = d.出身与阵营;
            if(bg.出身地) lines.push('【出身地】' + bg.出身地);
            if(bg.所属阵营 && bg.所属阵营 !== '无') lines.push('【所属阵营】' + bg.所属阵营);
            if(bg.阵营身份 && bg.阵营身份 !== '无') lines.push('【阵营身份】' + bg.阵营身份);
            if(bg.组织身份) lines.push('【组织身份】' + bg.组织身份);
            if(bg.血脉觉醒程度 && bg.血脉觉醒程度 !== '未觉醒') lines.push('【血脉觉醒程度】' + bg.血脉觉醒程度);
            if(bg.血脉选项) lines.push('【血脉选项】' + bg.血脉选项);
            if(d.魂环 && d.魂环.length){
                var colorMap = {'十年':'白','百年':'黄','千年':'紫','万年':'黑','十万年':'红','凶兽（二十万年）':'橙金','凶兽':'橙金'};
                var ringStr = d.魂环.map(function(r){ return r.年份 + '（' + (colorMap[r.年份]||'?') + '）'; }).join('、');
                lines.push('【魂环】' + ringStr);
            }
            if(d.魂灵.主要魂灵名称 && d.魂灵.主要魂灵名称 !== '未填写' && d.魂灵.主要魂灵名称 !== ''){
                var sc = {'十年':'白','百年':'黄','千年':'紫','万年':'黑','十万年':'红','凶兽':'橙金'};
                lines.push('【主要魂灵】' + d.魂灵.主要魂灵名称 + '（' + d.魂灵.魂灵年限 + '）');
                if(d.魂灵.其他魂灵.length){ lines.push('【其他魂灵】' + d.魂灵.其他魂灵.join('、')); }
            }
            if(d.斗铠.斗铠名称 && d.斗铠.斗铠名称 !== '未填写' && d.斗铠.斗铠名称 !== ''){ lines.push('【斗铠】' + d.斗铠.斗铠名称 + '（' + d.斗铠.斗铠等级 + '）'); }
            if(d.魂骨.已装备魂骨 && d.魂骨.已装备魂骨 !== '0/7'){ lines.push('【魂骨】已装备 ' + d.魂骨.已装备魂骨); }
            if(d.第二职业.职业类型 && d.第二职业.职业类型 !== '无'){ lines.push('【第二职业】' + d.第二职业.职业类型 + '（' + d.第二职业.等级 + '）'); }
            if(d.机甲.机甲等级 && d.机甲.机甲等级 !== '无'){ lines.push('【机甲】' + d.机甲.机甲等级); }
            if(d.神器) lines.push('【神器】' + d.神器);
            if(d.特殊能力 && d.特殊能力 !== '无' && d.特殊能力 !== ''){ lines.push('【特殊能力】' + d.特殊能力); }
            if(d.背包 && d.背包.length){ lines.push('【背包】' + d.背包.join('、')); }
            if(d.降临阶段){
                lines.push('【降临阶段】' + d.降临阶段.阶段 + ' · ' + d.降临阶段.名称);
                if(d.降临阶段.切入事件) lines.push('【切入事件】' + d.降临阶段.切入事件);
            }
            if(d.场景设定){ lines.push(''); lines.push('【场景】' + d.场景设定); }
            if(d.开场白){ lines.push(''); lines.push('【开场白】' + d.开场白); }
            lines.push('');
            lines.push('✦ 档案已铸就，降临斗罗大陆 ✦');
            return lines.join('\n');
        }
        function enterWorld(){
            var errors = validateRequired();
            if (errors.length > 0) {
                showToast('⚠️ 请先填写：' + errors.join('、'), true);
                return;
            }
            var text = generateGreeting();
            copyToClipboard(text);
            showToast('✦ 档案已铸就，开场白已复制，准备降临斗罗大陆！');
            if(navigator.vibrate) navigator.vibrate(30);
        }

        function clearAll(){
            if(!confirm('确定清空所有字段吗？')) return;
            for(var key in fields){ if(fields.hasOwnProperty(key) && fields[key]){ if(fields[key].tagName === 'SELECT') fields[key].selectedIndex = 0; else fields[key].value = ''; } }
            if(fields.mechaCustomWrap) fields.mechaCustomWrap.style.display = 'none';
            if(fields.bloodCustomWrap) fields.bloodCustomWrap.style.display = 'none';
            if(fields.secondProfCustomWrap) fields.secondProfCustomWrap.style.display = 'none';
            if(fields.customSpecialWrap) fields.customSpecialWrap.style.display = 'none';
            if(fields.specialWeaponWrap) fields.specialWeaponWrap.style.display = 'none';
            if(fields.specialArtifactWrap) fields.specialArtifactWrap.style.display = 'none';
            rings = [];
            localStorage.setItem('soul_rings_v21', JSON.stringify(rings));
            renderRings();
            backpackItems = [];
            localStorage.setItem('backpack_items_v21', JSON.stringify(backpackItems));
            renderBackpack();
            bonePartNames.forEach(function(n){ boneParts[n] = false; });
            renderBoneParts();
            localStorage.removeItem(STORAGE_KEY);
            toggleDualSoul();
            updateSoulTitle();
            updateArmorGrade();
            updateSpiritDesc();
            updateSecondProfDesc();
            updateSpiritDot();
            updateMechaCustom();
            updateInnateOptions();
            fields.titleNameWrap.style.display = 'none';
            fields.stageDetail.style.display = 'none';
            fields.stageSelect.value = '';
            fields.stageEventSelect.innerHTML = '<option value="">-- 请选择 --</option>';
            fields.stageEventDisplay.textContent = '';
            titleEpithet.className = 'title-epithet';
            fields.spiritDesc.className = 'desc-text';
            fields.secondProfDesc.className = 'desc-text';
            spiritWarn.style.display = 'none';
            fields.ag.value = '6';
            fields.fc.value = '无';
            fields.fbg.value = '无';
            fields.positionSelect.value = '无';
            fields.legendWeapon.value = '';
            currentTier = 't1';
            document.querySelectorAll('.special-tier .tier-tag').forEach(function(t){ t.classList.toggle('active', t.dataset.tier === currentTier); });
            renderSpecialOptions();
            updateStepStatus();
            showToast('🗑 已清空');
        }

        function bindEvents(){
            $('stepPrev').addEventListener('click', goPrevStep);
            $('stepNext').addEventListener('click', goNextStep);
            $('btnEnterWorld').addEventListener('click', enterWorld);
            $('btnExportPersona').addEventListener('click', showExport);
            $('btnCopyExport').addEventListener('click', function(){ copyToClipboard(exportPreview.value); showToast('已复制！'); });
            $('btnClearAll').addEventListener('click', clearAll);

            fields.og_select.addEventListener('change', function(){ fields.og.value = this.value; updateBackpackByCamp(); saveDraft(); });
            fields.fc.addEventListener('change', function(){ updateIdentityByCamp(); updateBackpackByCamp(); if(this.value === '无') fields.fbg.value = '无'; saveDraft(); updateStepStatus(); });
            fields.fbg.addEventListener('change', function(){ updateBackpackByCamp(); saveDraft(); updateStepStatus(); });

            fields.stageSelect.addEventListener('change', onStageSelect);
            fields.stageEventSelect.addEventListener('change', onStageEventSelect);

            document.querySelectorAll('.special-tier .tier-tag').forEach(function(tag){
                tag.addEventListener('click', function(){ var tier = this.dataset.tier; switchSpecialTier(tier); });
            });
            fields.st.addEventListener('change', function(){ updateSpecialDesc(); toggleCustomSpecial(); saveDraft(); updateStepStatus(); });
            fields.customSpecialName.addEventListener('input', function(){ updateSpecialDesc(); saveDraft(); });
            fields.customSpecialDesc.addEventListener('input', function(){ updateSpecialDesc(); saveDraft(); });

            fields.mst.addEventListener('change', function(){ toggleDualSoul(); updateInnateOptions(); if(getSel('mst') === '神级武魂') fields.isp.value = '20级（神赐）'; saveDraft(); updateStepStatus(); });
            fields.st2.addEventListener('change', function(){ updateInnateOptions(); saveDraft(); });

            var handleCsr = function(){
                enforceSoulLevel();
                var prev = this._prevLevel || 0;
                var curr = Number(this.value);
                if(curr > 0 && curr % 10 === 0 && curr !== prev && curr !== 0){
                    this.classList.remove('break-flash');
                    void this.offsetWidth;
                    this.classList.add('break-flash');
                    showToast('⚡ 魂力突破 ' + curr + ' 级！');
                }
                this._prevLevel = curr;
                var lv = getVal('csr');
                if(lv) showToast('魂力：' + lv + '级 → ' + getSoulTitle(lv));
            };
            fields.csr.addEventListener('input', debounce(handleCsr, 300));
            fields.csr.addEventListener('blur', enforceSoulLevel);

            fields.ag.addEventListener('input', debounce(function(){
                var age = parseInt(getVal('ag'));
                if(age === 6){ var innate = getSel('isp'); var level = getSoulLevelFromInnate(innate); if(!isNaN(level) && level >= 0) fields.csr.value = level; }
                saveDraft();
                updateStepStatus();
            }, 300));
            fields.isp.addEventListener('change', function(){
                var age = parseInt(getVal('ag'));
                if(age === 6){ var level = getSoulLevelFromInnate(this.value); if(!isNaN(level) && level >= 0) fields.csr.value = level; }
                saveDraft();
            });

            fields.bal.addEventListener('change', function(){ updateArmorGrade(); saveDraft(); });
            fields.mechaLevel.addEventListener('change', function(){ updateMechaCustom(); saveDraft(); });
            fields.sp.addEventListener('change', function(){ updateSpiritDesc(); validateRings(); saveDraft(); updateStepStatus(); });
            fields.secondProf.addEventListener('change', function(){ updateSecondProf(); saveDraft(); });
            fields.secondLevel.addEventListener('change', function(){ updateSecondProfDesc(); saveDraft(); });
            fields.secondProfCustom.addEventListener('input', function(){ updateSecondProfDesc(); saveDraft(); });
            fields.ssy.addEventListener('change', function(){ updateSpiritDot(); saveDraft(); });
            fields.positionSelect.addEventListener('change', function(){ saveDraft(); updateStepStatus(); });
            fields.legendWeapon.addEventListener('input', function(){ saveDraft(); });

            var autoSave = debounce(function(){ saveDraft(); updateStepStatus(); }, 500);
            document.querySelectorAll('input, textarea, select').forEach(function(el){
                el.addEventListener('input', autoSave);
                el.addEventListener('change', autoSave);
            });

            document.querySelectorAll('input, textarea, select').forEach(function(el){
                el.addEventListener('focus', function(){
                    var label = this.closest('.fd');
                    if(label){
                        var lbl = label.querySelector('label');
                        if(lbl){
                            fieldIndicator.textContent = lbl.textContent.trim().replace(/[🔹◆◈]/g,'').trim();
                            fieldIndicator.classList.add('show');
                            clearTimeout(fieldIndicator._timer);
                            fieldIndicator._timer = setTimeout(function(){ fieldIndicator.classList.remove('show'); }, 1500);
                        }
                    }
                });
            });

            $('btnAddRing').addEventListener('click', function(){
                rings.push({ year: '百年' });
                localStorage.setItem('soul_rings_v21', JSON.stringify(rings));
                renderRings();
                updateRingInfo();
                validateRings();
                saveDraft();
                showToast('已添加魂环');
            });

            $('btnAddBackpack').addEventListener('click', function(){ var item = backpackInput.value.trim(); if(item){ addBackpackItem(item); backpackInput.value = ''; } });
            backpackInput.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ var item = this.value.trim(); if(item){ addBackpackItem(item); this.value = ''; } } });

            $('fateCopy').addEventListener('click', function(){ copyToClipboard(fateBody.textContent); showToast('已复制天命！'); });
            $('fateClose').addEventListener('click', function(){ fateModal.classList.remove('active'); });
            fateModal.addEventListener('click', function(e){ if(e.target === fateModal) fateModal.classList.remove('active'); });

            document.querySelectorAll('.sec details').forEach(function(detail){
                var summary = detail.querySelector('summary');
                if(summary){
                    summary.addEventListener('click', function(e){
                        e.preventDefault();
                        var isOpen = detail.hasAttribute('open');
                        if(isOpen) detail.removeAttribute('open');
                        else detail.setAttribute('open', 'open');
                    });
                }
            });

            fields.bloodType.addEventListener('change', function(){
                if(this.value === '自定义'){ fields.bloodCustomWrap.style.display = 'block'; } else { fields.bloodCustomWrap.style.display = 'none'; }
                saveDraft();
            });
            fields.bloodCustom.addEventListener('input', saveDraft);
            fields.secondProf.addEventListener('change', updateSecondProf);
            exportPreview.addEventListener('focus', function(){ this.select(); });
        }

        function init(){
            populateOriginSelect();
            populateStageSelect();
            renderSpecialOptions();
            updateInnateOptions();
            initRings();
            loadBackpack();
            renderBoneParts();
            setupTags();
            updateIdentityByCamp();
            fields.fc.value = '无';
            fields.fbg.value = '无';
            loadDraft();
            toggleDualSoul();
            updateSoulTitle();
            updateArmorGrade();
            updateSpiritDesc();
            updateSecondProfDesc();
            updateSpiritDot();
            updateMechaCustom();
            enforceSoulLevel();
            bindEvents();
            showPane(1);
            setTimeout(function(){ window.scrollTo(0, 0); showToast('✦ 魂导终端已启动 · 开始你的觉醒之旅 ✦'); }, 600);
        }

        init();
    })();
})();