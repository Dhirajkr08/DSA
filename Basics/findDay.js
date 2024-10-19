function findDay (day) {
    let name=" "
    switch (day) {
        case 1:
            name="Monday";
            break;
        case 2:
            name = "Tuesday";
            break;  
        case 3:
            name = "Wednesday";
            break;
        case 4:
            name = "Thursday";
            break;
        case 5:
            name = "Friday";
            break;
        case 6:
            name = "Saturday";
            break;
        case 7:
            name = "Sunday";
            break;
        default :
            name = "Invalid";

    }
    return name;
}

console.log(findDay(9)) // will display Invalid;
console.log(findDay(3))  // display wednesday;