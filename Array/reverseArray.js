function reverseArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let temp=arr[l]
        arr[l]=arr[h]
        arr[h]=temp
        l++
        h--
    }
    return arr
}
let arr=[17, 32, 9, 5, 21, 14]
console.log(reverseArray(arr))