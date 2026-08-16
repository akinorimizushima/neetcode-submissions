class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const r = [];
        let prefixes = Array.from({ length: nums.length })
        let postfixes = Array.from({ length: nums.length })

        for(let i = 0; i < nums.length; i++) {
            prefixes[i] = (prefixes[i - 1] ?? 1) * nums[i];
        }

        for(let i = nums.length - 1; i >= 0; i--) {
            postfixes[i] = (postfixes[i + 1] ?? 1) * nums[i];
        }

        for(let i = 0; i < nums.length; i++) {
            const pre = prefixes[i - 1] ?? 1;
            const post = postfixes[i + 1] ?? 1;
            r.push(pre * post)
        }

        return r;
    }
}
