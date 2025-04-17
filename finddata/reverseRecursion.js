function reverseRecursion(str) {
    if (str === '') {
        return ''
    }
    return reverseRecursion(str.substr(1)) + str.charAt(0)
}

console.log(reverseRecursion("This is strange"))
function countDown(num) {
    if (num <= 5) {
        console.log("All done")
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}

countDown(10)