function oddOccurance(arr){
    let ans=0
    for(let i of arr){
        ans^=i
    
    }
    return ans
}
let arr=[4,3,4,3,2]
console.log(oddOccurance(arr))