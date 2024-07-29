function changeMessage(){
    var newText = Math.floor(Math.random()*10);
    var textEl = document.getElementById("eight");
    textEl.textContent = newText;

}

var butto = document.getElementById("button");
butto.addEventListener("click",function(){
    changeMessage();
})