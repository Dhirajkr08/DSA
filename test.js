async function display() {
    try {
        let response = await fetch("https://api.postalpincode.in/pincode/226001");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let ans = await response.json();
        console.log('Fetched data:', ans);
        
        localStorage.setItem('response', JSON.stringify(ans));
        console.log('Stored in localStorage:', localStorage.getItem('response'));
    } catch (error) {
        console.error("Error:", error);
    }
}

display();



//Write JavaScript code to select the second nested item 
// (the <li> with data-id="2b") and change its text content to "Updated Item".
// let list=document.querySelectorAll('.nested-item[data-id="2b"]')
// list[0].textContent='Updated Item';


// //write data in JSON
{
    "name": "Dhiraj",
    "Vill": "har",
    "isVar" : false,
    "add": {
        "post": "Patna",
        "backGround": "Nothing"

    }
}

