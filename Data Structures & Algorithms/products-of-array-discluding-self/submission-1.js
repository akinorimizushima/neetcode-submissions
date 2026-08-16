class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const r = [];

        for(let i = 0; i < nums.length; i++) {
            let n = 1;
            const arr = [...nums.slice(0, i), ...nums.slice(i + 1)]

            for(let j = 0; j < arr.length; j++) {
                n *= arr[j];
            }

            r.push(n);
        }

        return r;
    }
}
