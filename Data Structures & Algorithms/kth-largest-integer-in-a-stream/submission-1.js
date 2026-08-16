class KthLargest {
    k;
    nums;

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums.sort((a, b) => b - a);
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        this.nums = this.nums.sort((a, b) => b - a)
        console.log("nums",this.nums, "k largest", this.nums.at(this.k))
        return this.nums.at(this.k - 1);
    }
}

// k = 3;
// [1, 2, 3, 3]
// add(3) // [1, 2, 3, 3, 3] => 3
// add(5) // [1, 2, 3, 3, 3, 5] => 3