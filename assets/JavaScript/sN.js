var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// Scroll Categorias
var linksCategorias = document.getElementsByClassName('opcoesCategorias');
for (var i = 0; i < linksCategorias.length; i++) {
    linksCategorias[i].addEventListener('click', function (event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var categoriaHeight = document.querySelector('.categorias').offsetHeight;

            var targetOffset = targetElement.offsetTop - categoriaHeight - 120;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
}