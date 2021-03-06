let LinkedList = require("./LinkedList.js");

class Queue {
    constructor() {
        this._list = new LinkedList();
    }

    enqueue(value) {
        this._list.append(value);
    }

    dequeue() {
        let node = this._list.popFirst();
        return node.value;
    }

    peek() {
        return this._list.head ? this._list.head.value : null;
    }

    isEmpty() {
        return this._list.head == null;
    }

    _toArray() {
        return this._list._toArray();
    }
}

module.exports = Queue;

