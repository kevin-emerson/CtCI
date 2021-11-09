let Queue = require('./Queue');

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

BinaryTree.prototype.insert = function(value) {
    if (this.value === undefined) {
        this.value = value;
    } else if (value < this.value) {
        if (this.left === null) {
            this.left = new BinaryTree(value);
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right === null) {
            this.right = new BinaryTree(value);
        } else {
            this.right.insert(value);
        }
    }
};

BinaryTree.prototype.find = function(value) {
    if (value === this.value) {
        return this;
    } else {
        if (value < this.value) {
            if (this.left === null) {
                return null;
            } else {
                this.left.find(value);
            }
        } else {
            if (this.right === null) {
                return null;
            } else {
                this.right.find(value);
            }
        }
    }
};

BinaryTree.prototype.delete = function(value) {
    if (value === this.value) {
        var reb = this.rebuild();
        this.value = reb.value;
        this.left = reb.left;
        this.right = reb.right;
    } else {
        var q = new Queue();
        var built = false;
        var node;
        q.enqueue(this);
        while(!q.isEmpty() && !built) {
            node = q.dequeue();
            if (node.left !== null) {
                if (node.left.value === value) {
                    node.left = node.left.rebuild();
                    built = true;
                } else {
                    q.enqueue(node.left);
                }
            }
            if (node.right !== null) {
                if (node.right.value === value) {
                    node.right = node.right.rebuild();
                    built = true;
                } else {
                    q.enqueue(node.right);
                }
            }
        }
        if (!built) {
            return null;
        }
    }
};
BinaryTree.prototype.rebuild = function() {
    if (this.left === null && this.right === null) {
        return null;
    }
    var newBt = new BinaryTree();
    var q = new Queue();
    if (this.left !== null) {
        q.enqueue(this.left);
    }
    if (this.right !== null) {
        q.enqueue(this.right);
    }
    var node;
    while (!q.isEmpty) {
        node = q.dequeue();
        newBt.insert(node.value);
        if (node.left !== null) {
            q.enqueue(node.left);
        }
        if (this.right !== null) {
            q.enqueue(node.right);
        }
    }
    return newBt;
};

BinaryTree.prototype.count = function() {
    var q = new Queue();
    q.enqueue(this);
    var node;
    var count = 0;
    while (!q.isEmpty()) {
        node = q.dequeue();
        count++;
        if (node.left !== null) {
            q.enqueue(node.left);
        }
        if (node.right !== null) {
            q.enqueue(node.right);
        }
    }
    return count;
};

module.exports = BinaryTree;
