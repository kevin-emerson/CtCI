let TreeNode = require('../utilityClasses/TreeNode');

function areEqualTrees(tree1, tree2) {
    if (tree1.value !== tree2.value) return false;
    let isEqual = true;

    if (tree1.left !== null && tree2.left !== null) isEqual = areEqualTrees(tree1.left, tree2.left);
    else if ((tree1.left === null && tree2.left !== null) || (tree1.left !== null && tree2.left === null)) isEqual = false;

    if (tree1.right !== null && tree2.right !== null) isEqual = areEqualTrees(tree1.right, tree2.right);
    else if ((tree1.right === null && tree2.right !== null) || (tree1.right !== null && tree2.right === null)) isEqual = false;

    return isEqual;
}

function isSubtree(tree1, tree2) {
    if (areEqualTrees(tree1, tree2)) {
        return true;
    } else {
        let isSub = false;
        if (tree1.left !== null) { isSub = isSubtree(tree1.left, tree2); }
        if (tree1.right !== null) { isSub = isSubtree(tree1.right, tree2); }
        return isSub;
    }
}

/* TEST */
var a1 = new TreeNode(1);
var a2 = new TreeNode(2);
var a3 = new TreeNode(3);
var a4 = new TreeNode(4);
var a5 = new TreeNode(5);
var a6 = new TreeNode(6);
var a7 = new TreeNode(7);
var b3 = new TreeNode(3);
var b6 = new TreeNode(6);
var b7 = new TreeNode(7);
var c3 = new TreeNode(3);
var c6 = new TreeNode(6);
var c8 = new TreeNode(8);
a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;
b3.left = b6;
b3.right = b7;
c3.left = c6;
c3.right = c8;
console.log(isSubtree(a1, b3), true);
console.log(isSubtree(a1, c3), false);
