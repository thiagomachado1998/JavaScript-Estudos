//pessoa > endereco da memoria > {pedro} .... neste exemplo o que é constante é o endereco de memoria nao o dado*/

const pessoa = {nome :'pedro'}
pessoa.nome = 'thiago'
console.log(pessoa)

//metodo para congelar alteracoes de objeto
Object.freeze(pessoa)
pessoa.nome = 'carlos'
console.log(pessoa)
//congelando objeto nao recebe mais NENHUM tipo de alteracao