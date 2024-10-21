function minimumInarr(arr){
    let mini=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]<mini){
            mini=arr[i]
        }
    }
    return mini
    
}
let arr=[5,6,2,9,-2]
console.log(minimumInarr(arr))
//Drj