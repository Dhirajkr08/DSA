function lexicographically(s){
    let maxi=0, maxiChar='', set={}
    for(let i of s){
        if(i in set){
            set[i]++
        }
        else{
            set[i]=1
        }
    }
    for(let i of s){
        if(maxi < set[i] || maxi === set[i] && maxi > set[i]){
            maxi=set[i]
            maxiChar=i
        }
    }
    return maxiChar
}
let s="aabcdee"
console.log(lexicographically(s))