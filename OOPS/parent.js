class PARENT{
    print(){
        console.log("This is a parent class")
    }
}
class CHILD extends PARENT{
    print(){
        super.print()
        console.log("This is a child class")
    }
}
let p=new PARENT()
p.print()
let c=new CHILD()
c.print()
