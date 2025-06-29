function Findname(name) {
    this.name = name;
    this.callit = function () {
        return "My name is " + this.name
    }
}

let name = new Findname("Meer")
console.log(name.callit())
console.log(typeof name)
let h2 = new Findname("Janab")
let h3 = new h2.constructor("Afzal")
console.log(h3)
function factory(name) {
    return {
        name:name
    }
}
let o = new factory("Finding")
console.log(o.name)
const Car = {
    name:"Toyota"
}

console.log(Car.name)
Car.name = "Corolla"
console.log(Car.name)