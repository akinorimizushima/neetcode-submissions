class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = []
        const backtrack = (i: number, subset: number[]) => {
            if (i >= nums.length) {
                return;
            }

            const n = nums[i]
            subset.push(n);

            res.push([...subset])

            backtrack(i + 1, subset);
            subset.pop();
            backtrack(i + 1, subset);

        }

        backtrack(0, []);

        return [[], ...res];
    }
}
