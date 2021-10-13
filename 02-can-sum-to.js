const canSumTo = (arr, sum) => {
    const set = new Set();
    for (let i in arr) {
        if (set.has(sum - arr[i])) return true;
        set.add(arr[i]);
    }
    return false;
};

console.log(canSumTo([5,7,1,2,8,4,3], 10));