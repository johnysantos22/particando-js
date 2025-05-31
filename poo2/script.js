class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
}

class SistemaProduto {
    constructor() {
        this.produtos = []
    }

    adicionarProduto() {
        const nome = document.getElementById('nome').value.trim();
        const preco = parseFloat(document.getElementById('preco').value);
        const mensagem = document.getElementById('mensagem');

        if (nome && !isNaN(preco)) {
            const produto = new Produto(nome, preco)
            this.produtos.push(produto)
            mensagem.textContent = "Adicionado com sucesso";
            mensagem.style.color = "green";

            this.listaProduto();

            document.getElementById('nome').value = "";
            document.getElementById('preco').value = "";

        } else {
            mensagem.textContent = "Dados inválidos, tente novamente!";
            mensagem.style.color = "red";
        }
    }

    listaProduto() {
        const li = document.getElementById('listaProdutos')
        li.innerHTML = "";
        this.produtos.forEach((produto) => {
            const liElemento = document.createElement('li')
            liElemento.textContent = `${produto.nome}: 
            R$ ${produto.preco.toFixed(2)}`
            li.appendChild(liElemento)
        })
    }
}

const sistema = new SistemaProduto();

