const form = document.getElementById('myForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    mensagem.textContent = 'Obrigado por responder o formulário!';
});