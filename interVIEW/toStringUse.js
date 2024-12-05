let x = {
    flag : 1,
    toString : function(){
        return this.flag++
    }

}
if(x==1 && x==2 && x==3) {
    console.log("if correct message will occur")
}

//we have to verify that x==1 && x==2 && x==3 should be true so for increment i use toString and ++

let z = {
    flag : 1,
    valueOf : function() {
        return this.flag++
    }

}
if(z==1 && z==2 && z==3) {
    console.log('If correct message 2 will occur')
}
