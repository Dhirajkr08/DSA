class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null
    }
}
function mergeLinkedList(l1,l2){
    let newHead=new LinkedList(0)
    let temp=newHead
    while(l1 && l2){
        if(l1.val<l2.val){
            temp.next=l1
            l1=l1.next
        }
        else{
            temp.next=l2
            l2=l2.next
        }
        temp=temp.next
    }
    if(l1){
        temp.next=l1
    }
    else{
        temp.next=l2
    }
    return newHead.next
}
let l1 = new LinkedList(1); 
l1.next = new LinkedList(3); 
l1.next.next = new LinkedList(5); 
let l2 = new LinkedList(2); 
l2.next = new LinkedList(4); 
l2.next.next = new LinkedList(6)

let merge=mergeLinkedList(l1,l2)

function printLinkedList(head) {
    while (head) {
        console.log(head.val); 
        head = head.next; 
    }
} 
printLinkedList(merge)   