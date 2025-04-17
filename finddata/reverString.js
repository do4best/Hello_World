function reverseString(str) {
    return str.split('').reverse().join('')
}
function countVowal(str) {
    let sentence = str.toLowerCase()
    let count = 0;
    for (let i = 0; i < sentence.length; i++){
        let char = sentence[i];
        if (char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' 
            
        ) {
            count++
            
        }
    }
    return count;
}
let theString = "Get the got up"
console.log(theString)
console.log(reverseString(theString))
console.log(countVowal(theString))