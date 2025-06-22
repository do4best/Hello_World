/// decorator pattrens
class Form{
    constructor(color){// this is constructor
        this.color = color // it show only color
    }
}
class Circle extends Form{// class Circle
    constructor(radius = 0) {
        super();
        this.radius = radius;
    }
    resize(factor) {
        this.radius *= factor;
    }
    toString() {
        return `A circle of radius ${this.radius}`
    }
}
class ColorShaped extends Form{
    constructor(shape, color) {
        super()
        this.shape = shape;
        this.color = color;
    }
    toString() {
        return `${this.shape.toString()}, colored ${this.color}`
    }
}
let circle = new Circle(2)
console.log(circle.toString())
let redCircle = new ColorShaped(circle, 'Red')
console.log(redCircle.toString())