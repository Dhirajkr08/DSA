function findIndexOfTarget(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
}
let arr=[3,17,9,25,12,5,14,21],target=12
console.log(findIndexOfTarget(arr,target))