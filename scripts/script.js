document.addEventListener("DOMContentLoaded", () => {

    const conteudo = document.querySelector("#conteudo");

    const menuSanduiche =
        document.querySelector("#menuSanduiche");

    const menu =
        document.querySelector("#menu");

    const links =
        document.querySelectorAll("[data-section]");


    let paginaAtual = null;
    let trocando = false;


    /* =========================
       CONTEÚDO DAS PÁGINAS
    ========================= */

    const paginas = {

        home: `
            <section class="page page-home">

                <h1 class="page-home__title">
                    Transformamos ideias em resultados
                </h1>

                <p class="page-home__text">
                    Somos uma agência criativa especializada em soluções
                    digitais que aproximam marcas e pessoas.
                </p>

                <a
                    href="#contato"
                    data-section="contato"
                    class="page-home__button"
                >
                    Fale Conosco
                </a>

            </section>
        `,


        sobre: `
            <section class="page page-about">

                <h2 class="page__title">
                    Sobre Nós
                </h2>

                <p class="page__text">
                    A Agência Criativa nasceu com o propósito de ajudar
                    empresas a fortalecer sua presença digital por meio
                    de criatividade, estratégia e tecnologia.
                </p>

                <p class="page__text">
                    Nossos principais valores são inovação, compromisso,
                    transparência e foco nos resultados de nossos clientes.
                </p>

            </section>
        `,


        depoimentos: `
            <section class="page page-testimonials">

                <h2 class="page-testimonials__title">
                    Depoimentos
                </h2>


                <article class="page-testimonials__card">

                    <img
                        src="imagens/Sara Pichelli.png"
                        alt="Sara Pichelli"
                        class="page-testimonials__image"
                    >

                    <h3 class="page-testimonials__name">
                        Mariana Souza
                    </h3>

                    <p class="page-testimonials__text">
                        "A equipe conseguiu entender exatamente o que nossa
                        empresa precisava. O resultado superou nossas expectativas!"
                    </p>

                </article>


                <article class="page-testimonials__card">

                    <img
                        src="imagens/snyder.png"
                        alt="Snyder"
                        class="page-testimonials__image"
                    >

                    <h3 class="page-testimonials__name">
                        Carlos Mendes
                    </h3>

                    <p class="page-testimonials__text">
                        "Profissionais criativos, atenciosos e comprometidos.
                        Nossa presença digital melhorou muito."
                    </p>

                </article>


                <article class="page-testimonials__card">

                    <img
                        src="imagens/fiona.png"
                        alt="Fiona"
                        class="page-testimonials__image"
                    >

                    <h3 class="page-testimonials__name">
                        Juliana Oliveira
                    </h3>

                    <p class="page-testimonials__text">
                        "Foi uma experiência excelente. O atendimento e a
                        qualidade do trabalho fizeram toda a diferença."
                    </p>

                </article>

            </section>
        `,


        contato: `
            <section class="page page-contact">

                <h2 class="page__title">
                    Contato
                </h2>


                <div class="page-contact__info">

                    <p class="page__text">
                        <strong>Endereço:</strong>
                        Rua das Flores, 123 - Centro
                    </p>

                    <p class="page__text">
                        <strong>Telefone:</strong>
                        (22) 99999-9999
                    </p>

                    <p class="page__text">
                        <strong>E-mail:</strong>
                        natanxedge@outlook.com
                    </p>

                </div>


                <form
                    id="formContato"
                    class="contact-form"
                >

                    <label
                        for="nome"
                        class="contact-form__label"
                    >
                        Nome:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        class="contact-form__input"
                        required
                    >


                    <label
                        for="email"
                        class="contact-form__label"
                    >
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        class="contact-form__input"
                        required
                    >


                    <label
                        for="mensagem"
                        class="contact-form__label"
                    >
                        Mensagem:
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        placeholder="Digite sua mensagem"
                        class="contact-form__textarea"
                        required
                    ></textarea>


                    <button
                        type="submit"
                        class="contact-form__button"
                    >
                        Enviar Mensagem
                    </button>


                    <p
                        id="mensagemForm"
                        class="contact-form__message"
                    ></p>

                </form>

            </section>
        `

    };


    /* =========================
       MENU
    ========================= */

    function fecharMenu() {

        if (!menu || !menuSanduiche) {
            return;
        }

        menu.classList.remove(
            "site-header__menu--active"
        );

        menuSanduiche.classList.remove(
            "site-header__toggle--active"
        );

        menuSanduiche.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (menuSanduiche && menu) {

        menuSanduiche.addEventListener(
            "click",
            () => {

                const aberto =
                    menu.classList.toggle(
                        "site-header__menu--active"
                    );

                menuSanduiche.classList.toggle(
                    "site-header__toggle--active",
                    aberto
                );

                menuSanduiche.setAttribute(
                    "aria-expanded",
                    aberto
                );

            }
        );

    }


    /* =========================
       FORMULÁRIO
    ========================= */

    function configurarFormulario() {

        const formulario =
            document.querySelector("#formContato");


        if (!formulario) {
            return;
        }


        const contato =
            new FormularioContato(
                formulario
            );


        formulario.addEventListener(
            "submit",
            (evento) => {

                contato.enviar(evento);

            }
        );

    }


    /* =========================
       CARREGAR PÁGINA
    ========================= */

    function carregarPagina(id) {

        if (!paginas[id]) {
            id = "home";
        }


        conteudo.innerHTML =
            paginas[id];


        const pagina =
            conteudo.querySelector(".page");


        if (pagina) {

            pagina.classList.add(
                "page--active"
            );

        }


        paginaAtual = id;


        configurarFormulario();

    }


    /* =========================
       TROCAR PÁGINA
    ========================= */

    function trocarPagina(
        id,
        alterarHistorico = true
    ) {

        if (!paginas[id]) {
            return;
        }


        if (id === paginaAtual) {

            fecharMenu();

            return;

        }


        if (trocando) {
            return;
        }


        trocando = true;


        fecharMenu();


        /* SAÍDA */

        conteudo.classList.remove(
            "site-main__content--entering"
        );

        conteudo.classList.add(
            "site-main__content--leaving"
        );


        setTimeout(() => {

            /* TROCA O DOM */

            conteudo.innerHTML =
                paginas[id];


            const pagina =
                conteudo.querySelector(
                    ".page"
                );


            if (pagina) {

                pagina.classList.add(
                    "page--active"
                );

            }


            paginaAtual = id;


            configurarFormulario();


            /* PREPARA ENTRADA */

            conteudo.classList.remove(
                "site-main__content--leaving"
            );


            void conteudo.offsetWidth;


            /* ENTRADA */

            conteudo.classList.add(
                "site-main__content--entering"
            );


            if (alterarHistorico) {

                history.pushState(
                    {
                        pagina: id
                    },
                    "",
                    `#${id}`
                );

            }


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


        }, 400);


        setTimeout(() => {

            conteudo.classList.remove(
                "site-main__content--entering"
            );


            trocando = false;

        }, 800);

    }


    /* =========================
       LINKS DO HEADER
    ========================= */

    links.forEach((link) => {

        link.addEventListener(
            "click",
            (evento) => {

                evento.preventDefault();


                const id =
                    link.dataset.section;


                trocarPagina(id);

            }
        );

    });


    /* =========================
       LINKS DENTRO DO CONTEÚDO
    ========================= */

    conteudo.addEventListener(
        "click",
        (evento) => {

            const link =
                evento.target.closest(
                    "[data-section]"
                );


            if (!link) {
                return;
            }


            evento.preventDefault();


            const id =
                link.dataset.section;


            trocarPagina(id);

        }
    );


    /* =========================
       VOLTAR / AVANÇAR
    ========================= */

    window.addEventListener(
        "popstate",
        () => {

            const id =
                window.location.hash
                    .replace("#", "") ||
                "home";


            trocarPagina(
                id,
                false
            );

        }
    );


    /* =========================
       INICIALIZAÇÃO
    ========================= */

    const hash =
        window.location.hash
            .replace("#", "");


    const paginaInicial =
        paginas[hash]
            ? hash
            : "home";


    carregarPagina(
        paginaInicial
    );

});