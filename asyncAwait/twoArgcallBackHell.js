function stepOne(cb){
    setTimeout(()=>{
        console.log("Step 1")
        cb("Message from step 1")
    },2000)

}
function stepTwo(message,cb){
    setTimeout(()=>{
        console.log("Step 2 received:",message)
        cb("All steps completed!")
    },1000)
}
stepOne(function(stepOneMessage){
    stepTwo(stepOneMessage,function(stepTwoMessage){
        console.log(stepTwoMessage)
    })

})
//few changes