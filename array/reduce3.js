Array.prototype.reduce2 = function (callback){
    let acumulador = this[0]

    for (let i = 0; i < this.length; i++ ){
        acumulador = callback(this[i],i)
    }

    return acumulador
}

const soma = (valor1,valor2) => valor1 + valor2
const nums = [1,2,3,4,5,6]

console.log(nums.reduce2(soma))