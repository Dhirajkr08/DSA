class ListNode{
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
let head=new ListNode(1)
head.next=new ListNode(2)
head.next.next=new ListNode(3)
head.next.next.next=new ListNode(4)
printLinkedList(head)
