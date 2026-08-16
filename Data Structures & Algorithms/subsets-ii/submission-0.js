class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)
        const res = [];
        const sets = new Set();
        
        const backtrack = (arr, i, sub) => {
            if (arr.length === i) {
                res.push([...sub]);
                sets.add(JSON.stringify(sub));
                return;
            }

            const n = nums[i];
            sub.push(n);
            backtrack(arr, i + 1, sub);
            sub.pop();

            // while (i < nums.length || nums[i] !== nums[i + 1]) {
            //     i++;
            // }

            backtrack(arr, i + 1, sub);

        }
        backtrack(nums, 0, []);

        return Array.from(sets, (s) => JSON.parse(s));
        // return res;
    }
}
