
// 1. Verificação de Maioridade e Habilitação
//Escreva um programa que verifique se uma pessoa é maior de idade e possui habilitação para dirigir.

function TemHabilitação ()  {
 let idade = parseFloat(prompt("Digite a sua idade:"));
let Habilitação = prompt("Você tem habilitação? Sim ou Não");
if (idade >= 18 && Habilitação === "sim")
alert ("Você é Maior de idade, tem Habilitação");
   else if (idade >= 18 && Habilitação === "não")
    alert (" Você é Maior de idade, não tem habilitação");
else {
 alert (" Você é menor de idade, não tem habilitação")
}

}
TemHabilitação ();

