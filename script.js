const srcImgs = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"];
const containerCartas = document.querySelector(".container-cartas");
const cronometro = document.querySelector(".cronometro");
let cartaVirando = false;
let idInterval=0;
let cartas = [];
let cartasViradas = document.querySelectorAll(".carta-frente.virado");

quantasCartas();

function contadorCronometro(){
    segundosPassados++;
    cronometro.innerHTML = segundosPassados;
}

function quantasCartas(){
    resetarValores();
    
    numeroCartas = parseInt(prompt("Qual o número de cartas? Número par de 4 a 14"));
    while(numeroCartas%2 !== 0 || numeroCartas > 14 || numeroCartas < 4){
        numeroCartas = prompt("Qual o número de cartas? Número par de 4 a 14");
    }

    idInterval = setInterval(contadorCronometro ,1000);
    pegarBaralho(numeroCartas);
}

function pegarBaralho(numerodecartas){
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
        <ul class="carta-selecionada" onclick="jogo(this);">
            <li class="carta-frente">
                <img src=${cartas[i]} alt="Parrot da carta virada">
            </li>
            <li class="carta-verso">
                <img src="imgs/front.png" alt="Parrot atrás da carta">
            </li>
        </ul>
        `
    }
}


function jogo(element){
    if(element.querySelector(".carta-acertada") == undefined && cartaVirando === false){
        cartaVirando = true;
        jogadas++;
        virarCarta(element,"cima");

        cartasViradas = document.querySelectorAll(".carta-frente.virado");

        if(cartasViradas.length === 2){
            conferirPar();
        }

        if(acertos === numeroCartas){
            setTimeout(acertouTodas,50);
        }

        // esperar a carta terminar de virar antes de poder virar outra
        setTimeout(() => { cartaVirando = false;},1000);
    }
}

function acertouTodas(){
    alert(`Você ganhou em ${jogadas} jogadas com ${segundosPassados} segundos!`);
    const pergunta = prompt("Quer jogar mais uma vez? Se quer, digite sim");
    if(pergunta.toLowerCase() === "sim"){
        quantasCartas();
    }else{
        resetarValores();
        setTimeout(alert, 50, "Até a próxima!");
    }
}

function virarCarta(element,sentido){

    const cartaFrente = element.querySelector(".carta-frente");
    const cartaVerso = element.querySelector(".carta-verso");

    if(sentido === "cima"){
    cartaFrente.style.transform = "rotateY(0deg)";
    cartaFrente.classList.add("virado");
    cartaVerso.style.transform = "rotateY(-180deg)";
    }

    if(sentido === "baixo"){
        cartaFrente.style.transform = "rotateY(180deg)";
        cartaFrente.classList.remove("virado");
        cartaVerso.style.transform = "rotateY(0deg)";
    }
}

function resetarValores(){
    containerCartas.innerHTML= null;
    cartas = [];
    jogadas = 0;
    acertos = 0;
    segundosPassados = 0;
    cronometro.innerHTML = segundosPassados;
    clearInterval(idInterval);
}

function conferirPar(){
    if(cartasViradas[0].innerHTML === cartasViradas[1].innerHTML){
        for(let i=0; i<2; i++){
            cartasViradas[i].classList.add("carta-acertada");
            cartasViradas[i].classList.remove("virado");
        }
        acertos+=2;
    }else{
        setTimeout(function(){
            for(let i=0; i<2; i++){
                virarCarta(cartasViradas[i].parentNode,"baixo");
            }
        }, 1000);
    }
}

// dark theme
const botaoTema = document.querySelectorAll("alterar-tema");
function alterarTema(){
    const tudo = document.querySelector("body");
    tudo.classList.toggle("dark-theme");

    for(let i = 0; i<botaoTema.length; i++){
        botaoTema[i].classList.toggle("none");
    }
    
}