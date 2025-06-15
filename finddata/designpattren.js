class Factory{
    constructor(name) {
        this.name = name
    }
    toString() {
        return `My name is ${this.name}`
    }
}
class GetName{
    static fullName(name1) {
        return new Factory(name1)
    
}
}
console.log(GetName.fullName("Meer") === GetName.fullName("Afzal"))
console.log(GetName.fullName("Afzal"))
const changColor=()=>`#${Math.floor(Math.random()* 0xfffff).toString(16).padEnd(6,'0')}`
document.querySelector("#app").innerHTML = `
<h1 style='color:${changColor()}'>${GetName.fullName("Meer")} </h1>
`