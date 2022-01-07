let BinarySearchTree = require('../utilityClasses/BinarySearchTree')
let LinkedList = require('../utilityClasses/LinkedList')

let listOfLists = [];

function listOfDepths(bst) {
    buildListofLists(bst.root, 0);
    return listOfLists;
}

function buildListofLists(node, depth) {
    if (node == null) return;
    if (listOfLists[depth] == null) {
        listOfLists[depth] = new LinkedList();
    }
    listOfLists[depth].append(node.value);
    if (node.left != null) {
        buildListofLists(node.left, depth + 1);
    }
    if (node.right != null) {
        buildListofLists(node.right, depth + 1);
    }

}

/* TEST */
var tree = new BinarySearchTree(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(JSON.stringify(listOfDepths(tree), 0, 2));
