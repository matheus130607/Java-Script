function dolar () {
    let reais = parseFloat(prompt('Quanto de dinheiro em reais ?'))
    let dolar = reais *5.80

let res = document.getElementById("situacao");
res.innerHTML = `<p>Dolar:${dolar}.</p>`;

}