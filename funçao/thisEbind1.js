const pessoa = {
    saudacao:'Bom dia',
    falar : function (){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar()//conflito entre paradigmas : funcional e OO

const pessoaFalar = pessoa.falar.bind(pessoa)
pessoaFalar()
