function media() {
let numero = Number(window.prompt(`Qual o número desejado?`));

let n1 = numero - 1
let n2 = numero + 1

  let res = document.getElementById("situacao");
  res.innerHTML = `<p>Numero anterior:${n1}.</p>`;
  res.innerHTML += `<p>Numero sucessor:${n2}.</p>`;
}
