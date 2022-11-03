let number = [1,2,3,4,5,6,7,8,9,10]

for(x in number){
    if (x==5){/*7ao colocar break nesse exemplo o 'x' só vai ter os valores do array até i indice 5*/  /*break nao funciona em if, somente em while,for e switch*/
        break
    }
    console.log(number[x])
}


for (y in number){
    if (y==5){
        continue/*colocando continue o laço no qual foi definido na expressão sera pulado*/  /* continue só funciona em for e while*/
    }
     console.log(`${y} = ${number[y]}`)
}

