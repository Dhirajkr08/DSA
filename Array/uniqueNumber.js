function uniqueNumber(arr){
    for(let i=0;i<arr.length;i++){
        let flag=true;
        for(let j=0;j<arr.length;j++){
            if(i !== j && arr[i]===arr[j]){
                flag=false;
                break;
            }
        }
        if(flag){
            return arr[i];
        }
    }
    return -1
}
let arr=[7,12,4,9,3,7,13,9,4,12,3]
console.log(uniqueNumber(arr))