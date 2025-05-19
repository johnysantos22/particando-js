const verification = prompt("digite um numero PAR");
const verification2 = prompt("digite um numero IMPAR");

let resultado = Number(verification) % 2 ===  0 ? Number(verification) : Number(verification2);

alert(`
    O resulatdo PAR é: ${resultado }
    O resulatdo IMPAR é: ${resultado % 2 ===  0 ? verification2 : verification}
    `);