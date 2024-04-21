// Ativar marcador da página atual
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar items selecionados no orçamento
const parametros = new URLSearchParams(location.search);

function selecionarParametros(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(selecionarParametros);

// Galeria de imagens
const imagens = document.querySelectorAll(".console-imagens img");
const galeria = document.querySelector(".console-imagens");

function trocarImagem(event) {
  const atual = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeria.prepend(atual);
  }
}

function eventosImagems(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

imagens.forEach(eventosImagems);
