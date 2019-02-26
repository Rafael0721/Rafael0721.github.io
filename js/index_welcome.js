var cover = document.getElementById('cover');
var prePic = document.getElementById('preload');
var text = document.getElementById('text');

//preload animation
setTimeout(function(){
  prePic.classList.remove("preload-hidden");
  text.classList.remove("text-delay");
}, 50);
setTimeout(function(){
  cover.classList.add("cover-move1");
}, 100);
setTimeout(function(){
  cover.classList.add("cover-move2");
}, 1500);
setTimeout(function(){
  prePic.classList.add("preload-over");
}, 2800);

$(function() {
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 3900);

    setTimeout(function() {
        $('.btnGO').removeClass('hidden');
    }, 5400);
})();
