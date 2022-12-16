const alunos = [
    {nome:'pedro',nota:7.4,bolsita:true},
    {nome:'carlos',nota:8.7,bolsita:true},
    {nome:'thiago',nota:10,bolsita:true},
    {nome:'carlos',nota:5,bolsita:true}
]

const resultado = (a,b)=> a && b
console.log(alunos.map(a => a.bolsita).reduce(resultado))



//o reduce faz teste logico, nesse caso ele retorne true ou false 