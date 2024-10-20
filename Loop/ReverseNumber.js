function reverseNumber(n){
    let rev=0
    while(n){
        let temp=n%10
        rev=rev*10+temp
        n=Math.floor(n/10)
    }
    return rev
}
let n=123
console.log(reverseNumber(n))   

