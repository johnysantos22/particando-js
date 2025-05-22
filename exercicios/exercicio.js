
/*
🧠 Exercício: Números Maiores que 10
Dado o seguinte array:

const numeros = [4, 11, 32, 9, 5, 27, 8, 13];
Crie uma função que retorne um novo array contendo apenas os números maiores que 10.

💡 Dica:
Você pode resolver com:

for tradicional

filter

ou forEach

Tente resolver com a forma que você se sentir mais confortável primeiro.
*/

let numeros = [4, 11, 32, 9, 5, 27, 8, 13];

function numeroMaiorQue10(arr) {
  let numeroMaior = [];
  for (let i = 0; i < numeros.length; i++) {
    if (arr[i] > 10) {
        numeroMaior.push(arr[i])
    }
  }
   return numeroMaior
}

console.log(numeroMaiorQue10(numeros))