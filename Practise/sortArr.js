function sortArray(arr){
    arr.sort((a,b)=>a-b)
    return arr
}
let arr=[2,0,2,1,1,0]
console.log(sortArray(arr))

// 2nd method you can use any sort method
//using selection sort
function sortArray(arr){
    for(let i=0;i<arr.length;i++){
        let temp=i 
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[temp]){
                temp=j
            }
        }
        let ans=arr[i]
        arr[i]=arr[temp]
        arr[temp]=ans
    }
    return arr
}
let a=[2,0,2,1,1,0]
console.log(sortArray(a))