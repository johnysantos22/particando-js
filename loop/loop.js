/*
Filtre as notas maiores ou igual a 7
Mostre essas notas 
Cauculea médias dessas notas 

Mostre:
notas boas: [8, 9, 7, 10]
Média das boas: 8.5
*/

const notas = [ 5, 8, 9, 7, 10];

let notasBoas = [];

for (let i = 0; i < notas.length; i++) {
     if (notas[i] >= 7 ) {
        notasBoas.push(notas[i]);
     }
}

console.log(notasBoas);

let medias = 0;

for (let i = 0; i < notasBoas.length; i++) {
    medias += notasBoas[i];
}

medias /= notasBoas.length;

console.log(medias);