class Member{
    constructor(name,age,number,address,salary){
        this.name = name;
        this.age = age;
        this.number = number;
        this.address = address;
        this.salary = salary;
    }
    printSalary(){
        console.log(this.salary)
    }
}
class Employee extends Member{
    constructor(name,age,number,address,salary,specialization){
        super(name,age,number,address,salary)
        this.specialization = specialization;
    }
    print_detials(){
        console.log("Name :" + this.name +", " + "Specialization :" + this.specialization)

    }
}
class Manager extends Member{
    constructor(name,age,number,address,salary,department){
        super(name,age,number,address,salary)
        this.department = department;
    }
    print_detials(){
        console.log("Name :" + this.name +", " + "Department :" + this.department)
    }
}

let emp= new Employee("rohan",26,9890,'Xyz','$456','web-Dev')
emp.print_detials()
emp.printSalary()


let mng=new Manager("sohan",45,4784,'vhsjke','$235','hr')
mng.print_detials()
emp.printSalary()