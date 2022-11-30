function mudarColor(numero){
    if(numero > 0){
        campoNumero.classList.remove("vermelho");
        campoNumero.classList.add("verde");
    }
    else if(numero < 0){
        campoNumero.classList.remove("verde");
        campoNumero.classList.add("vermelho");
    }
    else if(numero === 0){
        campoNumero.classList.remove("verde");
        campoNumero.classList.remove("vermelho");
    }
}

const botaoDiminuir = document.querySelector(".caixa__botoes--diminuir")
const botaoResetar = document.querySelector(".caixa__botoes--resetar");
const botaoAumentar = document.querySelector(".caixa__botoes--aumentar");
const campoNumero = document.querySelector(".caixa__nmr")

let numero = 0;

botaoDiminuir.addEventListener("click",function () {
    numero--;
    mudarColor(numero);
    campoNumero.textContent = numero;
})

botaoAumentar.addEventListener("click",function(){
    numero++;
    mudarColor(numero);
    campoNumero.textContent = numero;
})

botaoResetar.addEventListener("click",function(){
    numero = 0;
    mudarColor(numero);
    campoNumero.textContent = 0;
})
