function intersection(list1Head, list2Head) {
    let curr1 = list1Head;
    let curr2 = list2Head;

    while (curr1 != null) {
        while (curr2 != null) {
            if (curr1 === curr2) return curr1;
            else curr2 = curr2.next;
        }
        curr2 = list2Head;
        curr1 = curr1.next
    }

    return null;
}

const commonNode = {
    value: 4,
    next: {
        value: 9,
        next: null
    }
};

const list1 = {
    head: {
        value: 2,
        next: commonNode
    }
};

const list2 = {
    head: {
        value: 4,
        next: {
            value: 7,
            next: {
                value: 3,
                next: commonNode
            }
        }
    }
};

/* TESTS */
var intersectNode = intersection(list1.head, list2.head);
console.log(commonNode === intersectNode, true);
