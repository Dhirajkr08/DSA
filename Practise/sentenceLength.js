function sentenceLength(s){
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]===' '){
            break
        }
        else{
            count++
        }
    }
    return count
}
let s="How are you"
console.log(sentenceLength(s))