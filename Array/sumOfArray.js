function sumOfArray(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
let arr=[4,7,2,9,1,5]
console.log(sumOfArray(arr))