// Desafio 4 - Descontos

function Desconto() {
  let produtos = parseFloat(prompt(" Digite quantos produtos:"));
  let ClienteVIP = prompt("Você é um cliente VIP? Sim ou Não");
  if (produtos >= 1 && ClienteVIP === "sim") 
    alert("Tem desconto");
  else if (produtos >= 8 && ClienteVIP === "não") 
    alert(" Tem desconto");
  else {
    alert(" Não tem desconto");
  }
}
Desconto();