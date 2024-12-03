let timeElements = document.getElementsByClassName('btn')
let dateElement = new Date()
timeElements.innerHTML = dateElement
    //console.log(timeElements)

document.addEventListener('click',showData)

function showData(e){
    e.preventDefault()
    for(let i of timeElements){
        i.innerHTML=dateElement
    }
}

