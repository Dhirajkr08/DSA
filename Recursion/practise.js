// count(1)
// function count(i){
//     if(i===6){
//         return 
//     }
//     else{
//         count(i+1)//put this up  & this will reverse the code
//         console.log(i)
        
//     }
// }

count(1)
function count(i){
    if(i===6){
        return 
    }
    else{
        console.log(i)
        count(i+1)
        console.log(i)
    }
}