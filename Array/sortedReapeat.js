function sortedRepeat(jrr){
    jrr.sort((a,b)=>a-b);
    let arr=[]
    for(let i=0;i<jrr.length;i++){
        if(jrr[i]===jrr[i+1]){
            arr.push(jrr[i])
        }
    }
    return arr
}
let jrr=[4,3,2,7,8,2,3,1]
console.log(sortedRepeat(jrr))