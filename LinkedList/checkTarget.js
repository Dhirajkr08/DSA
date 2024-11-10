class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
function printList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}
function checkTarget(head,t){
    while(head){
        if(head.val===t){
            return "Yes"
        }
        head=head.next
    }
    return "No"
}

let s=new LinkedList(2)
s.next=new LinkedList(4)
s.next.next=new LinkedList(6)
printList(s)
let output=checkTarget(s,9)
console.log(output)