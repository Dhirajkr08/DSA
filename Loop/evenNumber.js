//exclude numbers which is divisble by 4

function divisble(n){
    for(let i=1;i<=n;i++){
        if(i%4===0){
            continue
        }
        else if(i%2===0){
            console.log(i)
        }
    }
}
 divisble(10)