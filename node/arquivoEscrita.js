const fs = require ('fs')

const produto = {
    tipo:'doce',
    preco:216,
    local:'mercado'
}

fs.writeFile(__dirname + '/arquvioGerado.json', JSON.stringify(produto), err =>{
    console.log(err ||'produto salvo')
})

//na linha 9 o 'writefile' serve para criar uma pasta, __dirname significa pasta atual, arquivogerado,json o nome da pasta