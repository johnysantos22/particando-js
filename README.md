# Verificador de Par ou Ímpar

Este é um simples projeto em JavaScript que solicita ao usuário que insira um número, verifica se ele é válido e, em seguida, determina se o número é par ou ímpar.

## Funcionalidade

- O programa solicita que o usuário insira um número através de um prompt.
- Se o valor inserido não for um número válido, o programa informa ao usuário para digitar um número válido.
- Se o número for válido, o programa verifica se ele é par ou ímpar e exibe o resultado em um `alert`.

## Como Usar

1. Clone ou baixe o repositório para o seu computador.
2. Abra o arquivo `index.html` em um navegador de sua preferência.
3. O programa pedirá para você inserir um número no prompt.
4. O resultado será exibido em um `alert`.

## Código

```javascript
let numero = parseFloat(prompt("digita um numero"));

if (isNaN(numero)) {
    alert("digite um numero valido")
} else if (numero % 2 === 0) {
    alert(`${numero} é par`)
} else {
    alert(`${numero} é impar`)
}
