class listNode{
    constructor(val){
        this.val=val
        this.next=null
    }
}
function moveRearinFront(head){
    let first=head,second=null
    while(first.next){
        second=first
        first=first.next
    }
    let newHead=first
    newHead.next=head
    second.next=null
    return newHead

}
function printLinkedList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}
let l=new listNode(1)
l.next=new listNode(2)
l.next.next=new listNode(3)
l.next.next.next=new listNode(4)
l.next.next.next.next=new listNode(5)
l=moveRearinFront(l)
printLinkedList(l)