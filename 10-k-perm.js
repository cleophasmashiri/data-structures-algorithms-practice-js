let helperPerms = (arr) => {
    if (arr.length === 0) return [[]];
    const first = arr[0];
    const rest = arr.slice(1);
    const allPerms = [];
    const permsWithoutFirst = helperPerms(rest);
    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i < perm.length + 1; i++) {
            const permsWithFirst = [...perm.slice(0, i), first, ...perm.slice(i)];
            allPerms.push(permsWithFirst);
        }
    });
    return allPerms;
}

const kPerm = (n, k) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    const perms = helperPerms(arr);
    const permsRes = perms.map(subArr => subArr.reduce((a, b) => String(a) + String(b)))
        .sort((a, b) => parseInt(a) - parseInt(b));
    return permsRes[k - 1];
}
console.log(kPerm(3, 4));