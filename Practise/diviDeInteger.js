function divideInteger(dividend,divisor){
    let divide=parseInt(dividend/divisor)
    if(divide>2147483647){
        return 2147483647
    }
    else if(divide< -2147483648){
        return -2147483648
    }
    else{
        return divide
    }

}
let dividend=10,divisor=3
console.log(divideInteger(dividend,divisor))