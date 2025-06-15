class Factory{
    constructor(name) {
        this.name = name
    }
    toString() {
        return `My name is ${name}`
    }
}
class GetName{
    static fullName(name1) {
        return new Factory(name1)
    
}
}
fullName = GetName.fullName("Meer")