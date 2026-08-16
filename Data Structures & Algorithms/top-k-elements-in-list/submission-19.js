class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        let count = {};
        for (let n of nums) {
            count[n] = (count[n] ?? 0) + 1;
        }

        for (let n in count) {
            bucket[count[n]].push(n);
        }

        let res = [];
        for (let i = bucket.length - 1; i !== 0; i--) {
            for (let n of bucket[i]) {
                res.push(n);
                if (--k === 0) {
                    return res;
                }
            }
            
        }

        return [];
    }
}
