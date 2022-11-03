function curaErro (erro){//funcao a ser executada caso ocorra erro
    console.log('eRRO')
}



function tratarErro (name){
    try {// usar caso voce esperar que o codigo venha ocorrer algum erro
     console.log('Nome gritado '.toUpperCase() +name+ '!!!')   
    }
    catch (a){//serve para chamar a funcao onde está as configuraçoes da msg do erro
        curaErro()
    }
}

const obj = tratarErro('roberto')
tratarErro()
