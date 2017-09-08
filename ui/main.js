console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML="NEW VALUE";

var img=document.getElementById("madi");
img.onclick=function(){
    var interval = setInterval(moveRight,100);
};
var margintLeft=0;
function moveRight(){
    marginLeft=marginLeft-10;
    img.style.marginLeft=marginLeft + "px";
}