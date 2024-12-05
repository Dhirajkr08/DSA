class Employee{
    constructor(name,year_of_joining,address){
        this.name = name;
        this.year=year_of_joining;
        this.address = address;
    }
    print_details(){
        console.log(this.name+ " " + this.year + " " + this.address)
    }
}
let e=new Employee('Robert',1994,'64C-WallsStreet')
let e1=new Employee("Sam",2000,"68D-WallsStreet")
let e2=new Employee("John",1999,"26B-WallsStreet")
e.print_details()
e1.print_details()
e2.print_details()