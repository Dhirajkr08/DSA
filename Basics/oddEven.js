function findOddEven(n){
    return (n === 0 ) ? -1 :
    (n%2 === 0) ? 'Even' : "Odd";
}
let n=14
console.log(findOddEven(n))