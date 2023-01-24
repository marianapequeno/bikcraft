const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {  
  const url = location.href; //url da página
  const href = link.href; //href de cada a

  if(url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);