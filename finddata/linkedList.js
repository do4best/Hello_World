class Node{
    constructor(data) {
        this.data = data;
        this.next = null
    }

}
class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }
    printAll() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
    get(index) {// to check the list item info
        let current = this.head; // let current should be head
        let i = 0; // a vriable set to 0
        while (i < index) { // check until i is less then index
            current = current.next; // current is next
            i++; // increment until current is next
        }
        return current.data; // return data;
    }
    insertAt(index, data) { // we need to insert the value at specific position
        if (index === 0) { // first check if index is zero, in case yes
            let node = new Node(data) // create a new node
            node.next = this.head; // next point should to the head
            this.head = node;  // now the head has given value
        } else { // in case else
            let current = this.head; // the current should be the head
            let previous = null; // and previous should be null
            let i = 0; // this variabel is increment with until the condation become false
            while (i < index) { // check until the index condation become null
                previous = current; // the current should be previous
                current = current.next; // and the current should be point to the next
                i++; // keep increment untill it become false;
            }
            const node = new Node(data)
            node.next = current;
            previous.next = node;
        }
    }
    
    removeAt(index) { // we need to insert the value at specific position
        if (index === 0) { // first check if index is zero, in case yes
            this.head = this.head.next;
        } else { // in case else
            let current = this.head; // the current should be the head
            let previous = null; // and previous should be null
            let i = 0; // this variabel is increment with until the condation become false
            while (i < index) { // check until the index condation become null
                previous = current; // the current should be previous
                current = current.next; // and the current should be point to the next
                i++; // keep increment untill it become false;
            }
            previous.next = current.next ;
        }
    }
}
let linked = new LinkedList();
linked.add(900)
linked.add(1000)
linked.insertAt(0, 'Afzal')
linked.removeAt(2)
linked.printAll()
console.log(linked.get())