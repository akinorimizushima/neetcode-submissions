class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = {};
        for (let n of nums) {
            map[n] = true;
        }
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            let streak = 0;
            let curr = nums[i];
            while (map[curr++]) {
                streak++;
            }
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
