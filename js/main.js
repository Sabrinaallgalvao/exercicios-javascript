// 1) Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado retorne 'É maior', 'É igual' ou 'É menor'. Faça com if e else, apenas com if e com ternário.

function ex1(a, b) {
  if (a === b) return 'É igual'
  if (a >= b) return 'a é maior'
  return 'é menor'
}

// 2) Crie uma função que retorne o perímetro de um quadrado (retorna um number)

function ex2(lado) {
  return lado * 4
}

// 3) Crie uma função para verificar se um valor é Truthy retornando uma string. Ex minhaF(bla) return 'bla é Truthy' OU 'bla é Falsy'

function ex3(valor) {
  if (valor) {
    return `${valor} é truthy`
  } else {
    return `${valor} é falsy`
  }
}

// 4) Crie uma função que verifica se um número é par e retorna true ou false.

function ex4(num) {
  const expressao = num % 2 === 0 ? true : false
  return expressao
}

// 5) Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome. Crie um método no objeto anterior, que mostre o seu nome completo. Mostre no console as propriedades nome, sobrenome e o método nomeCompleto

const dadosPessoais = {
  nome: 'Sabrina',
  sobrenome: 'Galvão',
  nomeCompleto: function () {
    return `O nome completo é ${this.nome} ${this.sobrenome}`
  },
}

// console.log(dadosPessoais.nomeCompleto())

// 6) Utilizando o for exiba todas as frutas da lista no console ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

function ex6(lista) {
  for (item of lista) {
    console.log(item)
  }
}

const minhaLista = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
// ex6(minhaLista)

// 7)  Crie uma função que retorna um array de numeros ímpares, baseada na lista [1,2,3,4,5]

function ex7(lista) {
  const impares = []
  for (item of lista) {
    if (item % 2 !== 0) {
      impares.push(item)
    }
  }

  return impares
}
const array = [1, 2, 3, 4, 5]
// console.log(ex7(array))

// 8) Crie uma função que percorra a lista dada e retorne um array com todos os animais que têm pelo baseado na lista [{animal: 'Cão', temPelo: true}, {animal: 'Jacaré', temPelo: false}, {animal: 'Gato', temPelo: true}, {animal: 'Cobra', temPelo: false}]

// ex1 (por que o '?' não funciona??)
// ex2 L * 4

function ex8(lista) {
  const comPelo = []

  for (item of lista) {
    if (item.temPelo) {
      comPelo.push(item)
    }
  }

  return comPelo
}

const arrayDeAnimais = [
  { animal: 'Cão', temPelo: true },
  { animal: 'Jacaré', temPelo: false },
  { animal: 'Gato', temPelo: true },
  { animal: 'Cobra', temPelo: false },
]

console.log(ex8(arrayDeAnimais))
