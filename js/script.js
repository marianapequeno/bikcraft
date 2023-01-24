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


