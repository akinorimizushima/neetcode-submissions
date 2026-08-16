class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rowU = 0;
        let rowD =  matrix.length - 1;

        console.log("target", target)
        let row = 0;
        while(rowU <= rowD) {
            const m = rowU + Math.floor((rowD - rowU) / 2);
            if (target < matrix[m].at(0)) {
                rowD = m - 1;
            } else if (target > matrix[m].at(-1)) {
                rowU = m + 1;
            } else {
                row = matrix[m];
                break;
            }
        }

        let l = 0;
        let r = row.length - 1;
        while(l <= r) {
            const m = l + Math.floor((r - l) / 2);

            if (row[m] < target) {
                l = m + 1;
            } else if (row[m] > target) {
                r = m - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
