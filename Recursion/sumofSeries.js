function sumOfSeries(n){
    function sum(i){
        if(i>n)return 0

        return i+sum(i+1)
    }
    return sum(1)
}
console.log(sumOfSeries(5))