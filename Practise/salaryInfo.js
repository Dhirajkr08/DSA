class Employee{
    getInfo(salary,working_hours){
        this.salary = salary;
        this.hours = working_hours;
    }
    AddSal(){
        if(this.salary < 500){
            this.salary+=10
        }
    }
    AddWork(){
        if(this.hours > 6){
            this.salary+=5
        }
    }

}
let e=new Employee();
e.getInfo(490,7)
e.AddSal()
e.AddWork()
console.log(e.salary)