const aprovados = ['ana','julia','pedro','luis']

aprovados.forEach(function (nome,indice){
    console.log(`${indice +1} ${nome}`)
})



const exibirAprovados = nome => console.log(aprovados)
aprovados.forEach(exibirAprovados)//quando for por uma funcao dentro de uma variavel dentro do foreach nao é necessario colocar o ()