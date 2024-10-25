function rightmostIndex(n){
    n=n.toString(2).split('').reverse()
    for(let i=1;i<=n.length;i++){
        if(n[i]==='1'){
            return i+1
        }
    }
    return -1
}
let n=18
console.log(rightmostIndex(n))