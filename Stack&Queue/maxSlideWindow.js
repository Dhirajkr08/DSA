function maxSlideWindow(nums,k){
    let queue=[],ans=[]
    for(let i=0;i<nums.length;i++){
        if(queue.length>=0 && queue[queue.length-1]<i-k+1){
            queue.shift()
        }
        while(queue.length>=0 && nums[queue[queue.length-1]]<nums[i]){
            queue.pop()
        }
        queue.push(i)
        if(i>=k-1){
            ans.push(nums[queue[0]])
        }
    }
    return ans
}
let nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlideWindow(nums,k))