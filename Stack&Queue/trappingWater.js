function trappingWater(height){
    let left=0,right=height.length-1
    let leftMax=height[left],rightMax=height[right]
    let ans=0
    while(left<right){
        if(leftMax<rightMax){
            left++
            leftMax=Math.max(leftMax,height[left])
            ans+=leftMax-height[left]
        }
        else{
            right--
            rightMax=Math.max(rightMax,height[right])
            ans+=rightMax-height[right]
        }
    }
    return ans

}
let height=[4,2,0,3,2,5]
console.log(trappingWater(height))