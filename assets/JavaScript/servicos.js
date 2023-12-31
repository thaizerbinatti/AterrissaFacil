// Scroll categorias
var linksCategorias = document.getElementsByClassName('opcoesCategorias');
for (var i = 0; i < linksCategorias.length; i++) {
    linksCategorias[i].addEventListener('click', function (event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var categoriaHeight = document.querySelector('.categorias').offsetHeight;

            var targetOffset = targetElement.offsetTop - categoriaHeight - 130;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
}

//Mensagem formulario
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    mostrarMensagemEnviado();
});

function mostrarMensagemEnviado() {
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Enviado com sucesso! Aguarde mais informações por email.';
    mensagem.className = 'alert alert-success mt-2';
    formulario.appendChild(mensagem);

    setTimeout(function () {
        mensagem.remove();
    }, 4000);

    formulario.reset();
}

// Formulário do projeto social
const btnEnviar = document.getElementById('enviar-email');
btnEnviar.addEventListener('click', function (e) {
    e.preventDefault();
    mostrarAlertaEnviado();
    limparCampoEmail();
});

function mostrarAlertaEnviado() {
    const alerta = document.createElement('div');
    alerta.className = 'alert alert-success mt-2';
    alerta.textContent = 'Obrigada! Aguarde em seu email os envios dos formulários!';

    const lista = document.querySelector('.email-list');
    lista.appendChild(alerta);

    setTimeout(function () {
        alerta.remove();
    }, 4000);

}

function limparCampoEmail() {
    const campoEmail = document.getElementsByClassName('email-limpar')[0];
    campoEmail.value = '';
}



