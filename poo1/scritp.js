class Produtos {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class sistemaProdutos {
    constructor() {
        this.listarProdutos = []
    }

    adicionarProdutos() {
        const nome = prompt("Digite o nome do produto")
        const preco = parseFloat(prompt("Digite o preço"))

        if (!nome || isNaN(preco)) {
            alert("Dados inválidos.")
            return
        }

        const novoProduto = new Produtos(nome.trim(), preco)
        this.listarProdutos.push(novoProduto)

        alert("Produto adicionado com sucesso!")
    }
}

// Uso do sistema
const sistema = new sistemaProdutos()
sistema.adicionarProdutos()
console.log(sistema.listarProdutos)
