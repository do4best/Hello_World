class VectorRender{
    renderCircle(render) {
        console.log(`Drawing a circle for redius ${render}`)
    }
}
class RasterRenderer{
    renderCircle(radius) {
        console.log(`Drawing pixel for circle of radius ${radius}`)
    }
}
class Shape{
    constructor(renderer) {
        this.renderer = renderer;
    }
}
class Circle extends Shape{
    constructor(renderer, radius) {
        super(renderer)
        this.radius = radius
    }
    draw() {
        this.renderer.renderCircle(this.radius)
    }
    resize(factor) {
        this.radius *= factor;
    }
}
let raster = new RasterRenderer()
let vector = new VectorRender()
let circle = new Circle(raster, 5)
circle.draw()
circle.resize(2)
circle.draw()