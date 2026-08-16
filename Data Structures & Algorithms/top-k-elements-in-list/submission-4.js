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

        let freq = Array.from({ length: nums.length + 1 }, () => [])
        console.log("freq",freq)
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        let res = [];
        for(let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }

        }

        return res;



        // return Object.entries(count)
        //         .sort(([, a], [, b]) => b - a)
        //         .slice(0, k)
        //         .map(([key]) => key);
    }
}
