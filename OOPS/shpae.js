class shape{
    printShape(){
        console.log("This is shape")
    }
}
class Rectangle extends shape{
    print(){
        console.log('This is Rectangle')
    }
}
class Circle extends shape{
    print(){
        console.log("This is Circle")
    }
}
class Square extends Rectangle{
    printSquare(){
        super.print()
        console.log("Square is a rectangle")
    }
}

let s=new Square()
s.printSquare()
let c=new Circle()
c.print()
let j=new shape();
j.printShape()
let r=new Rectangle()
r.print()

