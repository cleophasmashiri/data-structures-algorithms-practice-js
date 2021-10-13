class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;[]
    }
}
const isBst = (root) => {
   return isBstHelper(root, Number.MIN_VALUE, Number.MAX_VALUE);
};
const isBstHelper = (root, min, max) => {
    if (!root) return true;
    if (root.data < min || root.data > max) return false;
    return isBstHelper(root.left, min, root.data) && isBstHelper(root.right, root.data, max);
}

const buildTree = () => {
    const r = new Node(100)
    r.left = new Node(50);
    r.left.left = new Node(25);
    r.left.right = new Node(75);
    r.right = new Node(200);
    r.right.right = new Node(350);
    return r;
};

console.log(isBst(buildTree()));