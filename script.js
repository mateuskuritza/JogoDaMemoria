const srcImgs = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"];
const containerCartas = document.querySelector(".container-cartas");

quantasCartas();

function quantasCartas(){
    let numeroCartas = prompt("Qual o número de cartas? Precisa ser um número par para iniciar o jogo!");

    while(numeroCartas%2!=0 | numeroCartas>14){
        numeroCartas = prompt("Qual o número de cartas? Número par menor que 15");
    }

    pegarBaralho(numeroCartas);
}

function pegarBaralho(numerodecartas){

    cartas = [];

    // pega os pares
    for( let i = 0; i<numerodecartas/2; i++){
        cartas.push(srcImgs[i]);
        cartas.push(srcImgs[i]);
    }

    //embaralha
    cartas.sort(() => Math.random() - 0.5);

    adicionarCartas();
}

function adicionarCartas(){
    
    for(let i=0; i<cartas.length; i++){

        containerCartas.innerHTML+=`
        <div class="carta-virada none">
            <img src="${cartas[i]}" alt="Parrot da carta virada">
        </div>
        <div class="carta">
            <img onclick="virarCarta(this);" src="imgs/front.png" alt="Parrot atrás da carta">
        </div>
        `
    }
    
}