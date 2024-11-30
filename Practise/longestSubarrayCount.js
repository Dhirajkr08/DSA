function longestSubArray(nums){
    let arr={},maxi=0,left=0
    for(let i=0;i<nums.length;i++){
        if(nums[i] in arr && arr[nums[i]]>=left ){
            left=arr[nums[i]]+1
        }
        arr[nums[i]]=i
        maxi=Math.max(maxi,i-left+1)
    }
    return maxi
}
let arr=[1,2,3,1,2,3,4,5]
console.log(longestSubArray(arr))