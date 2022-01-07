let BinaryTree = require('../utilityClasses/BinaryTree');

function countPaths(node, value, path) {
    let pathCount = 0;

    if (path === undefined) path = [node.value];
    else path = [...path, node.value];

    if (path.reduce((total, num) => total + num, 0) === value) pathCount++;

    if (node.left !== null) pathCount += countPaths(node.left, value, path);
    if (node.right !== null) pathCount += countPaths(node.right, value, path);

    return pathCount;
}

function pathsWithSum(tree, value) {
    let pathCount = countPaths(tree, value);
    if (tree.left !== null) pathCount += countPaths(tree.left, value);
    if (tree.right !== null) pathCount += countPaths(tree.right, value);

    return pathCount;
}

/* TEST */
var a = new BinaryTree(1);
var b = new BinaryTree(1);
var c = new BinaryTree(1);
var d = new BinaryTree(10);
a.left = b;
a.right = c;
c.left = d;
console.log(pathsWithSum(a,12), 1);
console.log(pathsWithSum(a,2), 2);
console.log(pathsWithSum(a,1), 3);
