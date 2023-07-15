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