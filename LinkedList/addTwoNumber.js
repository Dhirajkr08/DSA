function addTwoNumber(l1,l2){
    let newNode=new ListNode(0)
    let temp=newNode,ans=0
    while(l1 || l2 || ans){
        let sum=ans
        if(l1){
            sum+=l1.val
            l1=l1.next

        }
        if(l2){
            sum+=l2.val
            l2=l2.next
        }
        ans=Math.floor(sum/10)
        temp.next=new ListNode(sum%10)
        temp=temp.next

    }
    return newNode.next

}
