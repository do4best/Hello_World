function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function diceGame(rollDice1) {
    let dice = [];
    for (let i = 0; i < rollDice1; i++){
        const roll1 = rollDice()
        const roll2 = rollDice()
        let sum = roll1 + roll2
        let result = ''
        if (sum === 7 || sum === 11) {
            result = 'win'
        } else if (sum === 2 || sum === 3 || sum === 12) {
            result = 'lose'
        } else {
            result = 'roll Again'
        }

        dice.push(i,{roll1,roll2,sum,result})
    }
    return dice;
}
let shuffle = diceGame(10)
console.log(shuffle)