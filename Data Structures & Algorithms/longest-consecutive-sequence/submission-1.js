class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);

        let longest = 0;

        for (let n of nums) {
            let streak = 0;
            let curr = n;

            while (numsSet.has(curr)) {
                streak++;
                curr++;
            }
            longest = Math.max(longest, streak);
        }

        return longest;
    }
}
