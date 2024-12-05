class Triangle{
    constructor(a,b,c){
        this.a=a
        this.b=b
        this.c=c
    }
    calculateArea(){
        return (this.a*this.b*this.c)
    }
    calculatePermeter(){
        return (this.a+this.b+this.c)
    }
}
let t=new Triangle(2,5,6)
console.log(t.calculateArea())
console.log(t.calculatePermeter())