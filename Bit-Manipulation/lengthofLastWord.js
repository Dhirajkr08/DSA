function lengthOfLastWOrd(s){
    s=s.split('').reverse().join('')
    s=s.trim()
    let count=0
    for(let i=0; i<s.length-1;i++){
        if(s[i]===' '){
            break
        }
        else{
            count++
        }
    }
    return count
}
let i="hello world"
console.log(lengthOfLastWOrd(i))