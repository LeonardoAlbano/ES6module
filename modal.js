//Variaveis do MODAL
export const modal = {

    //propriedade e valores
    wrapper: document.querySelector('.modal-wrapper'), //abrir e fechar modal
    message: document.querySelector('.modal .title span'), //mensagem 
    btnClose: document.querySelector('.modal button.close'),
    
    //short hander
    open() {
        modal.wrapper.classList.add('open')
    },
    close() {
        modal.wrapper.classList.remove('open')
    }
}

//fechar o modal após o resultado aparecer na tela
modal.btnClose.onclick = () => {
    // modalWrapper.classList.remove('open') //fecha o modal
    modal.close()
}


// quando clicar no ESC ele fecha o modal
window.addEventListener('keydown', cliclKeydown)

function cliclKeydown(event) {
    if (event.key === 'Escape') {
        modal.close()
    }
}