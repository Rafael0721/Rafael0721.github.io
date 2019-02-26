var mail = document.getElementById('mailPage');
var slider = document.getElementById("myRange");
var body = document.getElementById('body');
var row1 = document.getElementById('row1');
var row2 = document.getElementById('row2');
var row3 = document.getElementById('row3');
var row4 = document.getElementById('row4');
var row5 = document.getElementById('row5');
var row6 = document.getElementById('row6');
var row7 = document.getElementById('row7');
var row8 = document.getElementById('row8');
var topSlogan = document.getElementById('topSlogan');
var topImg = document.getElementById('topImg');
var top1 = document.getElementById('img-1');
var top2 = document.getElementById('img-2');
var top3 = document.getElementById('img-3');
var top4 = document.getElementById('img-4');
var top5 = document.getElementById('img-5');
var top6 = document.getElementById('img-6');
var top7 = document.getElementById('img-7');
var top8 = document.getElementById('img-8');
var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');
var dot4 = document.getElementById('dot4');
var dot5 = document.getElementById('dot5');
var dot6 = document.getElementById('dot6');
var dot7 = document.getElementById('dot7');
var dot8 = document.getElementById('dot8');
var dotSet = document.getElementsByClassName('dot');
var imgSet = document.getElementsByClassName('top-img');

//mailButton
mail.addEventListener("click", openPage);
function openPage(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}

//top-img clock automatic img change
var num = 1;
setTimeout(showSlides, 3000);

function showSlides(){
  //hide all img first
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.add("top-hidden");
    dotSet[i].className = "dot dot-pale";
    top8.classList.add("top-hidden");
    dotSet[7].className = "dot dot-pale";
  }
  if(num == 1){
    top1.className = "top-img";
    dot1.className = "dot dot-dark";
  }
  if(num == 2){
    top2.className = "top-img";
    dot2.className = "dot dot-dark";
  }
  if(num == 3){
    top3.className = "top-img";
    dot3.className = "dot dot-dark";
  }
  if(num == 4){
    top4.className = "top-img";
    dot4.className = "dot dot-dark";
  }
  if(num == 5){
    top5.className = "top-img";
    dot5.className = "dot dot-dark";
  }
  if(num == 6){
    top6.className = "top-img";
    dot6.className = "dot dot-dark";
  }
  if(num == 7){
    top7.className = "top-img";
    dot7.className = "dot dot-dark";
  }
  if(num == 8){
    top8.className = "img-real";
    dot8.className = "dot dot-dark";
  }
  num++;
  if(num > 8){
    num = 1;
  }
  setTimeout(showSlides, 3000)
}

//click to switch
dot1.addEventListener("click", slideSwitch);
dot2.addEventListener("click", slideSwitch);
dot3.addEventListener("click", slideSwitch);
dot4.addEventListener("click", slideSwitch);
dot5.addEventListener("click", slideSwitch);
dot6.addEventListener("click", slideSwitch);
dot7.addEventListener("click", slideSwitch);
dot8.addEventListener("click", slideSwitch);

function slideSwitch(){
  for(var i=0; i < imgSet.length; i++){
    imgSet[i].classList.add("top-hidden");
    dotSet[i].className = "dot dot-pale";
    top8.classList.add("top-hidden");
    dotSet[7].className = "dot dot-pale";
  }
  var picId = this.attributes["data-img"].value;
  var picNum = this.attributes["data-item"].value;
  var pic = document.getElementById(picId);
  this.className = "dot dot-dark";
  pic.classList.remove("top-hidden");
  num = picNum;
  showSlides.clear(); //taking 0.5~1s to run clear(), therefore making the img & dot change first
  showSlides();
}
//若要有前後按鈕的話，用變數num來按順序抓出getElementsByClass裡的物件，在clear()中斷的0.5秒內先顯示圖片
//Ex: dotSet[num].className... or imgSet[num-3].classList.remove...

//opening animation
  setTimeout(function(){
    topSlogan.classList.remove("hidden");
  }, 100);
  setTimeout(function(){
    topSlogan.classList.add("moveOut");
  }, 1800);
  setTimeout(function(){
    topImg.classList.remove("hidden");
  }, 1800);


//scroll Event
window.addEventListener("scroll", show);
function show(){
  var ypos = window.pageYOffset;
  var w = window.innerWidth;
  if(w > 700){
  if(ypos < 550){
    body.className = "";
  }
  if(ypos > 350){
    row1.classList.remove("hiddenLeft");
  }
  if(ypos > 550){
    body.classList.add("bodyBG");
  }
  if(ypos > 800){
    row2.classList.remove("hiddenRight");
  }
  if(ypos > 1250){
    row3.classList.remove("hiddenLeft");
  }
  if(ypos > 1700){
    row4.classList.remove("hiddenRight");
  }
  if(ypos > 2150){
    row5.classList.remove("hiddenLeft");
  }
  if(ypos > 2550){
    row6.classList.remove("hiddenRight");
  }
  if(ypos > 3000){
    row7.classList.remove("hiddenLeft");
  }
  if(ypos > 3450){
    row8.classList.remove("hiddenRight");
  }
 }

 if(w < 701){
 if(ypos < 500){
   body.className = "";
 }
 if(ypos > 500){
   body.classList.add("bodyBG");
 }
 if(ypos > 50){
   row1.classList.remove("hiddenLeft");
 }
 if(ypos > 350){
   row2.classList.remove("hiddenRight");
 }
 if(ypos > 650){
   row3.classList.remove("hiddenLeft");
 }
 if(ypos > 950){
   row4.classList.remove("hiddenRight");
 }
 if(ypos > 1150){
   row5.classList.remove("hiddenLeft");
 }
 if(ypos > 1400){
   row6.classList.remove("hiddenRight");
 }
 if(ypos > 1650){
   row7.classList.remove("hiddenLeft");
 }
 if(ypos > 1900){
   row8.classList.remove("hiddenRight");
 }
}
}

//assistive touch control/hide
var point = document.getElementById('point');
window.addEventListener("scroll", showTouch);
function showTouch(){
  var ypos = window.pageYOffset;
  var w = window.innerWidth;
  if(w > 700){
    if(ypos > 600){
      var yposOri = window.pageYOffset;
      window.addEventListener("scroll", function(){
        var ypos2 = window.pageYOffset;
        if(ypos2 < yposOri){
          point.classList.remove("touch-hidden");
        }
        else {
          point.className = "assistive-touch touch-hidden";
        }
        if(ypos<700){
          point.className = "assistive-touch touch-hidden";
        }
      });
    }
  }
}

//central-bar opacity changed by slider value
slider.oninput = function() {

  if(this.value > 60){
    left.className = "centerLeft3";
    right.className = "centerRight2";
  }
  if(this.value < 40){
    right.className = "centerRight3";
    left.className = "centerLeft2";
  }
}
