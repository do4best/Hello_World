class Calculator{
    constructor()
    {
        this.operation = function (v1, v2) {
            switch (this.operation) {
                case 'add':
                    return v1 + v2;
                case ' minus':
                    return v1 - v2;
            }
        }
    }
}
class NewCalculator{
    constructor() {
        this.add = function (value1, value2) {
            return value1 + value2
        }
        this.minus = function (value1, value2) {
            return value1 - value2
        }
        

    }
}
class CalculatorAdapter{
    constructor() {
        let calculator = new NewCalculator()
        this.operation = function (value1, value2, operation) {
            switch (operation) {
                case 'add':
                    return calculator.add(value1, value2)
                case 'minuse':
                    return calculator.minus(value1,value2)
            }
        }
    }
}
let calculator = new CalculatorAdapter();

console.log(calculator.operation(56, 54, 'add'))