const input = document.querySelector('input')
const lista = document.querySelector('ul')

function inserirNaLista() {
  const itemDaLista = document.createElement('li')
  itemDaLista.innerHTML = input.value
  lista.appendChild(itemDaLista)
}