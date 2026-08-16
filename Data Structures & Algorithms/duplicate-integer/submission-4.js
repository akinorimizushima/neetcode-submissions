class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let m = {};

        for(let i = 0; i < nums.length; i++) {
            m[nums[i]] = (m[nums[i]] ?? 0) + 1;
        }

        for(const key in m) {
            if(m[key] > 1) {
                return true
            }
        }

        return false;
    }
}
