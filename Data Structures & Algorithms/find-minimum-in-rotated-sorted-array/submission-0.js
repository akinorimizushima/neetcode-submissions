class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let rotated = nums[0];

        while (l <= r) {
            if (nums[l] <= nums[r]) {
                rotated = Math.min(rotated, nums[l]);
                break;
            }

            const m = Math.floor((r + l) / 2);
            rotated = Math.min(rotated, nums[m]);

            if (nums[m] >= nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return rotated
    }
}
