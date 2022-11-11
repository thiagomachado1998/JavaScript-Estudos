// clousure é o escopo criado quando uma função é declarada*/
//esse escopo permite a funcao acessar e manipular variaveis externas a função*/

const x = 'global'

function fora (){
    const x ='local'
    function dentro (){
        return x
    }
    return dentro

}

const minhaFuncao = fora()

console.log(minhaFuncao())