const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesas = f => f.pais == 'China'
const mulheres = c => c.genero == 'F'
const salario = (salarioAtual,Acumulador) => salarioAtual < Acumulador ? salarioAtual:Acumulador

axios.get(url).then(response => {
    var funcionarios = response.data

    var func = funcionarios.filter(chinesas).filter(mulheres).reduce(salario)

    console.log(func)

    
} 
        
)



