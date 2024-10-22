function reverseArray(arr){
    let l=0
    let h=arr.length-1
    while(l<h){
        let temp=arr[l]
        arr[l]=arr[h]
        arr[h]=temp
        l++
        h--
    }
    return arr
}
let arr=[17, 32, 9, 5, 21, 14]
console.log(reverseArray(arr))

//recursion  method


function reverseArray(jrr) {
    return reverseArrayHelper(jrr, 0, jrr.length - 1);
}

function reverseArrayHelper(jrr, l, h) {
    if (l >= h) {
        return jrr;
    }
    
    let temp = jrr[l];
    jrr[l] = jrr[h];
    jrr[h] = temp;

    
    return reverseArrayHelper(jrr, l + 1, h - 1);
}

let jrr = [17, 32, 9, 5, 21, 14];
console.log(reverseArray(jrr));  
