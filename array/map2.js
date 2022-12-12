const carrinho = [
    '{"nome": "borracha", "preco":3.98}',
    '{"caderno": "latini", "preco":4.8}',
    '{"kitlapis":"preto", "preco":1.4}',
    '{"caneta":"bic", "preco":5}'
]

const convert = json => JSON.parse(json)

const resultado = carrinho.map(convert).map(a =>  a.preco)

console.log(resultado)