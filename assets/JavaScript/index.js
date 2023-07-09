// Incremento carrinho

var contador = 0;

var botoes = document.getElementsByClassName("incrementar-carrinho");
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
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

function redirecionarPagina() {
    var emailInput = document.getElementBy("exampleDropdownFormEmail2");
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

