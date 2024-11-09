function countZero(arr,n){
    let count=0
    for(let i=0;i<n;i++){
        if(arr[i]===0){
            count++;
        }
    }
    return count;
}
let n=12,arr=[1,1,1,1,1,1,1,1,0,0,0,0]
console.log(countZero(arr,n))
