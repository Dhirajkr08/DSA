function longestCommonPrefix(input){
    input.sort()
    let left=input[0] , right=input[input.length-1] , ans=0;

    while(ans<left.length && ans<right.length && left[ans]===right[ans]){
        ans++
    }
    return left.substring(0,ans)

}
let input=["flower", "flow", "flight"]
console.log(longestCommonPrefix(input))