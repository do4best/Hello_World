class Stack{
    constructor() {
        this.maxSize = 100;
        this.stack = []
        this.top = -1
    }
    addItem(item) {
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = item
        return true;
    }
    removeItem() {
        if (this.isEmpty()) {
            return null
        }
        this.top--;
        return this.stack.pop()
    }
    isFull() {
        return this.top === this.maxSize - 1;
    }
    isEmpty() {
        return this.top === -1
    }
    peek() {
        return this.stack[this.top]
    }
}
let link = new Stack()
link.addItem("Afzal")
link.addItem("Meer")
link.addItem("Syed")
console.log(link)
function reverseIt(str) {
    let stack = new Stack();
    let verseString = "";
    for (let i = 0; i < str.length; i++){
        stack.addItem(str[i])
    }
    while (!stack.isEmpty()) {
        verseString += stack.removeItem()
    }
    return verseString;
}
console.log(reverseIt("Lana is lana"))