function intersectionNode(headA,headB){
    if(!headA || !headB)return null
    let tempA=headA,tempB=headB
    while(tempA !== tempB) {
        if(tempA === null)tempA=headB
        else tempA=tempA.next
        if(tempB===null)tempB=headA
        else tempB=tempB.next
    }
    return tempA

}