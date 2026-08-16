class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Array(cost.length).fill(-1);

        function dfs(steps) {
            if (steps >= cost.length) {
                return 0;
            }

            if (cache[steps] !== -1) {
                return cache[steps];
            }

            return cache[steps] = cost[steps] + Math.min(dfs(steps + 1), dfs(steps + 2));
        }
        

        return Math.min(dfs(0), dfs(1));
    }
}
