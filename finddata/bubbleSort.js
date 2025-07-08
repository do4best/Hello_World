function swap(value, index1, index2) {
    let temp = value[index1];
    value[index1] = value[index2]
    value[index2] = temp
    return temp;
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j <= i; j++){
            if (arr[j] > arr[i]) {
                swap(arr,i,j)
            }
        }
    }
    return arr;
}
let arr = [9, 1, 4, 8, 3, 1, 9, 4]
console.log(bubbleSort(arr))