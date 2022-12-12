const nuns = [1,2,3,4,5]

let resultado = nuns.map(function(e){
   return e+2
})

const soma = e => e+10
const vezes = e => e*10
const dinheiro = e => `${parseFloat(e).toFixed(2).replace('.',',')} `

 resultado = nuns.map(soma).map(vezes).map(dinheiro)/*metodo pra fazer map sequencial, ja foi criado funcoes pre definidas, em cada troca de funcao tem que colocar .map()*/

console.log(resultado)