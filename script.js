const srcImgs = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"];
const containerCartas = document.querySelector(".container-cartas");
quantasCartas();


function quantasCartas(){
    acertos = 0;
    numeroCartas = prompt("Qual o número de cartas? Número par de 4 a 14");

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
            <div class="carta-verso">
                <img src="imgs/front.png" alt="Parrot atrás da carta">
            </div>
        </div>
        `
    }
    
}

function virarCarta(element){

    if(element.querySelector(".carta-acertada") == undefined){

        virarCima(element);

        const cartasViradas = document.querySelectorAll(".carta-frente.virado");

        if(cartasViradas.length == 2){
            if(cartasViradas[0].innerHTML == cartasViradas[1].innerHTML){
                cartasViradas[0].classList.add("carta-acertada");
                cartasViradas[1].classList.add("carta-acertada");
                cartasViradas[0].classList.remove("virado");
                cartasViradas[1].classList.remove("virado");
                acertos++;
            }else{
                virarBaixo(cartasViradas[0].parentNode);
                virarBaixo(cartasViradas[1].parentNode);
            }
        }

        console.log(acertos);
    }
}

function virarBaixo(element){

    const cartaFrente = element.querySelector(".carta-frente");
    const cartaVerso = element.querySelector(".carta-verso");
    cartaFrente.style.transform = "rotateY(180deg)";
    cartaFrente.classList.remove("virado");
    cartaVerso.style.transform = "rotateY(0deg)";

}

function virarCima(element){

    const cartaFrente = element.querySelector(".carta-frente");
    const cartaVerso = element.querySelector(".carta-verso");
    cartaFrente.style.transform = "rotateY(0deg)";
    cartaFrente.classList.add("virado");
    cartaVerso.style.transform = "rotateY(-180deg)";
}
