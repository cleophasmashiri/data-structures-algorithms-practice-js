const subset = (arr) => {
    if (arr.length === 0) return [[]];
    const first = arr[0];
    const rest = arr.slice(1);
    const allCombs = [];
    const combsWithoutFirst = subset(rest);
    combsWithoutFirst.forEach(comb => {
        const combsWithFirst = [first, ...comb];
        allCombs.push(combsWithFirst);
    });
    return [...allCombs, ...combsWithoutFirst];
}

console.log(subset([1, 2, 3]));