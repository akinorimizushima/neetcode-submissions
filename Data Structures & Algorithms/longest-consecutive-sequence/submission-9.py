class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        maxStreak = 0
        streak = 1
        prev = None
        for n in sorted(nums):
            maxStreak = max(maxStreak, streak)

            if prev is not None and (prev + 1) == n:
                streak += 1
            elif prev == n:
                continue
            else:
                streak = 1
            
            prev = n

        maxStreak = max(maxStreak, streak)

        return maxStreak