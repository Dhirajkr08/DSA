function removeDuplicate(s){
    let ans=''
    for(let i of s){
        if(!ans.includes(i)){
            ans+=i
        }
    }
    return ans
}
let s="programming"
console.log(removeDuplicate(s))


//2nd method
function removeDup(s){
    let set={}
    let ans=''
    for(let i of s){
        if(!set[i]){
            ans+=i
            set[i]=true
        }
    }
    return ans
}
let p="programming"
console.log(removeDup(p))