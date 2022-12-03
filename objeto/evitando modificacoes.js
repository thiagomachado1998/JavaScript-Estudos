/*metodo pra criar objeto que nao pode ter mais atributos adicionados futuramente, mas pode ter atributos deletados*/const itens = Object.preventExtensions({
    nome:'perfume',valor:441,quantidade:47
})
console.log(Object.isExtensible(itens))//metodo pra ver se objeto pode ser extendido
console.log(itens)
itens.idade =74//itens nao foi adicionado por estar impedido pela linha 1
delete itens.quantidade // deletar pode
console.log(itens)

/*metodo pra selar um objeto, nao pode ser adicionado mais atributos e nem deletar, mas pode alterar valores*/const times = Object.seal({
    time1:'espanha',time2:'alemanha',time3:'uruguai'
})
console.log(Object.isSealed(times))//metodo pra ver se objeto esta selado
console.log(Object.values(times))