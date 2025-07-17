function findone() { }
let a = new findone()
findone.prototype.sayname = function () {
    console.log("Hello Friend")
}

a.sayname()
function creatingPrivate(name,job) {
    let privatName = name;
    let privatJob = job;
    this.getName = function () { return privatName }
    this.setName = function (name) { privatName = name }
    this.getJob = function () { return privatJob; }
    this.setJob = function (job) { privatJob = job }
}
let myJob = new creatingPrivate("Sane", "SE",)
myJob.setJob("Plumber")
console.log(myJob.getJob())
// understanding recursion
function callitself(n) {
    if (n < 0) {
        return;
    } else {
        console.log(n)
        callitself(n-1)
    }
}
function letme(n) {
 
    for (let i = 0; i < n; i++){
       console.log(i)
    }
 
}
letme(10)
// callitself(9)
// iterative version
function getFibo(n) {
    if (n <= 0) return;
    let sum = 0;
    let last = 1;
    let lastlast = 0;
    for (let i = 0; i < n; i++){
        sum = lastlast + last;
        lastlast = last;
        last = sum
    }
    return sum;
}
console.log(getFibo(10))
function fabniacchi(n) {
    if (n <= 1) {
        return n;
    } else {
        return fabniacchi(n-1)+fabniacchi(n-2)
    }
}
console.log(fabniacchi(2))