// setting footer information
let fbTag = document.querySelector('#fb-tag');
let igTag = document.querySelector('#ig-tag');
let copyRightText = document.querySelector('#copy-right-text');
let fbLink = 'https://www.facebook.com/rafa0721';
let igLink = 'https://www.instagram.com/rafael_chen_yt/';
let footerText = '© Rafael Chen 2021. All Rights Reserved.';

fbTag.href = fbLink;
igTag.href = igLink;
copyRightText.textContent = footerText;


var imgSet = document.getElementsByClassName('img');
    dotSet = document.getElementsByClassName('dot');

var pre = document.getElementById('previous');
    next = document.getElementById('next');

// 剛打開葉面時先讓1圖層顯示三秒了  所以num直接設成二
// 這樣打開時馬上按下一張的時候就不會再執行一次1圖層
var num = 2;
var t;
t = setTimeout(showSlides, 3000);

function showSlides(){
  //hide all img first
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.remove('show');
    dotSet[i].classList.remove('show');
  }

  // 由於html的結構 (position:absolute;)
  // imgSet[0]~imgSet[imgSet.length-2](第一個到倒數第二個)的順序是反過來的
  // 也就是說  imgSet[0]等於倒數第二層  imgSet[imgSet.length-2]等於第一層
  // 而num(想要顯示的圖層編號)是從1開始
  if(num == imgSet.length){
    imgSet[imgSet.length-1].classList.add("show");
    dotSet[imgSet.length-1].classList.add("show");
    num = 0;
  } else{
    // changed是轉換過的num  轉換成imgSet的位置
    var changed = imgSet.length-num-1;

    imgSet[changed].classList.add("show");
    // dot的位置沒有顛倒 就是一般的num-1而已
    dotSet[num-1].classList.add("show");
    // console.log(num);
  }

  num++;
  // 再次呼叫timeout
  t = setTimeout(showSlides, 3000);
}

// dot clicked event
for(var i=0; i<dotSet.length; i++){
  dotSet[i].addEventListener("click", dotSelect);
}

function dotSelect(){
  // 先停止原先正在執行的timeout
  clearTimeout(t);
  //hide all img first
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.remove('show');
    dotSet[i].classList.remove('show');
  }
  var picNum = this.attributes["data-num"].value;
  num = picNum;
  showSlides();
}

// arrow clicked event
pre.addEventListener("click", preSelect);
next.addEventListener("click", nextSelect);

function preSelect(){
  // 先停止原先正在執行的timeout
  clearTimeout(t);
  //hide all img first
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.remove('show');
    dotSet[i].classList.remove('show');
  }

  // num==2時是剛執行完第一層的顯示 結尾有num++所以等於2  故不適用num = num-2;(沒有第0層) (num從1開始設定的)
  // num==2時是剛執行完最底層的顯示 歸零 而結尾有num++所以等於1 故不適用num = num-2;(沒有第-1層) (num從1開始設定的)
  // 也就是說第一層和最後一層都需要手動調整
  if(num == 2){
    num = imgSet.length;
  } else if(num == 1){
    num = imgSet.length-1;
  } else{
    num = num-2;
  }
  showSlides();
}

function nextSelect(){
  // 先停止原先正在執行的timeout
  clearTimeout(t);
  //hide all img first
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.remove('show');
    dotSet[i].classList.remove('show');
  }

  showSlides();
}


//mailButton
document.getElementById('mailPage').addEventListener("click", openMail);
function openMail(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}
