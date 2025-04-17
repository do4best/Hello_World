const accessElement = (arr1, n) => {
    return arr1[n]
}
let value = Array.from({ length: 1000 }, (_, index) => index + 1)

console.log(accessElement(value,95))