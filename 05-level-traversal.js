class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;[]
    }
}
const levelTraversal = (root) => {
    if (root === null) return;
    const qs = [[], []];
    let curr = qs[0];
    let next = qs[1];
    let result = '';
    let level = 0;
    curr.push(root);
    while (curr.length > 0) {
        let r = curr.shift();
        result += (result===''? '': ' ') + r.data;
        if (r.left) next.push(r.left);
        if (r.right) next.push(r.right);
        if (curr.length === 0) {
            level++;
            console.log(result);
            result = '';
            curr = qs[level % 2];
            next = qs[(level+1) % 2];
        }
    }
};

const buildTree = () => {
    const r = new Node(100)
    r.left = new Node(50);
    r.left.left = new Node(25);
    r.left.right = new Node(75);
    r.right = new Node(200);
    r.right.right = new Node(350);
    return r;
};
console.log(levelTraversal(buildTree()));