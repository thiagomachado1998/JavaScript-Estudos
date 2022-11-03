function obj (nome){
    this.nome = 1 // 'this' serve para deixar  publico atributos que estao em objetos 
    this.exec = function (){
        console.log('lindo')
    }
}

const obj2 = new obj('teste') /*pra acessar os dados da funcao 'obj' foi necessario criar outra variavel que recebe obj, lembrando pra fazer isso precisa colocar o 'new' e um parametro dentro da funcao que esta sendo criada na segunda variavel*/

console.log(obj2.exec())