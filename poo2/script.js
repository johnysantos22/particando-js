class Produto {
    constructor(nome, preco) {
        this.nome = nome
        thispreco = preco
    }
}

class SistemaProduto {
    constructor() {
        this.produtos = []
    }

    adicionarProdutos() {
        const nome = document.getElementById('nome').value.trim();
        const preco = document.getElementById('preco').value;
        parseFloat(preco)
        const mensagem = document.getElementById('mensagem');

        if (nome && !isNaN(parseFloat(preco))) {
            const produto = new Produto(nome, preco)
            this.produtos.push(produto)
            mensagem.textContent = "Adicionado com sucesso";
            mensagem.style.color = "green";

        } else {
            mensagem.textContent = "Dados inválidos, tente novamente!";
            mensagem.style.color = "red";
        }
    }
}
