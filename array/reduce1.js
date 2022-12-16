const alunos = [
    {nome:'pedro',nota:7.4,bolsita:true},
    {nome:'carlos',nota:8.7,bolsita:false},
    {nome:'thiago',nota:10,bolsita:true},
    {nome:'carlos',nota:5,bolsita:false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,valoratual){
    console.log(acumulador,valoratual)
    return acumulador + valoratual
},0)

console.log(resultado)

//o reduce faz o seguinte, o primeiro parametro acumulador na linha 8 é o primeiro dado do array, o parametro valoratual tambem na linha 8 é o segundo dado do array, entao o reduce executa o que foi programado nesses dois parametros, depois de executado o resultado dessa execucacao é armazenado no parametro acumulador da linha 8 e novamente ele executa o que foi programado com o valoratual que no caso vai ser o terceiro atrbuto do array, resultado novamente é armazenado no acumulador e vai sendo assim até acabar os atributos do array, na linha 11 é onde coloca um valor pra ser adicionado em todas execucoes 