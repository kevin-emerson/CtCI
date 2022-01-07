let BinarySearchTree = require('../utilityClasses/BinarySearchTree');

function checkHeight(node) {
    if (node == null) return -1;

    let leftHeight = checkHeight(node.left);
    if (leftHeight == null) return null;

    let rightHeight = checkHeight(node.right);
    if (rightHeight == null) return null;

    let heightDiff = leftHeight - rightHeight;
    if (Math.abs(heightDiff) > 1) return null;
    else return Math.max(leftHeight, rightHeight) + 1;
}

function checkBalanced(bst) {
    return checkHeight(bst.root) != null;
}

/* TEST */
var b1 = new BinarySearchTree(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BinarySearchTree(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);
