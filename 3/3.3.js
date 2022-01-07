let Stack = require('../utilityClasses/Stack.js');

class SetOfStacks {
    constructor(threshold) {
        this.threshold = threshold;
        this.stacks = [];
    }

    push(value) {
        if (this.stacks.length === 0 || this.stacks[this.stacks.length - 1].size() === this.threshold) {
            let newStack = new Stack();
            newStack.push(value);
            this.stacks.push(newStack);
        } else {
            this.stacks[this.stacks.length - 1].push(value);
        }
    }

    pop() {
        if (this.stacks.length === 0) return null;
        let popped = this.stacks[this.stacks.length - 1].pop();
        if (this.stacks[this.stacks.length - 1].size() === 0) this.stacks.pop();
        return popped;
    }

    peek() {
        return this.stacks[this.stacks.length - 1].peek();
    }

    popAt(index) {
        if (index < 0 || index >= this.stacks.length) return false;
        let popped = this.stacks[index].pop();
        console.log('popat', popped);
        if (this.stacks[index].size() === 0) this.stacks.splice(index, 1);
        return popped;
    }
}

/* TESTS */

var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);
console.log(s.peek(), 14);

s.popAt(2);
s.popAt(2);
s.popAt(2);
console.log(s.peek(), 14);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
console.log(s.peek(), 6);
