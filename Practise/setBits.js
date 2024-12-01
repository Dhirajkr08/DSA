function setBits(n,k){
    let power=Math.pow(2,k);
    if((power & n) ===0){
        power+=n
    }
    return power

}
let n=5,k=1
console.log(setBits(n,k));

//2nd method
function Bits(m,l){
    let ans=1<<l
    return m|ans
}
let m=5,l=1
console.log(Bits(m,l))   