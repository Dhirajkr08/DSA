class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
function insertInMiddle(head,k){
    let newHead=new LinkedList(k)
    if(!temp)return newHead
    let i=0;temp=head
    while(temp){
        i++
        temp=temp.next
    }
    let mid=Math.floor(i/2)
    temp=head
    for(let i=0;i<mid;i++){
        temp=temp.next
    }
    newHead.next=temp.next
    temp.next=newHead
    return head
}


