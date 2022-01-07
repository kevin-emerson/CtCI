function isPalindrome(list) {
    let count = 0;
    let map = {};
    let curr = list.head;

    while (curr != null) {
        count++;
        map[count] = curr.value;
        curr = curr.next;
    }

    curr = list.head
    while (curr != null) {
        if (map[count] != curr.value) return false;
        else {
            count--;
            curr = curr.next;
        }
    }
    return true;
}

const listPal = {
    head: {
        value: 'a',
        next: {
            value: 'b',
            next: {
                value: 'c',
                next: {
                    value: 'b',
                    next: {
                        value: 'a',
                        next: null
                    }
                }
            }
        }
    }
};

const listNotPal = {
    head: {
        value: 'e',
        next: {
            value: 'a',
            next: {
                value: 'c',
                next: {
                    value: 'd',
                    next: {
                        value: 'c',
                        next: {
                            value: 'e',
                            next: null
                        }
                    }
                }
            }
        }
    }
};

/* TESTS */
console.log(isPalindrome(listPal), true);
console.log(isPalindrome(listNotPal), false);
