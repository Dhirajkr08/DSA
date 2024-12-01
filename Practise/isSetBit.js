function isSetBit(num,k){
    let power=Math.pow(2,k)
    if((power & num)===0){
        return true
    }
    return false
}    
let num=13
console.log(isSetBit(num,2))