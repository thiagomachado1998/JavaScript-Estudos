function getPreco (moeda ='r$', imposto = 2){
    return ` ${moeda} ${this.desc *this.preco + imposto} 
     `
}

const produto = {
    item : 'notebook',
    preco : 1500,
    desc : 100,
    getPreco
}

console.log (produto.getPreco())

carro = {
    preco:54777,
    desc : 157
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 247,111))/*call primeiro é colocado o objeto, depois os parametros*/
console.log(getPreco.apply(carro,[247,111]))/*apply é colocado o objeto e depois os parametros só que dentro de um array*/