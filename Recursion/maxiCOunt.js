function maxiCount(arr,target){
    if(arr.length<=1)return 0
    function count(i,c){
        if(i===arr.length){
            return c
        }
        if(arr[i]===target){
            c++
        }
        return count(i+1,c)
    }
    return count(0,0)
}
let arr=[1,2,2,3,2,4,2,5],target=2
console.log(maxiCount(arr,target))