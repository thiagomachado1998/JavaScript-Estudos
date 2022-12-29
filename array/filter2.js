Array.prototype.filter2 = function (callback){
    let newarray = []

    for (let a = 0; a < this.length;a++){
        if (callback(this[a],a)){//callback é o parametro configurado pra ser uma callback(callback é um metodo que percore array, e ele é configurado da maneira que esta declarada na linha 5), o this[a] é o indice do array, e o a é o dado.
            newarray.push(this[a],a)
        }
    }

    return newarray
}//o this usado na funcao é o array  mencionado no exemplo abaixo linha 21

const produtos = [
    {nome:'notebook', preco:1248, fragil:true},
    {nome:'ipad', preco:1147, fragil:true},
    {nome: 'jordan1',preco:1215, fragil : false}
 
const caro = a => a.preco > 1200

console.log(produtos.filter2(caro))

