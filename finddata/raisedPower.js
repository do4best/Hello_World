const reversString = (str) => {
    if (str === '') return '';
    return reversString(str.substr(1)) + str.charAt(0)

}
const raisedPower = (num, pow) => {
    if (pow === 0) return 1
    return num * raisedPower(num,pow-1)
}
const arraySum = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0] + arraySum(arr.slice(1))
}
const numberRange = (start, end) => {
    if (start === end) return [start]
    const numbers = numberRange(start, end - 1)
    numbers.push(end)
    return numbers;
}

console.log(reversString("Hello Friend"))
console.log(raisedPower(9, 4))
console.log(arraySum([2, 3, 4, 5, 6, 7, 8, 9]))
console.log(numberRange(1,8))