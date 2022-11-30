const pai = {
    cor:'branco',
    cabelo:'preto'
}

const filho = new Object(pai)//criando objeto desta maneira e colocando dentro dos parentes o nome de um objeto este objeto dentro dos parenteses sera o prototipo do objeto criado.
console.log(filho.cabelo)

const filha = new Object(pai)
filha.nome = 
//abaixo especicacoes que podem ser feitas em cada atributo do objeto
 {      value:'bia',//o valor do atributo
        writable:false,//se pode ser mudado
        enumerable:true//se vai ser exibido 
        
        
}
filha.trampo='garconete'


console.log(filha)
console.log(Object.keys(pai))
