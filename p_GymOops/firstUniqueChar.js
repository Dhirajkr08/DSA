function uniQueCharIndex(str){
    let set={}
    for(let i of str){
        if(i in set){
            set[i]++
        }
        else{
            set[i]=1
        }
    }
    for(let i=0;i<str.length;i++){
        if(set[str[i]]===1){
            return i
        }
    }
    return -1

}
let str="programming"
//let str='aabb'
console.log(uniQueCharIndex(str))