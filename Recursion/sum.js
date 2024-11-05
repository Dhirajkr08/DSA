function sum(n){
    function total(i=0,ans=0){
        if(i>=10  || i===n){
            return ans;
        }
        return total(i+2,ans+i)
    }
    return total()
}
let n=5
console.log(sum(n))