function longestPalindrome(str) {
    if(str.length === 0)return 0
    let maxi=0
    function find(left,right){
        while(left>=0 && right<str.length && str[left]=== str[right]){
            left--
            right++
        }
        return right-left-1
    }
    for(let i=0;i<str.length;i++){
        let l1=find(i,i)
        let l2=find(i,i+1)
        maxi=Math.max(maxi,l1,l2)
    }
    return maxi

}
let s="babad"
console.log(longestPalindrome(s))