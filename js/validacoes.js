function verificaSeEValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
            <h2>Game Over!!</h2>
            <h3>Pressione o botao para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
        }
        elementoChute.innerHTML += '<div>Valor Invalido</div>'

        return
    }

    if (numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor Invalido: fale um numero entre ${menorValor} e ${maiorValor}</div>
        `

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-sharp fa-solid fa-angle-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-sharp fa-solid fa-angle-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
    
})