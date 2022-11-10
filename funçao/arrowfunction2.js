function pessoa (){
    this.idade=0
    
  setInterval(() =>{/*this so funcionou usando arrow function*/
    this.idade++
    console.log(this.idade)
  },1000)}

new pessoa