function calcularMedia(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma / 2;
}

let numeros = [];
let quantidade = parseInt(prompt(" Quantas notas você deseja inserir?"));

for (let i = 0; i < quantidade; i++) {
  let numero = parseFloat(prompt(` digite a nota ${i + 1}:`));
  numeros.push(numero);
}

let media = calcularMedia(numeros);
alert(`A média das notas é: ${media}`);
