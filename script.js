// formulario
const form = document.querySelector('form');

// clique no botao (envio)
form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede que a pagina recarregue

    // pegando os valores dos campos
    const email = form.querySelector('input[type="email"]').value;
    const senha = form.querySelector('input[type="password"]').value;

    // veruficando se os campos estao preenchidos
    if (email === '' || senha === '') {
        alert('Por favor, preencha os campos!')
    } else {
        alert('Seja bem-vindo(a), $(email)!');
    }
});