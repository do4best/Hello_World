class Factory{
    consume() {
        
    }
}
class Tea extends Factory{
    consume() {
        console.log("This is Tea")
    }
}
class Coffee extends Factory{
    consume() {
        console.log("This is coffee")
    }
}
class MakeFactory{
    makeit(){
    }
}
class MakeTea extends MakeFactory{
    makeit() {
        console.log("Tea is preparing")
        return new Tea()
    }
}
let makeFactory = new Tea()
let tea = makeFactory.consume()
tea.makeit()