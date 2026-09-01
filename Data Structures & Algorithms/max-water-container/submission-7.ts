class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const dist = r - l;
            max = Math.max(
                max,
                Math.min(heights[l], heights[r]) * dist
            );

            if (heights[l] < heights[r]) {
                l++;
            } else if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
                r--;
            }
        }

        return max;
    }
}
