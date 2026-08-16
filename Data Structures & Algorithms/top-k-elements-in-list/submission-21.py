class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # [1, 2, 3,]
        count = {}
        freq = [[] for i in range(len(nums) + 1)]

        print(freq)

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        
        for n, c in count.items():
            freq[c].append(n)
            # freq[c] = freq[c].append(c)
        print(freq)
        # return [[] for i in freq]
        res = [];

        counter = 0;
        for i in range(len(freq) - 1, 0 , -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k: 
                    return res
        return res
