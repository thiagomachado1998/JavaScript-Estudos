function plano (idade){
   
    
    this.calcular = function  (){
    if (idade <=10){
        console.log("Seu plano é para crianças, o valor é de 80 reais")
    }else if (idade>10 && idade<30){
        console.log("Seu plano é o convencional, o valor é de 50 reais")
    }else if (idade >30 && idade<60){
        console.log("Seu plano é o para acima de 30 anos, valor de 95 reais")
    }else if (idade>60){
        console.log("seu plano é o de idoso, valor de 130 reais")
    }
}
}

const usuario1 = new plano (35)
usuario1.calcular()
const usuario2 = new plano (8)
usuario2.calcular()
const usuario3 = new plano(110)
usuario3.calcular()


