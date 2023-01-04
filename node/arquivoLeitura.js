const fs = require('fs')
const { config } = require('process')
const caminho = __dirname + "/arquivo.json"
const conteudo = fs.readFileSync(caminho,'utf-8')

//console.log(conteudo)//

fs.readFileSync(caminho,'utf-8' ,(err, conteudo)=>{
    config = conteudo
    console.log (`${config.db.porta} : ${config.db.pass}`)
})

const gfd = require ('./arquivo.json')

console.log(gfd.db.pass)

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('conteudo da pasta')
    console.log(arquivos)
})