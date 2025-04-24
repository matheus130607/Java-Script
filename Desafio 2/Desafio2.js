function media() {
    let nome = window.prompt(' Qual é o nome do aluno?')
    let idade = Number(window.prompt(`Quantos anos você tem ?`))


let res = document.getElementById("situacao");
res.innerHTML = `<p>Nome:${nome}.</p>`;
res.innerHTML += `<p>Idade:${idade}.</p>`;
}