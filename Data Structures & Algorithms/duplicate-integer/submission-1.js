class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for(let n of nums) {
            map[n] = true;
        }

        const l = Object.values(map).length;
        if(nums.length === l) {
            return false;
        }

        return true;
    }
}
