var BinaryTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

function validateBST(node, min, max) {
    if (node == null) return true;

    if ((min != null && node.value <= min) || (max != null && node.value > max)) return false;

    if (!validateBST(node.left, min, node.value) || !validateBST(node.right, node.value, max)) return false;

    return true;
}

/* TEST */
var bt1a = new BinaryTree(5);
var bt1b = new BinaryTree(4);
var bt1c = new BinaryTree(6);
var bt1d = new BinaryTree(1);
var bt1e = new BinaryTree(100);
bt1a.left = bt1b;
bt1a.right = bt1c;
bt1b.left = bt1d;
bt1b.right = bt1e;
console.log(validateBST(bt1a, null, null), false);

var bt2a = new BinaryTree(5);
var bt2b = new BinaryTree(3);
var bt2c = new BinaryTree(6);
var bt2d = new BinaryTree(1);
var bt2e = new BinaryTree(4);
bt2a.left = bt2b;
bt2a.right = bt2c;
bt2b.left = bt2d;
bt2b.right = bt2e;
console.log(validateBST(bt2a, null, null), true);
