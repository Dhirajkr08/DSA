
//By using Recursion
function sumOfX(n,X){
    if (n<=1 && X<=0)return 0
    return (n%X===0 ? n : 0)+sumOfX(n-1,X)
}
console.log(sumOfX(20,4))

//using for loop
function sumOfX(m,x){
    let sum=0
    for(let i=1;i<=m;i++){
        if(i%x===0){
            sum+=i

        }
        
    }
    return sum
}
console.log(sumOfX(20,4))