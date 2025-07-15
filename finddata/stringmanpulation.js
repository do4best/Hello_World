function searchit(sentence, word) {
  
    if (sentence.indexOf(word) !== -1) {
        return "Your word is found"
    } else {
        return "Your word is not found"
    }
}
console.log(searchit("This is strange", "is"))
let sentence = "this is, strange"
console.log(sentence.split(', '))
// commenly used regex
// 1- any numarik
let reg = /\d+/ // any digit
console.log(reg.test("Hello 2"))
// 2- find digits
let reg1 = /^\d+$/; // only digits
console.log(reg1.test("56"))
let arr = [1, 2, 3, 4]
let box = []
for (let i in arr) {
    box.push(arr[i])
}
console.log(box.join(' '))

arr.forEach((index,value)=>console.log(arr[index]))
