class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];

            map[n] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const diff = target - n;
            if(diff in map && i !== map[diff]) {
                return [i, map[diff]];
            }
        }

        return [];
        
    }
}
