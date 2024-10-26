function nonRepeatedChar(string){
    let set={}
    for(let i of string) {
        if(i in set) {
            set[i]++
        }
        else {
            set[i] = 1
        }
    }
    for(let i of string){
        if(set[i]===1){
            return i
        }

    }
    return -1
}
let s="programming"
console.log(nonRepeatedChar(s))