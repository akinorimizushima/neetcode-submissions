class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [];
        const post = [];

        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            pre.push((pre[i - 1] ?? 1) * n);
        }

        for(let i = nums.length - 1; i >= 0; i--) {
            const n = nums[i];
            post[i] = ((post[i + 1] ?? 1) * n);
        }

        const res = [];
        for (let i = 0; i < nums.length; i++) {
            res.push((pre[i - 1] ?? 1) * (post[i + 1] ?? 1) )
        }

        return res;
    }
}
