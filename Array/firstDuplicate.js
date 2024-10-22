function firstDuplicate(arr){
    arr.sort((a,b)=>a-b)
    for(let i =0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            return arr[i]
        }
    }
    return arr
}
let arr=[7,23,15,42,7,56,89,15,91,42]
console.log(firstDuplicate(arr))