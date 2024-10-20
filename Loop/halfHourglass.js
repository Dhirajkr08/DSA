function printPattern(n) {
    for(let i=0;i<n;i++) {
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)    
    }
    for(let k=0;k<n;k++) {
        let str=''
        for(let l=0;l<k+1;l++){
            str+="*"
        }
        console.log(str)
    }
    
}
printPattern(5)