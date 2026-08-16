class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = {};
        for (const n of nums) {
            m[n] = (m[n] ?? 0) + 1;
        }

        return Object.entries(m).sort(([,a], [,b]) => b - a).map(([k]) => k).splice(0, k)
    }
}
