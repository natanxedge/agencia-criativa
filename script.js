document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       FORMULÁRIO DE CONTATO
    ========================= */

    const formulario = document.querySelector("#formContato");

    if (formulario) {

        const contato = new FormularioContato(formulario);

        formulario.addEventListener("submit", (evento) => {
            contato.enviar(evento);
        });

    }


    /* =========================
       MENU SANDUÍCHE
    ========================= */

    const menuSanduiche = document.querySelector("#menuSanduiche");
    const menu = document.querySelector("#menu");

    if (!menuSanduiche || !menu) {
        return;
    }

    menuSanduiche.addEventListener("click", () => {

        menuSanduiche.classList.toggle("ativo");
        menu.classList.toggle("ativo");

    });


    /* Fecha o menu ao clicar em um link */

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach((link) => {

        link.addEventListener("click", () => {

            menuSanduiche.classList.remove("ativo");
            menu.classList.remove("ativo");

        });

    });

});