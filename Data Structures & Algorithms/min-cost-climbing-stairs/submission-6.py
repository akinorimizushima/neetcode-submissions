class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cache = {}
        def backtrack(i):
            if i >= len(cost):
                return 0

            if i in cache:
                return cache[i]

            val = cost[i] + min(backtrack(i + 1), backtrack(i + 2))
            cache[i] = val
            return val

        return min(backtrack(0), backtrack(1))


        