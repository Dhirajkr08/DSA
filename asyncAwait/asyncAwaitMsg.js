async function step1() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Step 1')
            resolve("Message from Step 1")
        },2000);
    })
    
}
async function step2(message) {
    return new Promise((resolve)=>{
        setTimeout(()=>{

            console.log(`Step 2 received: ${message}`)
            resolve()
        },1000)
    })
}
function allStepCompleted(){
    console.log("All steps completed!")
}
async function  execution() {
    const msg=await step1()
    await step2(msg)
    allStepCompleted()

    
}
execution()
