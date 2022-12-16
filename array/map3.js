Array.prototype.map2 = function(calback){
    let newarray = []

    for (i=0;i < this.length;i++){
        newarray.push(calback(this[i],i))
    }
    return newarray
}

const soma = a => a+10

const numeros = [
    21,47,21,31,45
]

const resultado = numeros.map2(soma)
console.log(resultado)







