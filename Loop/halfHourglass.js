// By using for loop

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



//By using while loop

function pattern(m){
    let i=0
    while(i<m){
        let j=0
        let str=''
        while(j<m-i){
            str+='*'
            j++
        }
        i++
        console.log(str)
    }
    let k=0
    while(k<m){
        let l=0
        let str=''
        while(l<k+1){
            str+="*"
            l++
        }
        k++
        console.log(str)
    }
}
pattern(5)
