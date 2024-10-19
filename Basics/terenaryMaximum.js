function findMaximum(a,b){
    return (a === null || b===null) ? 'Invalid' :
    (a>b) ? a : b;

}
console.log(findMaximum(3,5))