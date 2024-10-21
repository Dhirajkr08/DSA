function printDigitSeries(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let  digi=''
            for(let k=i;k<j+1;k++){
                digi+=arr[k]
            }
            console.log(digi)
        }
        
    }
}
let arr=[1,2,3,4,5]
printDigitSeries(arr)