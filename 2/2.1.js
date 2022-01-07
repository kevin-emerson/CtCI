function removeDuplicates(list) {
    let current = list.head;
    let map = {};

    map[current.value] = current.value;

    while (current.next != null) {
        let next = current.next;
        console.log('curr', current.value);
        console.log('next', next.value);
        if (map[next.value]) {
            current.next = next.next;
        } else {
            map[next.value] = next.value;
            current = current.next;
        }
    }

    return JSON.stringify(list);
}

const list = {
    head: {
        value: 6,
        next: {
            value: 10,
            next: {
                value: 12,
                next: {
                    value: 10,
                    next: {
                        value: 3,
                        next: {
                            value: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
};

console.log(removeDuplicates(list));
