function removeDuplicates(str){
    let res=''
    for(let i of str){
        if(res.indexOf(i) === -1){
            res+=i
        }
    }
    return res
}
let str="programming"
console.log(removeDuplicates(str))