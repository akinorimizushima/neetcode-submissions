class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dfs = (i) => {
            if (i >= n) {
                return i === n ? 1 : 0;
            }

            const a = dfs(i + 1);
            const b = dfs(i + 2);

            // console.log(a, b)

            return a + b;
        }

        console.log("dfs(0)",dfs(0))

        return dfs(0);
    }
}
