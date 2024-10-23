function minimumRecolor(s,k){
    let mini=Infinity;
    for(let i=0;i<= s.length-k;i++){
        let count=0
        for(let j=i;j<i+k;j++){
            if(s[j]==='W'){
                count++;
            }
        }
        mini=Math.min(mini,count);
    }
    return mini;
}
let s="BWBBW",k=3
console.log(minimumRecolor(s,k))