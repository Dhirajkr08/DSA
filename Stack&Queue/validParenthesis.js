function validParenthesis(s){
    while(s.length){
        let temp=s
        s=s.replace('{}','')
        s=s.replace("[]","")
        s=s.replace("{}",'')
        if(s===temp){
            return false
        }
    }
    return true 
    
}
let s='{]'
console.log(validParenthesis(s))