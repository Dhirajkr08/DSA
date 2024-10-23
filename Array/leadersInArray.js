function findLeaders(jrr){
    let arr=[]
    let maxi=-Infinity
    for(let i=jrr.length-1;i>=0;i--){
        if(jrr[i]>=maxi){
            maxi=jrr[i]
            arr.push(jrr[i])
        }
    }
    return arr.reverse()
    
}
let arr=[16,17,4,3,5,2]
console.log(findLeaders(arr))