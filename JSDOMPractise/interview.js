const x=[]
x[4]=1;
x.forEach((i)=>{
    console.log('Hi')
})

function sum(a=5,b=7){
    console.log(a+b)
}
//sum(null,20)
sum(undefined)

const arr1=[1,2,3]
const str="1,2,3"
console.log(arr1 == str)