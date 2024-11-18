function task1(cb){
    setTimeout(()=>{
        console.log("Task 1 completed")
        cb()
    },2000)
}
function task2(cb){
    setTimeout(()=>{
        console.log("Task 2 completed")
        cb()
    },1000)
}
function allTasksCompleted(){
    console.log("All tasks completed")
}

task1(function(){
    task2(function(){
        allTasksCompleted()
    })
})