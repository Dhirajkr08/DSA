class PARENT{
    print(){
        console.log('This is a Parent Class')
    }
}
class CHILD extends PARENT{
    
    print(){
        super.print()
        console.log('This is a Child Class')
    }
}
let p= new PARENT();
p.print();

let c=new CHILD();
c.print();