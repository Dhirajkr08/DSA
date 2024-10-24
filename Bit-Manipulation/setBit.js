function setBit(n,k){
    let power=Math.pow(2,k);
    if((power & n)===0){
        power+=n;
    }
    return power;

}
let m=5,z=1
console.log(setBit(m,z))



// 2nd method
function Bits(n,k){
    const ans=1 << k;
    return n | ans;
}
let n=5,k=1
console.log(Bits(n,k));
