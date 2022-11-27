const pessoa = {
    nome : 'Lucian'
    ,idade:34
    ,peso:28
}   
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
console.log(Object.entries(pessoa))
Object.defineProperty(pessoa, 'cor', {
    enumerable:true,//metodo pra definir se vai ser listada ou nao o atributo
    writable:false,//para definir se propriedade vai poder ser modificada
    value:'rosa'//para definir o dado do atributo
})

const a = {a:10}
const b = {d:4}
const c = {a:4,g:47}
const obj = Object.assign(a,b,c)//metodo para colocar os atributos nesse exemplo da const b e c pra const a, o primeiro objeto nesse exemplo o 'a' é o que recebe os valores, os outros do exemplo no caso o 'b'e'c' é o que transfere os dados
console.log(a)

Object.freeze(obj)//funcao para bloquear alteracoes no objeto