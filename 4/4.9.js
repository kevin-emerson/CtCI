let BinarySearchTree = require('../utilityClasses/BinarySearchTree');

let arrays = [];
let visited = {};

function travelNodes(nodes, travelled) {
    let noChild = true;
    nodes.forEach((node) => {
        if (node.left !== null && travelled[node.left.value] === undefined) {
            noChild = false;
            travelled[node.left.value] = true;
            travelNodes(nodes.concat([node.left]), travelled);
            delete travelled[node.left.value];
        }
        if (node.right !== null && travelled[node.right.value] === undefined) {
            noChild = false;
            travelled[node.right.value] = true;
            travelNodes(nodes.concat([node.right]), travelled);
            delete travelled[node.right.value];
        }
    });
    if (noChild) arrays.push(nodes.map(node => node.value));
}

function bstSequences(root) {
    visited[root.value] = true;
    travelNodes([root], visited);
    return arrays;
}

/* TEST */

/* 1, 2, 3, 4, 5, 6, 7 */
let b = new BinarySearchTree(4);
b.insert(2);
b.insert(6);
b.insert(1);
b.insert(3);
b.insert(5);
b.insert(7);
console.log(bstSequences(b.root));
