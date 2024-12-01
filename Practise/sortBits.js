// function sortBits(arr){
//     arr.sort((a,b)=>{
//         let A= a.toString(2).split('').filter(sh=>sh==='1').length
//         let B= b.toString(2).split('').filter(sh=>sh==='1').length
//         return A-B || a-b
//     })
//     return arr
// }
// let arr=[0,1,2,3,4,5,6,7,8]
// console.log(sortBits(arr))

function sortBits(arr){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter(sh=>sh==='1').length
        let B=b.toString(2).split('').filter(sh=>sh==='1').length
        return A-B || a-b 
    })
}
let arr=[0,1,2,3,4,5,6,7,8]
console.log(sortBits(arr))