class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l <= r) {
            const nl = numbers[l];
            const nr = numbers[r];

            if ((nl + nr) === target) {
                return [l + 1, r + 1];
            } else if ((nl + nr) > target) {
                r--;
            } else {
                l++;
            }
        }

        return [l, r];
    }
}
