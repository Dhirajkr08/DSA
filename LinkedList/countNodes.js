class LinkedList{
    constructor(value){
        this.value = value; 
        this.next=null
    }

}
function printLikedList(head){
    while(head){
        console.log(head.value)
        head = head.next
    }
}
function countDetails(head){
    let count=0
    while(head){
        count++
        head = head.next
    }
    return count
}
let e=new LinkedList(3)
e.next=new LinkedList(7)
e.next.next=new LinkedList(11)
e.next.next.next=new LinkedList(15)
e.next.next.next.next=new LinkedList(19)
printLikedList(e)
console.log("count : ",countDetails(e))