function targetIndex(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
let arr=[1,2,3,4,5],target=3
console.log(targetIndex(arr,target))