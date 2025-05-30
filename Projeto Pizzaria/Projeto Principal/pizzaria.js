function exibirMensagem (texto, tipo) {
const mensagem = document.getElementById("mensagem");
mensagem.textContent = texto;
mensagem.className = `mensagem ${tipo}`;
mensagem.classList.remove("hidden");

setTimeout (() => {
    mensagem.classList.add("hidden");
}, 5000);
}

function validarLogin() {
    const usuario = document.getElementById ("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioCorreto = "admin";
    const senhaCorreto = "1234";


    if (usuario === usuarioCorreto && senha === senhaCorreto) {
        exibirMensagem("Login realizado com sucesso! ", "sucesso");
        setTimeout (() => {
            window.location.href = "pizzaria.html";
        }, 500);
    } else {
        exibirMensagem("Usuário ou senha incorretos.", "erro");
    }
}

function login () {
    setTimeout(() => {
        window.location.href = "login.html"
    }, 500)
}



let pizzaria = [];
let pizzaParaAlterar = null;

function mostrarPizza(secao) {
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");
    document.getElementById("venda").classList.add("hidden");

    // Mostrar a seção selecionada
    document.getElementById(secao).classList.remove("hidden");
}

function adicionarPizza() {
    const sabor = document.getElementById("sabor").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const preco = parseFloat(document.getElementById("preco").value);

    if(sabor && ingredientes && preco) {
        pizzaria.push({sabor, ingredientes, preco});
        document.getElementById("sabor").value = "";
        document.getElementById("ingredientes").value = "";
        document.getElementById("preco").value = "";
        atualizarLista();
       document.getElementById('text').innerHTML = `Pizza adicionado com sucesso!!!`;
    } else {
        document.getElementById('text').innerHTML = `Erro ao cadastrar pizza!!!`;
    }
}

function buscarPizza() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = pizzaria.filter((pizza) =>
    pizza.sabor.toLowerCase().includes(busca));
    atualizarLista(resultados);
    
}

function buscarPizzaParaAlterar() {
    const busca = document.getElementById("busca-alterar").value.toLowerCase();
    pizzaParaAlterar = pizzaria.find((pizza) =>
    pizza.sabor.toLowerCase().includes(busca));

    if (pizzaParaAlterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("novo-sabor").value = pizzaParaAlterar.sabor;
        document.getElementById("novo-ingredientes").value = pizzaParaAlterar.ingredientes;
        document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
    } else {
        document.getElementById('text2').innerHTML = `Pizza não encontrado.`;
    }
}

function alterarPizza() {
    if (pizzaParaAlterar) {
        const novoSabor = document.getElementById("novo-sabor").value;
        const novoIngredientes = document.getElementById ("novo-ingredientes").value;
        const novoPreco = parseFloat(document.getElementById("novo-preco").value);

        if(novoSabor && novoIngredientes && novoPreco) {
            pizzaParaAlterar.sabor = novoSabor;
            pizzaParaAlterar.ingredientes = novoIngredientes;
            pizzaParaAlterar.preco = novoPreco;

          
            document.getElementById('text2').innerHTML = `Pizza alterado com sucesso!`;
       
        } else {
            document.getElementById('text2').innerHTML = `Por favor, preencha todos os campos`;
             document.getElementById("form-alterar").classList.add("hidden");
        }
    }
          atualizarLista();
}

function atualizarLista(lista = pizzaria) {
    const tabela = document.getElementById("lista-pizzas");
    tabela.innerHTML = "";

    lista.forEach((pizza) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizza.sabor}</td>
        <td>${pizza.ingredientes}</td>
        <td>R$ ${pizza.preco.toFixed(2)}</td>
        `;
        tabela.appendChild(linha);
    });
}

let vendas = [];

function registrarVenda() {
    const sabor = document.getElementById('venda-sabor').value;
    const preco = document.getElementById('venda-preco').value;
    const comprador = document.getElementById('venda-comprador').value;

    if (sabor && preco && comprador) {
     const listaVendas = document.getElementById('lista-vendas');
     const item = document.createElement('li');
     item.textContent = ` Sabor: ${sabor}, Preço: R$${preco}, Comprador: ${comprador}`;
     listaVendas.appendChild(item);   

     vendas.push({sabor, preco, comprador});

     document.getElementById('venda-sabor').value = '';
     document.getElementById('venda-preco').value = '';
     document.getElementById('venda-comprador').value = '';

    } else {
        document.getElementById('text3').innerHTML = `Por favor, preencha todos os campos!`;
    }
}

function gerarRelatorioVendas() {
    const tabelaRelatorio = document.getElementById('tabela-relatorio-vendas');
    tabelaRelatorio.innerHTML = '';

    if (vendas.length === 0) {
        document.getElementById('text4').innerHTML = `Nenhuma venda registrada`;
        return;
    }
    let totalVendas = 0;
    
    if(totalVendas.length === 0) {
        document.getElementById('text4').innerHTML = `Valor de venda não registrada`
        return;
    }

    vendas.forEach((venda) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
        <td> ${venda.sabor}</td>
        <td>R$${parseFloat(venda.preco).toFixed(2)}</td>
        <td>${venda.comprador}</td>
        `;
        tabelaRelatorio.appendChild(linha);

        totalVendas += parseFloat(venda.preco);
    });

    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
    <td></td>
    `;
    tabelaRelatorio.appendChild(linhaTotal);

    document.getElementById('relatorio-vendas').
    classList.remove('hidden');
}

