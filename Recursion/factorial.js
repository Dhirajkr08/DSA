function factorial(n){
    function ans(i){
        if(i>n)return 1;
        return i*ans(i+1)

    }
    return ans(1)
}
let n=5
console.log(factorial(n))