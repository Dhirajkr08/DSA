class Student{
    constructor(name,roll_no){
        this.name = name;
        this.roll_no = roll_no;
    }
    printAttribute(){
        console.log("Name :",this.name,"Roll_Number :",this.roll_no);

    }
}
let s=new Student('Gagan',45)
s.printAttribute()