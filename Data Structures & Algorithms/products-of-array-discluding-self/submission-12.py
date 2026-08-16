class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(len(nums)):
            n = nums[i]
            
            product = 1
            for nn in nums[0:i] + nums[i+1:]:
                product *= nn

        
            res.append(product)

        return res