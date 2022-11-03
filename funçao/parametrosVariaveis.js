function soma (){
    let soma = 0
    for (i in arguments){/*'arguments é um array onde sera passado parametros criador em uma função que nao foi declarado parametros*/
        soma+=arguments[i]
    }
    
    return soma
}

console.log(soma(8,4,4,4,7,5,2))