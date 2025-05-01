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
const countVowal = (str) => {
    let words = str.toLowerCase()
    let count = 0;
    for (let i = 0; i < str.length; i++){
        const char = words[i]
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    return count
}
const findTheDuplicate = (arr) => {
    let temp = []
    for (let i = 0; i < arr.length; i++){
        if (!temp.includes(arr[i])) {
            temp.push(arr[i])
        }
    }
    return temp;
}
console.log(countAccurance("The day of judgement is a false theory", 'e'))
console.log(findMax([5, 61, 2, 1, 8, 10]))
console.log(titleCase("find the butterfly and put in jar"))
console.log(`Total Vowals are ${countVowal("Find the God and asked him the reasoning of creating worlds")}`)
console.log(findTheDuplicate([1,2,2,3,3,4,4,5,5]))