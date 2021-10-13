module.exports = class Node {
    constructor(val) {
        this.data = val;
        this.neighbors = [];
    }
}
const helper = (root, visited) => {
    if (!root) return null;
   
    let node = new Node(root.data);
    visited.add(root.data, node);
    for (let child of root.neighbors) {
        let x = visited[child.data];
        if (!x) {

        } else {
            
        }
    }

}