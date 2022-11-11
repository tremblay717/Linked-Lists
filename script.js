class LinkedList {

    constructor(head = null) { //head returns the first node in the list
        this.head = head;
    }

    append(item) { // adds a new node containing value to the end of the list
        let y = this.head;
        while (y != null) {
            if (y.next == null) {
                y.next = new Node();
                y.next.data = item;
                break;
            } else {
                y = y.next;
            }
        }
    }

    prepend(item) { // adds a new node containing value to the start of the list
        let x = this.head;
        this.head = new Node();
        this.head.data = item;
        this.head.next = x;
    }

    size() { // returns the total number of nodes in the list
        let x = 0;
        let y = this.head;
        while (y != null) {
            if (y.next == null) {
                return x + 1;
            } else {
                x++;
                y = y.next;
            }
        }
    }

    tail() { // returns the last node in the list
        let y = this.head;
        while (y != null) {
            if (y.next == null) return console.log(y);
            y = y.next;
        }
    }

    at(index) { // returns the node at the given index
        let array = [];
        let y = this.head;
        while (y != null) {
            array.push(y)
            if (array.indexOf(y) === index) return console.log(y);
            y = y.next;
        }
    }

    pop() { // removes the last element from the list
        let x = this.head;
        let y = this.head;
        while (y != null) {
            if (y.next.next == null) {
                y.next = null;
                return x;
            } else {
                y = y.next;
            }
        }
    }

    contains(value) { // returns true if the passed in value is in the list and otherwise returns false.
        let y = this.head;
        while (y != null) {
            if (y.data == value) {
                return true;
            } else if (y.data != value && y.next == null) {
                return false;
            } else {
                y = y.next;
            }
        }
    }

    find(value) { // returns the index of the node containing value, or null if not found.
        let array = [];
        let y = this.head;
        while (y != null) {
            array.push(y);
            if (y.data == value) {
                return array.indexOf(y);
            } else if (y.data != value && y.next == null) {
                return null;
            } else {
                y = y.next;
            }
        }
    }

    toString() { // represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
        let msg = "";
        let y = this.head;
        while (y != null) {
            if (y.next == null) {
                return msg += `(${y.data}) -> null`;
            } else {
                msg += `(${y.data}) -> `;
                y = y.next
            }
        }
    }
}


class Node {

    constructor() {
        this.data = null;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);

node1.data = 1;
node1.next = node2;

node2.data = 2;

let list = new LinkedList(node1);