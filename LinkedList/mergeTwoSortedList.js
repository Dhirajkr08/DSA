function mergeLinkedList(l1,l2){
    let newNode=new listNode(0)
    let temp=newNode
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
    return newNode.next
}