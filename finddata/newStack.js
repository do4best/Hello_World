class Stack{
    constructor() {
        this.maxSize = 100;
        this.top = -1;
        this.stack = []
    }
    isEmpty() {
        return this.top === - 1;
    }
    isFull() {
        return this.top === this.maxSize - 1;
    }
    peek() {
        return this.stack[this.top]
    }
    addItem(item) {
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = item;
        return true;
    }
    removeItem() {
        if (this.isEmpty()) {
            return null;
        }
        this.top--;
        return this.stack.pop()
    }
}
let stack = new Stack()
console.log(stack)
for (let i = 1; i < 100; i++){
    stack.addItem(i)
}
console.log(stack)
class Node{
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null
    }
}
function firstDepthTraversal(root) {
    if (!root) return []
    const result = []

    const stack = []
    stack.push(root)
    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.data)
        if (current.left) {
            stack.push(current.left)
        }
        if (current.right) {
            stack.push(current.right)
        }
    }
    return result
}

const root = new Node('a')
const nodeB = new Node('b')
const nodeC = new Node('c')
const nodeD = new Node('d')
const nodeE = new Node('e')
const nodeF = new Node('f')

root.left = nodeB
root.right = nodeC
nodeB.left = nodeD
nodeB.right = nodeE
nodeC.left = nodeF
const result = firstDepthTraversal(root)

console.log(result)