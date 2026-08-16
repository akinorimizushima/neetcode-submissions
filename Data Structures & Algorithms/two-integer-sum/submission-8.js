class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = {};
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const diff = target - n;
            if (diff in m) {
                return [i, m[diff]];
            }

            m[n] = i;
        }

        return [];
    }
}
