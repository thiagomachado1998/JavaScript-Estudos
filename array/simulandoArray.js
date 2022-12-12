const quasearray = {
    0:'ana', 1:'bia',2:'thales'
}
Object.defineProperty(quasearray, 'toString',{
    value: function () {return Object.values(quasearray)},
    enumerable:false
})

console.log(quasearray.toString())