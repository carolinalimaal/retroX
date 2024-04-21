// Ativar marcador da página atual
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
  const url = location.href
  const href = link.href

  if (url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)

// Ativar items selecionados no orçamento
const parametros = new URLSearchParams(location.search)

function selecionarParametros(parametro){
  const elemento = document.getElementById(parametro)
  if (elemento){
    elemento.checked = true
  }
}

parametros.forEach(selecionarParametros)