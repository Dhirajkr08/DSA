function assignGrades(score){
    let grade=''
    switch(true){
        case (score<= 50):
            grade="D"
            break
        case (score>50 && score<60):
            grade="C"
            break;
        case (score>=60 && score<=75):
            grade="B"
            break;
        case (score>75):
            grade='A'
            break;
        default:
            grade='Fail'

    }
    return grade
}
console.log(assignGrades(50))