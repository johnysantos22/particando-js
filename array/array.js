/*
const numeros = [5, 8, 12, 3, 7, 10, 2];
Crie uma função que retorne a soma apenas dos números pares do array.

Dica: você pode usar for, forEach ou filter + reduce, mas tente começar pela forma mais simples.
*/

const numeros = [5, 8, 12, 3, 7, 10, 2];

function somaPares(arr) {
    let soma = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            soma += arr[i];
        }
    }
    return soma
}

console.log(somaPares(numeros));


