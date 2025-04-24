// Desafio 3 Votar 

function PodeVotar() {
  let idade = parseFloat(prompt("Digite a sua idade:"));
  let Nacionalidade = prompt("Você é brasileiro? Sim ou Não");
  if (idade >= 16 && Nacionalidade === "sim")
    alert("Pode Votar");
  else if (idade >= 16 && Nacionalidade === "não")
    alert(" Não pode votar");
  else {
    alert(" Não pode votar");
  }
}
PodeVotar();