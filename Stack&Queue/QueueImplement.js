class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(val){
        this.queue.push(val);
    }
    Dequeue(){
        return this.queue.shift();
    }
    is_Empty(){
        return this.queue.length===0;
    }
    get_first_Element(){
        return this.queue[0];
    }

}
let q=new Queue();
q.enqueue(23);
q.enqueue(34);
q.enqueue(42);
q.enqueue(12);
console.log(q.is_Empty())
console.log(q.get_first_Element())
console.log(q.Dequeue())
console.log(q.queue)