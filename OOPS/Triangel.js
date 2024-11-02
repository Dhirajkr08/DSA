class Triangle{
    constructor(side1,side2,side3){
        this.side1 =side1
        this.side2 =side2
        this.side3 =side3
    }
    calculateArea(){
        return this.side1*this.side2*this.side3
    }
    calculatePerimeter(){
        return (this.side1+this.side2+this.side3)
    }
}

let t=new Triangle(2,3,6)
console.log(t.calculateArea())
console.log(t.calculatePerimeter())