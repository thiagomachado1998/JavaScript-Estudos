const imprimirNota = function (nota){
    if (nota>=7) // quando tiver somente uma sentenca nao é necessario os "{}"
    console.log(`Sua nota foi ${nota}, voçê foi aprovado !!`)
    else 
    console.log(`Sua nota foi ${nota}, voçê foi reprovado !!`)
}

imprimirNota(9)
imprimirNota('opa') 