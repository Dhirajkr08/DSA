function hamminghWeight(n){
    n=n.toString(2)
    let count=0
    for(let i=0;i<n.length;i++){
        if(n[i]==='1'){
            count++
        }

    }
    return count
}
let n= 0000000000000000000000000001011
console.log(hamminghWeight(n))