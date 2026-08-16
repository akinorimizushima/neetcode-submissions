class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            let pre = numbers[l];
            let post = numbers[r];
            const s = pre + post;

            if (s > target) {
                r--;
            } else if (s < target) {
                l++;
            } else {
                return [l + 1, r + 1]
            }
        }

        return [];
    }
}
