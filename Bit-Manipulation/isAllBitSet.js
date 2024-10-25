function isAllBitSet(num){
    num=num.toString(2)
    for(let i=0;i<num.length;i++){
        if(num[i]!=='1'){
            return false
        }
    }
    return true
}
let num=10
console.log(isAllBitSet(num))