class linkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }

}
function findStart(head){
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast){
            slow=head
            while(slow !== fast){
                slow=slow.next
                fast=fast.next
            }
            return slow
        }
    }
    return null
}