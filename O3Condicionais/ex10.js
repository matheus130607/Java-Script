// Break


for (let i = 0;i < 10; i++) {
    if (i === 5){
        break;
    }
    console.log(i);
}

// continue 

for(let i = 0; i < 10; i ++) {
    if (i === 5 ) {
        continue;
    }
    console.log(i);
}

// Imprimir números pares de 1 a 20

for ( let i = 3; i <= 30;  i ++) {
    if (i %2 === 0) {
        console.log (i);
    }
}

// Calcular soma de números:

let soma = 0;
for(let i = 1; i <= 100; i++){
    soma += i ;
}
console.log(soma);