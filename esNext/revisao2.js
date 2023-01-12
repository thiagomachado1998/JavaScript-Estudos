// arrow function
const soma = (a,b) => a+b
console.log(soma(7,8))

//arrow function (this)
const lexico = () => console.log(this === exports)
const lexico2 = lexico.bind({})
lexico()
lexico2()
//o bind na linha 7 é um metodo pra fazer algo apontar para o que for colocado nos (),neste exemplo da linha 7 um objeto

//parametro defaut
function log (nome ='thiago'){
    return console.log(nome)
}
log()
log('luis carlos')

//operacao rest
function rest (...numeros){
    total=0
    numeros.forEach(n => total += n)
    return total
}

console.log(rest(1,4,5,7,5))
