const srcImgs = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"];
const containerCartas = document.querySelector(".container-cartas");

quantasCartas();

function quantasCartas(){
    let numeroCartas = prompt("Qual o número de cartas? Precisa ser um número par para iniciar o jogo!");

    while(numeroCartas%2!=0){
        numeroCartas = prompt("Qual o número de cartas? Precisa ser um número par para iniciar o jogo!");
    }

    pegarBaralho(numeroCartas);
    adicionarCartas(numeroCartas);
}

function pegarBaralho(numerodecartas){

    let cartas = [];

    for( let i = 0; i<numerodecartas/2; i++){
        cartas.push(srcImgs[i]);
        cartas.push(srcImgs[i]);
    }

    console.log(cartas);
    // cartas.sort(() => Math.random() - 0.5);
    // console.log(cartas);
}

function adicionarCartas(numerodecartas){
    

    
}