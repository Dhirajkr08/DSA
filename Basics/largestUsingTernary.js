function findLargest(a,b,c){
    return ( a === null && b === null && c === null) ? "Invalid":
    (a>b && a>c) ? a : (b>a && b>c) ? b : c ;

}
console.log(findLargest(10,20,30))