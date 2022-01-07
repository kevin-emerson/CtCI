let Stack = require('../utilityClasses/Stack.js');

function sortStackSmallestOnTop(stack) {
    let sorted = new Stack();

    while (!stack.isEmpty()) {
        let temp = stack.pop();
        while (!sorted.isEmpty() && sorted.peek() > temp) {
            stack.push(sorted.pop());
        }
        sorted.push(temp);
    }

    stack = sorted;
    return stack;
}

/* TEST */
var s = new Stack();
s.push(99);
s.push(4);
s.push(1);
s.push(6);
s.push(8);
s.push(10);
s.push(22);
s.push(3);
s.push(72);

var sortS = sortStackSmallestOnTop(s);
while (!sortS.isEmpty()) {
    console.log(sortS.pop());
}
