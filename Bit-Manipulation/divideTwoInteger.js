function divideInteger(dividend,divisor){
    let div=parseInt(dividend/divisor)
    if(div>2147483647) return 2147483647
    else if(div<-2147483648) return -2147483648
    else return div
}
let a=10,b=3
console.log(divideInteger(a,b))