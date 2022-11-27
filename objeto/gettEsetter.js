const produto = {
    _nome:1, // convencao, pra mostrar que so pode acessar internamente use o "_" antes do nome do indice*/


    //trabalhando com o atributo _nome, sem mexer diretamente nele mas configurando get e set pra mexer nele externamente*/
    get nome() {
        return this._nome ++
    },
    set nome(nome){
        if (valor > this.nome){
            this.nome = nome
        }
    }
}

console.log(produto.nome,produto.nome)