class student{
    constructor(name,roll_number){
        this.name = name;
        this.roll_number = roll_number;
    }
    printAttributes(){
        console.log(`Name: ${this.name} ,Roll_Number: ${this.roll_number}`)
        console.log('Name:',this.name , "Roll:",this.roll_number)
    }
}
let s=new student('Raman',34)
s.printAttributes()