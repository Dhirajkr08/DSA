class objectCount{
    static count=0
    constructor(){
        objectCount.count++
    }
}
let o=new objectCount();
let o1=new objectCount();
let o2=new objectCount();
console.log(objectCount.count)