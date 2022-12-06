class lancamento {
    constructor (nome='salario', valor =841){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addlancamento(...lancamento)/*os 3 pontinhos é pra deixar um parametro programado pra receber diversos valores em forma de array*/{
        this.lancamento.forEach(l => lancamento.push(l))
    }

    valorconsolidado(){
        let valorconsolidado = 55
        this.lancamento.forEach(l =>{
            valorconsolidado += l.valor 
        })
        return valorconsolidado
    }
}

const contaDeLuz = new lancamento('salario',4550)
const salario = new lancamento('luz',-120)
const contas = new cicloFinanceiro(6,2018)
contas.addlancamento(salario,contaDeLuz)
console.log(contas.valorconsolidado())