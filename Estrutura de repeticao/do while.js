function numberAleatorio (min,max){
    const valor = Math.random() * (min,max)+min
    return Math.floor(valor)
}

let opcao = 0

 do  {
    opcao = numberAleatorio(-1,10)
    console.log(`a opção escolhida foi ${opcao}`)
}while (opcao !=-1)

console.log("fim")