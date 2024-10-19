// condition : use while loop

function prinLoop(n) {
    let i=1;
    while(i<=n) {
        (i%2===0) ? console.log(i) : null;
        i++;
    }
}
let n=10
prinLoop(n)