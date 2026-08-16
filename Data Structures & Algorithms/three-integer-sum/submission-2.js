class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            if (n > 0) {
                break;
            }

            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const nL = nums[l];
                const nR = nums[r];
                const sum = n + nL + nR;

                if (sum === 0) {
                    result.push([n, nL, nR]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
            
        }

        return result;
    }
}
