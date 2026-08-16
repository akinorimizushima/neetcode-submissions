class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [];
        const post = [];
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            pre.push((pre[i - 1] ?? 1 ) * n);
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            const n = nums[i];
            post.unshift((post[0] ?? 1 ) * n);
        }

        for (let i = 0; i < nums.length; i++) {
            res.push((pre[i - 1] ?? 1) * (post[i + 1] ?? 1));
        }


        return res;
    }
}

// length = 4;
// [1, 2, 4, 6]
// 3 6 [] 4 - 3 = 1
// 2 4 [6] 4 - 2 = 2
// 1 2 [6, 24] 4 - 1 = 3
