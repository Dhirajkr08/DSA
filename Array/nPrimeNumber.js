function nPrimeNumber(n){
    let x=2
    let count=0
    let arr=[]
    while(arr.length<n){
        let flag=true;
        for(let j=2;j<x;j++){
            if((x%j)===0){
                flag=false;
                break;
            }
        }
        if(flag){
            arr.push(x)
            count++;
        }
        if(count===n){
            break
        }
        x++
    }
    return arr
}
let output=nPrimeNumber(5)
console.log(output)