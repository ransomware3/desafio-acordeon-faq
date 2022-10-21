const perguntas = document.getElementsByClassName('perguntas')
const textoResposta = document.querySelectorAll('.texto-resposta')
const seta = document.querySelectorAll('.seta')

textoResposta.forEach((item, indice) => {
    const pergunta = perguntas[indice]

    function mostrarItemAtivo(){
        textoResposta.forEach((item) => item.classList.add('esconder'))
        seta.forEach((item) => item.classList.remove('seta-aberta'))
        textoResposta[indice].classList.remove('esconder')
        seta[indice].classList.remove('seta-fehada')
        seta[indice].classList.add('seta-aberta')
    }

    function esconderItemInativo(){
        textoResposta[indice].classList.add('esconder')
        seta[indice].classList.add('seta-fehada')
        seta[indice].classList.remove('seta-aberta')
    }

    pergunta.addEventListener('click', () => {

        if(textoResposta[indice].classList.contains('esconder') && seta[indice].classList.contains('seta-fechada')){ 
            mostrarItemAtivo()
        }else{
            esconderItemInativo()
        }
    })
})