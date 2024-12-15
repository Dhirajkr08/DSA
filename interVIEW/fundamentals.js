
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

// class example{
//     constructor(name,number){
//         this.name = name
//         this.number = number
//     }
//     print(){
//         return this.name + " " + this.number
//     }
// }
// let e=new example('Jphn',23)
// example.prototype.print.apply(e)
// let e=new example('John',23)
// console.log(example.prototype.print.apply(e))

// let tb={
//     fullName:function(){
//         return (this.firstName+' '+this.lastName)
//     }
// }
// let person={
//     firstName:"John",
//     lastName:"Cena"
// }
// console.log(tb.fullName.apply(person))

// function sum(arr){
//     return arr.reduce((a,b)=>a+b,0)
// }
// let arr=[1,2,3,4,5]
// console.log(sum(arr))

//using spread operator
// function sum(arr1,arr2){
//     return[...arr1, ...arr2]
    

// }
// let arr1=[1,2,3,4,5]
// let arr2=[5,6,7,8,9]
// console.log(sum(arr1,arr2))

// //object properties
// let person={
//     name: "Dhiraj",
//     age:25,
//     greet:function(){
//         console.log('Hello,my name is '+ this.name)
//     }
// }
// console.log(person.name)
// person.greet()

// //api call methods 
// //first one async await method where we use function as 
// //ex: 
// async function call(addItem) {
//     try {
//         let result=await axios.post('link/data',addItem)
//         console.log(result)

//     }
//     catch (error) {
//         console.log('Error!',error)
//     }
    
// }

// //2nd method
// function call (addItem){
//     axios.post("",addItem)
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((error)=>{
//         console.log("Error!",error)
//     })
// }

// //copying array using spread operator
// let arr=[1,2,3,4,5]
// let copy=[...arr]
// console.log(copy)

// function sum(a,b,c){
//     return a+b+c
// }
// const num=[1,2,3]
// console.log(sum(...num))

// //converting string into array
// let string='Hello'
// let char=[...string]
// console.log(char)

// //rest parameter
// function arrr(a,b,...rest){
//     console.log(a)
//     console.log(b)
//     console.log(rest)
// }
// arrr(1,2,3,4,5)

// const defaultSetting={
//     time:'dark',
//     Notification:true, 
//     location:"enabled"
// }
// const userSetting={
//     Notification:false, 
//     location:'disabled'
// }
// const finalSetting={...defaultSetting,...userSetting}
// console.log(finalSetting)

// function hello(message,greeting){
//     console.log(greeting)
//     setTimeout(()=>{
//         console.log(message)
//     },1000)
// }
// let greeting="good Morning"
// let message="hey there"
// hello(message,greeting)

//promise resolve reject
// function greeting(me)

//resolve reject
// function message(m){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(m){
//                 resolve('done')
//             }
//             else{
//                 reject('fail')
//             }
//         },2000)
//     })
// }
// message(true)
//     .then((m)=>{
//         console.log(m)
// })
// .catch((m)=>{
//     console.log(m)
// }) 

// function message(name,age){
//     alert(name)
//     alert(age)
// }
// message('Dhiraj',26)

// let list=['apple','oranges','banana']
// console.log(list[0])
// list[0]='coconut'
// console.log(list)
// //list[0].replace('banana')
// console.log(list)
// list.shift()
// console.log(list)
// list.pop([1])
// console.log(list)

// let fruit=['jackFruit','pomegranate','papaya','guava','brinjal']
// fruit.splice(0,3)
// console.log(fruit)
// fruit.push('Hello')
// console.log(fruit)
// fruit.pop()
// console.log(fruit)


// let atr='Hry Potter!'
// let newAtr=atr.replace('Hry',"Harry")
// console.log(newAtr)

// fruit.forEach((i)=>{
//     console.log(i)
// })

// //apply

// function sum(a,b){
//     return a+b
// }
// let arr=[1,5]
// console.log(sum.apply(null,arr))


// function greet(message){
//     console.log(`${message},my name is ${this.name}`)
// }
// const p={name:"Dhiraj"}
// greet.call(p,'Good morning')


const per=function(){
    console.log(`hello ${this.first} ${this.last}`)
}
let per1={
    first:'Dhiraj',
    last:"Singh"
}
per.apply(per1)

function sum(a,b,c,d){
    return a+b+c+d 
}
let arr=[3,6,9,12]
console.log(sum.apply(null,arr))

//call
function greet(greeting,name){
    console.log(greeting,name)
}
let name='Dhiraj'
greet.call(this,'hello',name)


function intro(gr){
    console.log(gr + " " + this.name)

}
let person={
    name:"Dhiraj"
}
intro.call(person,'Good Morning')

//spread
let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
let newArr=[...arr1, ...arr2]
console.log(newArr)

//reduce
function add(arr){
    return arr.reduce((a,b)=>a+b,0)
}
let jrr=[1,2,3,4]
console.log(add(jrr))

//concat
let frr=[1,3,4,6,8]
let srr=[4,9,2,0,7]
let mrr=[12,13,14,1,4]
console.log(frr.concat(srr,mrr))
console.log(frr)

//function expression
let result=function(){
    console.log('hello')
}
result()
//with paraameter
let answer=function(a,b){
    return a+b 
}
console.log(answer(4,6))

//function declaration with no parameter
function answer1(){
    console.log('hello')
}
answer1()

//function declaration with parameter
function answer2(greet){
    return greet
}
let greet1='Hey there'
console.log(answer2(greet1))