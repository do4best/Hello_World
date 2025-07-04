let myname = "string";
for (const i of myname) {
    console.log(i)
}
console.log(Array.from(myname))
let arr=[1,5]
const consectiveArray = (start, end) => Array.from({ length: end - start + 1 },(_,i)=>start+i )
console.log(consectiveArray(1, 5))
const reverseIt = (str) => str.split('').reverse().join('')
const reduceSum = (arr) => {

    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

console.log(reverseIt("Find it the god"))
console.log(reduceSum([1,2,3,4,5,6,7,8,9]))