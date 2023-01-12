const sequence = {
    __id:1,
    get id () {return this.__id++}
}

const produtos = {}

function salvarProdutos (produtos){
    if(!produtos.id){
        produtos.id = sequence.id
        produtos[produtos.id]=produtos   
    }

    return produtos
}

function getProdutos (id){
    return produtos[id] || {}
}

