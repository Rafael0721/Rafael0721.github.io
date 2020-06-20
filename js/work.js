// top-img clock automatic img change
var imgSet = document.getElementsByClassName('img');
    dotSet = document.getElementsByClassName('dot');

var num = 1;
var t;
// 讓第一張圖多一秒
t = setTimeout(showSlides, 1000);

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


// scrolling 事件
var workBoxes = document.querySelectorAll('.workBox');
window.addEventListener("scroll", checkBox);

function checkBox(){
  for(var i=0; i<workBoxes.length; i++){

    var ypos = window.pageYOffset;
        yheight = window.innerHeight;
        boxHeight = workBoxes[i].offsetTop;

    if(ypos > boxHeight-yheight*0.7){
      workBoxes[i].classList.remove("up-down-moved");
    } else{
      workBoxes[i].classList.add("up-down-moved");
    }
  }
}

// 3D transformation
for(item of workBoxes){
  let imgBox = item.children[0];
  imgBox.addEventListener('mousemove', () => {
    imgBox.style.transition = ``;
    let divX = imgBox.offsetLeft;
    let divY = imgBox.offsetTop;
    let width = imgBox.offsetWidth;
    let height = imgBox.offsetHeight;

    let currentX = window.pageXOffset + window.event.clientX;
    let currentY = window.pageYOffset + window.event.clientY;

    let resultX = remap(divX, divX + width, -3, 3, currentX);
    let resultY = remap(divY, divY + height, -3, 3, currentY);

    imgBox.style.transform = `perspective(300px) rotateX(${resultX}deg) rotateY(${resultY}deg)`;
  });

  item.addEventListener('mouseout', () => {
    imgBox.style.transform = `perspective(300px) rotateX(0deg) rotateY(0deg)`;
    imgBox.style.transition = `all 0.35s ease-out`;
  });
}

let remap = (init1, end1, init2, end2, num) => {
  let domain1 = end1 - init1;
  let domain2 = end2 - init2;

  let ratio = domain2 / domain1;

  return init2 + ((num-init1)*ratio);
}

// mailButton
document.getElementById('mailPage').addEventListener("click", openMail);
function openMail(){
  window.open("mailto:ytchen0721@gmail.com", "Rafael's mail");
}
