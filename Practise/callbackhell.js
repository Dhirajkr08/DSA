function Task1(cb){
    setTimeout(()=>{
        console.log('Task1 Completed')
        cb()
    },2000)
}
function Task2(cb){
    setTimeout(()=>{
        console.log('Task 2 Completed')
        cb()
    },1000)
}
function AllTask(){
    console.log("All Tasks completed")
}

//call back hell
Task1(function(){
    Task2(function(){
        AllTask()
    })
})

//Question 2

function stepOne(cb){
    setTimeout(()=>{
        console.log("Step 1")
        cb("Message from step 1")

    },2000)
}
function stepTwo(message,cb){
    setTimeout(()=>{
        console.log(message)
        cb("All steps completed")

    },1000)
}

stepOne(function(stepOneMessage){
    stepTwo(stepOneMessage, function(finalMessage){
        console.log(finalMessage)
    })

})