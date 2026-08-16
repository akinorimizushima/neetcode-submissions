class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0;
        for i in range(len(prices)):
            if i > 0 and prices[i] > prices[i - 1]:
                continue
            maxP = 0
            for j in range(i + 1, len(prices)):
                maxP = max(prices[j] - prices[i], maxP)
            res = max(res, maxP)
        
        return res
        