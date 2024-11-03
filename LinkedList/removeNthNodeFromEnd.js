function removeNthNodeEnd(head,n){
    let newNode=new ListNode(0)
    newNode.next=head
    let first=newNode,last=newNode
    for(let i=0;i<=n;i++){
        first=first.next
    }
    while(first){
        first=first.next
        last=last.next
    }
    last.next=last.next.next
    return newNode.next

}