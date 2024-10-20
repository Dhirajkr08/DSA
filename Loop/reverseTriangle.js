//by using for loop
function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
}
printPattern(5)

//by using while loop
function Pattern(m){
    let i=0
    while(i<=m){
        let j=0      
        let str=''
        while(j<=m-i-1){
            str+="*"
            j++
        }
        i++
        console.log(str)

    }
}
Pattern(5)