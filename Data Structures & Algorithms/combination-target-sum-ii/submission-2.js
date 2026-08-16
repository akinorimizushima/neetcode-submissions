class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const res = [];
        // const sums = new Set();
        const backtrack = (arr, i, total) => {
            
            if (total === target) {
                console.log(arr, total)

                // sums.add(JSON.stringify([...arr]));
                res.push([...arr])
                return;
            }

            if (total > target) {
                return;
            }

            if (i === candidates.length) {
                return;
            }


            const n = candidates[i];
            arr.push(n);
            backtrack(arr, i + 1, total + n);
            arr.pop();

            while (i + 1 < candidates.length && n === candidates[i + 1]) {
                i++;
            }
            backtrack(arr, i + 1, total);
        }

        backtrack([], 0, 0);


        // return Array.from(sums, v => JSON.parse(v));
        return res;


    }
}
