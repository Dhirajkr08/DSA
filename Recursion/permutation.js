// function permutation(a){
//     let ans=[]
//     if(a.length===0)return ['']
//     for(let i=0;i<a.length;i++){
//         let char=a.slice(0,i)+a.slice(i+1)
//         let perms=permutation(char)
//         for(let j of perms){
//             ans.push(str[i]+j)
//         }
//     }
//     return ans
// }
// let str='abc'
// let output=permutation(str)
// for(let i=0;i<output.length;i++){
//     console.log(output[i])
// }

function getPermutation(str){
    let result=[]
    if(str.length===0)return ['']
    for(let i=0;i<str.length;i++){
        let char=str.slice(0,i)+str.slice(i+1)
        let perms=getPermutation(char)
        for(let j of perms){
            result.push(str[i]+j)
        }
    }
    return result
}
let str='abc'
let output=getPermutation(str)
for(let i=0;i<output.length;i++){
    console.log(output[i])
}
