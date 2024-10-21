function sumofOddLength(arr){
    let total = 0;
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            if((j-i)%2===0){
                total+=sum
            }
        }
    }
    return total
}
let arr=[1,4,2,5,3]
console.log(sumofOddLength(arr))