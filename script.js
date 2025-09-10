// Função que busca dados do localStorage ou inicia uma lista vazia
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Elementos do DOM
const form = document.getElementById("form-produto");
const tabela = document.getElementById("tabela-produtos");
const busca = document.getElementById("busca");

// Função para salvar os dados no localStorage
function salvarDados() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// Função para desenhar a tabela com os produtos
function atualizarTabela() {
    // Limpa a tabela antes de atualizar
    tabela.innerHTML = "";

    // Filtro de busca
    const filtro = busca.value.toLowerCase();

    // Percorre todos os produtos
    produtos.forEach((produto, index) => {
        if (produto.nome.toLowerCase().includes(filtro)) {
            const tr = document.createElement("tr");

            // Colunas da tabela
            tr.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.tipo}</td>
                <td>${produto.categoria}</td>
                <td>
                    <button class="acao adicionar" onclick="alterarQuantidade(${index}, 1)">+</button>
                    <button class="acao remover" onclick="alterarQuantidade(${index}, -1)">-</button>
                    <button class="acao remover" onclick="removerProduto(${index})">Excluir</button>
                </td>
            `;

            tabela.appendChild(tr);
        }
    });
}

// Adiciona um novo produto
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nome = document.getElementById("nome").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;

    // Cria um novo objeto de produto
    const novoProduto = {
        nome,
        quantidade,
        tipo,
        categoria
    };

    // Adiciona na lista
    produtos.push(novoProduto);

    // Atualiza a tabela e salva
    salvarDados();
    atualizarTabela();

    // Limpa o formulário
    form.reset();
});

// Altera a quantidade do produto
function alterarQuantidade(index, valor) {
    produtos[index].quantidade += valor;

    // Evita quantidade negativa
    if (produtos[index].quantidade < 0) {  
        produtos[index].quantidade = 0;
    }

    salvarDados();
    atualizarTabela();
}

// Remove um produto da lista
function removerProduto(index) {
    produtos.splice(index, 1);
    salvarDados();
    atualizarTabela();
}

// Atualiza a tabela ao digitar no campo de busca
busca.addEventListener("input", atualizarTabela);

// Primeira renderização
atualizarTabela();
// Função para desenhar a tabela com os produtos
function atualizarTabela() {
    // Limpa a tabela antes de atualizar
    tabela.innerHTML = "";

    // Filtro de busca
    const filtro = busca.value.toLowerCase();

    // Percorre todos os produtos
    produtos.forEach((produto, index) => {
        if (produto.nome.toLowerCase().includes(filtro)) {
            const tr = document.createElement("tr");

            // Verifica se a quantidade é zero e adiciona a classe CSS
            if (produto.quantidade === 0) {
                tr.classList.add("sem-estoque");
            }

            // Colunas da tabela
            tr.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.tipo}</td>
                <td>${produto.categoria}</td>
                <td>
                    <button class="acao adicionar" onclick="alterarQuantidade(${index}, 1)">+</button>
                    <button class="acao remover" onclick="alterarQuantidade(${index}, -1)">-</button>
                    <button class="acao remover" onclick="removerProduto(${index})">Excluir</button>
                </td>
            `;

            tabela.appendChild(tr);
        }
    });
}