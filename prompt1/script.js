let numero = parseFloat(prompt("digita um numero"));

if (isNaN(numero)) {
    alert("digite um numero valido")
} else if (numero % 2 === 0) {
    alert(`${numero} é par`)
} else {
    alert(`${numero} é impar`)
}