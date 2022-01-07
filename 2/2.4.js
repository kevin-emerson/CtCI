function partition(list, partition) {
    let leftNodes = {
        head: null
    };
    let rightNodes = {
        head: null
    };

    let curr = list.head;
    let leftNode = null;
    let rightNode = null;

    while (curr != null) {
        if (curr.value < partition) {
            if (leftNode == null) {
                leftNode = curr;
                leftNodes.head = leftNode;
            } else {
                leftNode.next = curr;
                leftNode = leftNode.next;
            }
        } else {
            if (rightNode == null) {
                rightNodes.head = curr;
                rightNode = curr;
            } else {
                rightNode.next = curr;
                rightNode = rightNode.next;
            }
        }
        curr = curr.next;
    }
    if (rightNode != null) rightNode.next = null;
    if (leftNode != null) leftNode.next = rightNodes.head;
    else leftNodes.head = rightNodes.head;

    return leftNodes;
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
                    next: {
                        value: 3,
                        next: {
                            value: 2,
                            next: null
                        }
                    }
                }
            }
        }
    }
};


/* TESTS */
let partitionedList;

partitionedList = partition(list, 4)
console.log(JSON.stringify(partitionedList, null, 4));

/* partitionedList = partition(list, 5)
console.log(JSON.stringify(partitionedList, null, 4));

partitionedList = partition(list, 2)
console.log(JSON.stringify(partitionedList, null, 4));

partitionedList = partition(list, 12)
console.log(JSON.stringify(partitionedList, null, 4));

partitionedList = partition(list, 1)
console.log(JSON.stringify(partitionedList, null, 4));

partitionedList = partition(list, 50)
console.log(JSON.stringify(partitionedList, null, 4)); */
