var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// Scroll categorias
const opcoesCategorias = document.getElementsByClassName('opcoesCategorias');
for (let i = 0; i < opcoesCategorias.length; i++) {
    opcoesCategorias[i].addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
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
    mensagem.textContent = 'Enviado com sucesso';
    mensagem.style.color = 'green';
    formulario.appendChild(mensagem);
}

// Formulário do projeto social
document.getElementById('enviar-email').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    var email = document.getElementById('email').value;
    var mensagemDiv = document.getElementById('mensagem');

    if (email !== '') {
        var mensagem = 'Obrigada, aguarde o link do formulário no seu email.';
        mensagemDiv.innerHTML = mensagem;
    }
});



