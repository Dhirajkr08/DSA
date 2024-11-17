class linkedList{
    constructor(val){
        this.val = val;
        this.next=null
    }
}
function deleteMiddle(head){
    let slow=head,fast=head,prev=null
    while(fast && fast.next){
        fast=fast.next.next
        prev=slow
        slow=slow.next
    }
    if(prev){
        prev.next=slow.next
    }
    return head
}
function printLinkedList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}
let l = new linkedList(1); 
l.next = new linkedList(2); 
l.next.next = new linkedList(3); 
l.next.next.next = new linkedList(4); 
l.next.next.next.next = new linkedList(5)

l=deleteMiddle(l)
printLinkedList(l)