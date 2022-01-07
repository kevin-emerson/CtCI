let BinaryTree = require('../utilityClasses/BinaryTree');

let nodeValues = [];

function getNodes(node) {
    if (node == null) return;
    nodeValues.push(node);
    if (node.left != null) {
        getNodes(node.left);
    }
    if (node.right != null) {
        getNodes(node.right);
    }
}

function getRandomNode(tree) {
    getNodes(tree);
    let random = Math.floor(Math.random() * nodeValues.length);
    return nodeValues[random];
}

/* TEST */
var bt = new BinaryTree();
bt.insert(4);
bt.insert(2);
bt.insert(6);
bt.insert(1);
bt.insert(3);
bt.insert(7);
var counts = {};
var randomnum;
for (var i = 0; i < 100000; i++) {
    randomnum = getRandomNode(bt).value;
    if (counts[randomnum] === undefined) {
        counts[randomnum] = 1;
    } else {
        counts[randomnum]++;
    }
}
for (var num in counts) {
    console.log(`${num}: ${counts[num] / 100000}%`); // random enough
}
console.log('random node value: ', getRandomNode(bt).value);
