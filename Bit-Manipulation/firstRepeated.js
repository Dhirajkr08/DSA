function firstRepeated(s){
    let char={}
    for(let i of s){
        if(i in char){
            char[i] ++
        }
        else{
            char[i] = 1
        }
    }
    for(let i of s){
        if(char[i]>1){
            return i
        }
    }
    return '#'
}
let s="sharpener"
console.log(firstRepeated(s))

//if you want to print e as an answer
function repeatedChar(s){
    let set={}
    for(let i of s){
        if(i in set){
            return i
        }
        else{
            set[i] = 1
        }
    }
    return '#'
}

let t='Sharpener'
console.log(repeatedChar(t))