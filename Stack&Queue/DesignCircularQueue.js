class Queue{
    constructor(){
        this.queue = [];
        this.k=k
    }
    enqueue(val){
        if(!this.isFull()){
            this.queue.push(val);
            return true
        }
        return false
    }
    dequeue(){
        if(!this.isEmpty()){
            this.queue.shift()
            return true
        }
        return false
        
    }
    front(){
        if(!this.isEmpty()){
            return this.queue[0]
        }
        return -1
    }
    rear(){
        if(!this.isEmpty()){
            return this.queue[this.queue.length-1]
        }
        return -1
    }
    isEmpty(){
        return this.queue.length===0;
    }
    isFull(){
        return this.queue.length===this.k;
    }
}