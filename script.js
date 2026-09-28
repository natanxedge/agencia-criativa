document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       FORMULÁRIO
    ========================= */

    const formulario =
        document.querySelector("#formContato");


    if (formulario) {

        const contato =
            new FormularioContato(formulario);


        formulario.addEventListener(
            "submit",
            (evento) => {

                contato.enviar(evento);

            }
        );

    }


    /* =========================
       MENU SANDUÍCHE
    ========================= */

    const menuSanduiche =
        document.querySelector("#menuSanduiche");

    const menu =
        document.querySelector("#menu");


    if (menuSanduiche && menu) {

        menuSanduiche.addEventListener(
            "click",
            () => {

                menuSanduiche.classList.toggle(
                    "site-header__toggle--active"
                );

                menu.classList.toggle(
                    "site-header__menu--active"
                );


                const aberto =
                    menuSanduiche.classList.contains(
                        "site-header__toggle--active"
                    );


                menuSanduiche.setAttribute(
                    "aria-expanded",
                    aberto
                );

            }
        );

    }


    /* =========================
       PÁGINAS
    ========================= */

    const paginas =
        document.querySelectorAll(".page");


    const links =
        document.querySelectorAll("[data-section]");


    let paginaAtual =
        document.querySelector(".page--active");


    let trocando = false;


    /* =========================
       FECHAR MENU
    ========================= */

    function fecharMenu() {

        if (!menuSanduiche || !menu) {
            return;
        }


        menuSanduiche.classList.remove(
            "site-header__toggle--active"
        );

        menu.classList.remove(
            "site-header__menu--active"
        );


        menuSanduiche.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    /* =========================
       TROCAR PÁGINA
    ========================= */

    function trocarPagina(id) {

        const novaPagina =
            document.getElementById(id);


        if (!novaPagina) {
            return;
        }


        if (novaPagina === paginaAtual) {
            fecharMenu();
            return;
        }


        if (trocando) {
            return;
        }


        trocando = true;


        fecharMenu();


        /* =========================
           SAÍDA DA PÁGINA ATUAL
        ========================= */

        paginaAtual.classList.remove(
            "page--active"
        );

        paginaAtual.classList.add(
            "page--leaving"
        );


        /* =========================
           ENTRADA DA NOVA PÁGINA
        ========================= */

        setTimeout(() => {

            paginaAtual.classList.remove(
                "page--leaving"
            );


            novaPagina.classList.add(
                "page--entering"
            );


            paginaAtual =
                novaPagina;


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        }, 450);


        /* =========================
           FINALIZA ANIMAÇÃO
        ========================= */

        setTimeout(() => {

            novaPagina.classList.remove(
                "page--entering"
            );

            novaPagina.classList.add(
                "page--active"
            );


            trocando = false;


        }, 900);

    }


    /* =========================
       LINKS DO MENU
    ========================= */

    links.forEach((link) => {

        link.addEventListener(
            "click",
            (evento) => {

                evento.preventDefault();


                const id =
                    link.dataset.section;


                if (!document.getElementById(id)) {
                    return;
                }


                trocarPagina(id);


                history.pushState(
                    { pagina: id },
                    "",
                    `#${id}`
                );

            }
        );

    });


    /* =========================
       VOLTAR / AVANÇAR
    ========================= */

    window.addEventListener(
        "popstate",
        () => {

            const id =
                window.location.hash.replace("#", "") ||
                "home";


            trocarPagina(id);

        }
    );


    /* =========================
       PÁGINA INICIAL
    ========================= */

    const hash =
        window.location.hash.replace("#", "");


    if (hash) {

        const paginaInicial =
            document.getElementById(hash);


        if (paginaInicial) {

            paginas.forEach((pagina) => {

                pagina.classList.remove(
                    "page--active"
                );

            });


            paginaInicial.classList.add(
                "page--active"
            );


            paginaAtual =
                paginaInicial;

        }

    }

});