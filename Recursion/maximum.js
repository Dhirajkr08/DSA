function findMaximum(arr){
    function maxi(index,current){
        if(index===arr.length){
            return current
        }
        if(arr[index]>current){
            current=arr[index]
        }
        return maxi(index+1,current)
    }
    return maxi(0,0)
}
let arr=[4,8,2,10,6]
console.log(findMaximum(arr))