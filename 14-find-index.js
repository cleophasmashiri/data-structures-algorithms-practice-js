const lowIndex = (arr, val, l, h) => {
    if (l > h) return -1;
    const mid = l + Math.floor((h-l)/2);
    if ((mid===0 || arr[mid-1]) < val && arr[mid] === val) return mid;
    if (val > arr[l] && val < arr[mid]) return lowIndex(arr, val, l, mid-1);
    return lowIndex(arr, val, mid, h);
};
const highIndex = (arr, val, l, h) => {
    if (l > h) return -1;
    const m = l + Math.floor((h-l)/2);
    if ((m === arr.length-1 || arr[m+1] > arr[m]) && val===arr[m]) return m;
    if (val >= arr[l] && val < arr[m]) return highIndex(arr, val, l, m-1);
    return highIndex(arr, val, m, h);
};
const arr = [1,2,5,5,20];
console.log(lowIndex(arr, 5, 0, arr.length-1));
console.log(highIndex(arr, 5, 0, arr.length-1));