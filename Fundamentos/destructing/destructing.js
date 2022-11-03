const dados = {
    nome:'Thiago',
    idade: 23,
    altura:1.71,
    endereço:{
        rua:'germania',
        numero:528,
    }

}

const {rua:r,altura:a}=dados /*retirando atributos e ja criando varivel com o dado*/

console.log(r)

const {sobrenome,sexo = 'masculino'}=dados /*o sinal de '=' serve para deixar um valor padrao caso nao venha ter esse atibuto no objeto dados*/

console.log(sobrenome,sexo)

const {endereço:{rua:t,numero:b}}=dados /* criando variavel de objetro que esta dentro do objeto*/

console.log(t,b)

const arr =[a]
const [t1,t2,,t3='padrao'] = [0,2,4,] /*criacao de variaveis a esquerda identifcador a direita os dados a ser armazenado na sequencia dos identificadores*/
console.log(t1,t2,t3)

function rand({min=0, max =1000} ){ /*metodo para fazer numero randomico atraves do destructing em funçoes com '{}'*/
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max:40,min:25}
console.log (rand(obj))


function rand1([min=0, max=1000]){
    if (min>max){ [min,max] = [max,min]}
    const valor = Math.random() * [max-min] + min
    return Math.floor(valor)
}

console.log(rand1([900,1000]))
