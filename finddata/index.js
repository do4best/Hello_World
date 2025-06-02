const changColor=()=>`#${Math.floor(Math.random()* 0xfffff).toString(16).padEnd(6,'0')}`
const checkNumger = (num) => num % 2 === 0
const findAverage = (...args) => args.reduce((a, b) => a + b) / args.length;
const shaffleArray = (arr) => arr.sort(() => 0.5 - Math.random())
const randomArray = (arr) => arr.sort(() => 0.5 - Math.random())
const findLetter = (sentence, letter) => sentence.split(letter).length - 1
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getLastElement = (arr) => arr[arr.length - 1]
const sortArray=(arr)=>arr.slice().sort((a,b)=>a-b)
let arr = [10, 1, 5, 3, 6, 8, 9, 7]


document.querySelector("#app").innerHTML = `
<h1 style='color:${changColor()}'>Hello</h1>
<h1 style='color:${changColor()}'>(${checkNumger(15) ? "is Even" : "is odd"})</h1>
<h1 style='color:${changColor()}'>The rresult is ${findAverage(1, 2, 3, 4, 5, 6, 7, 8, 9)}</h1>
<h1 style='color:${changColor()}'>The Random Arrays are : ${shaffleArray(arr)}</h1>
<h1 style='color:${changColor()}'>The Repeat a letter in sentence : ${findLetter("This is javaScript", "a")}</h1>
<h1 style='color:${changColor()}'>The Random range of : ${randomInRange(1, 20)}</h1>
<h1 style='color:${changColor()}'>The Last Element Arrays are : ${getLastElement(arr)}</h1>
<h1 style='color:${changColor()}'>Sort an Arry is : ${sortArray(arr)}</h1>
`