class Que{
    constructor() {
        this.maxSiz = 100;
        this.que = []
        this.head = 0
        this.tail = 0
    }
    getLength() {
        return this.tail - this.head;
    }
    isFull() {
        return this.getLength() === this.maxSiz;
    }
    enque(data) {
        if (this.isFull()) {
            return false;
        }
        this.que[this.tail] = data;
        this.tail++
        return true;
        
    }
    isEmpty() {
        return this.getLength() === 0
    }
    dequeue() {
          if (this.isEmpty()) {
            return null;
        }
        const item = this.que[this.head]
        this.head++
      
        return item;
    }
    peek() {
        return this.que[this.head]
    }
}
let que1 = new Que();
que1.enque("Meer")
que1.enque("Meer1")
que1.enque("Meer2")
que1.enque("Mee3")
que1.dequeue()
console.log(que1)
console.log(que1.peek())
function reverseIt(str) {
    let que = new Que();
   
     for (let i = str.length - 1; i >= 0; i--){
        que.enque(str[i])
    }
     let sentence = "";
    while (!que.isEmpty()) {
        sentence += que.dequeue()
    }
    return sentence;
}
let one = reverseIt("gone is gone")
console.log(one)