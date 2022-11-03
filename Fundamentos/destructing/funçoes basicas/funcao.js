//funçao sem retorno


imprimirSoma(1,2,3,4,5)

function imprimirSoma(a,b,c,d,e){
    console.log(a,b,c,d,e)
}

//funçao com retorno

function soma (a,b=1){
    return a + b
}

console.log(soma(1,4))