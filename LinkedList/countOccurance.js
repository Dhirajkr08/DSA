class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null
    }
}
function findOccurance(head,k){
    let count=0,temp=head
    while(temp){
        if(temp.val===k){
            count++;
        }
        temp=temp.next
    }
    return count
}
function printLinkedList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}

let n=new LinkedList(1)
n.next=new LinkedList(2)
n.next.next=new LinkedList(2)
n.next.next.next=new LinkedList(2)
n.next.next.next.next=new LinkedList(5)
//printLinkedList(n)
console.log(findOccurance(n,2))