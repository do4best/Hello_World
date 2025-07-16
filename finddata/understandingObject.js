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