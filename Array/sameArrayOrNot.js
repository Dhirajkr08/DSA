function similarArray(arr,jrr){
    if(arr.length !== jrr.length){
        return "False";
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== jrr[i]){
            return "False"
        }
    }
    return "True";
    
}
let arr=[3,7,2,8,6]
let jrr=[3,7,2,8,6]
console.log(similarArray(arr,jrr))