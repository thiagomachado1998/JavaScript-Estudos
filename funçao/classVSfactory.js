class pessoa {
    constructor(nome){
    this.nome=nome}

    falar (){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('thiago')
p1.falar()
const p2 = new pessoa ('lindo')
p2.falar()

function pessoa1 (nome){
    this.nome = nome

     
        console.log(`meu nome é ${this.nome}`)
    
}

const p3 = new pessoa1 ('tarciso')
const p4 = new pessoa1 ('oieee')

const pessoa3 = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p5 = pessoa3 ('gilberto')
p5.falar()
