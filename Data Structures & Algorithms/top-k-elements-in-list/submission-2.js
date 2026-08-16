class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for(const n of nums) {
            count[n] = (count[n] ?? 0) + 1;
        }

        return Object.entries(count)
                .sort(([, a], [, b]) => b - a)
                .slice(0, k)
                .map(([key]) => key);
    }
}
