function countZeroOnes(num){
    num=num.toString(2)
    let zero=0,one=0
    for(let i=0;i<num.length;i++){
        if(num[i]==='0')zero+=1
        else one+=1
    }
    return [zero,one]

}
let num=10
console.log(countZeroOnes(num))