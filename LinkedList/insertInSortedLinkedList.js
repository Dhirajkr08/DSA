class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
function insertInMiddle(head,k){
    let newHead=new ListNode(head)
    if(!head)return newHead;
    let len=1,temp=head;
    while(temp){
        len++
        temp=temp.next;
    }
    let mid=Math.floor(len/2);
    temp=head
    for(let i=0;i<mid;i++){
        temp=temp.next;
    }
    newHead.next=temp.next
    temp.next=newHead
    return head
}
//adding commit
