const menorValor = 1
const maiorValor = 1000
const numeroSecreto = geraNumeroAleatorio()

function geraNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-numero')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-numero')
elementoMaiorValor.innerHTML = maiorValor