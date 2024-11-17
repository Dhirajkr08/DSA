class listNode{
    constructor(val){
        this.val = val;
        this.next=null
    }
}
function removeKthNode(head,k){
    let newHead=new listNode(0)
    newHead.next=head
    let temp=newHead,count=0
    while(temp.next){
        count++
        if(count%k===0){
            temp.next=temp.next.next
        }
        else{
            temp=temp.next
        }
    }
    return newHead.next
}