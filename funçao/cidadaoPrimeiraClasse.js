/*functions em javascript é tratado igual a um dado comum, isso signifca que é possivel colocar function em tudo que é lugar, em variaveis, arrays,objetos,parametros de outras funcoes, colocar uma funcçao dentro de outra funçao.. e assim por diante*/

//funçao literal (modo padrao de criar funçâo)
function func1 (){}

//função em variavel
const func2 = function(a,b){return 2+5}/*pra chamar a função que está em uma variavel tem que colocar '()' junto do nome da variavel no momento da declaração*/

//function em array
const func3 = [function (){}, func1(),func2()]/*pra chamar a função que está em uma variavel tem que colocar '()' junto do nome da variavel no momento da declaração*/
console.log(func3[func2()])//exemplo

//function em objeto
const obj={}
obj.falar = function (){return 'opa'}
console.log(obj.falar())/*pra chamar a função que está em uma objeto tem que colocar '()' junto do nome oa atributo no momento da declaração*/

//function como parametro de uma função
function func4 (fun){
    fun()
}
func4(function (){console.log('executando.....')})//colocando a função no parametro

//função com o retorno de outra funcao
function func5(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
func5(4,4)(4)/*pra adicionar valor no parametro da função que esta no return tem que colocar () depois do primeiro ()da primeira funcao*/