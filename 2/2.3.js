function deleteMiddleNode(nodeToDelete) {
    if (nodeToDelete != null && nodeToDelete.next != null) {
        nodeToDelete.value = nodeToDelete.next.value;
        nodeToDelete.next = nodeToDelete.next.next;
    }
}

const list = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
};

/* TESTS */
console.log(JSON.stringify(list, null, 4));
deleteMiddleNode(list.head.next)
console.log(JSON.stringify(list, null, 4));

console.log(JSON.stringify(list, null, 4));
deleteMiddleNode(list.head.next)
console.log(JSON.stringify(list, null, 4));
