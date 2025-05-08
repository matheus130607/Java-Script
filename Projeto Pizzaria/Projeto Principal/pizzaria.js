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
    const pizza = document.getElementById("pizza").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const preco = parseFloat(document.getElementById("preco").value);

    if(pizza && ingredientes && preco) {
        pizzaria.push({pizza, ingredientes, preco});
        document.getElementById("pizza").value = "";
        document.getElementById("ingredientes").value = "";
        document.getElementById("preco").value = "";
        atualizarLista();
        alert("Pizza adicionado com sucesso!!!");
    } else {
        alert("Por favor, preencha todos os campos.")
    }
}

function buscarPizza() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = pizzaria.filter((pizzas) =>
    pizzas.pizza.toLowerCase().includes(busca));
    atualizarLista(resultados);
}

function buscarPizzaParaAlterar() {
    const busca = document.getElementById("busca-alterar").value.toLowerCase();
    pizzaParaAlterar = pizzaria.find((pizzas) =>
    pizzas.pizza.toLowerCase().includes(busca));

    if (pizzaParaAlterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("nova-pizza").value = pizzaParaAlterar.pizza;
        document.getElementById("novo-ingredientes").value = pizzaParaAlterar.ingredientes;
        document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
    } else {
        alert("Pizza não encontrado.");
    }
}

function alterarPizza() {
    if (pizzaParaAlterar) {
        const novaPizza = document.getElementById
        ("nova-pizza").value;
        const novoIngredientes = document.getElementById
    }
}

