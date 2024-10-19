function distancePrice (distance) {
    let price=0;
    switch (true) {
        case (distance > 0 && distance <= 100):
            price= 5;
            break;
        case (distance > 100 && distance <= 500):
            price = 8;
            break
        case (distance > 500 && distance < 1000):
            price = 10 ;
            break ;
        case (distance >= 1000):
            price = 12;
            break ;
        default :
            price = "Wrong input";
                            
    }
    return price
}

console.log(distancePrice(700))