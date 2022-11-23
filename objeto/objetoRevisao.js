const carro = {
    modelo:'a4',
    valor : 85000,
    proprietario: {
        nome: 'raul',
        idade:25,
        localizacao: 'sp'
    },
    condutores : [{
        nome:'carlos',
        idade: 54
    }, {
        nome:'pedro',
        idade:24
    },{
        nome:'junior',
        idade:22
    }]
    }


carro.condutores.numero = 45

delete carro.condutores[0]
console.log(carro.condutores)