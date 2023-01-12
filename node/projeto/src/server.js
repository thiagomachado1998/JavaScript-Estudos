const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (res,re,next) => {
    res.send({nome:'celuar',valor:4410})
})

app.listen(porta, ()=>{
    console.log(`a porta que está sendo executada é ${porta}`)
})

//signifcado dos metodos,
//send: metodo que envia resposta, se for um objeto ele converte em json
//get : metodo que envia uma requisicao
//listen: porta que vai ser executada