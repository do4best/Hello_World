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
function fun(a, b, c) {
    return true;
}
console.log(fun.toString())
function F() {
    function C() {
        return this;
    }
    C();
}
var oo = new F();
console.log(oo)
function A() {
    this.a = 1;
    return false;
}
console.log(typeof new A())
const c = [1, 2, [1, 2]]
c.sort()
c.join('---')
console.log(c)