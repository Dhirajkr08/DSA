function findMissing(arr){
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== i+1){
            return i+1;
        }
    }
    return  -1;
    
}
let arr=[9,6,4,3,5,7,2,1]
console.log(findMissing(arr))