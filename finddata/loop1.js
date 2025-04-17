function operator(num1, num2, ope) {
    let result = "";
    if (ope === "+") {
        result = num1 + num2;
    } else if (ope === "-") {
        result = num1 - num2;
    }
    return result;
}
// }
// for (let i = 2; i <= 10; i++){
//     for (let j = 3; j <= 10; j++){
//        console.log(i,j,operator(i,j,'-'))
//     }
// }
function findit(sentence, letter) {
    let counter = 0;
    for (let i = 0; i < sentence.length; i++){
        if (sentence[i] === letter) {
            counter++;
        }
    }
    return `The letter '${letter}' ` + counter + ` is in the " ${sentence} " `;
}
console.log(findit("God iis great",'i'))