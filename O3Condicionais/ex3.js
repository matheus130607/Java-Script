// condicionais com if else e else if

let nota = 89;
if (nota >=80) {
    console.log('Prabens, você for aprovado (a)');
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
} else {
    console.log(' Você for reprovado(a)');
}

    
let horario = 19;
if (horario <=12){
   console.log("Bom dia "); 
} else if (horario <=18) {
   console.log("Boa tarde");
} else { 
   console.log("Boa noite")
}




//notas

let nota1 = 60;
if (nota1 >= 90) {
  console.log("Excelente");
} else if (nota1 >= 80 ) {
  console.log("Bom");
} else if (nota1 >=70 ) {
    console.log('Podia ser melhor');
} else if ( nota1 >= 60) {
    console.log(' Por pouco');
} else if (nota1 >=50) {
    console.log('Razoavel');
} else {
  console.log("Você precisa estudar");
}


//dia da semana

let dia ='sabado';
if (dia === 'domingo'){
    console.log('role com os crias');
} else if (dia === 'segunda') {
    console.log(' Trabalha até se acabar');
} else if ( dia === 'terça') {
    console.log('Ta quase no meio da semana');
} else if ( dia === 'quarta') {
    console.log('Ta no meio da semana');
} else if ( dia === 'quinta') {
    console.log('Começa a descansar');
} else if ( dia === 'sexta') {
    console.log ('A noite ja tem festa');
} else 
    console.log (' É festa ate não aguentar mais');
