function anaGram(s1,s2){
    if(s1.length !== s2.length) return false
    return s1.split('').sort().join('')===s2.split('').sort().join('')
}
let s1="abcd",s2="acdb"
console.log(anaGram(s1,s2))