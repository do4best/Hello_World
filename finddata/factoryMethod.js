class Name{
    constructor(name) {
        this.name = name
    }
    toString() {
       return  `your name is ${this.name}`
    }
}
class FullName{
    static FullName(find) {
       return  ``+ new Name(find)
    }
}
console.log(FullName.FullName("Meer"))