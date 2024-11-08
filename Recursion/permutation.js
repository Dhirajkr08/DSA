function getPermutation(str){
    let arr=[]
    if(str.length===0)return ['']
    for(let i=0;i<str.length;i++){
        let char=str.slice(0,i)+str.slice(i+1)
        let perms=getPermutation(char)
        for(let j of perms){
            arr.push(str[i]+j)
        }
    }
    return arr
}
let str='abc'
console.log(getPermutation(str))