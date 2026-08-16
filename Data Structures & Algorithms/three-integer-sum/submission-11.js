class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        let numMap = {};
        for(let i = 0; i < nums.length; i++) {
            numMap[nums[i]] = i;
        }

        let res = [];
        let added = new Set();
        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            let l = i + 1;
            let r = nums.length - 1;
            while(l < r) {
                const sum = n + nums[l] + nums[r];

                if (sum === 0) {
                    res.push([n, nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }

        return res;
    }
}
