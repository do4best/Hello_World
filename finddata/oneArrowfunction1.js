const raisedPower = (base, exponent) => Math.pow(base, exponent)

const fabonacci = (n) => {
    const result = [0, 1]
    for (let i = 2; i < n; i++){
        result.push(result[i-1]+result[i-2])
    }
    return result;
}
const countWords = (str) => {
    return str.trim().split(/\s+/).length;
}
const remainingMinute = (min) => {
    const hour = Math.floor(min / 60)
    const reemaingMinute = min % 60
    return `The is ${hour} hours and minute are ${reemaingMinute}`
}
// remove a specific element in array
const removeElement = (arr, ele) => arr.filter(e => e !== ele);
const returnDay = (day) => {
    const dayofWeek = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayofWeek[day.getDay()]
}
const movies = ['speed','night is hunted','beatle']
const findIndex=(arr,value)=>arr.indexOf(value)
const findLeapYear=(year)=>(year%4 === 0 && year % 100 !== 0) || (year%400 === 0)
const arraytoscv=(arr)=>arr.join(',')
const reduceArray=(arr)=>arr.reduce((first,last)=>first+last,0)/arr.length
const findRandom = (first, last) => Math.floor(Math.random() * last) + first;
const arrayReverse=(arr)=>arr.slice().reverse()
console.log(fabonacci(10))
console.log(raisedPower(2, 6))
console.log(countWords("This is realy strang"))
console.log(arrayReverse([1, 2, 3, 4, 5, 6]))
console.log(findRandom(1, 20))
console.log("array Reduce" + reduceArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(arraytoscv([1, 2, 3, 4, 5, 6]))
console.log(findLeapYear(2028))
console.log(findIndex(movies, 'beatle'))
console.log(remainingMinute(700))
console.log(removeElement(movies, 'speed '))
console.log(returnDay(new Date("6/28/2025")))