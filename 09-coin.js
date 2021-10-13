const { table } = require("console");

const coinChange = (coins, amount) => {
    const table = new Array(amount+1).fill(0);
    table[0] = 1;
    for (let i = 0; i < amount+1; i++ ) {
        for (let j = coins[i]; j < amount+1; j++) {
            table[j] += table[j-coins[i]];
        }
    }
    return table[amount];
}

console.log(coinChange( [1, 2, 5], 7)); 