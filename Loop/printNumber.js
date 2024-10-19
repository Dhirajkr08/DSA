// condition of series : it should  not have any digit which is divisible by 5

// have to use while loop only

function printSeries(n) {
    let i = 1;
    while(i<=n) {
        if(i%5===0) {
            i++
            continue
        }
        else {
            
            console.log(i)
            i++
        }
    }

}
let n=10
printSeries(n)