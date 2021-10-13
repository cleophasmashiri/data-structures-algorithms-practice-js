const helper = (n, l, r, o, res) => {
    if (l >= n && r >= n) res.push(o.slice());
    if (l < n) {
        o.push('{');
        helper(n, l+1, r, o, res);
        o.pop();
    } 
    if (r < l) {
        o.push('}');
        helper(n, l, r+1, o, res);
        o.pop();
    } 
};
const print = (n) => {
    let res = [];
    helper(n, 0, 0, [], res);
    return res;
};

console.log(print(2));