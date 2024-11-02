class Employee{
    getInfo(salary,working_hours){
        this.salary = salary;
        this.working_hours = working_hours;
    }
    AddSal(){
        if(this.salary<500){
            this.salary+=10
        }
    }
    AddWork(){
        if(this.working_hours>6){
            this.salary=this.salary+6
        }
    }

}
let e=new Employee();
e.getInfo(350,7)
e.AddSal()
e.AddWork()
console.log(e.salary)
