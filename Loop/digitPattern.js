function digitPattern(n){
    for(let i=1;i<=n;i++){
        let dig=''
        for(let j=1;j<i+1;j++){
            dig+=j
        }
        console.log(dig)

    }
}
digitPattern(4)