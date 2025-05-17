/*
Crie uma função que receba um número e retorne o fatorial desse número.
O fatorial de um número n é o produto de todos os números inteiros de 1 até n.
*/ 
function fatorial(n) {
    
    Resultado  = 1;
    for (let i = 1; i <= n; i++) {
        Resultado *= i;
    }
    return Resultado
 
    
}
console.log(fatorial(5)); 