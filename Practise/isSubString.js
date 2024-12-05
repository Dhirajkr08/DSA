function isSubString(a,b){
    if(a.length<b.length)return false
    for(let i=0;i<=a.length-b.length;i++){
        let flag=true
        for(let j=0;j<b.length;j++){
            if(a[j+i]!==b[j]){
                flag=false
                break
            }
        }
        if(flag)return true
    }
    return false

}
let a='hello',b='pp'
console.log(isSubString(a,b))