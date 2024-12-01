function maxWords(sentences){
    let maxi=0
    for(let i in sentences){
        let count=i.split('')
        maxi=Math.max(maxi,count)
    }
    return maxi
}
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(maxWords(sentences))