const missingNumber = (arr) => {
    const sumArr = arr.reduce((a, b) => a+b);
    const n = arr.length+1;
    const sumN = n*(n+1)/2;
    // [1,2,3,4] = 10, => 4(4+1)/2 = 10
    // [1,3,4] = 8;
    return sumN - sumArr;
};

console.log(missingNumber([1,3,4]));