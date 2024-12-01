function invertBits(num) {
    num=num.toString(2).padStart(32,'0')
    let sum=0
    for(let i in num){
        if(num[i]==='0'){
            sum=sum+"1"
        }
        else{
            sum+="0"
        }
    }
    return parseInt(sum,2)
}
let num=1
console.log(invertBits(num))

//2nd method
function invBits(n){
    const ans=0xffffffff
    return (n^ans)>>>0
    
}
let n=1
console.log(invBits(n))