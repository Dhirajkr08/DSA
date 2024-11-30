function binarySearch(n){
    n=n.toString(2)
    for(let i=0;i<n.length;i++){
        if(n[i]===n[i-1]){
            return false
        }
    }
    return true
}
let n=7
console.log(binarySearch(n))