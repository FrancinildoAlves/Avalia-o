function salvarCadastro(event) {
    event.preventDefault(); // Corrigir a função para evitar o comportamento padrão

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const telefone = document.getElementById('telefone').value; // Corrigir erro de digitação
    const email = document.getElementById('email').value;

    const cadastro = {
        nome: nome,
        dataNascimento: dataNascimento,
        telefone: telefone,
        email: email,
    };

    localStorage.setItem('cadastro', JSON.stringify(cadastro));

    alert('Cadastro salvo com sucesso');
}

function carregarCadastro() {
    const cadastro = JSON.parse(localStorage.getItem('cadastro'));
    if (cadastro) {
        document.getElementById('nome').value = cadastro.nome;
        document.getElementById('data-nascimento').value = cadastro.dataNascimento;
        document.getElementById('telefone').value = cadastro.telefone;
        document.getElementById('email').value = cadastro.email;
    }
}

window.onload = carregarCadastro;

document.getElementById('cadastroForm').addEventListener('submit', salvarCadastro);
