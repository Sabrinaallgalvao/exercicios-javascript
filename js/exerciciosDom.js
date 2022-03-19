// 1 - Faça uma função que altere a cor da fonte do primeiro parágrafo
function ex1(cor) {
  const paragrafo = document.querySelector('p')
  paragrafo.style.color = cor
}
// ex1('red')


// 2 - Faça uma função que altere a cor de fundo de todas as divs.
function ex2(cor1) {
  const divs = document.querySelectorAll('div')
  for (item of divs) {
    item.style.backgroundColor = cor1
  }
}
//ex2('yellow')

// 3 - Faça uma função que mude a cor azul de todos os elementos com a classe 'azul'

function ex3() {
  const elementos = document.querySelectorAll('.azul')
  for (item of elementos) {
    item.style.color = 'blue'
  } 
}
//ex3()
// 4 - Faça uma função que esconda o elemento com  id esconder.

function ex4() {
  //const elemento = document.querySelector('#esconder')
  const elemento2 = document.getElementById('esconder')
  elemento2.style.display = 'none'
}
//ex4()
// 5 - Faça uma função que altere o título do documento para 'Alterando título"
function ex5() {

  // document.title = 'Alterando Tutulo' 
  const titulo = document.querySelector('title')
  titulo.innerHTML = 'Alterando Título'
}
// ex5()
// 6 - Faça uma função que imprima no console a lista de classes do primeiro parágrafo do documento.
function ex6() {
  const paragrafo = document.querySelector('p')
  const listaDeClasses = paragrafo.classList
  
  for (item of listaDeClasses) {
    console.log(item)
  }
}
// ex6()
// 7 - Faça uma função que coloque um atributo alt e coloque o valor: "Imagem gerada aleatoriamente" na imagem que está no documento

// 8 - Faça uma fução que selecione todas as tags p e div do documento e coloque uma borda de 1px, sólida e amarela nos itens pares da lista.

// 9 - Faça uma função que altere todo o conteúdo do body para uma string chamada "Alterado"

// 10 - Faça uma função que que crie um h1 dinamicamente, tenha o conteudo de 'Título' e insira no body.

// 11 - Faça uma função que crie uma imagem dinamicamente e que tenha o atributo src "https://picsum.photos/200".

// 12 - Faça uma fução que REMOVA todos as tags p.

// 13 - Faça uma função que mude a cord do body para vermelho ao clicar no botao.