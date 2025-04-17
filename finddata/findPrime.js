function findPrime(pri) {
    if (pri <= 1) return false;
    for (let i = 2; i < Math.sqrt(pri); i++){
        if(pri % i === 0)return "This is not Prime" + false
    }
    return "This is prime " + true;
}
let box = []
for (let i = 0; i <= 35; i++) {
  
    if (findPrime(i)) {
        box.push(i)
        console.log("These are Prime " + box)
    }
}