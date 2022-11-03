function boaNoticia(nota){
    if (nota >=7){
        console.log(`sua nota foi ${nota}, voce foi aprovado `)
    }else {
        console.log(`sua nota foi ${nota}, voce foi reprovado`)
    }
}

const noticia = boaNoticia(8)

function falandoAverdade(valor){
    if (valor){/*quando o teste logico do if for somente 1 item sem operadores relacionais, ele automaticamente vira um item true ou false, e o bloco do if só é ativado quando o item do teste logico tem como valor "true"*/
        console.log(`esta atribuição deu true : ${valor}`)
    }
}

falandoAverdade(0)/*atribuicao que da false, fazendo com que o bloco do if nao seja executado*/
falandoAverdade(NaN)/*atribuicao que da false, fazendo com que o bloco do if nao seja executado*/
falandoAverdade(null)/*atribuicao que da false, fazendo com que o bloco do if nao seja executado*/
falandoAverdade("")/*atribuicao que da false, fazendo com que o bloco do if nao seja executado*/
falandoAverdade(undefined)/*atribuicao que da false, fazendo com que o bloco do if nao seja executado*/
falandoAverdade(1)// atributo que é true