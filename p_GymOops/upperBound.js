function upperBound(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]>target)return i;
    }
    return array.length
}
let arr=[1,2,3,3,5,6,8],target=3
console.log(upperBound(arr,target))