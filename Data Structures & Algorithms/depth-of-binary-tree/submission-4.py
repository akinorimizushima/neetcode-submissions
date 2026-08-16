# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def getDepth(self, node: Optional[TreeNode], dist: int) -> int:
        if (node is None):
            return dist
        return max(
            self.getDepth(node.left, dist + 1),
            self.getDepth(node.right, dist + 1)
        )

    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return self.getDepth(root, 0)
        