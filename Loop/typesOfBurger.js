function typesOfBurger(x,y,n,r){
    for(let normal=0;normal<=n;normal++){
        let premium=n-normal;
        if(normal*x + premium*y === r){
            return [normal,premium];
        }
    }
    return [];
}
console.log(typesOfBurger(2,10,4,12))