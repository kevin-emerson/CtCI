let TreeNode = require("./TreeNode.js");

class BinarySearchTree {
    constructor(value) {
        this.root = new TreeNode(value)
    }

    insert(data)
    {
        var newNode = new TreeNode(data);
        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode)
    {
        if(newNode.value < node.value)
        {
            if(node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        }
        else
        {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right,newNode);
        }
    }
}

module.exports = BinarySearchTree;

