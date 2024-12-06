class Queue{
    constructor(size){
        this.item=[]
        this.size=size
    }
    enqueue(ele){
        if(!this.item.isFul()){
            this.item.push(ele)
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            return this.item.shift()
        }
    }
    isEmpty()
    {
        return this.item.length==0
    }
    isFul(){
        return this.item.length===this.size
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[0]
        }
    }
}
//queue has a tendency of first in first out
