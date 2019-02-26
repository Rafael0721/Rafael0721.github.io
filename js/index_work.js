var mail = document.getElementById('mailPage');
var slider = document.getElementById("myRange");
var right = document.getElementById('right');
var left = document.getElementById('left');
var s1 = document.getElementById('1');
var s2 = document.getElementById('2');
var s3 = document.getElementById('3');
var s4 = document.getElementById('4');
var s5 = document.getElementById('5');
var s6 = document.getElementById('6');
var s7 = document.getElementById('7');
var s8 = document.getElementById('8');

//mailButton
mail.addEventListener("click", openPage);
function openPage(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
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

//classify blocks by central classes(design/product)
left.addEventListener("mousedown", pale1);
left.addEventListener("mouseup", pale2);

function pale1(){
  s1.className = "paleBlock";
  s3.className = "paleBlock";
  s4.className = "paleBlock";
  s7.className = "paleBlock";
}

function pale2(){
  s1.className = "block";
  s3.className = "block";
  s4.className = "block";
  s7.className = "block";
}

right.addEventListener("mousedown", pale3);
right.addEventListener("mouseup", pale4);
function pale3(){
  s2.className = "paleBlock";
  s5.className = "paleBlock";
  s6.className = "paleBlock";
  s8.className = "paleBlock";
}

function pale4(){
  s2.className = "block";
  s5.className = "block";
  s6.className = "block";
  s8.className = "block";
}

//opening animation
$(function() {

    setTimeout(function() {
        $('.fly-in-block1').removeClass('hidden');
    }, 100);

    setTimeout(function() {
        $('.fly-in-block2').removeClass('hidden');
    }, 100);

    setTimeout(function() {
        $('.central-bar').removeClass('hidden');
    }, 500);

});
