function iter(arr) {
    var nextId = 0;
    return {
        next: function () {
            if (nextId < arr.length) {
                return {
                    value: arr[nextId++], done: false
                };    
            } else {
                return {done:true}
            }
        }
    }
}
let arrValue = iter(["Find", "The", "God"])
console.log(arrValue.next().value)
function* display() {
    console.log("Hello");
    yield;
    console.log("Friend")
}
let find = display()
find.next()
find.next()




