function sum(n){
    if(n===1)return 1;
    return n+sum(n-1)
}
let n=5 
console.log(sum(n)) //output =15

//as per question
function sum(n){
    function total(i=0,ans=0){
        if(i>=10 || i===n){
            return ans
        }
        return total(i+2,ans+i)
    }
    return total()
}
let m=5
console.log(sum(m))
