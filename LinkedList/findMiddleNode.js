class ListNode{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
function findMiddle(head){
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next
    }
    return slow
}
let head=new ListNode(1)
head.next=new ListNode(2)
head.next.next=new ListNode(3)
head.next.next.next=new ListNode(4)
head.next.next.next.next=new ListNode(5)
let output=findMiddle(head)
console.log(output.val)