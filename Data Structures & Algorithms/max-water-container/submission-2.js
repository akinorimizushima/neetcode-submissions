class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;
        while (l !== r) {
            const heightL = heights[l];
            const heightR = heights[r];
            const distance = r - l;

            max = Math.max(max, distance * Math.min(heightL, heightR));
            
            if (heightL > heightR) {
                r--;
            } else if (heightL < heightR) {
                l++;
            } else {
                l++;
            }
        }
        return max;
    }
}
