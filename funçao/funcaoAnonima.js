const soma = function (x,y){
    return x+y
}

const valor = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

valor (8,7) /* valores estao passando pros parametros da function anonima valor, e a funcition valor foi programada pra passar os valores do parametro pra function soma*/

valor(8,7, function (x,y){
    return x-y
})/*criando uma funcao anonima na chamada da function valor, neste exemplo vai ser executado a funcao da chamada e nao a função soma*/

valor (8,4 , (d,v) => d*v)/* quando é criado uma função na chamada de outra função, é executada o resultado da função criada na chamada*/

const falar = {
    pessoa: function (){// função anonima em um objeto
        console.log('olá')
    }
}

falar.pessoa()