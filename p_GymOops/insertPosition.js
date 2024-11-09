function insertPosition(arr,target){
    let left=0,right=arr.length
    while(left<right){
        let mid=((left+right)/2)
        if(arr[mid]<target){
            left=mid+1
        }
        else{
            right=mid
        }
    }
    return left
}
let arr=[1,3,5,6],target=2
console.log(insertPosition(arr,target))