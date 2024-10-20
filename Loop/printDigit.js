function printDigit(n) {
    while(n){
        let temp=n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
let n=153
printDigit(n)


// use for loop
function printsDigit(m) {
    let len=Math.floor(Math.log(10))+1
    for(let i=0; i<len; i++){
        let temp=m%10
        m=Math.floor(m/10)
        console.log(temp)
    }

}
printsDigit(123)