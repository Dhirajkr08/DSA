function commonPrefix(arr){
    if(arr.length===0)return
    arr.sort()
    let left=0,right=arr[arr.length-1],ans=0
    while(ans< left.length && ans < right.length && left[ans]===right[ans]){
        ans++
    }
    return ans.substring(0,ans)

}
let arr=["flower", "flow", "flight"]
console.log(commonPrefix(arr))