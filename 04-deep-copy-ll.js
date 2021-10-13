class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.arbitrary = null;
    }
}
const printLL = (h) => {
    let c = h;
    let s = '';
    while (c) {
        s += (s===''? '': '>') + c.data;
        c = c.next;
    }
    console.log(s);
}
const deepCopyLL = (head) => {
    // arbitrary
    const newHead = null;
    const map = new Map();
    let curr = head;
    let tail = null;
    while (curr) {
        let newNode = new Node(curr.data);
        newHead.arbitrary = curr.arbitrary;
        map.set(curr, newNode);
        if (newHead === null) {
            newHead = newNode;
            tail = newHead;
        } else {
            tail.next = newNode;
            tail = newHead;
        }
        curr = curr.next;
    }
    curr = newHead;
    while (curr) {
        if (curr.arbitrary!==null) {
            curr.arbitrary = map.get(curr.arbitrary);
        } 
        curr = curr.next;
    }
    return newHead;
};