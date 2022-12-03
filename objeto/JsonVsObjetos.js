const obj = {a:1,b:2,c:3, soma(){return a+b+c}}

console.log(JSON.stringify(obj))//metodo pra transormar um objeto em json
console.log(JSON.parse('{"a":2,"b":3,"c":4}'))//metodos pra criar json
console.log(JSON.parse('{"t1":"thiago","t2":true,"t3":"machado","t4":["lindo",2,3,"kk"],"t5":{}}'))//segundo metodo mas com atributos strings

