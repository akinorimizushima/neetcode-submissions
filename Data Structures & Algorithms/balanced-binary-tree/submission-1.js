/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true;
        }

        const dfs = (node) => {
            if (!node) {
                return 0;
            }

            const leftDepth = 1 + dfs(node.left);
            const rightDepth = 1 + dfs(node.right);

            return Math.max(leftDepth, rightDepth);
        }
        
        const leftHeight = dfs(root.left);
        const rightHeight = dfs(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }


        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
