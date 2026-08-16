class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            const n = nums[m];

            if (n === target) {
                return m;
            } else if (n > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return -1;
       
    }
}
