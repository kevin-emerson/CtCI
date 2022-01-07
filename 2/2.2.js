function findKthToLast(k, list) {
    if (k < 1) return null;
    if (list.head == null) return null;
    else {
        let current = list.head;
        let count = 1;

        while (current.next != null) {
            current = current.next;
            count++;
        }

        if (count < k)  return null;
        else {
            let kthLast = list.head;
            for (let i = 0; i < count - k; i++) {
                kthLast = kthLast.next;
            }
            return kthLast;
        }
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
console.log(findKthToLast(3, list));
console.log(findKthToLast(10, list));
console.log(findKthToLast(-1, list));
console.log(findKthToLast(6, list));
console.log(findKthToLast(5, list));
console.log(findKthToLast(0, list));
console.log(findKthToLast(1, list));
