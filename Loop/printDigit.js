function printDigit(n) {
    while(n){
        let temp=n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
let n=153
printDigit(n)