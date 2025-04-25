const countAccurance = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === char) {
            count++
        }
    }
    return count;
}
const findMax = (arr) => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
const titleCase = (str) => {
    let words = str.toLowerCase().split(' ')
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1) 
    }
    return words.join(' ')
}
console.log(countAccurance("The day of judgement is a false theory", 'e'))
console.log(findMax([5, 61, 2, 1, 8, 10]))
console.log(titleCase("find the butterfly and put in jar"))