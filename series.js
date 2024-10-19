// condition : use while loop only 
// By add on i am using terenary operator!

function printSeries (n) {
    let i=1
    while(i<=n) {
        (i*i<=n) ? console.log(i*i) : null
        i++
    }

}
printSeries(49)