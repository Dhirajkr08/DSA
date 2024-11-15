class LinkedList{
    constructor(value){
        this.value = value;
        this.next=null
    }
}
function inserTMiddle(head,k){
    let newHead=new LinkedList(k)
    if(!head)return newHead
    let i=0;temp=head
    while(temp){
        i++
        temp=temp.next
    }
    let mid=Math.floor(i/2)
    temp=head
    for(let j=1;j<mid;j++){
        temp=temp.next
    }
    newHead.next=temp.next
    temp.next=newHead
    return head
}
