class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null
    }
}
function palindromeLinkedList(head){
    let arr=[]
    while(head){
        arr.push(head.val)
        head = head.next
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[arr.length-1-i]){
            return false
        }
        return true
    }
}
function printLinkedList(head){
    while(head){
        console.log(head.val)
        head=head.next
    }
}
let l=new LinkedList(1)
l.next=new LinkedList(2)
l.next.next=new LinkedList(3)
l.next.next.next=new LinkedList(2)
l.next.next.next.next=new LinkedList(1)

console.log(palindromeLinkedList(l))