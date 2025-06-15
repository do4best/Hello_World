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
const reduceArray=(arr)=>arr.reduce((first,last)=>first+last,0)/arr.length
const findRandom = (first, last) => Math.floor(Math.random() * last) + first;
const arrayReverse=(arr)=>arr.slice().reverse()
console.log(fabonacci(10))
console.log(raisedPower(2, 6))
console.log(countWords("This is realy strang"))
console.log(arrayReverse([1, 2, 3, 4, 5, 6]))
console.log(findRandom(1, 20))
console.log("array Reduce" + reduceArray([1,2,3,4,5,6,7,8,9,10]))