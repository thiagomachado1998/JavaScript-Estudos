const imprimirNota = function (nota){
    switch (Math.floor(nota)){//codigo para arredondar valor para baixo. o switch nao é uma funçao que faz teste logico, é somente  colocado o valor da expressao
        case 10:
        case 9:
            console.log('Quadro de honra')
            break//tem que colocar break caso contrario sera executado todos cases abaixo do case que tiver o valor da expressão
       case 8 :
        case 7 :
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default: console.log('Nota invalida')
        
    }
    console.log("Fim")
}

 imprimirNota(7)

 