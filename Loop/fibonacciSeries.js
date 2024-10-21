function fibonacciSeries(n){
    let a=0
    let b=1
    for(let i=2;i<=n;i++){
        let temp=a+b
        a=b
        b=temp
    }
    return a
}
console.log(fibonacciSeries(9))


//using recursion

function fiboNacci(n){
    if(n<=1)return n
    return fiboNacci(n-1)+fiboNacci(n-2);
}
console.log(fiboNacci(9))