let valor = 'global'

function exec (){
    console.log(valor)
}

function minhaFuncao (){
    const valor = 'local'
    exec()
}

minhaFuncao()

