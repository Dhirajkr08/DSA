function booleanString(s,t){
    if(s.length !== t.length)return false
    return s.split('').sort().join('')=== t.split("").sort().join("")

}
let s="abc",t="wor"
console.log(booleanString(s,t))