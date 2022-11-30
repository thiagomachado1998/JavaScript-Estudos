//cadeira de prototipos ( prototype chain)
Object.prototype.attr0='z'//prototipo final e colocando um atributo no protptipo final.. nao é recomendado adicionar atributos no prototipo final !!!
const avo = {
    attr1:'a'
}
const pai = {
    __proto__:avo,//maneira de instanciar o objeto que vai se tornar prototipo, tem que instanciar na primeira declaracao do objeto
    attr2:'b'
}

const filho = {
    __proto__:pai,
    attr3:'c'
}
console.log(filho.attr0)

const carro = {
    velAtual:0,
    velMaxima:200,
    acelerar (delta){
        if (this.delta >this.velMaxima){
              this.velMaxima = this.delta
        }else {
            this.velAtual+=this.delta
        }
    },

    result (){
        return `a velocidade atual é ${this.delta} e a velocidade maxima é ${this.velMaxima}`
    }
}

const ferrari = {
    modelo:'f40',
    velMaxima:280
}

const volvo = {
    modelo:'a40',
    result (){
        return ` ${this.modelo} ${super.result()}`//o metodo super é pra voce usar uma funcao nesse exemplo dentro de outra funçao
    }
}

Object.setPrototypeOf(ferrari,carro)//metodo pra usar funcao construtora em um objeto, neste exemplo ferrari é o objeto a ser estanciado em uma funcao construtora, e carro é a funcao construtora, tem que ser nessa sequencia de declaracao
Object.setPrototypeOf(volvo,carro)

ferrari.acelerar(444)
console.log(ferrari.result())
