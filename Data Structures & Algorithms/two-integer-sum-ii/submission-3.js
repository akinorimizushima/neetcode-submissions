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
            const m = Math.floor((r - l) / 2);
            const n = numbers[m];
            console.log({l,r, m})

            const sum = numbers[l] + numbers[r];
            if (sum === target) {
                return [l + 1, r + 1];
            } else if (target < sum) {
                r--;
            } else {
                l++;
            }



            
        }

        return [];
    }
}
