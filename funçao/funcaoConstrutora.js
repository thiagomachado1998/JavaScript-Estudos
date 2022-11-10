function carro (velocidadeMaxima = 200, delta = 5){
    // atributo privado 
    let velocidadeAtual = 1

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual+= delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidade = function () {
        return velocidadeMaxima
    }
}

const uno = new carro
uno.acelerar()
 console.log(uno.getVelocidade())

 const ferrari = new carro (241,35)
 ferrari.acelerar()
 ferrari.acelerar()
 ferrari.acelerar()
 console.log(ferrari.acelerar())