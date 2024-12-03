function repeatingChar(str){
    let set={}
    for(let i of str){
        if(i in set){
            set[i]++
        }
        else{
            set[i]=1
        }
    }
    for(let i of str){
        if(set[i]>1){
            return i 
        }
    }
    return '#'
}
let input='sharpener'
console.log(repeatingChar(input))