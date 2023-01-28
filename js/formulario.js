const formulario = document.querySelector("form");

function formularioEnviado(resposta) {  
  if(resposta.ok) {
    formulario.innerHTML = "<p class'font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #317a00;'>Mensagem enviada</span>, respondemos em até 24 horas.</p>"
  } else {
    formulario.innerHTML = "<p class'font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7'><span style='color: #e00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso e-mail em 'contato@email.com'</p>"
  }
}

function enviarFormulario(event) {  
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.innerText = "Enviando ...";

  const data = new FormData(formulario); //Captura os dados digitados nos campos de input deste form

  fetch('../enviar.php', {
    method: 'POST', 
    body: data //São os dados que devem ser enviados ao servidor
  }).then(formularioEnviado);


}

formulario.addEventListener('submit', enviarFormulario);

