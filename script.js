var corpo = document.getElementById("corpo"); 
var botao = document.getElementById("Botao");

botao.addEventListener("click", function() {
    var cor = window.getComputedStyle(corpo).backgroundColor;

    if (cor === "rgb(0, 0, 0)") { 
        corpo.style.background = white // branco
        botao.style.background = black // preto
    } else {
        corpo.style.background = "black"; // preto  
        botao.style.background = "white"; // branco 
    }
});