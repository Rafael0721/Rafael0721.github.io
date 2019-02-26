//mailButton
var mail = document.getElementById('mailPage');
mail.addEventListener("click", openPage);
function openPage(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}

//head-img button effect
var introImg = document.getElementById('introImg');
var imgL = document.getElementById('img-SM-L');
var imgR = document.getElementById('img-SM-R');

introImg.addEventListener("click", showIdea);
function showIdea(){
  if(imgL.className === "head-img-SM" || imgR.className === "head-img-SM"){
    imgL.classList.add("to-left");
    imgR.classList.add("to-right");
  }
  else{
    imgL.className = "head-img-SM";
    imgR.className = "head-img-SM";
  }
}

//lower time line effct
var y17 = document.getElementById('2017');
var y16 = document.getElementById('2016');
var y15 = document.getElementById('2015');
var y14 = document.getElementById('2014');
var y13 = document.getElementById('2013');
var y12 = document.getElementById('2012');
var y10 = document.getElementById('2010');
var edu1 = document.getElementById('edu1');
var edu2 = document.getElementById('edu2');

var p19 = document.getElementById('point19');
var p17 = document.getElementById('point17');
var p16 = document.getElementById('point16');
var p15 = document.getElementById('point15');
var p14 = document.getElementById('point14');
var p13 = document.getElementById('point13');
var p12 = document.getElementById('point12');
var p10 = document.getElementById('point10');

y17.addEventListener("mouseenter", function(){
  p19.classList.add("point-dis");
  p17.classList.add("point-dis");

});
y17.addEventListener("mouseleave", function(){
  p19.classList.remove("point-dis");
  p17.classList.remove("point-dis");
});

y16.addEventListener("mouseenter", function(){
  p16.classList.add("point-dis");

});
y16.addEventListener("mouseleave", function(){
  p16.classList.remove("point-dis");
});

y15.addEventListener("mouseenter", function(){
  p15.classList.add("point-dis");

});
y15.addEventListener("mouseleave", function(){
  p15.classList.remove("point-dis");
});

y14.addEventListener("mouseenter", function(){
  p14.classList.add("point-dis");

});
y14.addEventListener("mouseleave", function(){
  p14.classList.remove("point-dis");
});

y13.addEventListener("mouseenter", function(){
  p13.classList.add("point-dis");

});
y13.addEventListener("mouseleave", function(){
  p13.classList.remove("point-dis");
});

y12.addEventListener("mouseenter", function(){
  p12.classList.add("point-dis");

});
y12.addEventListener("mouseleave", function(){
  p12.classList.remove("point-dis");
});

y10.addEventListener("mouseenter", function(){
  p10.classList.add("point-dis");

});
y10.addEventListener("mouseleave", function(){
  p10.classList.remove("point-dis");
});

edu1.addEventListener("mouseenter", function(){
  p17.classList.add("point-dis");
  p19.classList.add("point-dis");

});
edu1.addEventListener("mouseleave", function(){
  p17.classList.remove("point-dis");
  p19.classList.remove("point-dis");
});

edu2.addEventListener("mouseenter", function(){
  p10.classList.add("point-dis");
  p12.classList.add("point-dis");
  p13.classList.add("point-dis");
  p14.classList.add("point-dis");
  p15.classList.add("point-dis");
  p16.classList.add("point-dis");
  p17.classList.add("point-dis");

});
edu2.addEventListener("mouseleave", function(){
  p10.classList.remove("point-dis");
  p12.classList.remove("point-dis");
  p13.classList.remove("point-dis");
  p14.classList.remove("point-dis");
  p15.classList.remove("point-dis");
  p16.classList.remove("point-dis");
  p17.classList.remove("point-dis");
});

//opening animation
$(function() {
    setTimeout(function() {
        $('.show').removeClass('hidden');
    }, 100);
})();
