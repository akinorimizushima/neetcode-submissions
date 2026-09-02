class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        
        let l = 0;
        let r = nums.length - 1;

        // while (l < r) {
        //     const m = l + Math.floor((r - l) / 2);

        //     if (nums[m] === target) {
        //         return m;
        //     } else if (nums[m] > target) {
        //         r = m;
        //     } else {
        //         l = m + 1
        //     }
        // }

        // return l > 0 && nums[l - 1] === target ? l - 1 : -1

        return this.binarySearch(0, nums.length - 1, nums, target)
    }

    binarySearch(l: number, r: number, nums: number[], target: number) {
        if (l > r) {
            return -1
        }

        const m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) {
            return m;
        }

        return nums[m] > target ? this.binarySearch(l, m - 1, nums, target) : this.binarySearch(m + 1, r, nums, target)

    }

}
