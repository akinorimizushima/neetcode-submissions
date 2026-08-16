class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;
        for (let n of nums) {
            let streak = n;
            while(set.has(n++)) {
                // streak++;
            }

            max = Math.max(max, n - streak - 1);
        }

        return max;
    }
}
