function reverseLinkedList(head){
    let temp=head,prev=null,next=null;
    while(temp){
        next=temp.next
        temp.next=prev
        prev=temp
        temp=next
    }
    return  prev
}
