class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const backtrack = (target, cur, index) => {
            if (target === 0) {
                res.push([...cur]);
            } else if (target < 0 || index >= nums.length) {
                return;
            } else {
                cur.push(nums[index]);
                backtrack(target - nums[index], cur, index);
                cur.pop();
                backtrack(target, cur, index + 1);
            }
        }

        backtrack(target, [], 0);

        return res;
    }
}
