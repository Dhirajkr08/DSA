function uniqueChar(s){
    let set={}
    for(let i of s){
        if(i in set){
            set[i]++
        }
        else{
            set[i]=1
        }
    }
    for(let i of s){
        if(set[i]===1){
            return i 
        }

    }
    return -1
}
let str="programming"
console.log(uniqueChar(str))