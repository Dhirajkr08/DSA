function pyramid(n){
    for(let i=1;i<=n;i++){
        let dig=''
        for(let j=1;j<i*2;j++){
            dig+=i
        }
        console.log(dig)
    }
}
pyramid(5)
