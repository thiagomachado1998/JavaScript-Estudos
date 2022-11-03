console.log('os operadores relacionais são = "< > != == === !==" os operadores aritimeticos são = "* + - ++ -- / " os operadores unarios são : "++ --"')

console.log("operadores binarios sao operadores que trabalham entre operandos, os operadores unarios são operadores que trabalha somente com 1 operando")



const trabalho1 = false
const trabalho2 = false
const tv = 'televisao  50 polegadas'

if (trabalho1 == true && trabalho2 == true) {
    console.log(`Voce efetuou os dois trabalhos da semana, irá conseguir comprar sua ${tv} `)
} else if (trabalho1 == true && trabalho2 == false) {
    console.log(`Somente o trabalho 1 foi executado, voce nao tem dinheiro para comprar a ${tv}`)
} else if (trabalho1 == false && trabalho2 == true) {
    console.log(`somente o trabalho 2 foi executado, voce nao conseguira comprar sua ${tv}`)
} else {
    console.log('nenhum dos trabalhos foram executados !!!!!')
}

function comprar(trabalho1, trabalho2) {
    const compraTv50 = trabalho1 == true && trabalho2 == true
    const comprarTv32 = trabalho1 != trabalho2
    const tomarSorvete = trabalho1 || trabalho2
    const manterSaudavel = !tomarSorvete

    return { compraTv50, comprarTv32, tomarSorvete, manterSaudavel } /*o retorno pode ser valores que voce queira passar pro parametro ou voce pode criar um objeto e esse objeto ja vai ter seus valores nesse caso das variaveis que foram ja colocados os testes logicos, ao enviar os parameetros atraves do console.log vai retornar os testes logicos do objeto*/

}
console.log(comprar(false, true))

const resultado = nota =>  nota >= 7 ? 'aprovado' : 'reprovado'
/* operador ternario '?', tem o mesmo resultado equivalente if e else, dependendo do valor retornara ou aprovaro ou reprovado'*/


console.log(resultado(9))


