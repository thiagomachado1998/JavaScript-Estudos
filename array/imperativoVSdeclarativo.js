let alunos = [
    {nome:'pedro', nota:7.8},
    {nome:'ana', nota : 4.4}
]



const soma = (valor1) => valor1.nota / 2

const resultado = alunos.map(function(val){
    return val.nota / 2
})

console.log(resultado)

//nesses metodos que foi aprendido nas aulas de array tais como, filter, reduce e tals todas elas as os parametros nas funcoes que sao colocadas nelas sao pra acessar os atributos do array.

//imperativo
//o que importa é COMO tem que ser feito e nao o que vai ser feito, imperativo é executar cada passo a passo de maneira perfeita
let total= 0

for (i=0; i < alunos.length;i++){
    total += alunos[i].nota
}

console.log(total/alunos.length)

//declarativo
//declarativo é o modo de fazer algo independente de como sera feito
const soma1 = valor => valor.nota
const agregar = (valor,valor2) => valor+valor2

let result2 = alunos.map(soma1).reduce(agregar)
console.log(result2 / 2)

//quando for utilizar esses metodos de maneira sequencial, nao precisa ficar colocando o nome da variavel em cada metodo novo, somente a primeira declaracao precisa da variavel o resto nao, conforme é visto na linha 31
//nesses metodos dos arrays, os parametros das funcoes é utilizado PARA ACESSAR ATRIBUTOS DO ARRAY, entao cada parametro nessas funcoes enxergue como cada atributo do array, esses metodos tem um for embutido neles, entao eles percorrem array.