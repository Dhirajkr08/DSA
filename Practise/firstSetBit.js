function firstSetBit(num){
    num=num.toString(2)
    for(let i=num.length-1;i>=0;i--){
        if(num[i]==='1')return num.length-i
    }
    return -1
}
let num=18
console.log(firstSetBit(num))

//2nd method

function firstSetBIt(n){
    n=n.toString(2).split('').reverse()
    for(let i=0;i<=n.length;i++){
        if(n[i]==='1')return i+1
    }
    return -1

}
let n=18
console.log(firstSetBIt(n))