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
function printLinkedList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}
let l=new listNode(1)
l.next=new listNode(2)
l.next.next=new listNode(3)
l.next.next=new listNode(4)
l=removeKthNode(l,3)
printLinkedList(l)
