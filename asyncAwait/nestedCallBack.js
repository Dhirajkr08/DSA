function increment(value,cb){
    setTimeout(()=>{
        const newValue=value+1
        cb(newValue)
    },800)
}
function double(value,cb){
    setTimeout(()=>{
        const newValue=value*2
        cb(newValue)
    },300)
}
function square(value,cb){
    setTimeout(()=>{
        const newValue=value*value
        cb(newValue)
    },500)
}
increment(2,function(incrementValue){
    double(incrementValue,function(doubleValue){
        square(doubleValue,function(squareValue){
            console.log(squareValue)
        })

    })
})