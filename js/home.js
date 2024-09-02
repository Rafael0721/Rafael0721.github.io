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
let fbTag = document.querySelector('#fb-tag');
let igTag = document.querySelector('#ig-tag');
let copyRightText = document.querySelector('#copy-right-text');
let fbLink = 'https://www.facebook.com/rafa0721';
let igLink = 'https://www.instagram.com/rafael_chen_yt/';
let footerText = `© Rafael Chen ${new Date().getFullYear()}. All Rights Reserved.`;

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
