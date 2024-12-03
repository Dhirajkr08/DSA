function removeDuplicate(s){
    ans='';
    for(let i of s){
        if(!ans.includes(i)){
            ans+=i;
        }
    }
    return ans

}
let p="programming" //output should be progamin
console.log(removeDuplicate(p))


//2nd method
function removeDuplicate(s){
    let set=new Set(),ans=''
    for(let i of s){
        if(!set.has(i)){
            set.add(i)
            ans+=i
        }
    }
    return ans
}
let s="programming"
console.log(removeDuplicate(s))