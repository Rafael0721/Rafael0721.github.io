var mail = document.getElementById('mailPage');
mail.addEventListener("click", openPage);

function openPage(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}

var box = document.getElementById('centerBox');
setTimeout(function(){
  box.className = "centerBoxIn";
}, 750)

$(function() {
    setTimeout(function() {
        $('.hidden').removeClass('hidden');
    }, 250);
})();
