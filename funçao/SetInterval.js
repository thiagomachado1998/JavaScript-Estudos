function pessoa (){
idade = 0

    setInterval(function (){ 
        console.log(idade++)
    }, 1000)
}/*"setinterval" executa algo no tempo que for programado, nesse exemplo executei uma função*/

pessoa()