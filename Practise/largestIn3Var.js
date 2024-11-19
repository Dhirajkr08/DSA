function largest(a,b,c){
    //ternary operation
    
    return a>b && a>c ? a :
    b>a && b > c ? b : c
}
let a=3,b=5,c=1
console.log(largest(a,b,c))