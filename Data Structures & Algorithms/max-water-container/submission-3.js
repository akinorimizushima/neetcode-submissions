class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while (l < r) {
            const hl = heights[l];
            const hr = heights[r];
            const w = r - l;

            const sq = w * Math.min(hl, hr);
            max = Math.max(max, sq);

            if (hl < hr) {
                l++;
            } else {
                r--;
            }


        }

        return max;
    }
}
