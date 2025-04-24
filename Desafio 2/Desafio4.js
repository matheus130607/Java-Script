function produto () {
    let produto = prompt('Qual o produto?')
    let preço = parseFloat(prompt('Qual o valor do produto?'))
    let dinheiro = parseFloat(prompt(' Quanto foi pago ?'))

    let resultado = dinheiro - preço
    let res = document.getElementById("situacao");
    res.innerHTML = `<p>Produto:${produto}.</p>`;
    res.innerHTML += `<p>Preço:R$${preço}.</p>`;
    res.innerHTML += `<p>Dinheiro inserido:R$${dinheiro}.</p>`;
    res.innerHTML += `<p>Troco:R$${resultado}.</p>`;
}