class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const m = new Map();

        for (const [i,n] of nums.entries()) {
            if (m.has(target - n)) {
                return [m.get(target - n), i]
            }

            m.set(n, i);
        }

        return []
    }
}
