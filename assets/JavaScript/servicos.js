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