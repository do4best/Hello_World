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
const randomArray = (length) => Array.from({ length }, () => Math.floor(Math.random() * 100)) // random Array
const gcd = (num1, num2) => {
    while (num2 !== 0) {
        let tem = num2;
        num2 = num1 % num2;
        num1 = tem
    }
    return num1
}
const movies = ['speed','night is hunted','beatle']
const findIndex=(arr,value)=>arr.indexOf(value)
const findLeapYear=(year)=>(year%4 === 0 && year % 100 !== 0) || (year%400 === 0)
const arraytoscv=(arr)=>arr.join(',')
const reduceArray=(arr)=>arr.reduce((first,last)=>first+last,0)/arr.length
const findRandom = (first, last) => Math.floor(Math.random() * last) + first;
const arrayReverse = (arr) => arr.slice().reverse();
const intersectionArray = (arr1, arr2) => arr1.filter(val => !arr2.includes(val))
const findLongest = (str) => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "")
const countOccurence = (str, char) => {
    return `${char} is repeated this ${str.split(char).length - 1} times`
}
const minMax = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
})
const factors = (fact) => {
    let result = []
    for(let i = 1; i <= fact; i++) {
        if (fact % i === 0) {
           result.push(i)
       } 
    }
    return result
}
const consectiveNumber=(start,end)=>Array.from({length:end-start+1},(_,i)=>start+i)
const reverseString = (str) => str.split('').reverse().join('')
const shuffleString=(str)=>str.split('').sort(()=>0.5-Math.random()).join('')
let arr=[1,2,3,4,5]
const descentArray = (arr) => arr.every((el, i) => i === 0 || el <= arr[i - 1])
const getAschiCharater = (char) => char.charCodeAt(0)
const sumofDigits=(num)=>[...String(num)].reduce((sum,digits)=>sum + Number(digits),0)
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
console.log(intersectionArray([1, 2, 3, 4, 5, 6], [1, 2, 8, 9]))
console.log(randomArray(10))
console.log(gcd(60, 21))
console.log(findLongest("Hellois there, how are you"))
console.log(countOccurence("There is my friend who didnt listent any one", 'm'))
console.log(descentArray([5, 2, 1, 4, 3]))
console.log(minMax(arr))
console.log(reverseString("Find the God"))
console.log(shuffleString("Hello There"))
console.log(getAschiCharater('a'))
console.log(factors(13))
console.log(consectiveNumber(1, 90))
console.log(sumofDigits(123490))
const findTheDog=(first,end)=>Array.from({length:end - first +1},(_,i)=>first+1)
