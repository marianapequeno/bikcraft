//Menu ativo
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {  
  const url = location.href; //url da página
  const href = link.href; //href de cada a

  if(url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);


//Ativar itens do Orçamento - Parâmetros URL
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if(element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);


//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {  
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {  
  pergunta.addEventListener('click', ativarPergunta);
}


perguntas.forEach(eventosPerguntas);


//Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  if(matchMedia("(min-width: 1000px)").matches) {
    galeriaContainer.prepend(img);
  }
}


function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);