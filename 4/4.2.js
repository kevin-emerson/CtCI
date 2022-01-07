class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

function insertBalanced(array) {
    return createMinBST(array, 0, array.length - 1)
}

function createMinBST(array, start, end) {
    if (end < start) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = createMinBST(array, start, mid - 1);
    node.right = createMinBST(array, mid + 1, end);

    return node;
}


/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
console.log(JSON.stringify(tree1, null, 4));

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
console.log(JSON.stringify(tree2, null, 4));
