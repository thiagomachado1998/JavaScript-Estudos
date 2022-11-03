const nota = [7.4,7.8,8.2,10,2.7]

for (i in nota){/*'i' vai receber os indice de 'nota' e vai repetir o que for colocado na sentenca a quantidade de vezes que tiver de indices na variavel*/
    console.log(i,nota[i])
}

//for in é um dos metodos para percorrer array e objetos

const pessoa = {
    nome :' ana',
    sobrenome:'julia',
    idade : 24,
    cidade:'Sp'
}

for (let atributo in pessoa){
    console.log(atributo = pessoa[atributo])/*metodo para percorrer um objeto, o atributo vai receber os identificadores*/
}