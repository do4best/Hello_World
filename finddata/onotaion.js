function someFunction(n) {
    for (let i = 0; i < n * 1000; i++){
        for (let j = 0; j < n * 20; j++){
            console.log(i+j)
        }
    }
}
function someFunction1(n) {
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            for (let k = 0; k < n; k++){
                for (let l = 0; l < n; l++){
                    console.log(i+j+k+l)
                }
            }
        }
    }
}
function anotherone() {
    left = "left"
    let left;
    console.log(left)
}
anotherone()