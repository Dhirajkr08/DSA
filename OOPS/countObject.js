class count_objects{
    static count=0
    constructor(){
        count_objects.count++
    }
    static get_count(){
        return count_objects.count
    }
}
let c=new count_objects();
let d=new count_objects();
let f=new count_objects();
let g=new count_objects();
console.log(count_objects.get_count())