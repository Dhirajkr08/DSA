document.addEventListener('click',showMessage)

function showMessage(e){
    e.preventDefault()
    let data=document.getElementsByClassName('btn')
    for(let i of data){
        i.innerHTML="Hello JavaScript"
    }
    
}