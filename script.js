function cadastrarProduto() {
    let nome = document.getElementById("nomeProduto").value.trim();
    let quantidade = document.getElementById("quantidade").value;
    let valor = document.getElementById("valor").value;
    let mensagemErro = document.getElementById("mensagemErro");
    let resultado = document.getElementById("resultado");

    
    mensagemErro.innerHTML = "";
    resultado.innerHTML = "";
    resultado.style.display = "none"; 
    
    // Validação: Nome não pode estar vazio
    if (nome === "") {
        mensagemErro.innerHTML = "Erro: O campo nome do produto é obrigatório!";
        return;
    }

    // Criando objeto do produto
    let produto = {
        nome: nome,
        quantidade: parseInt(quantidade) || 0,
        valor: parseFloat(valor) || 0
    };

    // Exibindo os valores na tela
    resultado.innerHTML = `
        <strong>Produto Cadastrado com Sucesso!</strong><br>
        Nome: ${produto.nome} <br>
        Quantidade: ${produto.quantidade} <br>
        Valor: R$ ${produto.valor.toFixed(2)}
    `;

    resultado.style.display = "block"; 
}
