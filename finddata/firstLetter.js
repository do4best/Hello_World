const firstUpper = (str) => {
    const words = str.toLowerCase().split(' ')
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ')
}
const firstSentance = (str) => {
    let first = str.toLowerCase();
    return first[0].toUpperCase() + str.slice(1)
}
const findVowal = (str) => {
    let word = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i++){
        const char = word[i]
        if (char === 'a' || char === 'e'
            || char === 'i' || char === 'o' ||
            char === 'u' 
        )
        {
            count++
        }
        
    }
    return count;
}
let word="find the god"
console.log(firstUpper(word))
console.log(firstSentance(word))
console.log(findVowal("This is dog who run faster"))