class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for (let n of nums) {
            if (n in map) {
                return true;
            }
            map[n] = true;
        }

        return false;
    }
}
