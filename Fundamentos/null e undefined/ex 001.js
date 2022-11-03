const a = {name: 'thiago', idade: 23, altura:1.70}
let b = a
b = a.name ='oi' // alterando valor de uma variavel atraves de outra variavel pelo metodo de atribuicao por referencia
console.log(a)

const produto = {}
produto.preco = 25
produto.preco = null /*usar null pra mencionar que um produto está sem valor*/
delete produto.preco // deletando produto do objeto

