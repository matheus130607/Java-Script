// Calcular fatorial de um  número fornecido pelo usuário

let numero = 7;

numero = Number (numero);

let fatorial = 1;
for (let i = 1; i <= numero; i ++) {
    fatorial *= i;
}

console.log (` O fatorial de ${numero} é ${fatorial}. `);

// Iterar sobre um array

let frutas = ["maçã", "banana","laranja"];
for ( let i = 0; i < frutas.length; i ++) {
    console.log(frutas[i]);
}

let times = [ "corinthians", "Palmeiras", "Bahia", "Botafogo", "Ceara", "Flamengo", "Fluminense"];
for ( let i = 0; i < times. length; i ++) {
    console.log(times [i]);
}