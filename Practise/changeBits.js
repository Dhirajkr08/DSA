function changeBits(n){
    n=n.toString(2)
    let ans=0
    for(let i in n){
        if(n[i]==='0'){
            ans+='1'
        }
        else{
            ans+=n[i]
        }
    }
    return parseInt(ans,2)
}
let n=5
console.log(changeBits(n))