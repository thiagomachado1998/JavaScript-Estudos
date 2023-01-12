//class
class animal {}

class cachorro extends animal{
    falar(){
        return console.log('auau')
    }
}

console.log(new cachorro().falar())
