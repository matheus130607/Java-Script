let Discos = [];

function adicionarDisco() {
  let titulo = prompt("Digite o titulo do disco:");
  let autor = prompt("Digite o autor do disco:");
  let ano = parseInt(prompt("Digite o ano de publicação do disco:"));
  let preço = parseInt(prompt("Digite o valor :"));
  Discos.push({ titulo, autor, ano , preço});
  alert(" Disco adicionado com sucesso!");
}

function listarDiscos() {
  if (Discos.length > 0) {
    let mensagem = " Lista de discos na Loja:\n";
    Discos.forEach((Disco) => {
      mensagem += `Título: ${Disco.titulo}, Autor: ${Disco.autor}, Ano: ${Disco.ano}, Preço: ${Disco.preço}\n`;
    }),
      alert(mensagem);
  } else {
    alert(" A Loja está vazia.");
  }
}

function exibirMenu() {
  let opção;
  do{
    opção = prompt(
    "Menu:\n" +
      "1. Adicionar Disco\n" +
      "2. Buscar Disco\n" +
      "3. Listar Discos\n" +
      "4. Sair\n" +
      "Escolha uma opção:"
  );

  if (opção === "1") {
    adicionarDisco();
  } else if (opção === "2") {
    buscarDisco();
  } else if (opção === "3") {
    listarDiscos();
  } else if (opção !== "4") {
    alert("Opção invalida!");
  }
}
while (opção !== "4");
alert(" Saindo da loja de discos");

}
exibirMenu();