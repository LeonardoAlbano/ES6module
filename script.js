import { modal } from './modal.js'
import { AlertError } from './alert.js'

//variavéis pegar as informações do ID que esta no html
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



// 3 maneiras de criar e atribuir função a um evento
form.onsubmit = function (event) {
    event.preventDefault() //evite o padrão

    const weight = inputWeight.value //Pegar o valor de Weight que foi colocado no input
    const height = inputHeight.value //Pegar o valor de height que foi colocado no input


    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        AlertError.open()
        return; 
    }

    AlertError.close()

    const result = IMC(weight, height)// Constante criada para saber qual resultado entre weight e height
    const message = `Seu IMC é de ${result}` //Mensagem que aparecerá no modal nova

    modal.message.innerText = message//mensagem aparece 
    modal.open()

    // modalWrapper.classList.add('open')// abre o modal

}

function notNumber(value) {
    return isNaN(value) || value == ""
}

//Função que executa o calculo do IMC
function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

