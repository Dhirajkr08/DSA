function isAllBits(num){
    num=num.toString(2)
    for(let i in num){
        if(num[i] !== '1') return false

    }
    return true
}
let num=7
console.log(isAllBits(num))