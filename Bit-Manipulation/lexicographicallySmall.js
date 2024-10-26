function lexico(s){
    let maxi=0
    let char={}
    let maxiChar=''
    for(let i of s){
        if(i in char){
            char[i]++
        }
        else{
            char[i]=1
        }
    }
    for(let i of s){
        if(maxi < char[i] || maxi===char[i] && maxi>char[i]){
            maxi=char[i]
            maxiChar=i
        }
    }
    return maxiChar
}
let s="aabcdee"
console.log(lexico(s))