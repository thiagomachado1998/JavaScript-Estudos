function numeroAleatorio (min,max){
    const valor = Math.random() * (max-min)+ min
    return Math.floor(valor)
}

let opcao = 0

/*while é recomendado para repetiçoes inderteminado de vezes*/
while (opcao !=-1){
    opcao = numeroAleatorio(10,-1)
    console.log(`a opção escolhida foi ${opcao}`)
}

console.log('Fim')