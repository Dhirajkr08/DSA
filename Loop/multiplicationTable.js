function multiplicationTable(n){
    for(let i=2;i<=4;i++){
        let table=''
        for(let j=1;j<=10;j++){
            table+=(i*j)+" "
        }
        console.log(table)
    }
}
let n=4
multiplicationTable(n)

