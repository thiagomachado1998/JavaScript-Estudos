console.log(typeof String)//string é uma funcao
console.log(typeof Object)//object é uma funcao
console.log(typeof Array)//array é uma funcao
//TODA FUNCAO TEM UM PROTOTYPE, ENTAO É POSSIVEL ADICIONAR ATRIBUTOS DENTRO DELES ATRAVES DO PROTOTYPE.


String.prototype.reverse = function (){
    return this.split('').reverse('').join('')
}
console.log('thiago'.reverse())

Array.prototype.first = function (){
    return this[0]
}
numeros = [12,14,55,44,66]
console.log(numeros.first())