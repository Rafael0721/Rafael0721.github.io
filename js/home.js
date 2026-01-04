// opening animation
var preload = document.getElementById("preload");
var html = document.querySelector("html");
// var cover = document.getElementById("squareCover");
var slideBall = document.querySelector("#face-ball");
var sliderFace = document.querySelector("#slider-face");
html.classList.add("stop-scrolling");
// setTimeout(function(){
//   cover.classList.add("cover-move1");
// }, 100);
// setTimeout(function(){
//   cover.classList.add("cover-move2");
// }, 1500);
setTimeout(function(){
  slideBall.classList.add("cover-move1");
  sliderFace.style.transform = "scale(0.5)";
  document.styleSheets[0].addRule('.rectangle-slide::after', 'width: 150px');
}, 500);
setTimeout(function(){
  slideBall.classList.add("cover-move2");
  sliderFace.style.transform = "scale(1)";
  document.styleSheets[0].addRule('.rectangle-slide::after', 'width: 500px');
}, 2000);
setTimeout(function(){
  preload.style.opacity = "0";
  html.classList.remove("stop-scrolling");
}, 2800);
setTimeout(function(){
  preload.style.display = "none";
}, 3500);

// setting footer information
let linkedinTag = document.querySelector('#linkedin-tag');
let fbTag = document.querySelector('#fb-tag');
let igTag = document.querySelector('#ig-tag');
let copyRightText = document.querySelector('#copy-right-text');
let linkedinLink = 'https://www.linkedin.com/in/rafael-chen-6b43b0151';
let fbLink = 'https://www.facebook.com/rafa0721';
let igLink = 'https://www.instagram.com/rafael_chen_yt/';
let footerText = `© Rafael Chen ${new Date().getFullYear()}. All Rights Reserved.`;

linkedinTag.href = linkedinLink;
fbTag.href = fbLink;
igTag.href = igLink;
copyRightText.textContent = footerText;

// tag animation
var about = document.getElementById('tag_about');
    work = document.getElementById('tag_work');
    skill = document.getElementById('tag_skill');
    edu = document.getElementById('tag_event');
    contact = document.getElementById('tag_contact');

function back(){
  var current = document.getElementsByClassName("tag-moved");
  if(current[0]){
    current[0].classList.remove("tag-moved");
  }
}


// for(var tag of sideTags){
//   var blockName = tag.dataset.block;
//   tag.addEventListener("click", () => {
//
//     console.log(tag);
//
//     $("html,body").animate({scrollTop: $(blockName).offset().top}, 1000);
//
//     setTimeout(function(){
//       back();
//       tag.classList.add("tag-moved");
//     }, 100);
//   });
// }

about.addEventListener("click", function(){
  // console.log(about.dataset.block);
  // 設置一點點timeout 才不會和滾動的tag事件衝突
  var blockName = about.dataset.block;
  $("html,body").animate({scrollTop: $(blockName).offset().top}, 1000);
  setTimeout(function(){
    back();
    about.classList.add("tag-moved");
  }, 100);
});
work.addEventListener("click", function(){
  var blockName = work.dataset.block;
  $("html,body").animate({scrollTop: $(blockName).offset().top}, 1000);
  setTimeout(function(){
    back();
    work.classList.add("tag-moved");
  }, 100);
});
skill.addEventListener("click", function(){
  var blockName = skill.dataset.block;
  $("html,body").animate({scrollTop: $(blockName).offset().top}, 1000);
  setTimeout(function(){
    back();
    skill.classList.add("tag-moved");
  }, 100);
});
edu.addEventListener("click", function(){
  var blockName = edu.dataset.block;
  $("html,body").animate({scrollTop: $(blockName).offset().top}, 1000);
  setTimeout(function(){
    back();
    edu.classList.add("tag-moved");
  }, 100);
});
contact.addEventListener("click", function(){
  var blockName = contact.dataset.block;
  $("html,body").animate({scrollTop: $(blockName).offset().top}, 1000);
  setTimeout(function(){
    back();
    contact.classList.add("tag-moved");
  }, 100);
});

window.addEventListener("scroll", function(){
  var ypos = window.pageYOffset;
      yheight = window.innerHeight;
      aboutY = document.getElementById("aboutBlock").offsetTop;
      workY = document.getElementById("workBlock").offsetTop;
      skillY = document.getElementById("skillBlock").offsetTop;
      parallaxBlockY = document.getElementById("parallaxBlock").offsetTop;
      parallaxY = document.getElementById("parallaxBG").offsetTop;
      eventY = document.getElementById("eventBlock").offsetTop;
      contactY = document.getElementById("contactBlock").offsetTop;

  // tag 事件
  if(ypos > aboutY-50){
    back();
    about.classList.add("tag-moved");
  } else{
    back();
  }
  if(ypos > workY-50){
    back();
    work.classList.add("tag-moved");
  }
  if(ypos > skillY-50){
    back();
    skill.classList.add("tag-moved");
  }
  if(ypos > eventY-50){
    back();
    edu.classList.add("tag-moved");
  }
  if(contactY-ypos < yheight){
    back();
    contact.classList.add("tag-moved");
  }

  // block漂浮事件
  // block出現超過 畫面高度的三成 才漂浮入場
  if(ypos > aboutY-yheight*0.7){
    document.getElementById("aboutBlock").classList.remove("up-down-moved");
  } else{
    document.getElementById("aboutBlock").classList.add("up-down-moved");
  }
  if(ypos > skillY-yheight*0.7){
    document.getElementById("skillBlock").classList.remove("up-down-moved");
  } else{
    document.getElementById("skillBlock").classList.add("up-down-moved");
  }
  if(ypos > eventY-yheight*0.7){
    document.getElementById("eventBlock").classList.remove("up-down-moved");
  } else{
    document.getElementById("eventBlock").classList.add("up-down-moved");
  }

  // parallax bg 事件
  if(ypos > parallaxBlockY-yheight){
    // 背景圖用0.5的速度來移動 從而製造出視差效果
    var factor = 0.5*(ypos-parallaxBlockY);
    // 一開始觸發事件時 圖片會先往Y負向(上)移動0.5*(ypos-parallaxBlockY)的距離
    // 因為此時parallaxBlockY > ypos
    document.getElementById("parallaxBG").style.transform = "translate3d(0px, "+factor+"px, 0px)";
  } else{
    document.getElementById("parallaxBG").style.transform = "translate3d(0px, 0px, 0px)";
  }
});

// top-img clock automatic img change
var imgSet = document.getElementsByClassName('img');

var num = 1;
var t;
t = setTimeout(showSlides, 1000);

function showSlides(){
  //hide all img first
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.remove('show');
  }

  // 由於html的結構 (position:absolute;)
  // imgSet[0]~imgSet[imgSet.length-2](第一個到倒數第二個)的順序是反過來的
  // 也就是說  imgSet[0]等於倒數第二層  imgSet[imgSet.length-2]等於第一層
  // 而num(想要顯示的圖層編號)是從1開始
  if(num == imgSet.length){
    imgSet[imgSet.length-1].classList.add("show");
    num = 0;
  } else{
    // changed是轉換過的num  轉換成imgSet的位置
    var changed = imgSet.length-num-1;

    imgSet[changed].classList.add("show");
  }

  num++;
  // 再次呼叫timeout
  t = setTimeout(showSlides, 3000);
}

//mailButton
document.getElementById('mailPage').addEventListener("click", openMail);
function openMail(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}

const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');

// 设置 canvas 为全屏
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.setTransform(1, 0, 0, 1, 0, 0); // new reset
  ctx.translate(canvas.width / 2, canvas.height / 2); // 将画布的中心作为原点

  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.globalAlpha = 0.5; // 設定全局透明度
}

resizeCanvas(); // 初次调用以设置画布大小
window.addEventListener('resize', resizeCanvas); // 当窗口大小变化时，自动调整画布大小

ctx.lineWidth = 0.5; // 线条宽度
ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)'; // 线条颜色与透明度

let frame = 0; // 帧计数器

// 动态曲线变化函数
function drawDynamicCurves() {
  const numShapes = 150; // 曲线数量 150~300都可以
  const radiusIncrement = 6; // 增加每层半径的递增量
  let radius = 100; // 初始半径
  let angleStep = Math.PI / 100; // 每层旋转的步进角度

  for (let i = 0; i < numShapes; i++) {
    ctx.beginPath();

    // 设置曲线的控制点
    for (let t = 0; t < Math.PI * 2; t += 0.1) {
      // 控制点的 x 和 y 随 frame 和 t 变化
      let x = Math.cos(t) * radius * (1 + 0.3 * Math.sin(t * 5 + frame * 0.01));
      let y = Math.sin(t) * radius * (1 + 0.3 * Math.cos(t * 3 + frame * 0.01));

      if (t === 0) {
        ctx.moveTo(x, y); // 移动到起点
      } else {
        ctx.lineTo(x, y); // 连接到下一个点
      }
    }

    // 绘制曲线并关闭路径
    ctx.stroke();
    ctx.closePath();

    radius += radiusIncrement; // 增加半径形成递进效果
  }

  frame++; // 增加帧计数器，使曲线随时间变化
}

// 动画函数
// function animate() {
//   ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height); // 清除画布

//   ctx.globalAlpha = 0.5; 
//   drawDynamicCurves(); // 调用绘制曲线函数

//   requestAnimationFrame(animate); // 持续调用动画
// }

let last = 0;
function animate(ts) {
  const FPS = 24;
  const interval = 1000 / FPS;
  if (ts - last < interval) {
    requestAnimationFrame(animate);
    return;
  }
  last = ts;

  ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
  drawDynamicCurves();
  requestAnimationFrame(animate);
}
window.addEventListener('resize', resizeCanvas);

// 執行背景線條動畫
animate();


// ===============================
// 以下為照片背後的藍色宇宙力場動畫
// Avatar Generative Background (Flow Ribbons + Particles)
// ===============================

function initAvatarCanvas() {
  const c = document.getElementById('avatarCanvas');

  let driftX = 0;
  let driftY = 0; 
  if (!c) return;

  // IMPORTANT: 不要用 ctx，避免跟 patternCanvas 的 ctx 撞名
  const avtctx = c.getContext('2d', { alpha: true, desynchronized: true });

  // ----------------------------
  // 0) 找照片圓心的 selector（抓不到就 fallback 到 canvas center）
  // 你可以把下面陣列裡加上你實際的 id/class（越精準越好）
  // ----------------------------
  const AVATAR_ANCHOR_SELECTORS = [
    '#avatarPhoto',
    '#avatar',
    '.avatar',
    '.avatar-photo',
    '.profile-photo',
    '.profilePhoto',
    '.hero-avatar',
    '.home-avatar',
    '.photo',
    '.portrait',
    'img[alt*="Rafael"]',
    'img.profile',
    'img.avatar'
  ];

  function findAvatarElement() {
    for (const sel of AVATAR_ANCHOR_SELECTORS) {
      const el = document.querySelector(sel);
      if (el) return el;
    }
    return null;
  }

  // ----------------------------
  // 1) sizing / DPR / geometry
  // ----------------------------
  let dpr = window.devicePixelRatio || 1;
  let cssW = 1, cssH = 1;

  let _w = 1, _h = 1, _minWH = 1;

  // 這三個是「照片圓心 anchor」（不是 canvas 中心）
  let avatarCX = 0, avatarCY = 0, avatarR = 0;

  function PW() { return _w; }
  function PH() { return _h; }
  function center() { return { x: avatarCX, y: avatarCY }; }
  function particleCenter() { return { x: avatarCX + driftX, y: avatarCY + driftY }; }

  // ---- mouse gravity well (avatarCanvas local coords) ----
  const mouseWell = {
    x: 0,
    y: 0,
    active: false,
  };

  function updateMouseFromEvent(ev) {
    const rect = c.getBoundingClientRect();
    mouseWell.x = ev.clientX - rect.left;   // CSS px
    mouseWell.y = ev.clientY - rect.top;    // CSS px
    mouseWell.active = true;
  }

  c.addEventListener('pointermove', updateMouseFromEvent, { passive: true });
  c.addEventListener('pointerenter', updateMouseFromEvent, { passive: true });
  c.addEventListener('pointerleave', () => { mouseWell.active = false; }, { passive: true });

  // 參數：影響範圍/強度（先用這組，之後再調）
  const mouseWellRadius = () => Math.min(PW(), PH()) * 0.45; // 影響半徑
  const mouseWellStrength = 0.18; // 0~1：越大越像被吸

  function computeAvatarAnchor() {
    const avatarEl = findAvatarElement();
    const canvasRect = c.getBoundingClientRect();

    if (!avatarEl) {
      // fallback：找不到就用 canvas 中心
      avatarCX = _w / 2;
      avatarCY = _h / 2;
      avatarR = _minWH * 0.25;
      return;
    }

    const r = avatarEl.getBoundingClientRect();
    // 圓心在 canvas CSS px 座標
    avatarCX = (r.left + r.width / 2) - canvasRect.left;
    avatarCY = (r.top + r.height / 2) - canvasRect.top;
    avatarR = Math.min(r.width, r.height) / 2;

    // 如果 avatarEl 是 <img>，但外面有圓形容器，可能需要抓 parent
    // 你如果覺得半徑不準，可以把 selector 指到外層圓形容器。
  }

  // ----------------------------
  // 2) cached gradients (rebuild on resize only)
  // ----------------------------
  let softMaskGrad = null;
  let mistMaskGrad = null;
  let particleMaskGrad = null;

  function rebuildGradients() {
    const { x: cx, y: cy } = center();

    // 外圈淡出：讓藍色外圈更柔
    softMaskGrad = avtctx.createRadialGradient(cx, cy, 0, cx, cy, _minWH * 0.75);
    // softMaskGrad.addColorStop(0.00, 'rgba(255,255,255,1)');
    // softMaskGrad.addColorStop(0.62, 'rgba(255,255,255,1)');
    // softMaskGrad.addColorStop(0.78, 'rgba(255,255,255,0.55)');
    // softMaskGrad.addColorStop(0.90, 'rgba(255,255,255,0.18)');
    // softMaskGrad.addColorStop(1.00, 'rgba(255,255,255,0)');
    softMaskGrad.addColorStop(0.00, 'rgba(255,255,255,1)');
    softMaskGrad.addColorStop(0.52, 'rgba(255,255,255,1)');
    softMaskGrad.addColorStop(0.72, 'rgba(255,255,255,0.60)');
    softMaskGrad.addColorStop(0.80, 'rgba(255,255,255,0.15)');
    softMaskGrad.addColorStop(1.00, 'rgba(255,255,255,0)');

    mistMaskGrad = avtctx.createRadialGradient(cx, cy, _minWH * 0.10, cx, cy, _minWH * 0.78);
    mistMaskGrad.addColorStop(0.00, 'rgba(255,255,255,1)');
    mistMaskGrad.addColorStop(0.55, 'rgba(255,255,255,1)');
    mistMaskGrad.addColorStop(0.75, 'rgba(255,255,255,0.40)');
    mistMaskGrad.addColorStop(0.90, 'rgba(255,255,255,0)');
    mistMaskGrad.addColorStop(1.00, 'rgba(255,255,255,0)');

    particleMaskGrad = avtctx.createRadialGradient(cx, cy, 0, cx, cy, _minWH * 0.84);
    particleMaskGrad.addColorStop(0.00, 'rgba(255,255,255,1)');
    particleMaskGrad.addColorStop(0.55, 'rgba(255,255,255,1)');
    particleMaskGrad.addColorStop(0.85, 'rgba(255,255,255,0.20)');
    particleMaskGrad.addColorStop(1.00, 'rgba(255,255,255,0)');
  }

  // ----------------------------
  // 3) offscreen background layer (low-res + low-frequency)
  // ----------------------------
  const avatarBgLayer = document.createElement('canvas');
  const avatarBgCtx = avatarBgLayer.getContext('2d', { alpha: true });

  let bgScale = 0.65;
  let bgW = 1, bgH = 1;

  function rebuildOffscreen() {
    bgW = Math.max(1, Math.floor(_w * bgScale));
    bgH = Math.max(1, Math.floor(_h * bgScale));
    avatarBgLayer.width = bgW;
    avatarBgLayer.height = bgH;
    avatarBgCtx.setTransform(1, 0, 0, 1, 0, 0);
  }

  function resize() {
    const rect = c.getBoundingClientRect();
    cssW = Math.max(1, rect.width);
    cssH = Math.max(1, rect.height);

    const DPR_CAP = 1.35;
    dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);

    c.width = Math.floor(cssW * dpr);
    c.height = Math.floor(cssH * dpr);

    avtctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    _w = cssW;
    _h = cssH;
    _minWH = Math.min(_w, _h);

    computeAvatarAnchor();
    rebuildGradients();
    rebuildOffscreen();
  }

  window.addEventListener('resize', resize);
  resize();

  let targetDX = 0, targetDY = 0;
  function onMove(e) {
    const r = c.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;

    // 1) 先把 mouseWell 也更新（力場用這個）
    mouseWell.x = mx;
    mouseWell.y = my;
    mouseWell.active = true;

    // 2) 你原本的 drift（照片整體微微被吸）
    const dx = mx - avatarCX;
    const dy = my - avatarCY;
    const strength = 0.12;
    targetDX = dx * strength;
    targetDY = dy * strength;
  }

  function onLeave() {
    targetDX = 0;
    targetDY = 0;

    // ⭐補這行：離開時關掉力場
    mouseWell.active = false;
  }

  c.addEventListener('mousemove', onMove);
  c.addEventListener('mouseleave', onLeave);


  // ----------------------------
  // 4) FAST noise (replace Math.sin rand)
  // ----------------------------
  function hash2i(ix, iy) {
    let n = ix * 374761393 + iy * 668265263;
    n = (n ^ (n >> 13)) * 1274126177;
    n = n ^ (n >> 16);
    return (n >>> 0) / 4294967296;
  }
  function smooth(t) { return t * t * (3 - 2 * t); }
  function noise2D(x, y) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;

    const n00 = hash2i(xi, yi);
    const n10 = hash2i(xi + 1, yi);
    const n01 = hash2i(xi, yi + 1);
    const n11 = hash2i(xi + 1, yi + 1);

    const u = smooth(xf);
    const v = smooth(yf);

    const x1 = n00 * (1 - u) + n10 * u;
    const x2 = n01 * (1 - u) + n11 * u;
    return x1 * (1 - v) + x2 * v;
  }

  // ----------------------------
  // 5) params
  // ----------------------------
  const fieldScale = 0.010;
  const timeScale = 0.0022;

  const particleCount = 180;
  const step = 2.4;
  const maxLife = 260;

  const trailFade = 0.05;

  const ribbonEveryNFrames = 3;
  const ribbonSeeds =40;
  const ribbonSteps = 220;

  const bgEveryNFrames = 6;

  // ----------------------------
  // 6) helpers: mask / fade
  // ----------------------------
  function applyMask(grad) {
    avtctx.save();
    avtctx.globalCompositeOperation = 'destination-in';
    avtctx.fillStyle = grad;
    avtctx.fillRect(0, 0, PW(), PH());
    avtctx.restore();
  }

  function fadeTrails() {
    avtctx.save();
    avtctx.globalCompositeOperation = 'source-over';
    avtctx.shadowBlur = 0;
    avtctx.fillStyle = `rgba(255,255,255,${trailFade})`;
    avtctx.fillRect(0, 0, PW(), PH());
    avtctx.restore();
  }

  // ----------------------------
  // 7) BG layer draw (nebula/mist-ish) -> offscreen
  // ----------------------------
  function drawNebulaAndMistToOffscreen(t) {
    const bcx = bgW / 2;
    const bcy = bgH / 2;
    // const bmin = Math.min(bgW, bgH);

    avatarBgCtx.clearRect(0, 0, bgW, bgH);
    avatarBgCtx.globalCompositeOperation = 'source-over';

    const bmin = Math.min(bgW, bgH);

    // 外層：大、amp 小、變慢（用來打破最大圓）
    drawMorphingBlobToOffscreen(
      t,
      bmin * 0.55,   // baseR：更大
      bmin * 0.07,  // ampR：不要太大，外圈只要微微變形
      0.75,          // alphaMul：稍淡
      0.10,          // spinMul：更慢
      120.0          // noiseOffset：跟內層用不同 offset，避免同步
    );

    // 內層：你原本那個（較明顯變形）
    drawMorphingBlobToOffscreen(
      t,
      bmin * 0.43,
      bmin * 0.15,
      1.00,
      0.18,
      20.0
    );


    // 多層柔霧（宇宙底）
    for (let k = 0; k < 4; k++) {
      const rOuter = bmin * (0.22 + k * 0.07);
      const ang0 = k * 1.7 + t * 0.25;
      const ox = bcx + Math.cos(ang0) * rOuter * 0.25;
      const oy = bcy + Math.sin(ang0) * rOuter * 0.18;

      const g = avatarBgCtx.createRadialGradient(ox, oy, rOuter * 0.05, ox, oy, rOuter);
      g.addColorStop(0.00, `rgba(120, 175, 220, ${0.18 - k * 0.015})`);
      g.addColorStop(0.55, `rgba(120, 175, 220, ${0.10 - k * 0.010})`);
      g.addColorStop(1.00, `rgba(120, 175, 220, 0)`);

      avatarBgCtx.fillStyle = g;
      avatarBgCtx.beginPath();
      avatarBgCtx.arc(bcx, bcy, rOuter, 0, Math.PI * 2);
      avatarBgCtx.fill();
    }

    // 少量白紋理線
    avatarBgCtx.globalAlpha = 0.10;
    avatarBgCtx.strokeStyle = 'rgba(255,255,255,0.25)';
    avatarBgCtx.lineWidth = 1.2;

    const lines = 150;
    for (let i = 0; i < lines; i++) {
      let x = bcx - bmin * 0.55 + (i / lines) * bmin * 1.1;
      let y = bcy - bmin * 0.20 + Math.sin(i * 0.7 + t * 0.8) * bmin * 0.08;

      avatarBgCtx.beginPath();
      avatarBgCtx.moveTo(x, y);

      for (let s = 0; s < 40; s++) {
        const n = noise2D(x * 0.010 + 3, y * 0.010 + 3 + t * 0.6);
        const a = n * Math.PI * 2;
        x += Math.cos(a) * 2.2 + 1.2;
        y += Math.sin(a) * 1.6;
        avatarBgCtx.lineTo(x, y);
      }
      avatarBgCtx.stroke();
    }
    avatarBgCtx.globalAlpha = 1;
  }

  function drawMorphingBlobToOffscreen(t, baseR, ampR, alphaMul, spinMul, noiseOffset) {
    const bcx = bgW / 2;
    const bcy = bgH / 2;
    const K = 44; // 外圈用更平滑

    const spin = t * spinMul;

    avatarBgCtx.save();
    avatarBgCtx.globalCompositeOperation = 'source-over';

    avatarBgCtx.beginPath();
    for (let i = 0; i <= K; i++) {
      const a = (i / K) * Math.PI * 2 + spin;

      const n1 = noise2D(Math.cos(a) * 1.2 + noiseOffset, Math.sin(a) * 1.2 + noiseOffset + t * 0.40);
      const n2 = noise2D(Math.cos(a) * 2.0 + noiseOffset + 40.0, Math.sin(a) * 2.0 + noiseOffset + 40.0 + t * 0.26);
      const warp = (n1 * 0.65 + n2 * 0.35);

      const r = baseR + (warp - 0.5) * 2 * ampR;

      const x = bcx + Math.cos(a) * r;
      const y = bcy + Math.sin(a) * r;

      if (i === 0) avatarBgCtx.moveTo(x, y);
      else avatarBgCtx.lineTo(x, y);
    }
    avatarBgCtx.closePath();

    const g = avatarBgCtx.createRadialGradient(bcx, bcy, baseR * 0.05, bcx, bcy, baseR * 1.18);
    // g.addColorStop(0.00, `rgba(120,175,220,${0.40 * alphaMul})`);
    // g.addColorStop(0.55, `rgba(120,175,220,${0.26 * alphaMul})`);
    // g.addColorStop(0.85, `rgba(120,175,220,${0.16 * alphaMul})`);
    // g.addColorStop(1.00, 'rgba(120,175,220,0)');
    g.addColorStop(0.78, `rgba(120,175,220,${0.18 * alphaMul})`);
    g.addColorStop(0.90, `rgba(120,175,220,${0.08 * alphaMul})`);
    g.addColorStop(0.97, `rgba(120,175,220,${0.03 * alphaMul})`);
    g.addColorStop(1.00, 'rgba(120,175,220,0)');

    avatarBgCtx.fillStyle = g;
    avatarBgCtx.fill();

    avatarBgCtx.restore();
  }


  function drawHalo(t) {
    const { x: cx, y: cy } = { x: avatarCX, y: avatarCY };

    const rMid = _minWH * 0.245;
    const band = _minWH * 0.015;

    // ✅ 這個就是「整體亮度總開關」
    const haloAlpha = 0.55; // 0~1：越小越淡（建議 0.35~0.70）

    avtctx.save();
    avtctx.globalCompositeOperation = 'source-over';

    const glowOuter = rMid + band * 3.2;
    const glowInner = rMid - band * 2.0;

    const g = avtctx.createRadialGradient(cx, cy, glowInner, cx, cy, glowOuter);
    g.addColorStop(0.00, `rgba(255,255,255,${0.00 * haloAlpha})`);
    g.addColorStop(0.45, `rgba(255,255,255,${0.35 * haloAlpha})`);
    g.addColorStop(0.60, `rgba(255,255,255,${0.75 * haloAlpha})`);
    g.addColorStop(0.78, `rgba(255,255,255,${0.30 * haloAlpha})`);
    g.addColorStop(1.00, `rgba(255,255,255,${0.00 * haloAlpha})`);

    avtctx.fillStyle = g;
    avtctx.beginPath();
    avtctx.arc(cx, cy, glowOuter, 0, Math.PI * 2);
    avtctx.fill();

    // 2) 銳利白邊
    avtctx.globalAlpha = 0.35 * haloAlpha;
    avtctx.lineWidth = Math.max(1.2, band * 0.15);
    avtctx.strokeStyle = 'rgba(255,255,255,1)';
    avtctx.beginPath();
    avtctx.arc(cx, cy, rMid, 0, Math.PI * 2);
    avtctx.stroke();

    // 3) 內側細線
    avtctx.globalAlpha = 0.25 * haloAlpha;
    avtctx.lineWidth = Math.max(1.0, band * 0.05);
    avtctx.strokeStyle = 'rgba(255,255,255,1)';
    avtctx.beginPath();
    avtctx.arc(cx, cy, rMid - band * 0.45, 0, Math.PI * 2);
    avtctx.stroke();

    avtctx.restore();
  }


  // ----------------------------
  // 8) Ribbons
  // ----------------------------
  function drawFlowRibbons(t) {
    const { x: cx, y: cy } = center();
    const w = PW(), h = PH();

    avtctx.save();
    avtctx.globalCompositeOperation = 'source-over';
    avtctx.globalAlpha = 0.95;

    avtctx.shadowColor = 'rgba(170, 220, 255, 0.35)';
    avtctx.shadowBlur = 8;

    avtctx.lineWidth = 2.2;
    avtctx.strokeStyle = 'rgba(210, 235, 255, 0.70)';

    // 注意：為了穩定視覺，seed 用固定 hash 方式，不要每幀 Math.random() 造成跳動
    for (let i = 0; i < ribbonSeeds; i++) {
      const rx = hash2i(i, 11);
      const ry = hash2i(i, 37);

      const sources = [
        { ax: -0.55, ay: -0.15 },
        { ax:  0.45, ay: -0.25 },
        { ax: -0.35, ay:  0.35 },
        { ax:  0.35, ay:  0.30 }
      ];

      const s = sources[i % sources.length];
      const jitterX = (rx - 0.5) * PW() * 0.08;
      const jitterY = (ry - 0.5) * PH() * 0.08;

      let x = avatarCX + s.ax * avatarR * 2.2 + jitterX;
      let y = avatarCY + s.ay * avatarR * 2.2 + jitterY;


      avtctx.beginPath();
      avtctx.moveTo(x, y);

      for (let s = 0; s < ribbonSteps; s++) {
        const n = noise2D(x * fieldScale + 10.0, y * fieldScale + 10.0 + t * 0.9);
        const ang = n * Math.PI * 2 * 1.6;
        x += Math.cos(ang) * 2.0 + 0.75;
        y += Math.sin(ang) * 2.0;
        avtctx.lineTo(x, y);

        if (x < -60 || x > w + 60 || y < -60 || y > h + 60) break;
      }
      avtctx.stroke();
    }

    avtctx.restore();
  }

  // ----------------------------
  // 9) Particles: bucket stroke + "star dots" (core+glow sprites)
  // ----------------------------
  const particles = [];

  function spawn() {
    const { x: cx, y: cy } = center();

    // 以「照片圓」為中心 spawn（不會偏）
    const base = Math.max(avatarR * 1.35, _minWH * 0.18);
    const r = base * (0.30 + Math.random() * 0.55);
    const a = Math.random() * Math.PI * 2;

    const size = 1.0 + Math.random() * 2.0; // 1~3
    const bucket = size < 1.7 ? 0 : (size < 2.4 ? 1 : 2);

    return {
      x: cx + Math.cos(a) * r,
      y: cy + Math.sin(a) * r,
      life: (Math.random() * maxLife) | 0,
      seed: Math.random() * 1000,
      size,
      bucket
    };
  }

  for (let i = 0; i < particleCount; i++) particles.push(spawn());

  // core+glow sprites（回到星點感，不會像彗星膠囊）
  const coreSprite = document.createElement('canvas');
  const glowSprite = document.createElement('canvas');
  const coreCtx = coreSprite.getContext('2d');
  const glowCtx = glowSprite.getContext('2d');

  const CORE = 24;
  const GLOW = 48;
  coreSprite.width = coreSprite.height = CORE;
  glowSprite.width = glowSprite.height = GLOW;

  (function buildSprites() {
    // core: 小而亮
    let g = coreCtx.createRadialGradient(CORE / 2, CORE / 2, 0, CORE / 2, CORE / 2, CORE / 2);
    g.addColorStop(0.00, 'rgba(255,255,255,0.95)');
    g.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    g.addColorStop(1.00, 'rgba(255,255,255,0)');
    coreCtx.fillStyle = g;
    coreCtx.fillRect(0, 0, CORE, CORE);

    // glow: 大而淡
    g = glowCtx.createRadialGradient(GLOW / 2, GLOW / 2, 0, GLOW / 2, GLOW / 2, GLOW / 2);
    g.addColorStop(0.00, 'rgba(255,255,255,0.22)');
    g.addColorStop(0.55, 'rgba(255,255,255,0.10)');
    g.addColorStop(1.00, 'rgba(255,255,255,0)');
    glowCtx.fillStyle = g;
    glowCtx.fillRect(0, 0, GLOW, GLOW);
  })();

  function drawParticles(t) {
    const { x: cx, y: cy } = particleCenter();

    // 1) bucketed line paths -> only 3 strokes per frame
    avtctx.save();
    avtctx.globalCompositeOperation = 'source-over';
    avtctx.globalAlpha = 1;

    avtctx.strokeStyle = 'rgba(255,255,255,0.26)';
    avtctx.shadowColor = 'rgba(255,255,255,0.55)';
    avtctx.shadowBlur = 10;

    const p0 = new Path2D();
    const p1 = new Path2D();
    const p2 = new Path2D();

    for (const p of particles) {
      const prevX = p.x;
      const prevY = p.y;

      // === flow field ===
      const n = noise2D(p.x * fieldScale + p.seed, p.y * fieldScale + p.seed + t);
      let angle = n * Math.PI * 2 * 2.0;

      // ===== mouse gravity well (angle blend, cheap & stable) =====
      {
        const cc = center(); // {x,y}，而且是「照片圓心」那個 anchor
        const mx = mouseWell.active ? mouseWell.x : cc.x;
        const my = mouseWell.active ? mouseWell.y : cc.y;

        const dxm = mx - p.x;
        const dym = my - p.y;
        const d = Math.sqrt(dxm * dxm + dym * dym) + 1e-6;

        const R = mouseWellRadius();
        if (d < R) {
          const u = 1.0 - (d / R);                 // 0~1
          const influence = u * u * mouseWellStrength;
          const mouseAngle = Math.atan2(dym, dxm);
          angle = angle * (1.0 - influence) + mouseAngle * influence;
        }
      }

      p.x += Math.cos(angle) * step;
      p.y += Math.sin(angle) * step;

      p.x += driftX * 0.05;
      p.y += driftY * 0.05; 
      p.life++;

      const path = (p.bucket === 0) ? p0 : (p.bucket === 1 ? p1 : p2);
      path.moveTo(prevX, prevY);
      path.lineTo(p.x, p.y);

      // respawn：半徑用「照片半徑」做基準（避免飛到很外面）
      const dx = p.x - cx, dy = p.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const killR = Math.max(avatarR * 2.6, _minWH * 0.60);

      if (p.life > maxLife || dist > killR) {
        Object.assign(p, spawn());
      }
    }

    // --- recenter swarm to avoid drift ---
    const xs = new Array(particles.length);
    const ys = new Array(particles.length);

    for (let i = 0; i < particles.length; i++) {
      xs[i] = particles[i].x;
      ys[i] = particles[i].y;
    }

    xs.sort((a, b) => a - b);
    ys.sort((a, b) => a - b);

    // trim 15% on each side (可調 0.1~0.2)
    const trim = Math.floor(particles.length * 0.15);
    let sumX = 0, sumY = 0;
    let count = 0;

    for (let i = trim; i < particles.length - trim; i++) {
      sumX += xs[i];
      sumY += ys[i];
      count++;
    }

    const meanX = sumX / count;
    const meanY = sumY / count;

    // pull strength：0.02 ~ 0.08，越大越「鎖」在中心
    const recenterStrength = 0.02;

    const cc = center(); // 這個已經包含 driftX/driftY
    const lerpAmt = 0.25; // 0.10~0.25 自己調，越小越不黏
    const targetX = mouseWell.active ? (cc.x + (mouseWell.x - cc.x) * lerpAmt) : cc.x;
    const targetY = mouseWell.active ? (cc.y + (mouseWell.y - cc.y) * lerpAmt) : cc.y;
    const pullX = targetX - meanX;
    const pullY = targetY - meanY;

    // 平滑更新 drift（不要立刻全拉回）
    // driftX = driftX * 0.90 + pullX * 0.10;
    // driftY = driftY * 0.90 + pullY * 0.10;

    for (let i = 0; i < particles.length; i++) {
      particles[i].x += pullX * recenterStrength;
      particles[i].y += pullY * recenterStrength;
    }



    avtctx.lineWidth = 1.15; avtctx.stroke(p0);
    avtctx.lineWidth = 1.75; avtctx.stroke(p1);
    avtctx.lineWidth = 2.25; avtctx.stroke(p2);

    avtctx.restore();

    // 2) star dots：core + glow（不再用 giant blob + skip half）
    avtctx.save();
    avtctx.globalCompositeOperation = 'source-over';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // 尺寸更小，更像星點
      const coreSize = 4 + p.bucket * 2;  // 4,6,8
      const glowSize = coreSize * 3.0;    // 12,18,24

      avtctx.globalAlpha = 0.70; // glow
      avtctx.drawImage(glowSprite, p.x - glowSize / 2, p.y - glowSize / 2, glowSize, glowSize);

      avtctx.globalAlpha = 0.95; // core
      avtctx.drawImage(coreSprite, p.x - coreSize / 2, p.y - coreSize / 2, coreSize, coreSize);
    }

    avtctx.restore();

    applyMask(particleMaskGrad);
  }

  // ----------------------------
  // 10) main loop
  // ----------------------------
  let t = 0;
  let frame = 0;

  function tick() {
    frame++;

    // 每幀：drift 慢慢靠近 target（0.08~0.20 越大越跟手）
    driftX += (targetDX - driftX) * 0.12;
    driftY += (targetDY - driftY) * 0.12;


    // 每隔一段時間重新抓一次 anchor（避免字體載入 / layout reflow 造成偏移）
    if (frame % 30 === 0) {
      computeAvatarAnchor();
      rebuildGradients();
    }

    // if ((frame % 4) === 0) {
    //   drawHalo(t);
    // }

    drawHalo(t);

    // 用 fade 取代 clear
    fadeTrails();

    // BG low-frequency update
    if (frame % bgEveryNFrames === 0) {
      drawNebulaAndMistToOffscreen(t);
    }

    // blit bg
    avtctx.save();
    avtctx.globalAlpha = 0.95;
    avtctx.drawImage(avatarBgLayer, 0, 0, bgW, bgH, 0, 0, PW(), PH());
    avtctx.restore();

    applyMask(mistMaskGrad);

    // ribbons low-frequency
    if (frame % ribbonEveryNFrames === 0) {
      drawFlowRibbons(t);
      // applyMask(softMaskGrad);
    }

    // particles every frame
    drawParticles(t);

    // === DEBUG: show anchor + particle centroid ===
    function debugDraw() {
      // 1) anchor cross (red)
      avtctx.save();
      avtctx.globalCompositeOperation = 'source-over';
      avtctx.globalAlpha = 1;
      avtctx.strokeStyle = 'rgba(255,0,0,0.9)';
      avtctx.lineWidth = 1;

      avtctx.beginPath();
      avtctx.moveTo(avatarCX - 10, avatarCY);
      avtctx.lineTo(avatarCX + 10, avatarCY);
      avtctx.moveTo(avatarCX, avatarCY - 10);
      avtctx.lineTo(avatarCX, avatarCY + 10);
      avtctx.stroke();

      // 2) particle centroid cross (green)
      let sx = 0, sy = 0;
      for (const p of particles) { sx += p.x; sy += p.y; }
      const mx = sx / particles.length;
      const my = sy / particles.length;

      avtctx.strokeStyle = 'rgba(0,180,0,0.9)';
      avtctx.beginPath();
      avtctx.moveTo(mx - 10, my);
      avtctx.lineTo(mx + 10, my);
      avtctx.moveTo(mx, my - 10);
      avtctx.lineTo(mx, my + 10);
      avtctx.stroke();

      avtctx.restore();
    };

    debugDraw();

    // === 外圈霧化 overlay：把最外緣硬邊柔掉（放在 applyMask(softMaskGrad) 前）===
    {
      const { x: cx, y: cy } = center();
      const r0 = _minWH * 0.70;   // 霧開始的位置（往內一點）
      const r1 = _minWH * 0.92;   // 霧到最外圈（略大於 softMask 外半徑也可）

      avtctx.save();
      avtctx.globalCompositeOperation = 'source-over';
      avtctx.globalAlpha = 0.18; // 0.10~0.30：越大越霧

      const fog = avtctx.createRadialGradient(cx, cy, r0, cx, cy, r1);
      fog.addColorStop(0.0, 'rgba(255,255,255,0)');
      fog.addColorStop(1.0, 'rgba(255,255,255,1)');

      avtctx.fillStyle = fog;
      avtctx.beginPath();
      avtctx.arc(cx, cy, r1, 0, Math.PI * 2);
      avtctx.fill();

      avtctx.restore();
    }
    applyMask(softMaskGrad);

    t += timeScale;
    requestAnimationFrame(tick);
  }

  tick();
}

initAvatarCanvas();
