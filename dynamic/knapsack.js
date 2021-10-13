const maxProfit = (profits, weights, capacity, i) => {
    if (capacity <= 0 || i >= profits.length) return 0;
    let p1 = 0;
    if (weights[i] <= capacity) p1 = profits[i] + maxProfit(profits, weights, capacity-weights[i], i+1);
    let p2 = maxProfit(profits, weights, capacity, i+1);
    return Math.max(p1, p2);
};

// console.log(maxProfit([ 4, 5, 3, 7],[ 2, 3, 1, 4], 5, 0));
const maxProfitUnBound = (p, w, c, i) => {
    if (i < 0 || i >= p.length || c <= 0) return 0;
    let p1 = 0;
    if (w[i] <= c) p1 = p[i] + maxProfitUnBound(p, w, c-w[i], i);
    let p2 = maxProfitUnBound(p, w, c, i+1);
    return Math.max(p1, p2);
}
console.log(maxProfitUnBound([ 4, 5, 3, 7],[ 2, 3, 1, 4], 5, 0));