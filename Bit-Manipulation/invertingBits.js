function invertBits(N){
    N=N.toString(2).padStart(32,'0')
    let ans=0
    for(let i=0;i<N.length;i++){
        if(N[i]==='0'){
            ans+='1'
        }
        else{
            ans+="0"
        }
    }
    return parseInt(ans,2)
}
let N=1
console.log(invertBits(N))