function hexaDecimal(num){
    if(num===0)return '0';
    if(num<0) num=0xffffffff+num+1
    let hex=num.toString(16)
    return hex 
}
let n=26
console.log(hexaDecimal(n))