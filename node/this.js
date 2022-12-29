console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)
//this aponta somente pra linha 3 e 4

function thisFunc(){
    console.log('dentro de uma funçao')
    console.log(this === module.exports)
    console.log(this === global)
    // dentro da funcao this aponta somente pra global
}

thisFunc()