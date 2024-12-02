function pangram(s){
    s=s.toLowerCase();
    let ans=new Set()
    for(let i of s){
        if(i>='a' && i<='z'){
            ans.add(i)
        }
    }
    return ans.size===26
}
let s="The quick brown fox jumps over the lazy dog"
console.log(pangram(s))