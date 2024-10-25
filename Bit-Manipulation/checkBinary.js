function checkBinary(num,k){
    let ans=Math.pow(2,k)
    if((ans & num)===0)return false
    else return true
}
let num=13,k=2
console.log(checkBinary(num,k))