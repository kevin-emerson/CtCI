let Stack = require('../utilityClasses/Stack.js');

class MyQueue {
    constructor() {
        this.newStack = new Stack();
        this.oldStack = new Stack();
    }

    add(value) {
        this.newStack.push(value);
    }

    remove() {
        if (this.oldStack.isEmpty()) {
            while (!this.newStack.isEmpty()) {
                this.oldStack.push(this.newStack.pop());
            }
        }
        return this.oldStack.pop();
    }

    peek() {
        if (this.oldStack.isEmpty()) {
            while (!this.newStack.isEmpty()) {
                this.oldStack.push(this.newStack.pop());
            }
        }
        return this.oldStack.peek();
    }

    isEmpty() {
        return this.newStack.isEmpty() && this.oldStack.isEmpty();
    }
}

/* TESTS */
let m = new MyQueue();
console.log(m.isEmpty(), true);
m.add('a');
m.add('b');
m.add('c');
m.add('d');
m.add('e');
m.remove();
console.log(m.peek(), 'b');
console.log(m.isEmpty(), false);
