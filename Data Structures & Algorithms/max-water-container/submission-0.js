class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxAmount = 0;
        while(l < r) {
            let height = Math.min(heights[l], heights[r]);
            let distance = r - l;
            maxAmount = Math.max(maxAmount, height * distance);

            if(heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxAmount;
    }
}
