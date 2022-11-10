/*metodo convencional pra adicionar em um novo array somente valores maior que 7*/
var notas = [1.0,6.4,8.9,5,4.8,10,9.7]
var notas2 = []
for (i in notas){
    if (notas[i] <=7){
        notas2.push(notas)
    }
}
console.log(notas2.length)

/*metodo com callback*/
notas2 = notas.filter(notas => notas <7 )/*o callback filter armazena na variavel notas2 somente o que der teste logico verdadeiro no array notas*/

console.log (notas2)

/*neste segundo exemplo tambem pode ser feito o seguinte, criar uma funcao que tenha um return <7 e adicionala no filter, tera o mesmo resultado*/
const notasMenorQue7 = notas => notas <7
