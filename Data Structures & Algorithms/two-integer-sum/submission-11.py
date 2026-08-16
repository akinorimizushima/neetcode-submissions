class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        m = {}

        for index, v in enumerate(nums):
            print(index, v)
            m[v] = index
        
        for index, v in enumerate(nums):
            t = target - v

            if m.get(t) and m.get(t) != index:
                return [index, m.get(t)]

        return []