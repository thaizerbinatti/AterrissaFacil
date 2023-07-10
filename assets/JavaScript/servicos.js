// Incremento carrinho
var contador = 0;

var botoes = document.getElementsByClassName("incrementar-carrinho");
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        contador++;
        atualizarContador();
    });
}

function atualizarContador() {
    document.getElementById("contador").textContent = contador;
}

var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// Scroll categorias
var linksCategorias = document.getElementsByClassName('opcoesCategorias');
for (var i = 0; i < linksCategorias.length; i++) {
    linksCategorias[i].addEventListener('click', function (event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var categoriaHeight = document.querySelector('.categorias').offsetHeight;

            var targetOffset = targetElement.offsetTop - categoriaHeight - 100;

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
    }, 3000);

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

    const lista = document.querySelector('.list-unstyled');
    lista.appendChild(alerta);

    setTimeout(function () {
        alerta.remove();
    }, 3000);

}

function limparCampoEmail() {
    const campoEmail = document.getElementsByClassName('email-limpar')[0];
    campoEmail.value = '';
}



