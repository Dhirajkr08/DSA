function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=1;j<i+1;j++){
            str+=' '
        }
        for(let k=0;k<n-i;k++){
            str+='*'
        }
        console.log(str)
    }
}
printPattern(5)