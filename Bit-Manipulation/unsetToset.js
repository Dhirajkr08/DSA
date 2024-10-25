function unsetToset(n){
    n=n.toString(2)
    let ans=''
    for(let i=0;i<n.length;i++){
        if(n[i]==='0'){
            ans+='1'
        }
        else{
            ans+=n[i]
        }
    }
    return parseInt(ans,2)
}
let n=10
console.log(unsetToset(n))