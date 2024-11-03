function jewelsStone(jewels,stones){
    let count=0
    for(let i=0;i<=jewels.length;i++){
        for(let j=0;j<stones.length;j++){
            if(jewels[i]===stones[j]){
                count++
            }
        }
    }
    return count
}
let jewels = "aA", stones = "aAAbbbb"
//let jewels = "z", stones = "ZZ"
console.log(jewelsStone(jewels,stones))