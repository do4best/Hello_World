let m = new Map([[1, "God"], [2, "Me"], [3, "His Blessings"]])
m.set(4,"Devil")
console.log(m.has(3))
for (const value of m.entries()) {
    console.log(value[0],value[1])
}
for (const [key, value] of m) {
    console.log(key,value)
}
function displayResult(name) {
    this.name = name;
    this.display = function () {
        console.log("hello" + this.name)
    }
    
}
displayResult.prototype.fullName = "Meer Afzal"
let nameit = new displayResult("Meer","Meer Afzal")
nameit.display()