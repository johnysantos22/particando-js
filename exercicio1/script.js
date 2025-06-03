/*📅 Projeto: Calculadora de Idade
🧠 Objetivo:
O programa pede o ano de nascimento do usuário e 
calcula a idade atual com base no ano atual.
 */

class idade {
    constructor(anoAtual, anoNascimento) {
        this.anoAtual = anoAtual
        this.anoNascimento = anoNascimento
    }
    verificarAno(){
        if (this.anoNascimento >= this.anoAtual) {
            return (`Ano Invalida`)
        } else {
            const idade = this.anoAtual - this.anoNascimento
            return `A Idade é: ${idade}`
        }
    }
}
const idade1 = new idade(2025,1992)
console.log(idade1.verificarAno())