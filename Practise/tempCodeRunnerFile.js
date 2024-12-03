function removeDuplicate(s){
    let set={},ans='';
    for(let i of s){
        if(i in set){
            set[i]++
        }
        else{
            set[i]=1
        }
    }
    for(let i of s){
        if(set[i] === 1){
            ans+=i
        }

    }
    return ans

}
let s="progrmamming" //output should be progamin
console.log(removeDuplicate(s))