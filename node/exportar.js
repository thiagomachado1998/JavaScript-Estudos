console.log(module.exports === this)
console.log(module.exports === exports)

this.a ='oi'
exports.b ='olá'
module.exports.c ='oiie'
exports = {
    nome:'thiago',
    idade:23
}
//as tres executa a mesma coisa, deixar os arquivos visiveis pra arquivos externos, mas o o module.exports é o que sempre sera retornado linha 13, mesmo criando novas coisas no exports (linha 7)quando vc chamar atraves do module.exports nao aparecera as novas mudancas feitas no exports, entao quando quiser fazer mudancas globais utilzie o module.exports(linha 14)

console.log(module.exports)
module.exports = {
    nome:'gabriel',
    idade:54
}
