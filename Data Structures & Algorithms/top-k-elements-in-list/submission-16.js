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

        const bucket = Array.from({ length: nums.length + 1 }, () => []);
            console.log("bucket",bucket,m)

        for(const key in m) {
            const v = m[key];
            bucket[v].push(parseInt(key));
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const n of bucket[i]) {
                res.push(n);

                if (k === res.length) {
                    return res;
                }
            }
        }
        return res;
    }
}
