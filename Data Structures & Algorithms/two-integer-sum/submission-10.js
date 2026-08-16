class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = {}
        for (let i = 0; i < nums.length; i++) {
            m[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diff in m && m[diff] !== i) {
                return [m[diff], i];
            }
        }

        return [];
    }
}
