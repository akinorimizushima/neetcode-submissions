class Solution:
    def rob(self, nums: List[int]) -> int:
        cache = {}
        def dfs(i):
            if i >= len(nums):
                return 0

            if i in cache:
                return cache[i]
            val = nums[i] + max(dfs(i + 2), dfs(i + 3))
            cache[i] = val
            return val
        return max(dfs(0), dfs(1), dfs(2))
        