//this code will work because entire function declaration will go at top during the execution it can call directly
getCall()
function getCall(){
    console.log('Namaste Sharpener')
}

//this will not work will show myCall is not declared Cause 
//varaiable and function declaration should be at the top during execution 
myCall(5)
var myCall=function(n){
    console.log(n*n)
}

//another example
console.log(a)
var a = 23 //this code will print undefined

// while using block scope like let and const
// it will display reference error
console.log(ad)
let ad='Hey There'
const jm="Just do it"



