class Carro {
    constructor(carro, modelo, ano) {
        this.carro = carro
        this.modelo = modelo
        this.ano = ano
    }
    exibirInformacoes() {
     console.log(`Este Carro é ${this.carro}, ${this.modelo}, ${this.ano}.`)
    }

    ligar() {
      console.log('O Carro foi Ligado!')
    }
}

const meuCarro = new Carro('Toyota', 'Corrola', 2020)


meuCarro.exibirInformacoes()
meuCarro.ligar()
