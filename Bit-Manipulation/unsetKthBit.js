function unsetKthBit(num,k){
    num=num.toString(2)
    let ans=0
    for(let i=0;i<num.length;i++){
        if(i=== num.length-1-k){
            ans+=0
        }
        else{
            ans+=num[i]
        }
    }
    return parseInt(ans,2)
}
let num=13,k=2
console.log(unsetKthBit(num,k))