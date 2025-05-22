function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  // Adiciona a classe de estilo (sucesso ou erro)
  mensagem.className = ` mensagem ${tipo}`;
  mensagem.classList.remove("hidden");

  // Remove a mensagem após 3 segundos
  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Usuário e senha fixos para validação
  // (você pode substituir por algo mais avançado)

  const usuarioCorreto = "admin";
  const senhaCorreto = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreto) {
    exibirMensagem("Login realizado com sucesso! ", "sucesso");
    setTimeout (() => {
      //Redireciona para a página principal
      window.location.href = "biblioteca2.html";
    }, 1000); // Aguarda 1 segundo antes de redirecionar
  } else {
    exibirMensagem("Usuario ou senha incorretos.", "erro");
  }
}



let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
  // Esconde todas as seções
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("venda").classList.add("hidden");
  document.getElementById("emprestimo").classList.add("hidden");

  // Mostra a seção selecionada
  document.getElementById(secao).classList.remove("hidden");
}

function adicionarLivro() {
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const ano = parseInt(document.getElementById("ano").value);

  if (titulo && autor && ano) {
    biblioteca.push({ titulo, autor, ano });
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("ano").value = "";
    atualizarLista();
    alert("Livro adicionado com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function buscarLivro() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = biblioteca.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

function buscarLivroParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  livroParaAlterar = biblioteca.find((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );

  if (livroParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-titulo").value = livroParaAlterar.titulo;
    document.getElementById("novo-autor").value = livroParaAlterar.autor;
    document.getElementById("novo-ano").value = livroParaAlterar.ano;
  } else {
    alert("Livro não encontrado.");
  }
}

function alterarLivro() {
  if (livroParaAlterar) {
    const novoTitulo = document.getElementById("novo-titulo").value;
    const novoAutor = document.getElementById("novo-autor").value;
    const novoAno = parseInt(document.getElementById("novo-ano").value);

    if (novoTitulo && novoAutor && novoAno) {
      livroParaAlterar.titulo = novoTitulo;
      livroParaAlterar.autor = novoAutor;
      livroParaAlterar.ano = novoAno;

      atualizarLista();
      alert("Livro alterado com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

function atualizarLista(lista = biblioteca) {
  const tabela = document.getElementById("lista-livros");
  tabela.innerHTML = "";

  lista.forEach((livro) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${livro.titulo}</td>
      <td>${livro.autor}</td>
      <td>${livro.ano}</td>
    `;
    tabela.appendChild(linha);
  });
}

function Emprestimos() {
  const Titulo = document.getElementById("novo-emprestimo").value;
  const nome = document.getElementById("nome-usuário").value;
  let res = document.getElementById(`empresta`)
  res.innerHTML = `<p> Livro emprestado : ${Titulo}.</p>`
  res.innerHTML += `<p> Nome do usuário que emprestou : ${nome}.</p>`
}

let vendas = [];

function registrarVenda() {
  const titulo = document.getElementById('venda-titulo').value;
  const preco = document.getElementById('venda-preco').value;
  const comprador = document.getElementById('venda-comprador').value;

  if (titulo && preco && comprador) {
    const listaVendas = document.getElementById('lista-vendas');
    const item = document.createElement('li');
    item.textContent = ` Titulo: ${titulo}, Preço: R$${preco}, Comprador: ${comprador}`;
    listaVendas.appendChild(item);

    // Adicionar venda ao array de vendas
    vendas.push({titulo, preco, comprador});

    //Limpar os campos
    document.getElementById('venda-titulo').value = '';
    document.getElementById('venda-preco').value = '';
    document.getElementById('venda-comprador').value = '';

  } else {
    alert('Por favor, preencha todos os campos!');
  }
}

// Relatório de vendas
function gerarRelatorioVendas() {
  const tabelaRelatorio = document.getElementById('tabela-relatorio-vendas');
  tabelaRelatorio.innerHTML = ''; // Limpa tabela

  if (vendas.length === 0) {
    alert('Nenhuma venda registrada');
    return;
  }

  let totalVendas = 0; // Variavel para amarzenar o total das vendas

  if(totalVendas.length === 0) {
    alert('Valor de Venda não registrada.!')
    return;
  }

  vendas.forEach((venda) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
    <td> ${venda.titulo}</td>
    <td>R$${parseFloat(venda.preco).toFixed(2)}</td>
    <td>${venda.comprador}</td>
    `;
    tabelaRelatorio.appendChild(linha);

    // Somar o preço ao total de vendas
    totalVendas += parseFloat(venda.preco);
  });

  // Adicionar uma linha parao total de vendas
  const linhaTotal = document.createElement('tr');
  linhaTotal.innerHTML = `
  <td><strong>Total</strong></td>
  <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
  <td></td>
  `;
  tabelaRelatorio.appendChild(linhaTotal);

  // Exibir a área do relatório
  document.getElementById('relatorio-vendas').classList.remove('hidden');
}


