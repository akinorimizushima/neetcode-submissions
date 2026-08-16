class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let max = 0;
        while (r < prices.length) {
            const nL = prices[l];
            const nR = prices[r];

            if (nL < nR) {
                max = Math.max(max, nR - nL);
            } else {
                l = r;
            }
            r++;
        }

        return max;
    }
}
