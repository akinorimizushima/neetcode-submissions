class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const c = target - n;
            const sumIndex = map.get(c);

            if(map.has(c)) {
                return [i, sumIndex];
            }

            map.set(n, i);
        }
        return [-1, -1]
    }
}
