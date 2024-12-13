
 //this is function declaration
function message(a) {
    console.log(a)
}
let a="hello"
add(a)

//function expression 
let b=22
const message=function(a){
    console.log( a+b)
}
message(b)


//Hoisting in javascript
console.log(a)
let a='Hello'

// and if you use var then it will be undefined 
console.log(a)
var a='Hello'