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
            <div class="carta-virada">
                <img src=${cartas[i]} alt="Parrot da carta virada">
            </div>
            <div class="carta ativo">
                <img src="imgs/front.png" alt="Parrot atrás da carta">
            </div>
        </div>
        `
    }
    
}

function virarCarta(element){

    inverterCarta(element);


    if(document.querySelectorAll(".carta-virada.ativo").length==2){
        if(element.innerHTML == cartaAnterior.innerHTML){
            const deixarVirada = element.querySelector(".carta-virada");
            const deixarViradaAntiga = cartaAnterior.querySelector(".carta-virada");
            deixarVirada.classList.add("ativo-permanente");
            deixarViradaAntiga.classList.add("ativo-permanente");
            deixarVirada.classList.remove("ativo");
            deixarViradaAntiga.classList.remove("ativo");
        }else{
            inverterCarta(element);
            inverterCarta(cartaAnterior);
        }
        cartaAnterior=0;
    }


    cartaAnterior = element;

}

function inverterCarta(element){
    const cartaFrente = element.querySelector(".carta-virada");
    const cartaVerso = element.querySelector(".carta");
    cartaFrente.classList.toggle("ativo");
    cartaVerso.classList.toggle("ativo");
}