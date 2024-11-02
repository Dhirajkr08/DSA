class Employee{
    constructor(name,year,address){
        this.name=name;
        this.year=year;
        this.address=address;
    }
    printDetails(){
        console.log(this.name," ",this.year," ",this.address);
    }
}
let e=new Employee("Robert", 1994, "64C-WallsStreet")
let f=new Employee("Sam", 2000, "64-D-WallsStreet")
let g=new Employee("John",1999,"26B-WallsStreet")
e.printDetails()
f.printDetails()
g.printDetails()