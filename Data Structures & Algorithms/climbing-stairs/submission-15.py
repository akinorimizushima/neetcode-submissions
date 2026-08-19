class Solution:
    def climbStairs(self, n: int) -> int:
        cache = {}

        def dfs(i):
            if i >= n:
                return i == n
            if i in cache:
                return cache[i]
            
            val = dfs(i + 1) + dfs(i + 2)
            cache[i] = val
            return val

        return dfs(0)
        