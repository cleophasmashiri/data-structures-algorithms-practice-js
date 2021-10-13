class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
const mergeLL = (head1, head2) => {
    if (head1 === null) {
        return head2;
    } else if (head2 === null) {
        return head1;
    }
    let newHead = null;
    if (head1.data < head2.data) {
        newHead = head1;
        head1 = head1.next;
    } else {
        newHead = head2;
        head2 = head2.next;
    }
    let tail = newHead;
    while (head1 && head2) {
        let temp = null;
        if (head1.data < head2.data) {
            temp = head1;
            head1 = head1.next;
        } else {
            temp = head2;
            head2 = head2.next;
        }
        tail.next = temp;
        tail = temp;
    }
    if (head1 !== null) {
        tail.next = head1;
    } else if (head2 !== null) {
        tail.next = head2;
    }
    return newHead;

};
const printLL = (h) => {
    let c = h;
    let s = '';
    while (c) {
        s += (s===''? '': '>') + c.data;
        c = c.next;
    }
    console.log(s);
}
const h1 = new Node(1);
h1.next = new Node(4);
h1.next.next = new Node(6);
h2 = new Node(2);
h2.next = new Node(5);
h2.next.next = new Node(7);
h2.next.next.next = new Node(8);
printLL(h1);
printLL(h2);
printLL(mergeLL(h1, h2));
