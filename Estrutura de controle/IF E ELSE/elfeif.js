Number.prototype.resultado = function (inicio,fim){/*funcao criada  que vai ter um return boleano, se this for igual ou maior a inicio e menor ou igual a fim retorna true.*/
    return this >= inicio && this <= fim
}

const imprimirNota = function (nota){
    if(nota.resultado(9,10)){
        console.log('Quadro de honta')
    }else if (nota.resultado(7,10)){
        console.log('aprovado')
    }else if (nota.resultado(4,6)){
        console.log('Recuperacao ')
    }else if (nota.resultado(1,4)){
        console.log('reprovado')
    }
    else {
        console.log('nota invalida')
    }
}

imprimirNota(112)