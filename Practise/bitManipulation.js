//and operator
let n= 8 
if(n & 1){
  console.log(n + "is odd")
}
else{
  console.log(n + "is even")
}


//XoR operator
//swap two number 
let a=8 ,b=4 
a=a^b 
b=a^b 
a=a^b
console.log(a,b)

//finding odd occurance once 
let n=[5,4,6,8,3]
let res=0
for(let i of n){
  res^=i 
}
console.log(res)

// and operator and right shift
function countSetBits(num){
  let count=0
  while(num){
    count+=num&1 
    num>>=1 
  }
  return count
}

console.log(countSetBits(11))