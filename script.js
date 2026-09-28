document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       FORMULÁRIO DE CONTATO
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

                menuSanduiche.classList.toggle("ativo");

                menu.classList.toggle("ativo");


                const aberto =
                    menuSanduiche.classList.contains("ativo");


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
        document.querySelectorAll(".pagina");


    const links =
        document.querySelectorAll("[data-section]");


    let paginaAtual =
        document.querySelector(".pagina.ativa");


    let trocando = false;


    /* =========================
       TROCAR PÁGINA
    ========================= */

    function trocarPagina(id) {

        if (trocando) {
            return;
        }


        const novaPagina =
            document.getElementById(id);


        if (!novaPagina) {
            return;
        }


        if (novaPagina === paginaAtual) {
            return;
        }


        trocando = true;


        /* =========================
           FECHAR MENU MOBILE
        ========================= */

        if (menuSanduiche && menu) {

            menuSanduiche.classList.remove("ativo");

            menu.classList.remove("ativo");

            menuSanduiche.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        /* =========================
           FADE OUT + SLIDE OUT
        ========================= */

        paginaAtual.classList.remove("ativa");

        paginaAtual.classList.add("saindo");


        /* =========================
           FADE IN + SLIDE IN
        ========================= */

        setTimeout(() => {

            paginaAtual.classList.remove("saindo");

            novaPagina.classList.add("entrando");

            paginaAtual = novaPagina;


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        }, 450);


        /* =========================
           FINALIZA ANIMAÇÃO
        ========================= */

        setTimeout(() => {

            novaPagina.classList.remove("entrando");

            novaPagina.classList.add("ativa");

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


                trocarPagina(id);


                history.pushState(
                    null,
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
       ABRIR PELO HASH
    ========================= */

    const hash =
        window.location.hash.replace("#", "");


    if (hash) {

        const paginaInicial =
            document.getElementById(hash);


        if (paginaInicial) {

            paginas.forEach((pagina) => {

                pagina.classList.remove("ativa");

            });


            paginaInicial.classList.add("ativa");

            paginaAtual = paginaInicial;

        }

    }

});