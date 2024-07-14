function salvarCadastro(event){
    event.prevent();

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const telefone = docuemnt.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    const cadastro = {
        nome: nome, 
        dataNascimento: dataNascimento,
        telefone: telefone,
        email: email,
    };

    localStorage.setItem('cadastro', JSON.stringify(cadastro));
    
    alert('cadastro salvo com sucesso');

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