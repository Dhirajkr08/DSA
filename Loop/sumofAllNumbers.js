function sumofAllNumbers(n){
    let sum=0
    for(let i=0;i<=n;i++){
        sum+=i
    }
    return sum
}
let n=10
console.log(sumofAllNumbers(n))


//recursion
function sumofAllNumbers(n){
    if(n<=0)return 0;
    return n+sumofAllNumbers(n-1)
}
console.log(sumofAllNumbers(10))
