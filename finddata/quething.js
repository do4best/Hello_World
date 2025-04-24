class Queue{
    constructor() {
        this.maxSize = 100
        this.que = []
        this.head = 0;
        this.tail = 0;
    }
    quePush(value) {
        if (this.isFull()) {
            return false;
        }
        this.que[this.tail] = value;
        this.tail++;
        return true;
    }
    isFull() {
        return this.getLength() === this.maxSize;
    }
    getLength() {
        return this.tail - this.head;
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
export {Queue}