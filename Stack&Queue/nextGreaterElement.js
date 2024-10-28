function nextGreaterElement(num){
    let ans=new Array(num.length)
    for(let i=0;i<num.length;i++){
        ans[i]=-1
        for(let j=0;j<num.length;j++){
            let index=(i+j)%num.length
            if(num[index]>num[i]){
                ans[i]=num[index]
                break
            }
        }

    }
    return ans
}
let num=[1,2,1]
console.log(nextGreaterElement(num))