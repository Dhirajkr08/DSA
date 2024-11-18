async function Task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 1 completed')
            resolve()
        },2000)
    })
    
}
async function Task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Task 2 completed')
            resolve()
        },1000)
    })
}
function allTasksCompleted(){
    console.log("All tasks completed")
}

async function execution() {
    await Task1()

    await Task2()

    allTasksCompleted()
}
execution()