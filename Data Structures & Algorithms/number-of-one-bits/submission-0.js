class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res = 0;
        while (n) {
            console.log({res, n})
            res += n % 2;
            n >>= 1;
        }

        return res;
    }
}
