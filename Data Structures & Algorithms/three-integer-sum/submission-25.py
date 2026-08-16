class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = set()
        nums.sort()
        nLen = len(nums)

        for i in range(nLen):
            first = nums[i]
            for j in range(i + 1, nLen):
                second = nums[j]
                for k in range(j + 1, nLen):
                    third = nums[k]
                    if (first + second + third) == 0:
                        res.add(tuple([first, second, third]))

        return [list(i) for i in res]