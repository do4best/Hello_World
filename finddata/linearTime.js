function make_total(arr) {
    let bkt = 0
    for (let i = 0; i < arr.length; i++){
        bkt += arr[i]
    }
    return bkt;
}
let arr1 = [2, 3, 4, 5]
console.time("make_total 1")
console.log(make_total(arr1))
console.timeEnd("make_total 1")