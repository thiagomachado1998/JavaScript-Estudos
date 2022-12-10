//é uma boa pratica nao misturar diversos tipos de dados difrentes em um mesmo array

let elementos = ['bia','ana','joao']
elementos.splice(1,2,'thiago','pedro')//metodo que adiciona,inclui e exclui dados, o '1' é de qual indice vai comecar as alteracoes, o '2' é quantos dados apartir do '1' sera excluido, e o 'thiago' e 'pedro' é os dados novos
console.log(elementos)