class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones.sort()

        remain = stones
        while len(remain) >= 2:
            print(remain)
            a = stones.pop()
            b = stones.pop()

            if a == b:
                continue
            elif a > b:
                remain.append(a - b)
            else:
                remain.append(b - a)
            remain.sort()

        print(remain)
        return remain[0] if len(remain) == 1 else 0

        