function longestSubarray(arr){
    let maxi=0,count=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i-1]){
            count++
            maxi=Math.max(maxi,count)
        }
        else{
            maxi=1 
        }
    }
    return maxi
}
let arr=[1,2,3,1,2,3,4]
console.log(longestSubarray(arr))