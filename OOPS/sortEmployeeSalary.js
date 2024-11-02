class Employee{
    constructor(name,salary){
        this.name = name;   
        this.salary = salary;
    }
}
let employee=[
    new Employee("Arav",21000),
    new Employee("Gaurav",18000),
    new Employee('Saurav',76000),
    new Employee('Ranjit',45000),
    new Employee('sanjay',39000)
]
employee.sort((a,b)=>a.salary-b.salary);
//console.log(employee);
employee.forEach(e=>{
    console.log(`Name: ${e.name} , salary: ${e.salary}`)

})
