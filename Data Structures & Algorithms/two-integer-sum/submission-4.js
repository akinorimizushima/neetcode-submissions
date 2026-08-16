class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = {};
        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            m[n] = i;
        }

        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            if(target - n in m && m[target - n] !== i) {
                return [i, m[target - n]];
            }
        }

        return [];
        
    }
}
