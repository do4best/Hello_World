class Stack{
    constructor() {
        this.stack = []
        this.maxSize = 100;
        this.top = -1
    }
    addItem(add) {
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = add;
        return true;
    }
    removeItem() { 
        if (this.isEmpty()) {
            return null
        }
        this.top--;
        return this.stack.pop()
    }
    isEmpty() {
        return this.top === -1
    }
    isFull() {
        return this.top === this.maxSize-1
    }
    peek() {
        return this.stack[this.top]
    }
}
const reverseIt = (str) => {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++){
        stack.addItem(str[i])
    }
    let thesentence = ""
    while (!stack.isEmpty()) {
        thesentence += stack.removeItem();
    }
    return thesentence;
}
console.log(reverseIt("Fun is the ultimate weapon"))
class Queue{
    constructor() {
        this.maxSize = 100;
        this.queue = [];
        this.head = 0;
        this.tail = 0
    }
    enqueue(item) {
        if (this.isFull()) {
            return false;
        }
        this.queue[this.tail] = item;
        this.tail++;
        return true;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const remove = this.queue[this.head]
        this.head++;
        return remove;
    }
    isEmpty() {
        return this.getLength() === 0
    }
    isFull() {
        return this.getLength() === this.maxSize
    }
    getLength() {
        return this.tail - this.head;
    }
    peek() {
        return this.queue[this.head]
    }
}
let que = new Queue()
que.enqueue(200)
que.enqueue(300)
que.enqueue(400)
console.log(que)
const againReverse = (str) => {
    let que = new Queue();
    let words = "";
    for (let i = str.length - 1; i >= 0; i--){
        que.enqueue(str[i])
    }
    while (!que.isEmpty()) {
        words += que.dequeue()
    }
    return words;
}
console.log(againReverse("God is One"))