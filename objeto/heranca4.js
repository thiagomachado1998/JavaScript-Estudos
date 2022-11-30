function prot (){}
console.log(prot.prototype)

const a = new prot//atraves da instancia a variavel que esta sendo instanciada pega o objeto que esta istanciando como prototipo
const b = new prot

prot.prototype.nome ='thiago'//metodo para adicionar atributos de objeto em uma funcao, para que objetos instanciados dessa funcao receba o atributo da funcao prototipo... O PROTOTYPE É UM OBJETO !!
prot.prototype.falar = function (){//criando funcao para todos filhos do prototipo
     console.log(`meu nome ${this.nome}`)
}

const c = {}

c.__proto__=prot.prototype//metodo diferente pra istanciar um objeto a uma funcao prototype






