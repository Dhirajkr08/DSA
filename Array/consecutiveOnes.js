function consecutiveOnes(arr){
    let count=0;maxi=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            count++;
            maxi=Ma.max(maxi,count)
        }
        else{
            count=0

        }
    }
    return maxi
}
let arr=[16,17,4,3,5,2]
console.log(consecutiveOnes(arr))