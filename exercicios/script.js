/*
crie um codigo que: 
conte quantos números maiores que 10 existem no array 
E calcule a soma desses números
*/

const numeros = [3, 15, 7, 20, 8, 25, 9];

let maiorQue10 = 0;
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        maiorQue10++;
        soma += numeros[i];
    }
}
console.log(`maior que 10 são: ${maiorQue10} numeros e a soma total dos numeros maior que 10 é: ${soma}`);