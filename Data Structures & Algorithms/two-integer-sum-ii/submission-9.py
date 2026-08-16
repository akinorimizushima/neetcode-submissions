class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        map = {}

        for i, n in enumerate(numbers):
            map[n] = i

        for i, n in enumerate(numbers):
            diff = map.get(target - n)
            if diff and diff != i:
                return [i + 1, diff + 1]
        return []