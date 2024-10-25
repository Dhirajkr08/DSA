function oddOccurance(arr){
    let count=0
    for(let i=0;i<arr.length;i++){
        count^=arr[i]
    }
    return count
}
let arr=[4,3,4,3,2]
console.log(oddOccurance(arr))