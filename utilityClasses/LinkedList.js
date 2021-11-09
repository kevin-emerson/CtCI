let Node = require("./Node");

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);
        // if list is empty
        if (!this.head) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    popFirst() {
        let first = this.head;
        if (this.head && this.head.next) {
            this.head = this.head.next;
            first.next = null;
        }
        else this.head = null;
        return first;
    }

    head() {
        return this.head;
    }

    _toArray() {
        let arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.value);
            cur = cur.next;
        }

        return arr;
    }
}

module.exports = LinkedList;
