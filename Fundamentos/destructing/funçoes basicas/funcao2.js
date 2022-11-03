// atribuir função a uma variavel 
const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,4)


// atribuir funcao arrow dentro de variavel
const soma = (a,b) => {
    return a-b
}

console.log(soma (2,1))

//atribuiçao implicito do return
const mais = (a,b) => a + b

//atrbuiçao de funçao em uma variavel de maneira mais simples quando só ah 1 parametro
const imprimir2 = a => console.log(a)
imprimir2(4)

