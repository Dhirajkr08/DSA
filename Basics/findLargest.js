function findLargest (a,b) {
    if ((a === null) || (b === null)) return 
    if(a > b) return a 
    else return b
}
console.log(findLargest(3,4))