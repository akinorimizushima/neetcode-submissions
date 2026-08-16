class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for (const n of nums) {
            if(n in map) {
                return true;
            }
            map[n] = n;
        }


        return false;
    }
}
