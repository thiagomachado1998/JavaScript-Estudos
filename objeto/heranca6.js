function aula (nome,video){
    this.nome = nome
    this.video = video
}


//criando o new atraves dessa funcao abaixo
function novo (f,...params)/*os '...' no parametro mostra que este parametro pode receber uma serie de atributos nao somente 1 */{
    const obj= {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
        return obj
    
}
const aula2 = novo(aula,123,4)
console.log(aula2)

