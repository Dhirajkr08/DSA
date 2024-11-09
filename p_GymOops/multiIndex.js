function multiIndex(nums,target){
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            arr.push(i)
        }
    }
    if(arr.length>0){
        return arr
    }
    return [-1,-1]
}
let n=[5,7,7,8,8,10], target = 8
console.log(multiIndex(n,target))