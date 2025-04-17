const findOrder = (fun) => {
    const finid = fun.filter((num) => num % 2 === 0).map((find)=>find ** 2).reduce((sum,sqr)=>sum+sqr,0)
    return finid;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(findOrder(arr))
let products = [
    { name: 'tea', price: 120, quantity: 20 },
    { name: 'sugar', price: 200, quantity: 20.2 },
    { name: 'milk', price: 350, quantity: 10 },
    
]
function totaSales(products, taxRate) {
    let sales = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const totalAmount = (sales * taxRate) / 100
    const totalSaleswithTax = sales + totalAmount
    return parseFloat(totalSaleswithTax.toFixed(2))
}

console.log(totaSales(products,10))