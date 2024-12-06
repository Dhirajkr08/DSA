function rotatedArray(nums,target){
    let left=0,right=nums.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]>= nums[left]){
            if(nums[left]<=target && target < nums[mid]){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        else{
            if(nums[right]<=target && target <= nums[right]){
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
    }
    return -1
}
let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log(rotatedArray(nums,target));