const srcImgs = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"];
const containerCartas = document.querySelector(".container-cartas");
const cronometro = document.querySelector(".cronometro");
let cartaVirando = false;
let IdInterval=0;
quantasCartas();

function iniciarCronometro(){
    segundosPassados++;
    cronometro.innerHTML = segundosPassados;
}

function quantasCartas(){
    containerCartas.innerHTML= null;
    jogadas = 0;
    acertos = 0;
    segundosPassados = 0;
    cronometro.innerHTML = segundosPassados;
    clearInterval(IdInterval);
    
    numeroCartas = prompt("Qual o número de cartas? Número par de 4 a 14");
    while(numeroCartas%2!=0 | numeroCartas>14 | numeroCartas<4){
        numeroCartas = prompt("Qual o número de cartas? Número par de 4 a 14");
    }

    IdInterval = setInterval(iniciarCronometro ,1000);
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
        <ul class="carta-selecionada" onclick="virarCarta(this);">
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


function virarCarta(element){
    if(element.querySelector(".carta-acertada") == undefined && cartaVirando == false){
        cartaVirando = true;
        jogadas++;
        virarCima(element);

        const cartasViradas = document.querySelectorAll(".carta-frente.virado");

        // conferir se são iguais
        if(cartasViradas.length == 2){
            if(cartasViradas[0].innerHTML == cartasViradas[1].innerHTML){
                for(let i=0; i<2; i++){
                    cartasViradas[i].classList.add("carta-acertada");
                    cartasViradas[i].classList.remove("virado");
                }
                acertos+=2;
            } else{
                setTimeout(function(){
                    for(let i=0; i<2; i++){
                        virarBaixo(cartasViradas[i].parentNode);
                    }
                }, 1000);
            }
        }

        if(acertos == numeroCartas){
            setTimeout(acertouTodas,50);
        }

        // esperar a carta terminar de virar antes de poder virar outra
        setTimeout(() => { cartaVirando = false;},1000);

    }
}

function acertouTodas(){
    alert(`Você ganhou em ${jogadas} jogadas com ${segundosPassados} segundos!`);
    const pergunta = prompt("Quer jogar mais uma vez? Se quer, digite sim");
    if(pergunta.toLowerCase() == "sim"){
        quantasCartas();
    }else{
        containerCartas.innerHTML= null;
        segundosPassados = 0;
        cronometro.innerHTML = segundosPassados;
        clearInterval(IdInterval);
        setTimeout(alert, 50, "Até a próxima!");
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
