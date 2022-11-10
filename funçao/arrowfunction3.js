let comparar = function (param) {
    console.log(this === param)
}

comparar(global)