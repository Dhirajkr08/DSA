class LinkedList{
    constructor(val){
        this.val=val
        this.next=null
    }
}
function deleteDuplicate(head){
    let temp=head
    while(temp && temp.next){
        if(temp.val === temp.next.val){
            temp.next=temp.next.next
        }
        else{
            temp=temp.next
        }
    }
    return head
}
function printLinkedList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}

let l=new LinkedList(1)
l.next=new LinkedList(1)
l.next.next=new LinkedList(2)
l.next.next.next=new LinkedList(2)
l=deleteDuplicate(l)
printLinkedList(l)