var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// Ver mais e ver menos
var verMaisLink = document.getElementById("ver-mais-link");
var conteudoOculto = document.getElementById("conteudo-oculto");

verMaisLink.addEventListener("click", function (event) {
    event.preventDefault();
    if (conteudoOculto.style.display === "none") {
        conteudoOculto.style.display = "block";
        verMaisLink.textContent = "ver menos";
    } else {
        conteudoOculto.style.display = "none";
        verMaisLink.textContent = "ver mais";
    }
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