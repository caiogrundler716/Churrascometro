// Carne - 400 g por pessoa, se o churrasco durar mais de 6 horas 650g por pessoas.
//Cerveja - 1200 ml por pessoa, se o churrasco durar mais de 6 horas 2000 ml por pessoal.
//Refrigerante/agua - 1000 ml por pessoa, se o churrasco durar mais de 6 horas 1500 ml por pessoal.
//Criança equivale a 1/2 pessoa.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando....");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p class="item"><img src="carne.png" alt="" class="itemIcon">${qdtTotalCarne / 1000} kg de Carne </p>`
    resultado.innerHTML += `<p class="item"><img src="cerveja.png" alt="" class="itemIcon">${Math.ceil(qdtTotalCerveja / 355)} Latas de Cervejas</p>`
    resultado.innerHTML += `<p class="item"><img src="refri.png" alt="" class="itemIcon">${Math.ceil(qdtTotalBebidas / 2000)} Pet's  2 L de Bebidas </p>`



}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000;
    }
}