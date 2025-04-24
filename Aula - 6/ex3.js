// Exemplo de contador

let contador = 0;
let resultado = document.getElementById('resultado')
function contar() {
    contador ++
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`
}

function contar1() {
    contador --
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`
}

function zerar() {
  contador =0;
  resultado.innerHTML = `<p>Esta zerado.</p>`;
}




