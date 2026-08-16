class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const accum = new Map();

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const diff = target - n;
            
            if (accum.has(diff)) {
                return [accum.get(diff), i]
            }

            accum.set(n, i);
        }

        return [];
        
    }
}
