function peakElement(nums){
    let left=0,right=nums.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        // if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
        //     return mid
        // }
        if(nums[mid]<nums[mid+1]){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
    return left
}
let nums=[1,2,3,1]
console.log(peakElement(nums))