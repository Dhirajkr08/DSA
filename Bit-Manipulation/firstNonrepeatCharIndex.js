function indexOfNoRepeat(s){
    let char={}
    for(let i of s){
        if(i in char){
            char[i]++
        }
        else{
            char[i]=1
        }
    }
    for(let i=0;i<s.length;i++){
        if(char[s[i]]===1){
            return i
        }
    }
    return -1
}
let s="programming"
console.log(indexOfNoRepeat(s))