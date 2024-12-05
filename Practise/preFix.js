function commonPrefix(arr){
    if(arr.length===0)return ''
    arr.sort()
    let ans='',left=arr[0],right=arr[arr.length-1];
    while(ans< left.length && ans< right.length && left[ans]===right[ans]){
        ans++
    }
    return left.substring(0,ans)

}
let arr=["flower", "flow", "flight"]
console.log(commonPrefix(arr))