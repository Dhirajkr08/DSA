class LinkedList{
    constructor(value){
        this.value = value;
        this.next=null
    }
}
function printLinkedList(head){
    while(head){
        console.log(head.value)
        head = head.next
    }
}
function printAtBeginning(head,k){
    let newHead=new LinkedList(k);
    newHead.next=head
    return newHead

}

let n=new LinkedList(2);
n.next=new LinkedList(4);
n.next.next=new LinkedList(6);

n=printAtBeginning(n,10)
printLinkedList(n)