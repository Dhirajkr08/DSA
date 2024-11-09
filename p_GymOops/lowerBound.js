function lowerBound(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return arr.length
}
let arr=[1,2,3,3,5,6,8],target=3
console.log(lowerBound(arr,target))