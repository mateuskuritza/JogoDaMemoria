const srcImgs = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"];
const containerCartas = document.querySelector(".container-cartas");
cartaAnterior = 0;

quantasCartas();

function quantasCartas(){
    let numeroCartas = prompt("Qual o número de cartas? Número par de 4 a 14");

    while(numeroCartas%2!=0 | numeroCartas>14 | numeroCartas<4){
        numeroCartas = prompt("Qual o número de cartas? Número par de 4 a 14");
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
        <div class="carta-selecionada" onclick="virarCarta(this);">
            <div class="carta-frente">
                <img src=${cartas[i]} alt="Parrot da carta virada">
            </div>
            <div class="carta-verso virado">
                <img src="imgs/front.png" alt="Parrot atrás da carta">
            </div>
        </div>
        `
    }
    
}

function virarCarta(element){
    
    inverterCarta(element);

    let cartasSelecionadas = document.querySelectorAll(".carta-frente.virado").length

    if( cartasSelecionadas == 2){
        if(element.innerHTML == cartaAnterior.innerHTML){
            const deixarVirada = element.querySelector(".carta-frente");
            const deixarViradaAntiga = cartaAnterior.querySelector(".carta-frente");
            deixarVirada.classList.add("virado-permanente");
            deixarViradaAntiga.classList.add("virado-permanente");
            deixarVirada.classList.remove("virado");
            deixarViradaAntiga.classList.remove("virado");
        }else{
            // adicionar o tempo aqui
            inverterCarta(element);
            inverterCarta(cartaAnterior);
        }
        cartaAnterior=0;
    }


    cartaAnterior = element;

}

function esperarVirar(primeira,segunda){
    
}
function inverterCarta(element){

    // if para não inverter as já "acertadas"
    if (element.querySelector(".virado-permanente") == undefined){
        const cartaFrente = element.querySelector(".carta-frente");
        const cartaVerso = element.querySelector(".carta-verso");
        cartaFrente.classList.toggle("virado");
        cartaVerso.classList.toggle("virado");
    }

}