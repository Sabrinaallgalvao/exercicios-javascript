
console.log('carregou')

// 1) Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado retorne 'É maior', 'É igual' ou 'É menor'. Faça com if e else, apenas com if e com ternário.

function comparar(a,b){
        if (a == b) return 'É igual'
            if (b >= 20) return 'é maior'
            return 'é menor'
}

let resultado = comparar(20,22)
console.log(comparar)

// 2) Crie uma função que retorne o perímetro de um quadrado (retorna um number)

function quadrado(lado){
    return lado * 4
}

let perimetro = quadrado(4)
console.log(perimetro)

// 3) Crie uma função para verificar se um valor é Truthy retornando uma string. Ex minhaF(bla) return 'bla é Truthy' OU 'bla é Falsy'

function valor(temperatura) {
    if (temperatura > 25) return 'Está calor é truthy' 
    return 'Éstá calor é falsy'
}

console.log(valor(22))

// 4) Crie uma função que verifica se um número é par e retorna true ou false.

function parImpar(num){
    if (num % 2 == 0) return 'true'
    return 'false'
}
console.log(parImpar(5))

// 5) Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome. Crie um método no objeto anterior, que mostre o seu nome completo. Mostre no console as propriedades nome, sobrenome e o método nomeCompleto

// 6) Utilizando o for exiba todas as frutas da lista no console ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

let lista = ['Banana', 'maçã' , 'pera' , 'uva']
for (frutas of lista) {
    return
}

// 7)  Crie uma função que retorna um array de numeros ímpares, baseada na lista [1,2,3,4,5]

function lista(num){
    const array = [1,2,3,4,5]
    if (array % 2 == 0) return

}

// 8) Crie uma função que percorra a lista dada e retorne um array com todos os animais que têm pelo baseado na lista [{animal: 'Cão', temPelo: true}, {animal: 'Jacaré', temPelo: false}, {animal: 'Gato', temPelo: true}, {animal: 'Cobra', temPelo: false}]


// ex1 (por que o '?' não funciona??)
// ex2 L * 4




