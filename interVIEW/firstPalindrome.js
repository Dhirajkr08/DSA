function firstPalindrome(words) {
    for(let i of words) {
        if(i === i.split('').reverse().join('')) {
            return i;
        }
    }
    return ''
}

let words = ["abc","car","ada","racecar","cool"]
console.log(firstPalindrome(words))