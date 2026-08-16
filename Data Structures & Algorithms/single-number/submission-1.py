class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        count = set()
        for n in nums:
            if n in count:
                count.remove(n)
            else:
                count.add(n)

        return list(count)[0]
        