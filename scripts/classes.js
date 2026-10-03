class FormularioContato {

    constructor(formulario) {

        this.formulario =
            formulario;

        this.mensagem =
            document.querySelector("#mensagemForm");

    }


    enviar(evento) {

        evento.preventDefault();


        const nome =
            document.querySelector("#nome").value;

        const email =
            document.querySelector("#email").value;

        const mensagem =
            document.querySelector("#mensagem").value;


        if (
            !nome ||
            !email ||
            !mensagem
        ) {

            this.mensagem.textContent =
                "Preencha todos os campos.";

            return;

        }


        const assunto =
            encodeURIComponent(
                "Contato pelo site"
            );


        const corpo =
            encodeURIComponent(
                `Nome: ${nome}\n\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
            );


        window.location.href =
            `mailto:natanxedge@outlook.com?subject=${assunto}&body=${corpo}`;


        this.mensagem.textContent =
            "Abrindo seu aplicativo de e-mail...";

    }

}