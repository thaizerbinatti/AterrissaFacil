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