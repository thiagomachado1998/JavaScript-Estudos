//Estrategia 1 para gerar valor padrão
function soma (a,b,c){
    a = a || 1
    b = b || 1
    c = c|| 1

    return a + b + c
}
console.log(soma())

// estratégia valor padrao 2,3 e 4
function soma2(a,b,c){
    a = a !== undefined?a:1
    b = (1 in arguments)?b:1
    c = isNaN(c)?1:c
    return a+b+c

}
console.log(soma2(), soma2(3,4,7))

// estrategia de valor padrao ecma2015 ( forma mais adequada pra definir valor padrao)
function soma3(a=1, b=1,c=1){
    return a+b+c
}
console.log(soma3())