function checkResult (marks) {
    return (marks === null ) ? 'Invalid' :
    (marks > 40) ? "Pass" : "Fail"
}

function main(){
    let marks = 52
    console.log(checkResult(marks))

}
main()
