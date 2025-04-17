const celciusToFaren = (cel) => (cel * 9 / 5) + 32
let arr = [1, 2, 3, 4, 5]
const shuffleArray=(arr)=>arr.sort(()=>0.5-Math.random())
console.log(celciusToFaren(20))
const average = (args) => args.reduce((a, b) => (a + b) / args.length)
console.log(average(arr))
console.log(shuffleArray(arr))