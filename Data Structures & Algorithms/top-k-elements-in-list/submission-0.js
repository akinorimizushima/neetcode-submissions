class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            map[n] = (map[n] ?? 0) + 1;
        }
        return Object
            .entries(map)
            .sort(([, v1], [, v2]) => v2 - v1)
            .map(([e]) => e)
            .slice(0, k);
    }
}
