class linkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }

}
function findStart(head){
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            slow=head
            while(slow !== fast){
                slow=slow.next
                fast=fast.next
            }
            return slow
        }
    }
    return null

}
function printLinkedList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}
let l=new linkedList(1)
l.next=new linkedList(2)
l.next.next=new linkedList(3)
l.next.next.next=new linkedList(4)
l.next.next.next.next=new linkedList(5)
l.next.next.next.next.next=new linkedList(6)
l.next.next.next.next.next.next=new linkedList(8)
l=findStart(l)
printLinkedList(l)