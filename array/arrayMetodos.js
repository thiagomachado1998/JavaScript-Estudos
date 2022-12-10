const pilotos = ['vettel','alonso','massa']
 pilotos.pop()//serve para excluir o ultimo dado no caso'massa'
 pilotos.push('hanneses')//serve para adicionar dado ao ultimo indice
 console.log(pilotos)
 pilotos.shift()//tira o primeiro dado
 pilotos.unshift('verstappen')//adiciona um dado ao indice 0 mas nao sobrescreve o dado atual do indice 0
 console.log(pilotos)
 pilotos.splice(3,0,'thiago','pedro')//metodo que adiciona,inclui e exclui dados, o '3' é de qual indice vai comecar as alteracoes, o '0' é quantos dados apartir do '3' sera excluido, e o 'thiago' e 'pedro' é os dados novos
console.log(pilotos)

const copia = pilotos.slice(1,4)//cria um novo array dentro do metodo coloco a partir de qual indice vai ser feito a copia, no segundo dado do metodo até qual indice é feito a copia.
console.log(copia)