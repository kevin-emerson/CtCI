function hasLoop(listHead) {
    let fast = listHead;
    let slow = listHead;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) break;
    }

    if (fast == null || fast.next == null) return null;

    slow = listHead;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}


const loopNode = {
    value: 9,
    next: {
        value: 1,
        next: null
    }
};

const loopHead = {
    value: 5,
    next: loopNode
};

const listLoop = {
    head: {
        value: 4,
        next: {
            value: 7,
            next: {
                value: 3,
                next: loopHead
            }
        }
    }
};

const listNoLoop = {
    head: {
        value: 4,
        next: {
            value: 7,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 2,
                        next: null
                    }
                }
            }
        }
    }
};

loopHead.next = loopNode;
loopNode.next.next = loopHead;

/* TESTS */
var isLoop = hasLoop(listLoop.head);
console.log(isLoop === loopHead, true);

var isNotLoop = hasLoop(listNoLoop.head);
console.log(isNotLoop === null, true);
