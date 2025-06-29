let config = {
    server: 'localhost',
    port: '8080',
    timeout:900
}
const { server, port } = config
console.log(server)
function doSomething() {
    console.log(Array.from(arguments,function(elem){return elem }))
}
doSomething([1, 2, 3, 4, 5])
let arr = new Array("Sonyar")
console.log(arr)
let arr1 = [1, 2, 3, 4, 5]
for(const [index,value] of arr1.entries()){
console.log(index, value)}