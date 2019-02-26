//mailButton
var mail = document.getElementById('mailPage');
mail.addEventListener("click", openPage);
function openPage(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}

$(function() {
    setTimeout(function() {
        $('.hidden').removeClass('hidden');
    }, 100);
})();
