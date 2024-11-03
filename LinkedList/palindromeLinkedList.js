function palindrome(head){
    let arr=[]
    while(head){
        arr.push(head.val)
        head = head.next
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false
        }
    }
    return true
}
