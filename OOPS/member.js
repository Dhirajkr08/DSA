class Member{
    constructor(name,age,phone,address,salary){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.address=address;
        this.salary=salary;
    }
    printSalary(){
        console.log("Salary:",this.salary)
    }
}
class Employee extends Member{
    constructor(name,age,phone,address,salary,specialization){
        super(name,age,phone,address,salary)
        this.specialization=specialization;
    }
    print_Details(){
        
        console.log("Name :",this.name," ","Specialization :",this.specialization)
        super.printSalary()

    }
}
class Manager extends Member{
    constructor(name,age,phone,address,salary,department){
        super(name,age,phone,address,salary)
        this.department=department;
    }
    print_Details(){
        console.log("Name :",this.name," ","Department :",this.department)
        super.printSalary()
    }
}
let e=new Employee("Rohan","24",76889,"wall-street","$356","Front-end")
e.print_Details()
let m=new Manager("Dhiraj","34",89030,"berlin","$567899","AI")
m.print_Details()