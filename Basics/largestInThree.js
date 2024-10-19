function findLargest (a,b,c) {
    if (a === null || b=== null || c === null) return;
    if (a>b && a>c) return a;
    else if (b>a && b>c) return b;
    else return  c;
}

console.log(findLargest(3,5,1));