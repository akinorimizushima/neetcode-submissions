class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = [];
        const bt = (i: number, arr: number[], sum: number) => {
            if (sum === target) {
                res.push([...arr])
                return;
            }

            if (i >= nums.length || sum > target) {
                return;
            }

            arr.push(nums[i]);
            bt(i, arr, sum + nums[i]);
            arr.pop();
            bt(i + 1, arr, sum);
        }

        bt(0, [], 0);

        return res;
    }
}
