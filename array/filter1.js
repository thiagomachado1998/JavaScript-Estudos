const produtos = [
    {nome:'notebook', preco:1248, fragil:true},
    {nome:'ipad', preco:1147, fragil:true},
    {nome: 'jordan1',preco:1215, fragil : false}
]

const resultado = produtos.filter(function (p){
    return p.fragil == true
})//metodo pra usar filter, cria uma funcao e o return é o teste logico que voce quer pra pegar somentes os atributos que derem true no teste logico, use um parametro na funcao pra ser possivel acessar atributos especificos, o parametro passado na funcao do filter é todos os atributos do objeto



const caro = a => a.preco > 1200 
const fragil = a => a.fragil == false

console.log(produtos.filter(caro).filter(fragil))


