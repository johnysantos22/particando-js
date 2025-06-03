class Usuario {
    constructor(nome, telefone, email, endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }

    verificarDados() {
        return this.nome && this.telefone && this.email && this.endereco;
    }

    verificarMensagem() {
        document.getElementById('mensagem').textContent = 'Obrigado, dados enviados!';
    }

    limparFormulario() {
        document.getElementById('nome').value = "";
        document.getElementById('telefone').value = "";
        document.getElementById('email').value = "";
        document.getElementById('endereco').value = "";
    }
}

function enviarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const endereco = document.getElementById('endereco').value.trim();

    const usuario = new Usuario(nome, telefone, email, endereco);

    if (usuario.verificarDados()) {
        usuario.verificarMensagem();
        usuario.limparFormulario();
    }else {
        alert('Por favor, Preencha todos os Campos')
    }
}