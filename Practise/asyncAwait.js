async function Task1() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Task ! completed')
            resolve()

        },2000)
    })
    
}

async function Task2() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Task 2 completed')
            resolve()
        },1000)
    })
}

function allTaskCompleted(){
    console.log("All task completed")
}

async function  main() {
    await Task1()
    await Task2()
    allTaskCompleted()
    
}
main()