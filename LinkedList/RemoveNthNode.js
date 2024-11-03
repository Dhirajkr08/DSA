function removeNthNode(head,val){
    while(head && head.val===val)head=head.next
    let temp=head
    if(!temp)return null;
    let prev=null
    while(temp){
        if(temp.val===val)prev.next=temp.next
        else prev=temp
        temp=temp.next
    }
    return head
}

