class Stack{
    constructor (){
        this.stack=[]
    }
    add(x){
        this.stack.push(x)
    }
    remove(){
        return this.stack.pop()
    }
    top(){
        return this.stack[this.stack.length-1]
    }
    isEmpty(){
        return this.stack.length===0
    }

}