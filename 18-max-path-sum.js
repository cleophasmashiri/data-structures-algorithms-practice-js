const maxSum = (root, result) => {
    if (!root) return 0;
    const l = maxSum(root.left, result);
    const r = maxSum(root.right, result);
    const max_root_lr = Math.max(root.data, Math.math(l, r));
    const max_top = Math.max(max_root_lr, l+r+root.data);
    if (max_top > result.value) result.value = max_top;
    return max_root_lr;
}