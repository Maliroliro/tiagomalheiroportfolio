// seleciona o formulario pelo id
const form = document.getElementById("form");

// executa a simulacao de envio e impede o recarregamento da pagina
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // seleciona os valores do formulario
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // valida se os campos foram preenchidos
  if(!nome || !email || !mensagem){
    alert("Preencha todos os campos!");
    return;
  }

  // expressao de validacao de email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Testa se o email é valido
  if (!emailValido.test(email)) {
    alert("Email inválido!");
    return;
  }

  //se tudo der certo, simula envio do formulario
  alert("Formulario enviado!");

  //apaga tudo das caixas de texto
  form.reset();
});