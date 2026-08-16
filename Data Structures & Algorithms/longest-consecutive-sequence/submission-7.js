class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;
        for (let n of nums) {
            let streak = 0;
            while(set.has(n++)) {
                streak++;
            }

            max = Math.max(max, streak);
        }

        return max;
    }
}
