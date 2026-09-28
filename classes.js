class FormularioContato {

    constructor(formulario) {
        this.formulario = formulario;

        this.nome = formulario.querySelector("#nome");
        this.email = formulario.querySelector("#email");
        this.mensagem = formulario.querySelector("#mensagem");
        this.mensagemForm = formulario.querySelector("#mensagemForm");

        this.destinatario = "natanxedge@outlook.com";
    }

    validar() {

        if (this.nome.value.trim() === "") {
            return "Digite seu nome.";
        }

        if (this.email.value.trim() === "") {
            return "Digite seu e-mail.";
        }

        if (!this.email.validity.valid) {
            return "Digite um e-mail válido.";
        }

        if (this.mensagem.value.trim() === "") {
            return "Digite uma mensagem.";
        }

        return null;
    }

    enviar(evento) {

        evento.preventDefault();

        const erro = this.validar();

        if (erro) {
            this.mensagemForm.textContent = erro;
            return;
        }

        const assunto = `Contato pelo site - ${this.nome.value}`;

        const corpo =
            `Nome: ${this.nome.value}\n` +
            `E-mail: ${this.email.value}\n\n` +
            `Mensagem:\n${this.mensagem.value}`;

        const linkEmail =
            `mailto:${this.destinatario}` +
            `?subject=${encodeURIComponent(assunto)}` +
            `&body=${encodeURIComponent(corpo)}`;

        this.mensagemForm.textContent =
            "Abrindo seu aplicativo de e-mail...";

        window.location.href = linkEmail;

        this.formulario.reset();
    }
}