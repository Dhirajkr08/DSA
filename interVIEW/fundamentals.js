
//  //this is function declaration
// function message(a) {
//     console.log(a)
// }
// let a="hello"
// add(a)

// //function expression 
// let b=22
// const message=function(a){
//     console.log( a+b)
// }
// message(b)


// //Hoisting in javascript
// console.log(a)
// let a='Hello'

// // and if you use var then it will be undefined 
// console.log(a)
// var a='Hello'

// //in function declaration if you call the function before excution with the varibale it will run example
// res(32)
// function res(a){
//     console.log(a)
// }

// // but in in function refrence it will be an error if you call the refrence befor the declaration of body
// //ex:
// res('Hello') //it will give an type error
// const res=function(a){
//     console.log(a)
// }
// res('Hello')// but it will give an result 

// //basically in function refrence hoisting play an important role

// //string is immutable arr is mutable set is 

// global.g= "Hey Jude"
// //console.log(global.g)
// function displayVar(){
//     console.log(global.g)
// }
// displayVar()

//apply

// function greeting(s,j){
//     console.log(s ,j)

// }
// let s="Hello",j='junior'
// greeting.apply(null,[s,j])


//so basically in apply function name .apply(thisArg,[argsArray])

// for example
//the value to use as this when calling a function(thisArg)

// and  argument array is an array

// function greet(g,name){
//     console.log(`${g},${name}`)
// }
// let args=['hello','Alice']
// greet.apply(null,args)

// let number=[1,4,5,2,7,9]
// let max=Math.max.apply(null,number)
// console.log(max)

class example{
    constructor(name,number){
        this.name = name
        this.number = number
    }
    print(){
        return this.name + " " + this.number
    }
}
// let e=new example('Jphn',23)
// example.prototype.print.apply(e)
let e=new example('John',23)
console.log(example.prototype.print.apply(e))

let tb={
    fullName:function(){
        return (this.firstName+' '+this.lastName)
    }
}
let person={
    firstName:"John",
    lastName:"Cena"
}
console.log(tb.fullName.apply(person))

function sum(arr){
    return arr.reduce((a,b)=>a+b,0)
}
let arr=[1,2,3,4,5]
console.log(sum(arr))

//using spread operator
function sum(){
    
}