function armstrong(n){
    let num=n //storing the original value to match with sum
    let sum=0
    while(n>0) {
        let temp= n%10
        sum+=temp**3
        n=Math.floor(n/10)

    }
    return (num===sum)
}
let n=153
console.log(armstrong(n))