class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
function countNodes(head){
    if(head === null)return 0
    return 1+countNodes(head.next);
}
function printLikedList(head){
    while(head){
        console.log(head.val);
        head = head.next;
    }
}
let n=new LinkedList(1)
n.next=new LinkedList(2)
n.next.next=new LinkedList(4)

console.log(countNodes(n))