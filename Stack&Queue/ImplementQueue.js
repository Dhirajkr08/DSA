class Queue{
    constructor(){
        this.queue = [];
    }
    add(x){
        this.queue.push(x)

    }
    pop(){
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length===0
    }
}