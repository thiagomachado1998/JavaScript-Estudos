class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo/*metodo para prototypar class */ {
    constructor(sobrenome,profissao ='professor'){
         super(sobrenome)/*super serve pra executar o atributo que esta no prototype pai */
        this.profissao=profissao
    }
}

 class filho extends pai {
    constructor(){
        super('silva')
    }
 }

 const filhop = new filho
 console.log(filhop,fff)