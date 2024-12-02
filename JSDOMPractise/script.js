function display() {
    let timeElements = document.getElementsByClassName('btn')
    let dateElement = new Date()
    for(let i of timeElements) {
        i.innerHTML = dateElement
    }
    //console.log(timeElements)
}
