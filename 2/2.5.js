function sumLists(list1, list2) {
    let curr1 = list1.head;
    let curr2 = list2.head;
    let multiplier = 1;
    let sum = 0;

    while (curr1 != null || curr2 != null) {
        if (curr1 != null) {
            sum += curr1.value * multiplier
            curr1 = curr1.next;
        }
        if (curr2 != null) {
            sum += curr2.value * multiplier
            curr2 = curr2.next;
        }

        multiplier *= 10;
    }

    return sum;
}

const list1 = {
    head: {
        value: 3,
        next: {
            value: 1,
            next: {
                value: 9,
                next: null
            }
        }
    }
};

const list2 = {
    head: {
        value: 4,
        next: {
            value: 7,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
};

/* TESTS */
console.log(sumLists(list1, list2), '5287')


// Follow up: Suppose the digits are stored in forward order. Repeat the above problem.
function sumLists2(list1, list2) {
    let curr1 = list1.head;
    let curr2 = list2.head;
    let curr1Size = 0;
    let curr2Size = 0;
    let sum = 0;

    while (curr1 != null || curr2 != null) {
        if (curr1 != null) {
            curr1Size++;
            curr1 = curr1.next;
        }
        if (curr2 != null) {
            curr2Size++;
            curr2 = curr2.next;
        }
    }

    curr1 = list1.head;
    curr2 = list2.head;
    let offset = 1;
    while (curr1 != null || curr2 != null) {
        if (curr1 != null) {
            sum += curr1.value*Math.pow(10, curr1Size - offset);
            curr1 = curr1.next;
        }
        if (curr2 != null) {
            sum += curr2.value*Math.pow(10, curr2Size - offset);
            curr2 = curr2.next;
        }
        offset++;
    }

    return sum;
}

const list3 = {
    head: {
        value: 3,
        next: {
            value: 1,
            next: {
                value: 9,
                next: null
            }
        }
    }
};

const list4 = {
    head: {
        value: 4,
        next: {
            value: 7,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
};

/* TESTS */
console.log(sumLists2(list3, list4), '5053')
