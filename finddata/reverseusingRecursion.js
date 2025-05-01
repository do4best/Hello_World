function fabinachi(n, memo = []) {
    console.log(`make done ${n}`)
    if (n < 2) {
        return n;
    }
    if (memo[n]) {
        return memo[n]
    }
    return fabinachi(n-1,memo) + fabinachi(n-2,memo)
}
function fectbyProduct(sum, memo = []) {
    if (sum === 0 || sum === 1) {
        return 1;
    }
    if (memo[sum]) return memo[sum];
    return sum *fectbyProduct(sum-1)
}
function raisedPower(base, power) {
    if (power === 0) {
        return 1;
    }
    return base * raisedPower(base,power-1)
}
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1))
}
function numberRange(star, end) {
    if (star === end) {
        return [star]
    }
    const resultNumber = numberRange(star, end - 1)
    resultNumber.push(end)
    return resultNumber;
}

console.log(fabinachi(6))
console.log(fectbyProduct(3))
console.log(raisedPower(2, 3))
console.log(sumArray([2, 3, 4, 5]))
console.log(numberRange(1,5))