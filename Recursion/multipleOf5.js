function multiple(n){
    function res(i){
        if(i>n*5)return
        if(i%5===0)console.log(i)
        res(i+1)
        
    } 
    res(1)




}
multiple(5)