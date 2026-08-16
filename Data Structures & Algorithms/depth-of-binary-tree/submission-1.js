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
     * @return {number}
     */
    maxDepth(root) {
        const dfs = (root, n) => {
            if (!root) {
                return n;
            }

            const leftDepth = dfs(root.left, n + 1);
            const rightDepth = dfs(root.right, n + 1);

            return Math.max(leftDepth, rightDepth);
        }

        return dfs(root, 0);
       
    }
}
