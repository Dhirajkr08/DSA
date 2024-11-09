class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
}
let e=[
    new Employee("Arjun",3459),
    new Employee("Sanjay",23456),
    new Employee("Saju", 5689), 
    new Employee("Ajay", 2345), 
    new Employee("Manjit", 4569)

]
e.sort((a,b)=>b.salary-a.salary);
e.forEach(e=>console.log(`${e.name}, ${e.salary}`))
