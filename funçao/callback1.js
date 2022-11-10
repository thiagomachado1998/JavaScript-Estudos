const fabricantes = ['BMW', 'AUDI', 'MERCEDES']

function imprimir (nome, indice){
    console.log(`${indice + 5} ${nome}`)
}

fabricantes.forEach(imprimir)/*for each é o callback serve para executar funcoes em cada atributo de um array, a funcao tem que ter 2 parametros, um vai ser configurado pro nome e o segundo parametro pro indice*/

fabricantes.forEach(() => console.log(fabricantes))