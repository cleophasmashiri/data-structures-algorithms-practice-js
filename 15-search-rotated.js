const search = (arr, val) => {
    
};
// arr = [3, 4, 0, 1, 2]
const helper = (arr, val, l, h) => {
    if (l > h) return -1;
    let m = l + Math.floor((h -l));
    if (val === arr[m]) return m;
    if (val >= arr[l] && val < arr[m]) return helper(arr, val, l, m-1);
    if (val > arr[m] && val < arr[h]) return helper(arr, val, m+1, h);
    if (arr[l] > arr[m] && val > 
        [m] && val < arr[l]) return helper(arr, val, l, m-1);
    return helper(arr, val, m, h);
}; 