class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        console.log(nums)

        while(l <= r) {
            let m = l + Math.floor((r - l) / 2);
            console.log("m", m, "l", l, "r", r)
            // console.log("medium", nums[m])

            if(nums[m] > target) {
                r = m - 1;
            } else if (nums[m] < target) {
                l = m + 1;
            } else {
                return m;
            }
        }

        return -1;
    }
}
// 4
// 
// #1
// [-1,0,2,4,6,8]
// l=0, r=5, m=2 (5 - 0 / 2)
// l = m
// 
// #2
// [4,6,8]
// l=0, r=5, m=2(5 - 0 / 2)
// [4,6,8]
