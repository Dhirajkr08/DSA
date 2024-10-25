function indexOfZero(num){
    num=num.toString(2)
    let arr=[]
    for(let i=0;i<num.length;i++){
        if(num[i]==='0'){
            arr.push(i)
        }
    }
    return arr
}
let num=10
console.log(indexOfZero(num))