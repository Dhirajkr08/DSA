
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

//in function declaration if you call the function before excution with the varibale it will run example
res(32)
function res(a){
    console.log(a)
}

// but in in function refrence it will be an error if you call the refrence befor the declaration of body
//ex:
res('Hello') //it will give an type error
const res=function(a){
    console.log(a)
}
res('Hello')// but it will give an result 

//basically in function refrence hoisting play an important role
