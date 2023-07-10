// Efeito scroll revel

window.sr = ScrollReveal({ reset: true })

sr.reveal('.revel-1', { duration: 2000 })

sr.reveal('.revel-2', { duration: 2000 })

sr.reveal('.revel-3', { duration: 2000 })

sr.reveal('.revel-4', { duration: 2000 })

sr.reveal('.revel-5', { duration: 2000 })

// Botão volta ao topo

var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// Função redirecionar para a página
function redirecionarPagina() {
    var emailInput = document.getElementById("exampleDropdownFormEmail2");
    var senhaInput = document.getElementById("exampleDropdownFormPassword2");

    var email = emailInput.value;
    var senha = senhaInput.value;

    if (email !== "" && senha !== "") {
        var saudacao = "Olá, usuário";
        sessionStorage.setItem("mensagem", saudacao);
        window.location.href = "servicos.html";
    }
}

var formulario = document.querySelector(".dropdown-menu");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    redirecionarPagina();
});


