# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # if not root:
        #     return True
        # left = self.getHeight(root.left)
        # right = self.getHeight(root.right)

        # if abs(left - right) > 1:
        #     return False
        # return self.isBalanced(root.left) and self.isBalanced(root.right)
        def dfs(root):
            if not root:
                return [True, 0]
            
            left, right = dfs(root.left), dfs(root.right)
            balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1
            return [balanced, 1 + max(left[1], right[1])]
        
        res = dfs(root)
        return res[0]
    
    def getHeight(self, node: Optional[TreeNode]) -> int:
        if not node:
            return 0
        left = self.getHeight(node.left)
        right = self.getHeight(node.right)

        return 1 + max(left, right)
