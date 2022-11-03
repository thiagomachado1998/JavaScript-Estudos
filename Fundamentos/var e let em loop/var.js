const valor=[]

for(let i =0;i<=10;i++){ //se usar var ao inves do let codigo nao funcionara certo
    valor.push(function (){
        console.log('sua nota é = '+i)
    })
}
valor[2]() //para mostrar um indice do array que seja uma function alem de colocar o 
//indice que ele se encontra tem que colocar o "()"
valor[5]()