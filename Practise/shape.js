class Shape{
    printShape(){
        console.log("This is shape")
    }
}
class Rectangle extends Shape{
    print(){
        console.log('This is rectangle')
    }
}
class Circle extends Shape{
    print(){
        console.log('This is circle')
    }
}
class Square extends Rectangle{
    printSquare(){
        super.print()
        console.log('Square is a rectangle')
    }
}

let s=new Shape()
s.printShape()
let sq=new Square()
sq.printSquare()
