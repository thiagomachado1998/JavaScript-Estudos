//forma literal
const obj = {}

//new object
const obj1 = new Object
console.log(obj1)

//forma construtora
function obj2 (nome,preco,desc){
    this.nome = nome
    this.obj3 = () => {
        return  console.log (preco * (1- desc))
    }
}
const obj4 = new obj2('caneta',7,99,0.50)
obj4.obj3()

//funcao factory
const empresas = (nome,salario,falta) => {
    return {
        nome,salario,falta,getSalario () {
            return (salario/30) * (salario-falta)
        }
    }
}
p1 = empresas('thiago',4500,2)
console.log(p1.getSalario())


//objetc.create
const creat = Object.create(null)
creat.tipo = typeof new Object
console.log(creat)

