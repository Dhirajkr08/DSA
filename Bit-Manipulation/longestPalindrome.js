function longestPalindrome(s){
    if(s.length===0)return 0
    let maxi=1;
    function find(left,right){
        while(left >=0 && right <s.length && s[left]===s[right]){
            left--;
            right++
        }
        return right-left-1

    }
    for(let i=0;i<s.length;i++){
        let l1=find(i,i)
        let l2=find(i,i+1)
        maxi=Math.max(maxi,l1,l2)
    }
    return maxi
}
let s="cbbd"
console.log(longestPalindrome(s))
