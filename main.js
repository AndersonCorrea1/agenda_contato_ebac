var contatos = [];

function adicionaContato() {
    var nome = document.getElementById('nome-contato').value;
    var telefone = document.getElementById('numero-contato').value;

    if (nome === "" || telefone === "") {
        alert("Preencha todos os campos antes de adicionar o contato.");
        return;
    }

    if (telefone.length !== 11) {
        alert("O número de telefone deve conter exatamente 11 dígitos.");
        return;
    }

    contatos.push({ nome: nome, telefone: telefone });

    var tabelaBody = document.getElementById('tabela-body');
    tabelaBody.innerHTML = '';

    for (var i = 0; i < contatos.length; i++) {
        var contato = contatos[i];
        var novaLinha = '<tr><td>' + contato.nome + '</td><td>' + contato.telefone + '</td></tr>';
        tabelaBody.innerHTML += novaLinha;
    }

    document.getElementById('nome-contato').value = '';
    document.getElementById('numero-contato').value = '';
}
