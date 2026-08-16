class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // nums.sort(())
        const set = new Set(nums);
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            let streak = 0;
            let curr = nums[i];
            while (set.has(curr++)) {
                streak++;
            }
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
