function countZeroOne(num){
    num=num.toString(2)
    let zero=0,one=0
    for(let i=0;i<num.length;i++){
        if(num[i]==='0'){
            zero++
        }
        else{
            one++
        }
    }
    return [zero,one]
}
let n=10
console.log(countZeroOne(n))