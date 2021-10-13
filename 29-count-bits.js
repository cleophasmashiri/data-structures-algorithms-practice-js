const countOnesInBit = (n) => {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

console.log(countOnesInBit(parseInt('1110', 2)));