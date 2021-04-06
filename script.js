const srcImgs = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"];
const containerCartas = document.querySelector(".container-cartas");

quantasCartas();

function quantasCartas(){
    let numeroCartas = prompt("Qual o número de cartas? Precisa ser um número par para iniciar o jogo!");

    while(numeroCartas%2!=0){
        numeroCartas = prompt("Qual o número de cartas? Precisa ser um número par para iniciar o jogo!");
    }

    adicionarCartas(numeroCartas);
}

function adicionarCartas(numerodecartas){
    
    
}