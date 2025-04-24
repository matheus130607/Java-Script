//  Imprimir " Ola mundo 11 vezes"

let Mundo = [ "1.Olá Mundo", "2.Olá Mundo", "3.Olá Mundo", "4.Olá Mundo", "5.Olá Mundo", "6.Olá Mundo", "7.Olá Mundo", "8.Olá Mundo", "9.Olá Mundo", "10.Olá Mundo", "11.Olá Mundo"];
for ( let i = 0; i < Mundo. length; i ++) {
    console.log(Mundo [i]);
}

    //Fazer uma tabuada 3

let numero = 3
for (let i = 1; i <= 10; i++) {
 console.log(`  ${numero * i}  `);
}

    //Soma dos numeros impares de 1 a 100
let soma = 0
    for ( let i = 1; i <= 100;  i +=2) {
    console.log(i),
      soma += i;
    } 
console.log (` a soma dos numeros impares é: ${soma}`)


    //contagem regresiva de 10 a 1 com a mensagem Feliz Ano novo

      let j = 10;
      while (j > 0) {
        console.log(j);
        j--;
      }
        console.log('Feliz Ano Novo')
      
        //Exemplo 1: Verificação de Categoria de Idade
let idade = 60;
if (idade >= 18) {
    console.log("Menor de idade") }
    else if (idade <=59){
  console.log("Adulto");
    }else {
  console.log("Idoso");
}


        //Exemplo 2: Verificação de Nota com Mensagem
        let nota1 = 60;
        if (nota1 >= 90) {
          console.log("Excelente");
        } else if (nota1 >= 80) {
          console.log("Bom");
        } else if (nota1 >= 70) {
          console.log("Podia ser melhor");
        } else if (nota1 >= 60) {
          console.log(" Por pouco");
        } else if (nota1 >= 50) {
          console.log("Razoavel");
        } else {
          console.log("Você precisa estudar");
        }


      //  Exemplo 3: Verificação de Dia da Semana
      let dia = "sabado";
      if (dia === "domingo") {
        console.log("role com os crias");
      } else if (dia === "segunda") {
        console.log(" Trabalha até se acabar");
      } else if (dia === "terça") {
        console.log("Ta quase no meio da semana");
      } else if (dia === "quarta") {
        console.log("Ta no meio da semana");
      } else if (dia === "quinta") {
        console.log("Começa a descansar");
      } else if (dia === "sexta") {
        console.log("A noite ja tem festa");
      } else console.log(" É festa ate não aguentar mais");


      //Exemplo 4: Verificação de Horário do Dia
let horario = 19;
if (horario <= 12) {
  console.log("Bom dia ");
} else if (horario <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
