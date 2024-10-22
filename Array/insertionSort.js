function InsertIonSort(arr){
    for(let i=0;i< arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
let arr=[5,1,4,3,2]
console.log(InsertIonSort(arr))