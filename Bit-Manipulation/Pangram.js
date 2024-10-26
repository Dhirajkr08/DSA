//here the question asking wheather 26 alphabet is present or not in the string
function panGram(string){
    let set=new Set()
    string=string.toLowerCase()
    for(let i of string){
        if(i>='a' && i<='z'){
            set.add(i)
        }
    }
    return set.size===26;
}
let string="The quick brown fox jumps over the lazy dog"
console.log(panGram(string))