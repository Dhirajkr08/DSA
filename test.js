function display(){
    fetch("https://api.postalpincode.in/pincode/226001")
    .then(response=>response.json())
    .then(ans=>{
        console.log(ans)
        localStorage.setItem("response",JSON.stringify(ans))
    })
    .catch(err=>{
        console.log("something wrong",err)
    })
}
display()



//Write JavaScript code to select the second nested item 
//(the <li> with data-id="2b") and change its text content to "Updated Item".

let list=document.querySelectorAll('.nested-item')
list[1].textContent='Updated Item';


// //write data in JSON
// {
//     "name": "Dhiraj",
//     "Vill": "har",
//     "isVar" : false,
//     "add": {
//         "post": "Patna",
//         "backGround": "Nothing"

//     }
// }

