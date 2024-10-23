function sortedArray(arr){
    return arr.sort((a,b)=>a-b)
}
let frr=[2,0,2,1,1,0]
console.log(sortedArray(frr))

function sortArray(jrr){
    for(let i=0;i<jrr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && temp<arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
let arr=[2,0,2,1,1,0]
console.log(sortArray(arr))