function perfectSquare(n){
    for(let i=1;i*i<=n;i++){
        console.log(i*i)
    }
}
perfectSquare(15)


//using recursion method
function perfect(m){
    function sq(i){
        if(i*i<=m){
            console.log(i*i)
            sq(i+1)
        }
    }
    sq(1)
}
perfect(15)